/**
 * Renderiza el feed cronológico (más reciente arriba).
 * Soporta filtro por módulo: <div id="changelog" data-module="pdv">
 * Re-renderiza al cambiar idioma (bitacora:langchange).
 */
(function () {
  "use strict";

  const STATUS_KEYS = {
    done: "badge.done",
    progress: "badge.progress",
    proposal: "badge.proposal",
    out: "badge.out",
  };

  const STATUS_CLASS = {
    done: "badge--done",
    progress: "badge--progress",
    proposal: "badge--proposal",
    out: "badge--out",
  };

  const MODULE_ALIASES = {
    pdv: ["pdv"],
    superadmin: ["superadmin", "sa"],
    kitchen: ["kitchen", "kds"],
    delivery: ["delivery", "del"],
    caja: ["caja"],
    "auditoria-inventario": ["auditoria-inventario", "auditoria"],
    franquicias: ["franquicias", "franquias"],
  };

  function getLang() {
    if (window.BitacoraI18n && typeof window.BitacoraI18n.getLang === "function") {
      return window.BitacoraI18n.getLang();
    }
    return document.documentElement.lang === "pt" ? "pt" : "es";
  }

  function t(key, fallback) {
    if (window.BitacoraI18n && typeof window.BitacoraI18n.t === "function") {
      const value = window.BitacoraI18n.t(key);
      if (value && value !== key) return value;
    }
    return fallback;
  }

  function pick(value, lang) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    if (typeof value === "object") {
      return value[lang] || value.es || value.pt || "";
    }
    return String(value);
  }

  function pickList(value, lang) {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    if (typeof value === "object") {
      const list = value[lang] || value.es || value.pt;
      return Array.isArray(list) ? list : [];
    }
    return [];
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatStamp(iso, lang) {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return { date: "—", time: "—" };
    const locale = lang === "pt" ? "pt-BR" : "es-UY";
    const date = new Intl.DateTimeFormat(locale, {
      timeZone: "America/Montevideo",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(d);
    const time = new Intl.DateTimeFormat(locale, {
      timeZone: "America/Montevideo",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(d);
    return { date, time };
  }

  function inPropuestasFolder() {
    return /(?:^|\/)propuestas(?:\/|$)/i.test(window.location.pathname);
  }

  function resolveHref(href) {
    if (!href) return "";
    if (/^https?:\/\//i.test(href)) return href;
    if (!inPropuestasFolder()) return href;
    if (href === "index.html" || href.startsWith("index.html?")) {
      return "../" + href;
    }
    if (href.startsWith("propuestas/")) {
      return href.slice("propuestas/".length);
    }
    return href;
  }

  function normalizeToken(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "");
  }

  function entryTokens(entry) {
    const tokens = new Set();
    const href = entry.moduleHref || "";
    const file = href.split("/").pop() || "";
    const base = file.replace(/\.html$/i, "");
    if (base) tokens.add(normalizeToken(base));

    const mod = entry.module;
    if (typeof mod === "string") {
      tokens.add(normalizeToken(mod));
    } else if (mod && typeof mod === "object") {
      if (mod.es) tokens.add(normalizeToken(mod.es));
      if (mod.pt) tokens.add(normalizeToken(mod.pt));
    }

    // Aliases: "KDS - Kitchen" → kds, kitchen
    const label = pick(mod, "es") + " " + pick(mod, "pt");
    if (/kds/i.test(label) || /kitchen/i.test(label)) {
      tokens.add("kds");
      tokens.add("kitchen");
    }
    return tokens;
  }

  function matchesModule(entry, filter) {
    if (!filter) return true;
    const wanted = MODULE_ALIASES[filter] || [filter];
    const wantedNorm = wanted.map(normalizeToken);
    const tokens = entryTokens(entry);
    return wantedNorm.some((w) => tokens.has(w));
  }

  function render() {
    const root = document.getElementById("changelog");
    if (!root) return;

    const lang = getLang();
    const filter = (root.getAttribute("data-module") || "").trim().toLowerCase();
    const all = Array.isArray(window.BITACORA_CHANGELOG)
      ? window.BITACORA_CHANGELOG.slice()
      : [];
    const entries = all
      .filter((entry) => matchesModule(entry, filter))
      .sort((a, b) => new Date(b.at) - new Date(a.at));

    if (!entries.length) {
      root.innerHTML =
        `<p class="empty-slot">${escapeHtml(
          t("index.changelogEmpty", "Aún no hay implementaciones registradas.")
        )}</p>`;
      root.dispatchEvent(new CustomEvent("changelog:ready", { bubbles: true }));
      return;
    }

    const frag = document.createDocumentFragment();

    entries.forEach((entry, index) => {
      const status = entry.status || "done";
      const stamp = formatStamp(entry.at, lang);
      const article = document.createElement("article");
      article.className =
        "changelog-entry" + (index === 0 ? " changelog-entry--latest" : "");
      article.setAttribute("data-at", entry.at);

      const details = pickList(entry.details, lang);
      const detailsHtml = details.length
        ? `<ul class="changelog-entry__details">${details
            .map((d) => `<li>${escapeHtml(d)}</li>`)
            .join("")}</ul>`
        : "";

      const moduleLabel = pick(entry.module, lang) || "Sistema";
      const href = resolveHref(entry.moduleHref);
      const moduleLink = href
        ? `<a class="changelog-entry__module" href="${escapeHtml(href)}">${escapeHtml(moduleLabel)}</a>`
        : `<span class="changelog-entry__module">${escapeHtml(moduleLabel)}</span>`;

      const summary = pick(entry.summary, lang);
      const badgeLabel = t(STATUS_KEYS[status] || "badge.done", "Hecho");
      const linkHref = resolveHref(entry.link && entry.link.href);
      const linkLabel = pick(entry.link && entry.link.label, lang);
      const linkHtml =
        linkHref && linkLabel
          ? `<p class="changelog-entry__actions"><a class="button" href="${escapeHtml(linkHref)}">${escapeHtml(linkLabel)}</a></p>`
          : "";

      article.innerHTML = `
        <div class="changelog-entry__rail" aria-hidden="true">
          <span class="changelog-entry__dot"></span>
        </div>
        <div class="changelog-entry__card">
          <header class="changelog-entry__head">
            <time class="changelog-entry__when" datetime="${escapeHtml(entry.at)}">
              <span class="changelog-entry__date">${escapeHtml(stamp.date)}</span>
              <span class="changelog-entry__time">${escapeHtml(stamp.time)}</span>
            </time>
            <span class="badge ${STATUS_CLASS[status] || "badge--done"}">${escapeHtml(badgeLabel)}</span>
          </header>
          <div class="changelog-entry__meta">${moduleLink}</div>
          <h2 class="changelog-entry__title">${escapeHtml(pick(entry.title, lang) || "—")}</h2>
          ${
            summary
              ? `<p class="changelog-entry__summary">${escapeHtml(summary)}</p>`
              : ""
          }
          ${detailsHtml}
          ${linkHtml}
        </div>
      `;

      frag.appendChild(article);
    });

    root.replaceChildren(frag);
    root.dispatchEvent(new CustomEvent("changelog:ready", { bubbles: true }));
  }

  function boot() {
    render();
    document.addEventListener("bitacora:langchange", render);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

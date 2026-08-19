/**
 * Renderiza informes de auditoría de inventario (ES/PT).
 * Re-renderiza al cambiar idioma (bitacora:langchange).
 */
(function () {
  "use strict";

  function getLang() {
    if (window.BitacoraI18n && typeof window.BitacoraI18n.getLang === "function") {
      return window.BitacoraI18n.getLang();
    }
    return document.documentElement.lang === "pt" ? "pt" : "es";
  }

  function pick(value, lang) {
    if (value == null) return "";
    if (typeof value === "string" || typeof value === "number") return String(value);
    if (typeof value === "object") {
      return value[lang] || value.es || value.pt || "";
    }
    return String(value);
  }

  function pickList(value, lang) {
    if (!value) return [];
    if (Array.isArray(value)) return value.map((item) => pick(item, lang));
    if (typeof value === "object") {
      const list = value[lang] || value.es || value.pt;
      return Array.isArray(list) ? list.map((item) => pick(item, lang)) : [];
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
    if (Number.isNaN(d.getTime())) return "—";
    const locale = lang === "pt" ? "pt-BR" : "es-UY";
    return new Intl.DateTimeFormat(locale, {
      timeZone: "America/Montevideo",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(d);
  }

  function cell(value, lang) {
    return escapeHtml(pick(value, lang));
  }

  function tableHtml(headers, rows, numericCols) {
    const nums = numericCols || [];
    const head = headers
      .map((h, i) => `<th${nums.includes(i) ? ' class="num"' : ""}>${escapeHtml(h)}</th>`)
      .join("");
    const body = rows
      .map((row) => {
        const tone = row.tone ? ` class="audit-row audit-row--${row.tone}"` : "";
        const cells = (row.cells || row).map((c, i) => {
          const cls = nums.includes(i) ? ' class="num"' : "";
          return `<td${cls}>${c}</td>`;
        });
        return `<tr${tone}>${cells.join("")}</tr>`;
      })
      .join("");
    return `<div class="audit-table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
  }

  function renderOne(report, lang) {
    const kpis = (report.kpis || [])
      .map((k) => {
        const tone = k.tone === "warn" ? " audit-kpi--warn" : "";
        return `<div class="audit-kpi${tone}"><div class="audit-kpi__value">${escapeHtml(
          k.value
        )}</div><div class="audit-kpi__label">${cell(k.label, lang)}</div></div>`;
      })
      .join("");

    const findingsRows = (report.findings || []).map((row) => ({
      tone: row.tone,
      cells: pickList(row.cells, lang).map((c) => escapeHtml(c)),
    }));

    const productRows = (report.products || []).map((row) => ({
      cells: row.map((c, i) => (i >= 2 && i <= 3 ? cell(c, lang) : cell(c, lang))),
    }));
    productRows.forEach((row) => {
      row.cells = row.cells.map((c, i) => (i === 2 || i === 3 ? c : c));
    });

    const ingredientRows = (report.ingredients || []).map((row) => ({
      cells: row.map((c) => cell(c, lang)),
    }));

    const discardIngRows = (report.discardsIng || []).map((row) => ({
      cells: row.map((c) => cell(c, lang)),
    }));

    const discardProd = (report.discardsProd || [])
      .map(
        (d) =>
          `<div class="audit-discard"><p class="audit-discard__name">${escapeHtml(
            d.name
          )}</p><p class="audit-discard__when">${cell(d.when, lang)}</p><p>${escapeHtml(
            d.reason
          )}</p></div>`
      )
      .join("");

    const deliveryRows = (report.delivery || []).map((row) => ({
      cells: row.map((c) => cell(c, lang)),
    }));

    return `
      <article class="audit-report" id="${escapeHtml(report.id)}" data-audit-id="${escapeHtml(report.id)}">
        <p class="kicker">${escapeHtml(formatStamp(report.at, lang))}</p>
        <h2 class="audit-report__title">${cell(report.title, lang)}</h2>
        <p class="meta">${cell(report.period, lang)} · ${cell(report.source, lang)}</p>

        <div class="note note--${escapeHtml(report.verdictTone || "ok")}">
          <strong>${cell(report.verdictTitle, lang)}</strong>
          <p>${cell(report.verdictBody, lang)}</p>
        </div>

        <div class="audit-kpis">${kpis}</div>

        <h3>${cell(report.findingsTitle, lang)}</h3>
        ${tableHtml(pickList(report.findingsHeaders, lang), findingsRows)}

        <h3>${cell(report.productsTitle, lang)}</h3>
        ${tableHtml(pickList(report.productsHeaders, lang), productRows, [2, 3])}
        <p class="lead">${cell(report.productsNote, lang)}</p>

        <h3>${cell(report.ingredientsTitle, lang)}</h3>
        ${tableHtml(pickList(report.ingredientsHeaders, lang), ingredientRows, [2, 3, 4, 5])}
        <p class="lead">${cell(report.ingredientsNote, lang)}</p>

        <h3>${cell(report.discardsIngTitle, lang)}</h3>
        ${tableHtml(pickList(report.discardsIngHeaders, lang), discardIngRows, [1, 2])}

        <h3>${cell(report.discardsProdTitle, lang)}</h3>
        ${discardProd}
        <div class="note"><p>${cell(report.invoicesNote, lang)}</p></div>

        <h3>${cell(report.deliveryTitle, lang)}</h3>
        ${tableHtml(pickList(report.deliveryHeaders, lang), deliveryRows)}
        <p class="lead">${cell(report.deliveryNote, lang)}</p>

        <h3>${cell(report.methodTitle, lang)}</h3>
        <p>${cell(report.methodBody, lang)}</p>
      </article>
    `;
  }

  function render() {
    const root = document.getElementById("audit-reports");
    if (!root) return;
    const lang = getLang();
    const all = Array.isArray(window.BITACORA_AUDIT_REPORTS)
      ? window.BITACORA_AUDIT_REPORTS.slice()
      : [];
    if (!all.length) {
      root.innerHTML = `<p class="empty-slot">${lang === "pt" ? "Ainda não há auditorias publicadas." : "Aún no hay auditorías publicadas."}</p>`;
      return;
    }
    root.innerHTML = all.map((report) => renderOne(report, lang)).join("");
    focusHash();
  }

  function focusHash() {
    const id = decodeURIComponent((window.location.hash || "").replace(/^#/, ""));
    if (!id) return;
    const el =
      document.getElementById(id) ||
      document.querySelector('[data-audit-id="' + id.replace(/"/g, "") + '"]');
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function boot() {
    render();
    document.addEventListener("bitacora:langchange", render);
    window.addEventListener("hashchange", focusHash);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

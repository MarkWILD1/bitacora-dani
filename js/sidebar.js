(() => {
  const STORAGE_KEY = "bitacora-dani-sidebar-collapsed";
  const MQ_DESKTOP = window.matchMedia("(min-width: 900px)");

  const body = document.body;
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");
  const collapseBtn = document.querySelector("[data-sidebar-collapse]");
  const openBtn = document.querySelector("[data-sidebar-open]");
  const closeBtn = document.querySelector("[data-sidebar-close]");

  if (!sidebar) return;

  function isDesktop() {
    return MQ_DESKTOP.matches;
  }

  function setCollapsed(collapsed) {
    body.classList.toggle("sidebar-collapsed", collapsed);
    if (collapseBtn) {
      collapseBtn.setAttribute("aria-expanded", String(!collapsed));
      collapseBtn.setAttribute(
        "aria-label",
        collapsed ? "Expandir menú" : "Colapsar menú"
      );
    }
    try {
      localStorage.setItem(STORAGE_KEY, collapsed ? "1" : "0");
    } catch {
      /* ignore */
    }
  }

  function setMobileOpen(open) {
    body.classList.toggle("sidebar-open", open);
    if (openBtn) openBtn.setAttribute("aria-expanded", String(open));
    if (backdrop) backdrop.hidden = !open;
    document.documentElement.style.overflow = open && !isDesktop() ? "hidden" : "";
  }

  function initCollapsed() {
    let collapsed = false;
    try {
      collapsed = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      /* ignore */
    }
    if (isDesktop()) {
      setCollapsed(collapsed);
      setMobileOpen(false);
    } else {
      body.classList.remove("sidebar-collapsed");
      setMobileOpen(false);
    }
  }

  collapseBtn?.addEventListener("click", () => {
    if (!isDesktop()) return;
    setCollapsed(!body.classList.contains("sidebar-collapsed"));
  });

  openBtn?.addEventListener("click", () => setMobileOpen(true));
  closeBtn?.addEventListener("click", () => setMobileOpen(false));
  backdrop?.addEventListener("click", () => setMobileOpen(false));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("sidebar-open")) {
      setMobileOpen(false);
    }
  });

  sidebar.querySelectorAll(".sidebar__link").forEach((link) => {
    link.addEventListener("click", () => {
      if (!isDesktop()) setMobileOpen(false);
    });
  });

  MQ_DESKTOP.addEventListener("change", initCollapsed);
  initCollapsed();
})();

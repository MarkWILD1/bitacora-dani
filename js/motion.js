/* ============================================================
   Bitácora Northern — GSAP + ScrollTrigger
   Portado desde el CV: letras del título + reveals al scroll
   ============================================================ */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function prepareMotion() {
    const card = document.querySelector("main.card");
    const title =
      document.getElementById("pageTitle") ||
      (card && card.querySelector("h1.display, h1"));

    if (title && !title.id) title.id = "pageTitle";

    const intro = [];
    const sections = [];

    const docHeader = document.querySelector(".doc-header");
    if (docHeader) {
      docHeader.classList.add("reveal");
      intro.push(docHeader);
    }

    if (!card) {
      return { title, intro, sections };
    }

    const children = Array.from(card.children);
    let pastIntro = false;
    let current = null;

    children.forEach((el) => {
      if (el === title) return;

      if (
        !pastIntro &&
        (el.matches("h2") || el.matches(".project-grid") || el.matches(".changelog"))
      ) {
        pastIntro = true;
      }

      if (!pastIntro) {
        el.classList.add("reveal");
        intro.push(el);
        return;
      }

      if (el.matches(".changelog")) {
        current = null;
        el.querySelectorAll(".changelog-entry").forEach((entry) => {
          entry.classList.add("reveal");
          sections.push([entry]);
        });
        return;
      }

      if (el.matches(".project-grid")) {
        current = null;
        el.querySelectorAll(".project-card").forEach((projectCard) => {
          projectCard.classList.add("reveal");
          sections.push([projectCard]);
        });
        return;
      }

      if (el.matches("h2")) {
        current = [];
        sections.push(current);
        el.classList.add("reveal");
        current.push(el);
        return;
      }

      el.classList.add("reveal");
      if (current) {
        current.push(el);
      } else {
        sections.push([el]);
      }
    });

    return { title, intro, sections };
  }

  function showAllStatic(title) {
    document.querySelectorAll(".reveal").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    if (title) title.style.opacity = "1";
  }

  function splitTitle(title) {
    const text = title.textContent.trim();
    title.setAttribute("aria-label", text);
    title.textContent = "";
    const frag = document.createDocumentFragment();
    [...text].forEach((ch) => {
      const span = document.createElement("span");
      span.className = "char";
      span.setAttribute("aria-hidden", "true");
      span.textContent = ch === " " ? "\u00A0" : ch;
      frag.appendChild(span);
    });
    title.appendChild(frag);
    title.style.opacity = "1";
  }

  function runMotion(prepared) {
    const { title, intro, sections } = prepared;
    const gsap = window.gsap;

    if (prefersReduced || !gsap || !window.ScrollTrigger) {
      showAllStatic(title);
      return;
    }

    gsap.registerPlugin(window.ScrollTrigger);
    document.body.classList.add("js-ready");

    if (title) {
      splitTitle(title);
      gsap.from(title.querySelectorAll(".char"), {
        yPercent: 110,
        opacity: 0,
        rotateX: -40,
        stagger: 0.035,
        duration: 0.7,
        ease: "back.out(1.6)",
        delay: 0.15,
      });
    }

    if (intro.length) {
      gsap.set(intro, { opacity: 0, y: 28 });
      gsap.to(intro, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.35,
      });
    }

    sections.forEach((items) => {
      if (!items.length) return;
      gsap.set(items, { opacity: 0, y: 28 });

      ScrollTrigger.create({
        trigger: items[0],
        start: "top 78%",
        once: true,
        onEnter: () =>
          gsap.to(items, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            overwrite: true,
          }),
      });
    });

    ScrollTrigger.refresh();
  }

  function init() {
    const changelog = document.getElementById("changelog");
    const start = () => runMotion(prepareMotion());

    if (changelog && !changelog.querySelector(".changelog-entry")) {
      const onReady = () => {
        changelog.removeEventListener("changelog:ready", onReady);
        start();
      };
      changelog.addEventListener("changelog:ready", onReady);
      window.setTimeout(start, 400);
      return;
    }

    start();
  }

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

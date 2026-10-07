/** Progressive enhancements shared by the website and its browser preview. */
export function initPortfolioMotion(root) {
  if (!root) return () => {};
  const win = root.ownerDocument.defaultView;
  const doc = root.ownerDocument;
  const preference = win.matchMedia?.("(prefers-reduced-motion: reduce)");
  const finePointer = win.matchMedia?.("(hover: hover) and (pointer: fine)");
  const toggle = root.querySelector(".motion-toggle");
  const label = root.querySelector(".motion-label");
  let enabled = !preference?.matches;
  let frame = 0;
  let progressFrame = 0;
  let activeCard = null;
  let disposed = false;
  const seen = new WeakSet();
  const cards = new Set();
  const resetCard = (card) => {
    if (!card) return;
    card.style.removeProperty("--tilt-x");
    card.style.removeProperty("--tilt-y");
    card.style.removeProperty("--pointer-x");
    card.style.removeProperty("--pointer-y");
  };
  const observer = win.IntersectionObserver
    ? new win.IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
      )
    : null;
  const observe = () => {
    const items = root.querySelectorAll(
      ".section-heading, .project-card, .about-section > div, .experience-row, .education-grid, .cert-card, .contact-section",
    );
    items.forEach((item, index) => {
      if (seen.has(item)) return;
      seen.add(item);
      if (observer && enabled) {
        item.classList.add("reveal-item");
        item.style.setProperty("--reveal-delay", `${(index % 3) * 65}ms`);
        observer.observe(item);
      }
    });
  };
  const sync = () => {
    root.dataset.motion = enabled ? "on" : "off";
    if (toggle) toggle.disabled = Boolean(preference?.matches);
    toggle?.setAttribute(
      "aria-label",
      preference?.matches
        ? "Reduced motion enabled in system settings"
        : enabled
          ? "Pause animations"
          : "Resume animations",
    );
    if (label)
      label.textContent = preference?.matches
        ? "Reduced motion"
        : enabled
          ? "Pause motion"
          : "Resume motion";
    if (!enabled) {
      root
        .querySelectorAll(".reveal-item")
        .forEach((item) => item.classList.add("is-visible"));
      cards.forEach(resetCard);
      win.cancelAnimationFrame(frame);
    }
    observe();
  };
  const switchMotion = () => {
    enabled = !enabled;
    sync();
  };
  const onPreference = (event) => {
    enabled = !event.matches;
    sync();
  };
  const onVisibility = () => {
    root.dataset.tabVisible = doc.hidden ? "false" : "true";
  };
  const onPointerMove = (event) => {
    if (!enabled || !finePointer?.matches || event.pointerType === "touch")
      return;
    const card = event.target.closest?.(".project-card");
    if (card !== activeCard) {
      resetCard(activeCard);
      activeCard = card;
    }
    if (!card) return;
    const { clientX, clientY } = event;
    win.cancelAnimationFrame(frame);
    frame = win.requestAnimationFrame(() => {
      if (disposed || !enabled || !card.isConnected) return;
      const rect = card.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
      card.style.setProperty("--tilt-x", `${(0.5 - y) * 3}deg`);
      card.style.setProperty("--tilt-y", `${(x - 0.5) * 3}deg`);
      card.style.setProperty("--pointer-x", `${x * 100}%`);
      card.style.setProperty("--pointer-y", `${y * 100}%`);
      cards.add(card);
    });
  };
  const onPointerLeave = () => {
    win.cancelAnimationFrame(frame);
    resetCard(activeCard);
    activeCard = null;
  };
  const updateProgress = () => {
    const max = doc.documentElement.scrollHeight - win.innerHeight;
    const progress = max > 0 ? Math.max(0, Math.min(1, win.scrollY / max)) : 0;
    root.style.setProperty("--scroll-progress", String(progress));
  };
  const onScroll = () => {
    win.cancelAnimationFrame(progressFrame);
    progressFrame = win.requestAnimationFrame(updateProgress);
  };
  // Project filtering mounts new cards; enhance those without restarting the hero.
  const mutations = new win.MutationObserver(observe);
  mutations.observe(root.querySelector(".project-grid") || root, {
    childList: true,
  });
  toggle?.addEventListener("click", switchMotion);
  preference?.addEventListener("change", onPreference);
  root.addEventListener("pointermove", onPointerMove, { passive: true });
  root.addEventListener("pointerleave", onPointerLeave);
  win.addEventListener("scroll", onScroll, { passive: true });
  win.addEventListener("resize", onScroll);
  doc.addEventListener("visibilitychange", onVisibility);
  onVisibility();
  updateProgress();
  sync();
  return () => {
    disposed = true;
    observer?.disconnect();
    mutations.disconnect();
    win.cancelAnimationFrame(frame);
    win.cancelAnimationFrame(progressFrame);
    cards.forEach(resetCard);
    toggle?.removeEventListener("click", switchMotion);
    preference?.removeEventListener("change", onPreference);
    root.removeEventListener("pointermove", onPointerMove);
    root.removeEventListener("pointerleave", onPointerLeave);
    win.removeEventListener("scroll", onScroll);
    win.removeEventListener("resize", onScroll);
    doc.removeEventListener("visibilitychange", onVisibility);
    root.removeAttribute("data-motion");
    root.querySelectorAll(".reveal-item").forEach((item) => {
      item.classList.remove("reveal-item", "is-visible");
      item.style.removeProperty("--reveal-delay");
    });
  };
}

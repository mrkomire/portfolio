/** Decorative, dependency-free 3D network. Sleeps offscreen and when motion is paused. */
export function initNeuralCore(stage) {
  if (!stage) return () => {};
  const canvas = stage.querySelector("canvas");
  const root = stage.closest(".portfolio");
  const win = stage.ownerDocument.defaultView;
  const doc = stage.ownerDocument;
  let ctx;
  try {
    ctx = canvas.getContext("2d");
  } catch {
    return () => {};
  }
  if (!ctx) return () => {};
  stage.dataset.rendered = "true";
  const points = Array.from({ length: 84 }, (_, i) => {
    const y = 1 - (i / 83) * 2;
    const r = Math.sqrt(1 - y * y);
    const phi = i * Math.PI * (3 - Math.sqrt(5));
    return [Math.cos(phi) * r, y, Math.sin(phi) * r];
  });
  const edges = [];
  points.forEach((p, i) => {
    for (let j = i + 1; j < points.length; j++) {
      const q = points[j];
      if (Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]) < 0.51)
        edges.push([i, j]);
    }
  });
  let width = 1,
    height = 1,
    frame = 0,
    last = 0,
    phase = 0.2;
  let pointerX = 0,
    pointerY = 0,
    easedX = 0,
    easedY = 0;
  let visible = true,
    destroyed = false;
  const canAnimate = () =>
    !destroyed && visible && !doc.hidden && root.dataset.motion === "on";
  function project(point, radius, angle, tilt) {
    const [x, y, z] = point;
    const x1 = x * Math.cos(angle) + z * Math.sin(angle);
    const z1 = z * Math.cos(angle) - x * Math.sin(angle);
    const y1 = y * Math.cos(tilt) - z1 * Math.sin(tilt);
    const z2 = y * Math.sin(tilt) + z1 * Math.cos(tilt);
    const scale = 3.7 / (3.7 - z2);
    return {
      x: width / 2 + x1 * radius * scale,
      y: height / 2 + y1 * radius * scale,
      z: z2,
      scale,
    };
  }
  function draw() {
    ctx.clearRect(0, 0, width, height);
    const radius = Math.min(width, height) * 0.287;
    const angle = phase * 0.17 + easedX * 0.42;
    const tilt = -0.23 + easedY * 0.3;
    const halo = ctx.createRadialGradient(
      width / 2,
      height / 2,
      0,
      width / 2,
      height / 2,
      radius * 1.9,
    );
    halo.addColorStop(0, "rgba(122,112,255,.09)");
    halo.addColorStop(0.5, "rgba(63,186,221,.045)");
    halo.addColorStop(1, "rgba(5,8,18,0)");
    ctx.fillStyle = halo;
    ctx.fillRect(0, 0, width, height);
    const projected = points.map((point) =>
      project(point, radius, angle, tilt),
    );
    for (const [a, b] of edges) {
      const p = projected[a],
        q = projected[b];
      const alpha = 0.055 + ((p.z + q.z + 2) / 4) * 0.21;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(q.x, q.y);
      ctx.strokeStyle = `rgba(107,213,247,${alpha})`;
      ctx.lineWidth = 0.7;
      ctx.stroke();
    }
    // Three differently inclined orbital paths, projected from 3D.
    for (let orbit = 0; orbit < 3; orbit++) {
      const orbitPoint = (t) => {
        const x = Math.cos(t) * 1.43,
          y = Math.sin(t) * 1.43;
        const inclination = [0.35, 1.05, 1.75][orbit];
        return project(
          [x, y * Math.cos(inclination), y * Math.sin(inclination)],
          radius,
          angle * 0.55 + orbit * 0.95,
          tilt,
        );
      };
      ctx.beginPath();
      for (let j = 0; j <= 100; j++) {
        const p = orbitPoint((j / 100) * Math.PI * 2);
        if (j === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.strokeStyle =
        orbit === 1 ? "rgba(173,148,255,.23)" : "rgba(109,225,255,.19)";
      ctx.lineWidth = 0.8;
      ctx.stroke();
      const head = phase * (0.43 + orbit * 0.08) + orbit * 2.1;
      for (let j = 0; j < 22; j++) {
        const p = orbitPoint(head - j * 0.018);
        ctx.beginPath();
        ctx.arc(p.x, p.y, j === 0 ? 2.5 : 1.25, 0, Math.PI * 2);
        ctx.fillStyle =
          orbit === 1
            ? `rgba(189,164,255,${(1 - j / 22) * 0.85})`
            : `rgba(157,237,255,${(1 - j / 22) * 0.85})`;
        ctx.fill();
      }
    }
    projected.forEach((p, i) => {
      const front = (p.z + 1) / 2;
      const pulse = 0.65 + Math.sin(phase * 1.1 + i * 0.8) * 0.35;
      ctx.beginPath();
      ctx.arc(p.x, p.y, (i % 9 === 0 ? 2.3 : 1.1) * p.scale, 0, Math.PI * 2);
      ctx.fillStyle =
        i % 9 === 0
          ? `rgba(191,165,255,${0.35 + front * 0.55})`
          : `rgba(155,231,255,${0.18 + front * 0.6})`;
      ctx.fill();
      if (i % 13 === 0 && front > 0.6) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5 + pulse * 3, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(139,234,255,${pulse * 0.25})`;
        ctx.lineWidth = 0.65;
        ctx.stroke();
      }
    });
  }
  function tick(time) {
    frame = 0;
    if (!canAnimate()) {
      last = 0;
      return;
    }
    if (!last || time - last >= 1000 / 30) {
      const dt = last ? Math.min((time - last) / 1000, 0.07) : 0;
      phase += dt;
      last = time;
      easedX += (pointerX - easedX) * 0.08;
      easedY += (pointerY - easedY) * 0.08;
      draw();
    }
    frame = win.requestAnimationFrame(tick);
  }
  function sync() {
    win.cancelAnimationFrame(frame);
    frame = 0;
    last = 0;
    if (!canAnimate()) {
      easedX = 0;
      easedY = 0;
    }
    draw();
    if (canAnimate()) frame = win.requestAnimationFrame(tick);
  }
  function resize() {
    const rect = stage.getBoundingClientRect();
    width = Math.max(rect.width, 1);
    height = Math.max(rect.height, 1);
    const ratio = Math.min(win.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    sync();
  }
  function move(event) {
    if (!canAnimate() || event.pointerType === "touch") return;
    const rect = stage.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    pointerX = (event.clientX - rect.left) / rect.width - 0.5;
    pointerY = (event.clientY - rect.top) / rect.height - 0.5;
  }
  function leave() {
    pointerX = 0;
    pointerY = 0;
  }
  const motionObserver = new win.MutationObserver(sync);
  motionObserver.observe(root, {
    attributes: true,
    attributeFilter: ["data-motion"],
  });
  const intersection = win.IntersectionObserver
    ? new win.IntersectionObserver(
        (entries) => {
          visible = entries[0].isIntersecting;
          sync();
        },
        { rootMargin: "80px" },
      )
    : null;
  intersection?.observe(stage);
  const sizeObserver = win.ResizeObserver
    ? new win.ResizeObserver(resize)
    : null;
  sizeObserver?.observe(stage);
  win.addEventListener("resize", resize);
  doc.addEventListener("visibilitychange", sync);
  stage.addEventListener("pointermove", move, { passive: true });
  stage.addEventListener("pointerleave", leave);
  resize();
  return () => {
    destroyed = true;
    win.cancelAnimationFrame(frame);
    motionObserver.disconnect();
    intersection?.disconnect();
    sizeObserver?.disconnect();
    win.removeEventListener("resize", resize);
    doc.removeEventListener("visibilitychange", sync);
    stage.removeEventListener("pointermove", move);
    stage.removeEventListener("pointerleave", leave);
    ctx.clearRect(0, 0, width, height);
    delete stage.dataset.rendered;
  };
}

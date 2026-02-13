import React, { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";

import { cn } from "@/lib/utils";

export function Waves({
  className,
  strokeColor = "hsl(var(--foreground) / 0.35)",
  backgroundColor = "transparent",
  pointerSize = 0.5,
}) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);

  const mouseRef = useRef({
    x: -10,
    y: 0,
    lx: 0,
    ly: 0,
    sx: 0,
    sy: 0,
    v: 0,
    vs: 0,
    a: 0,
    set: false,
  });

  const pathsRef = useRef([]);
  const linesRef = useRef([]);
  const noiseRef = useRef(null);
  const rafRef = useRef(null);
  const boundingRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return;
    const container = containerRef.current;

    noiseRef.current = createNoise2D();
    setSize();
    setLines();

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    container.addEventListener("touchmove", onTouchMove, { passive: false });

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("touchmove", onTouchMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setSize = () => {
    if (!containerRef.current || !svgRef.current) return;
    boundingRef.current = containerRef.current.getBoundingClientRect();
    const { width, height } = boundingRef.current;
    svgRef.current.style.width = `${width}px`;
    svgRef.current.style.height = `${height}px`;
  };

  const setLines = () => {
    if (!svgRef.current || !boundingRef.current) return;
    const { width, height } = boundingRef.current;
    linesRef.current = [];

    pathsRef.current.forEach((p) => p.remove());
    pathsRef.current = [];

    const xGap = 10;
    const yGap = 10;
    const oWidth = width + 200;
    const oHeight = height + 30;
    const totalLines = Math.ceil(oWidth / xGap);
    const totalPoints = Math.ceil(oHeight / yGap);
    const xStart = (width - xGap * totalLines) / 2;
    const yStart = (height - yGap * totalPoints) / 2;

    for (let i = 0; i < totalLines; i++) {
      const points = [];
      for (let j = 0; j < totalPoints; j++) {
        points.push({
          x: xStart + xGap * i,
          y: yStart + yGap * j,
          wave: { x: 0, y: 0 },
          cursor: { x: 0, y: 0, vx: 0, vy: 0 },
        });
      }

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", strokeColor);
      path.setAttribute("stroke-width", "1");
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-linejoin", "round");
      svgRef.current.appendChild(path);
      pathsRef.current.push(path);
      linesRef.current.push(points);
    }
  };

  const onResize = () => {
    setSize();
    setLines();
  };

  const onMouseMove = (e) => updateMousePosition(e.pageX, e.pageY);

  const onTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    updateMousePosition(touch.clientX, touch.clientY);
  };

  const updateMousePosition = (x, y) => {
    if (!boundingRef.current) return;
    const mouse = mouseRef.current;
    mouse.x = x - boundingRef.current.left;
    mouse.y = y - boundingRef.current.top + window.scrollY;

    if (!mouse.set) {
      mouse.sx = mouse.x;
      mouse.sy = mouse.y;
      mouse.lx = mouse.x;
      mouse.ly = mouse.y;
      mouse.set = true;
    }

    containerRef.current?.style.setProperty("--x", `${mouse.sx}px`);
    containerRef.current?.style.setProperty("--y", `${mouse.sy}px`);
  };

  const movePoints = (time) => {
    const lines = linesRef.current;
    const mouse = mouseRef.current;
    const noise = noiseRef.current;
    if (!noise) return;

    for (const points of lines) {
      for (const p of points) {
        const move = noise((p.x + time * 0.008) * 0.003, (p.y + time * 0.003) * 0.002) * 8;
        p.wave.x = Math.cos(move) * 12;
        p.wave.y = Math.sin(move) * 6;

        const dx = p.x - mouse.sx;
        const dy = p.y - mouse.sy;
        const d = Math.hypot(dx, dy);
        const l = Math.max(175, mouse.vs);

        if (d < l) {
          const s = 1 - d / l;
          const f = Math.cos(d * 0.001) * s;
          p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 0.00035;
          p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 0.00035;
        }

        p.cursor.vx += (0 - p.cursor.x) * 0.01;
        p.cursor.vy += (0 - p.cursor.y) * 0.01;
        p.cursor.vx *= 0.95;
        p.cursor.vy *= 0.95;
        p.cursor.x += p.cursor.vx;
        p.cursor.y += p.cursor.vy;

        p.cursor.x = Math.min(50, Math.max(-50, p.cursor.x));
        p.cursor.y = Math.min(50, Math.max(-50, p.cursor.y));
      }
    }
  };

  const moved = (point, withCursorForce = true) => ({
    x: point.x + point.wave.x + (withCursorForce ? point.cursor.x : 0),
    y: point.y + point.wave.y + (withCursorForce ? point.cursor.y : 0),
  });

  const drawLines = () => {
    const lines = linesRef.current;
    const paths = pathsRef.current;

    lines.forEach((points, lIndex) => {
      if (points.length < 2 || !paths[lIndex]) return;
      const firstPoint = moved(points[0], false);
      let d = `M ${firstPoint.x} ${firstPoint.y}`;
      for (let i = 1; i < points.length; i++) {
        const current = moved(points[i]);
        d += `L ${current.x} ${current.y}`;
      }
      paths[lIndex].setAttribute("d", d);
    });
  };

  const tick = (time) => {
    const mouse = mouseRef.current;
    mouse.sx += (mouse.x - mouse.sx) * 0.1;
    mouse.sy += (mouse.y - mouse.sy) * 0.1;

    const dx = mouse.x - mouse.lx;
    const dy = mouse.y - mouse.ly;
    const dist = Math.hypot(dx, dy);
    mouse.v = dist;
    mouse.vs += (dist - mouse.vs) * 0.1;
    mouse.vs = Math.min(100, mouse.vs);
    mouse.lx = mouse.x;
    mouse.ly = mouse.y;
    mouse.a = Math.atan2(dy, dx);

    containerRef.current?.style.setProperty("--x", `${mouse.sx}px`);
    containerRef.current?.style.setProperty("--y", `${mouse.sy}px`);

    movePoints(time);
    drawLines();
    rafRef.current = requestAnimationFrame(tick);
  };

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{
        backgroundColor,
        width: "100%",
        height: "100%",
        "--x": "-0.5rem",
        "--y": "50%",
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(65%_55%_at_50%_40%,hsl(var(--primary)/0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/25 to-background" />

      <svg ref={svgRef} className="absolute inset-0 block h-full w-full" xmlns="http://www.w3.org/2000/svg" />
      <div
        className="pointer-events-none absolute left-0 top-0 rounded-full"
        style={{
          width: `${pointerSize}rem`,
          height: `${pointerSize}rem`,
          background: strokeColor,
          transform: "translate3d(calc(var(--x) - 50%), calc(var(--y) - 50%), 0)",
          willChange: "transform",
          opacity: 0.7,
        }}
      />
    </div>
  );
}

import React, { useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: window.innerWidth, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: window.innerHeight, angle: 225 };
    case 3:
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

export function ShootingStars({
  minSpeed = 12,
  maxSpeed = 34,
  minDelay = 900,
  maxDelay = 3800,
  starColor = "#15c98a",
  trailColor = "#94a3b8",
  starWidth = 12,
  starHeight = 1,
  className,
}) {
  const [star, setStar] = useState(null);
  const svgRef = useRef(null);
  const timeoutRef = useRef(null);
  const gradientId = useId().replace(/:/g, "");

  useEffect(() => {
    let cancelled = false;
    const createStar = () => {
      if (cancelled) return;
      const { x, y, angle } = getRandomStartPoint();
      const newStar = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };
      setStar(newStar);

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      timeoutRef.current = window.setTimeout(createStar, randomDelay);
    };

    createStar();

    return () => {
      cancelled = true;
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [maxDelay, maxSpeed, minDelay, minSpeed]);

  useEffect(() => {
    const moveStar = () => {
      if (!star) return;

      setStar((prevStar) => {
        if (!prevStar) return null;
        const newX = prevStar.x + prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
        const newY = prevStar.y + prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
        const newDistance = prevStar.distance + prevStar.speed;
        const newScale = 1 + newDistance / 110;

        const out =
          newX < -30 ||
          newX > window.innerWidth + 30 ||
          newY < -30 ||
          newY > window.innerHeight + 30;

        if (out) return null;
        return { ...prevStar, x: newX, y: newY, distance: newDistance, scale: newScale };
      });
    };

    const animationFrame = requestAnimationFrame(moveStar);
    return () => cancelAnimationFrame(animationFrame);
  }, [star]);

  return (
    <svg ref={svgRef} className={cn("pointer-events-none absolute inset-0 h-full w-full", className)} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill={`url(#${gradientId})`}
          transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2})`}
        />
      )}
      <rect x="0" y="0" width="100%" height="100%" fill="none" />
    </svg>
  );
}

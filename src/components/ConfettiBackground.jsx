import React, { useMemo } from "react";

const COLORS = [
  "#bfe3f2", // light blue
  "#f7cfe0", // light pink
  "#fdf0b0", // light yellow
];

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function generateDots(count, rand) {
  return Array.from({ length: count }, (_, i) => ({
    id: `dot-${i}`,
    left: `${rand() * 100}%`,
    top: `${rand() * 100}%`,
    size: 2 + rand() * 4,
    color: COLORS[Math.floor(rand() * COLORS.length)],
    opacity: 0.12 + rand() * 0.18,
  }));
}

function generateShortStripes(count, rand) {
  return Array.from({ length: count }, (_, i) => ({
    id: `stripe-${i}`,
    left: `${rand() * 100}%`,
    top: `${rand() * 100}%`,
    length: 30 + rand() * 80,
    rotate: rand() * 360,
    color: COLORS[Math.floor(rand() * COLORS.length)],
    opacity: 0.1 + rand() * 0.15,
  }));
}

function generateFullLines(count, rand) {
  return Array.from({ length: count }, (_, i) => {
    const isHorizontal = rand() > 0.5;
    return {
      id: `fullline-${i}`,
      isHorizontal,
      offset: `${rand() * 100}%`,
      rotate: rand() * 360, // fully random orientation
      color: COLORS[Math.floor(rand() * COLORS.length)],
      opacity: 0.1 + rand() * 0.18,
    };
  });
}

/**
 * ConfettiBackground
 * Full-page absolutely-positioned layer of sporadic thin dots, short stripes,
 * and lines that run the entire width/height of the page. Sits behind content.
 */
export default function ConfettiBackground({
  dotCount = 160,
  shortStripeCount = 40,
  fullLineCount = 7,
  seed = 42,
}) {
  const { dots, shortStripes, fullLines } = useMemo(() => {
    const rand = seededRandom(seed);
    return {
      dots: generateDots(dotCount, rand),
      shortStripes: generateShortStripes(shortStripeCount, rand),
      fullLines: generateFullLines(fullLineCount, rand),
    };
  }, [dotCount, shortStripeCount, fullLineCount, seed]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {fullLines.map((l) =>
        l.isHorizontal ? (
          <span
            key={l.id}
            style={{
              position: "absolute",
              left: 0,
              top: l.offset,
              width: "100%",
              height: "1.5px",
              background: l.color,
              opacity: l.opacity,
              transform: `rotate(${l.rotate}deg)`,
              transformOrigin: "center",
            }}
          />
        ) : (
          <span
            key={l.id}
            style={{
              position: "absolute",
              top: 0,
              left: l.offset,
              height: "100%",
              width: "1.5px",
              background: l.color,
              opacity: l.opacity,
              transform: `rotate(${l.rotate}deg)`,
              transformOrigin: "center",
            }}
          />
        )
      )}
      {shortStripes.map((s) => (
        <span
          key={s.id}
          style={{
            position: "absolute",
            left: s.left,
            top: s.top,
            width: `${s.length}px`,
            height: "1px",
            background: s.color,
            opacity: s.opacity,
            transform: `rotate(${s.rotate}deg)`,
            borderRadius: "999px",
          }}
        />
      ))}
      {dots.map((d) => (
        <span
          key={d.id}
          style={{
            position: "absolute",
            left: d.left,
            top: d.top,
            width: `${d.size}px`,
            height: `${d.size}px`,
            borderRadius: "50%",
            background: d.color,
            opacity: d.opacity,
          }}
        />
      ))}
    </div>
  );
}

import React from "react";

const BORDER_COLORS = [
  "#7fc4e0",
  "#f38fb3",
  "#f6d454",
  "#8bd6ab",
  "#b79ae8",
  "#f4a862",
];

/**
 * PhotoCollage
 * Grid of rotated, color-bordered photo tiles.
 *
 * Usage:
 *   <PhotoCollage photos={[photo1, photo2, ...]} />
 */
export default function PhotoCollage({ photos }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "1.25rem",
      }}
    >
      {photos.map((src, i) => (
        <div
          key={i}
          style={{
            aspectRatio: "1 / 1",
            overflow: "hidden",
            borderRadius: "18px",
            border: `5px solid ${BORDER_COLORS[i % BORDER_COLORS.length]}`,
            boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
            transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (2 + (i % 3))}deg)`,
          }}
        >
          <img
            src={src}
            alt={`Memory ${i + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      ))}
    </div>
  );
}

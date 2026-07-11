import React from "react";

/**
 * BubbleLetter
 * Renders a single thick, colorful, cursive-bubble letter.
 * Each letter is its own component so every character can have its own color.
 */
export default function BubbleLetter({ char, color, strokeColor = "#3a3a3a", size }) {
  // Preserve spacing for actual space characters
  if (char === " ") {
    return <span style={{ display: "inline-block", width: "0.35em" }} />;
  }

  return (
    <span
      className="bubble-letter"
      style={{
        display: "inline-block",
        color,
        WebkitTextStroke: `2.5px ${strokeColor}`,
        textShadow: "3px 3px 0 rgba(0,0,0,0.12)",
        fontSize: size,
      }}
    >
      {char}
    </span>
  );
}

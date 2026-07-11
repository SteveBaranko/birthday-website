import React from "react";
import BubbleLetter from "./BubbleLetter";

const COLORS = [
  "#7fc4e0", // blue
  "#f38fb3", // pink
  "#f6d454", // yellow
  "#8bd6ab", // mint
  "#b79ae8", // lavender
  "#f4a862", // peach
];

/**
 * BubbleText
 * Takes an array of words (each rendered on its own line) and builds the
 * line out of individual <BubbleLetter /> components, cycling through a
 * color palette so every letter (across the whole phrase) gets a distinct,
 * continuously-cycling color.
 *
 * Usage:
 *   <BubbleText words={["Happy", "Birthday", "Mom!"]} fontSize="clamp(3rem, 10vw, 7rem)" />
 */
export default function BubbleText({ words, fontSize = "3rem", colors = COLORS }) {
  let letterIndex = 0;

  return (
    <div style={{ fontFamily: "'Baloo 2', 'Bubblegum Sans', cursive", fontWeight: 800 }}>
      {words.map((word, wi) => (
        <div key={wi} style={{ lineHeight: 1.15, textAlign: "center" }}>
          {word.split("").map((char, ci) => {
            const color = colors[letterIndex % colors.length];
            letterIndex += 1;
            return (
              <BubbleLetter
                key={`${wi}-${ci}`}
                char={char}
                color={color}
                size={fontSize}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

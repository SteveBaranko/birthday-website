import React from "react";

/**
 * BirthdayLetter
 * A readable, warm letter section — the bubble font works great for a big
 * headline but is illegible at paragraph length, so this uses a soft serif
 * for the body text on a little "card" with a colorful border to keep it
 * feeling consistent with the rest of the page.
 */
export default function BirthdayLetter({ heading, body, signature }) {
  const paragraphs = body.split("\n").filter(Boolean);

  return (
    <div
      style={{
        maxWidth: "680px",
        margin: "0 auto",
        background: "#fffdf8",
        border: "4px solid #f38fb3",
        borderRadius: "24px",
        padding: "clamp(1.75rem, 5vw, 3rem)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
        transform: "rotate(-0.6deg)",
      }}
    >
      {heading && (
        <h2
          style={{
            fontFamily: "'Baloo 2', 'Bubblegum Sans', cursive",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            color: "#f38fb3",
            WebkitTextStroke: "1.5px #3a3a3a",
            textAlign: "center",
            margin: "0 0 1.5rem",
          }}
        >
          {heading}
        </h2>
      )}

      {paragraphs.map((p, i) => (
        <p
          key={i}
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            lineHeight: 1.75,
            color: "#3a3a3a",
            margin: "0 0 1.1rem",
          }}
        >
          {p}
        </p>
      ))}

      {signature && (
        <p
          style={{
            fontFamily: "'Baloo 2', 'Bubblegum Sans', cursive",
            fontWeight: 800,
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "#7fc4e0",
            WebkitTextStroke: "1px #3a3a3a",
            textAlign: "right",
            margin: "1.5rem 0 0",
          }}
        >
          {signature}
        </p>
      )}
    </div>
  );
}

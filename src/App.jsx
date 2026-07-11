import React from "react";
import ConfettiBackground from "./components/ConfettiBackground";
import BubbleText from "./components/BubbleText";
import PhotoCollage from "./components/PhotoCollage";
import BirthdayLetter from "./components/BirthdayLetter";

// Import your photos here. Add/remove/rename as needed —
// Vite will bundle whatever you import and fix the paths automatically
// for GitHub Pages, so never hardcode "/src/assets/..." as a plain string.
import photo1 from "./assets/IMG_2578.jpeg";
import photo2 from "./assets/IMG_2571.jpeg";
import photo3 from "./assets/IMG_1373.jpeg";
import photo4 from "./assets/IMG_1367.jpeg";
import photo5 from "./assets/IMG_1348.jpeg";
import photo6 from "./assets/IMG_1345.jpeg";

const PHOTOS = [photo1, photo2, photo3, photo4, photo5, photo6];

export default function App() {
  return (
    <div style={{ position: "relative", width: "100%", background: "#ffffff" }}>
      <ConfettiBackground />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Headline */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem 1rem",
          }}
        >
          <BubbleText
            words={["Happy", "Birthday", "Mom!"]}
            fontSize="clamp(3rem, 10vw, 7rem)"
          />
        </section>

        {/* Photo collage */}
        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "1rem 1.5rem 4rem",
          }}
        >
          <PhotoCollage photos={PHOTOS} />
        </section>

        {/* Letter */}
        <section
          style={{
            padding: "1rem 1.5rem 4rem",
          }}
        >
          <BirthdayLetter
            body={`I cannot tell you how thankful I am to have been raised by you. One source of constant difficulty for me is to not brag about how I have the most wonderful parents I know. I cannot say how much fun I have talking to you every day, how comforting you are to me, and how much I love you. I am not always proud of myself, but I will always be proud to be your son. I hope you give Finley and Theo lots of pets from me, and I wish all the best for the black hole that is your garden. I hope I can come out and visit sometime soon. I love you.`}
            signature="Steven."
          />
        </section>

        {/* Closing message */}
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem 1rem 5rem",
          }}
        >
          <BubbleText
            words={["Love", "You", "Mom"]}
            fontSize="clamp(2rem, 6vw, 4rem)"
          />
        </section>
      </div>
    </div>
  );
}

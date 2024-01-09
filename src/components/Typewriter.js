import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import React, { useLayoutEffect } from "react";
gsap.registerPlugin(TextPlugin);

export default function Typewriter() {
  const words = ["React", "GSAP"];

  useLayoutEffect(() => {
    let masterTl = gsap.timeline({ repeat: -1 });

    gsap.to(".section__title--4 .cursor", {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power2.inOut",
    });

    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true });
      tl.to(".section__title--4 .text", {
        duration: 1,
        text: word,
      });

      masterTl.add(tl);
    });
  });
  return (
    <div className="section">
      <code>Typewriter</code>
      <h1 className="section__title section__title--4">
        <span>I 💕</span>
        <span className="text"></span>
        <span className="cursor"></span>
      </h1>
    </div>
  );
}

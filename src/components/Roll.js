import gsap from "gsap";
import React, { useLayoutEffect } from "react";

export default function Roll() {
  const text = "Rolllllling";
  const chars = text.split("");

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    const charEl = document.querySelectorAll(
      ".section__title--3 .section__title__char"
    );
    charEl.forEach((el, i) => {
      gsap.set(el, {
        yPercent: i % 2 === 0 ? -100 : 0,
      });
      tl.to(
        el,
        {
          ease: "back.inOut(1.7)",
          yPercent: i % 2 === 0 ? 0 : -100,
          repeat: -1,
        },
        "<"
      );
    });
  });
  return (
    <div className="section">
      <code>Roll</code>
      <h1 className="section__title section__title--3">
        {chars.map((char, index) => {
          return (
            <div className="section__title__char" key={index}>
              <span>{char}</span>
              <span>{char}</span>
            </div>
          );
        })}
      </h1>
    </div>
  );
}

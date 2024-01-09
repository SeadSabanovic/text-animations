import gsap from "gsap";
import React, { useLayoutEffect } from "react";

export default function Pop() {
  useLayoutEffect(() => {
    gsap.from(`.section__title--2 .section__title__char`, {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      y: 100,
      stagger: 0.05,
      repeat: -1,
      delay: 0.2,
      yoyo: 1,
      ease: "back.inOut(1.7)",
    });
  });
  return (
    <div className="section">
      <code>Slide Up</code>
      <h1 className="section__title section__title--2">
        <div className="section__title__word">
          <span className="section__title__char">S</span>
          <span className="section__title__char">l</span>
          <span className="section__title__char">i</span>
          <span className="section__title__char">d</span>
          <span className="section__title__char">e</span>
          <span className="section__title__char">.</span>
          <span className="section__title__char">U</span>
          <span className="section__title__char">p</span>
        </div>
      </h1>
    </div>
  );
}

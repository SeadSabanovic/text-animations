import gsap from "gsap";
import React, { useLayoutEffect } from "react";

export default function Intro() {
  useLayoutEffect(() => {
    const tl0 = gsap.timeline({
      defaults: {
        stagger: 0.02,
        ease: "back.inOut(1.7)",
      },
      repeat: -1,
    });

    document
      .querySelectorAll(`.section__title--0 .section__title__sentence`)
      .forEach((title) => {
        tl0
          .from(
            title.querySelectorAll(`.section__title__char`),
            {
              opacity: 0,
              y: 30,
              rotateX: -90,
            },
            "<"
          )
          .to(
            title.querySelectorAll(`.section__title__char`),
            {
              opacity: 0,
              y: -30,
              rotateX: 90,
            },
            "<1"
          );
      });
  });

  return (
    <div className="section">
      <h1 className="section__title section__title--0">
        <div className="section__title__container">
          <span className="section__title__sentence">
            <div className="section__title__char">R</div>
            <div className="section__title__char">e</div>
            <div className="section__title__char">a</div>
            <div className="section__title__char">c</div>
            <div className="section__title__char">t</div>
          </span>
          <span className="section__title__sentence">
            <div className="section__title__char">G</div>
            <div className="section__title__char">s</div>
            <div className="section__title__char">a</div>
            <div className="section__title__char">p</div>
          </span>
          <span className="section__title__sentence">
            <div className="section__title__char">T</div>
            <div className="section__title__char">e</div>
            <div className="section__title__char">x</div>
            <div className="section__title__char">t</div>
          </span>
          <span className="section__title__sentence">
            <div className="section__title__char">A</div>
            <div className="section__title__char">n</div>
            <div className="section__title__char">i</div>
            <div className="section__title__char">m</div>
            <div className="section__title__char">a</div>
            <div className="section__title__char">t</div>
            <div className="section__title__char">i</div>
            <div className="section__title__char">o</div>
            <div className="section__title__char">n</div>
            <div className="section__title__char">s</div>
          </span>
        </div>
      </h1>
    </div>
  );
}

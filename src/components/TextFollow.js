import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function TextFollow() {
  const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`;
  const words = text.split(" ");
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section__title--1 span",
        scrub: 1,
        start: "top 90%",
        end: "top 10%",
      },
    });
    gsap.utils.toArray(".section__title--1 span").forEach((word) => {
      tl.to(word, {
        backgroundPosition: `0% 0px`,
      });
    });
  });

  return (
    <div className="section">
      <h1 className="section__title section__title--1">
        {words.map((word, index) => {
          return <span key={index}>{word} </span>;
        })}
      </h1>
    </div>
  );
}

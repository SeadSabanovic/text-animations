import gsap from "gsap";
import { useLayoutEffect } from "react";

export default function Header() {
  useLayoutEffect(() => {
    let tl = gsap.timeline({ repeat: -1, yoyo: 1 });
    const rows = document.querySelectorAll(
      ".section__title--5 .section__title__row"
    );
    rows.forEach((row) => {
      console.log(row.querySelector(".hidden"));
      tl.from(
        row.querySelector(".hidden"),
        {
          scale: 0.8,
          y: 100,
          ease: "back.inOut(1.7)",
        },
        "<0.2"
      );
    });
  });
  return (
    <div className="section">
      <code>Header Reveal</code>
      <h2 className="section__title section__title--5">
        <div className="section__title__row">
          <span className="hidden">Lorem.</span>
        </div>
        <div className="section__title__row">
          <span className="hidden">ipsum.</span>
        </div>
        <div className="section__title__row">
          <span className="hidden">dolor.</span>
        </div>
      </h2>
    </div>
  );
}

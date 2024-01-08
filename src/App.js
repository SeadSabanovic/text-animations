import { useLayoutEffect } from "react";
import "./App.scss";
import gsap from "gsap";
import { ReactLenis } from "@studio-freight/react-lenis";

function App() {
  const classes = {
    section: `.section`,
    title: `.section__title`,
    sentence: `.section__title__sentence`,
    char: `.section__title__char`,
  };

  useLayoutEffect(() => {
    // Section 0
    const tl0 = gsap.timeline({
      defaults: {
        stagger: 0.02,
        ease: "back.inOut(1.7)",
      },
      repeat: -1,
    });

    document
      .querySelectorAll(`${classes.title}--0 ${classes.sentence}`)
      .forEach((title) => {
        tl0
          .from(
            title.querySelectorAll(`${classes.char}`),
            {
              opacity: 0,
              y: 30,
              rotateX: -90,
            },
            "<"
          )
          .to(
            title.querySelectorAll(`${classes.char}`),
            {
              opacity: 0,
              y: -30,
              rotateX: 90,
            },
            "<1"
          );
      });

    gsap.from(`${classes.title}--1 ${classes.char}`, {
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
    <ReactLenis root>
      <div className="container">
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
        <div className="section">
          <h1 className="section__title section__title--1">
            <div className="section__title__word">
              <span className="section__title__char">S</span>
              <span className="section__title__char">I</span>
              <span className="section__title__char">M</span>
              <span className="section__title__char">P</span>
              <span className="section__title__char">L</span>
              <span className="section__title__char">E</span>
              <span className="section__title__char">.</span>
            </div>
          </h1>
        </div>
        <div className="section">
          <h1 className="section__title section__title--2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </h1>
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;

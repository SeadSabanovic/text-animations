import { useLayoutEffect } from "react";
import "./App.scss";
import Section from "./components/Section";
import gsap from "gsap";

function App() {
  const classes = {
    section: `.section`,
    title: `.section__title`,
    char: `.section__title__char`,
  };
  const sections = Array.from({ length: 4 }, (_, index) => (
    <Section key={index} style={index} />
  ));

  useLayoutEffect(() => {
    gsap.from(`${classes.section}--0 ${classes.char}`, {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      y: 100,
      stagger: 0.05,
      repeat: -1,
      delay: 0.2,
      ease: "back.inOut(1.7)",
    });
  });

  return (
    <div className="App">
      <div className="container">{sections}</div>
    </div>
  );
}

export default App;

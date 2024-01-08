import React from "react";

export default function Section({ style }) {
  console.log(style);
  return (
    <div className={`section section--${style}`}>
      <h1 className="section__title">
        <span className="section__title__char">T</span>
        <span className="section__title__char">e</span>
        <span className="section__title__char">x</span>
        <span className="section__title__char">t</span>
        <span className="section__title__char">.</span>
        <span className="section__title__char">r</span>
        <span className="section__title__char">e</span>
        <span className="section__title__char">v</span>
        <span className="section__title__char">e</span>
        <span className="section__title__char">a</span>
        <span className="section__title__char">l</span>
      </h1>
    </div>
  );
}

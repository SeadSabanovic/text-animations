import React from "react";

export default function Section({ style }) {
  console.log(style);
  return (
    <div className={`section section--${style}`}>
      <h1 className="section__title">
        <span className="section__title__letter">T</span>
        <span className="section__title__letter">e</span>
        <span className="section__title__letter">x</span>
        <span className="section__title__letter">t</span>
        <span className="section__title__letter">.</span>
        <span className="section__title__letter">r</span>
        <span className="section__title__letter">e</span>
        <span className="section__title__letter">v</span>
        <span className="section__title__letter">e</span>
        <span className="section__title__letter">a</span>
        <span className="section__title__letter">l</span>
      </h1>
    </div>
  );
}

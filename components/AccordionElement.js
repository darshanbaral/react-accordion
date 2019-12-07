import React from "react";
import Chevron from "./Chevron";

import "./Accordion.css";

function Accordion(props) {
  function toggleAccordion() {
    props.check(props.accKey);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button
        className={`accordion-button accordion-button__${props.accKey}`}
        onClick={toggleAccordion}
        style={{ transition: `all ${props.delay}` }}
      >
        <p className="accordion-title">{props.title}</p>
        <Chevron
          className={`accordion-chevron accordion-chevron__${props.accKey} `}
          width={10}
          fill={"#777"}
          style={{
            transition: `all ${props.delay}`,
            display: props.showChevron ? "auto" : "none"
          }}
        />
      </button>
      <div
        className={`accordion-content accordion-content__${props.accKey}`}
        style={{
          maxHeight: "0",
          overflow: "hidden",
          transition: `all ${props.delay}`
        }}
      >
        {props.content}
      </div>
    </div>
  );
}

export default Accordion;

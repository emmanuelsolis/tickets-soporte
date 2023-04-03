import "./acordeon.scss";
import React, { useState } from "react";

const Acordeon = ({ title, content }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="container">
      <div className={`acordeon ${active ? "active" : ""}`}>
        <div className="acordeon__title" onClick={() => setActive(!active)}>
          <span> {title}</span>
          <div className="acordeon__icon">
              <span class="material-symbols-outlined">expand_circle_down</span>
          </div>
        </div>
        <div className="acordeon__content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Acordeon;

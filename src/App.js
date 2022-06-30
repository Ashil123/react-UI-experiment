import React from 'react';
import './style.css';

export default function App() {

  const left = document.querySelector(".left");
  const right = document. querySelector(".right");
  const container = document.querySelector (".container");
  if (left) {
    left.addEventListener ("mouseenter", () => container.classList.add("hover-left"));
    left.addEventListener ("mouseleave", () => container.classList.remove("hover-left"));
  }
  if (right) {
    right.addEventListener("mouseenter", () => container.classList.add("hover-right"));
    right.addEventListener("mouseleave", () => container.classList.remove("hover-right"));
  }

  return (
      <div class="container">
        <div class="split left">
          <h1>left Slayer</h1>
          <a href="#" class="btn">
            Watch Now
          </a>
        </div>
        <div className="split right">
          <h1>Right sider</h1>
          <a href="#" className="btn">
            Watch Now!
          </a>
        </div>
    </div>
  );
}

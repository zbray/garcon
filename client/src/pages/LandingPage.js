import React from "react";
import "./landingpage.css";

// This is Ryan's slick code
// Logic is located below export

function LandingPage(){
  return (
  <div className="container">
    <div className="split left">
      <img>
      </img>
      <a href="login.html" className="button"> Piggy</a>
    </div>
    <div className="split right">
      <img>
      </img>
      <a href="login.html" className="button"> Bully</a>
    </div>
  </div>
  )
}

export default LandingPage;

// conditional rendering - this will make the js work - Matt

// This doesn't work right now

// const left = document.querySelector('.left');
// const right = document.querySelector('.right');
// const container = document.querySelector('.container');

// left.addEventListener('mouseenter', () => {
//     container.classList.add('hover-left');
// });

// left.addEventListener('mouseleave', () => {
//     container.classList.remove('hover-left');
// });

// right.addEventListener('mouseenter', () => {
//     container.classList.add('hover-right');
// });

// right.addEventListener('mouseleave', () => {
//     container.classList.remove('hover-right');
// });
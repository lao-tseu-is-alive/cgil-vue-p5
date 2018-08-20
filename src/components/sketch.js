/* eslint no-param-reassign: ["error", { "props": false }] */
export default function (P5) {
  let width = 0;
  let height = 0;
  P5.setup = function () {
    width = document.getElementById('sketch').clientWidth;
    height = document.getElementById('sketch').clientHeight;
    P5.createCanvas(width, height);
    P5.colorMode(P5.RGB, 255, 255, 255, 1);
  };
  P5.draw = function () {
    P5.fill(255, 100, 0, 1);
    P5.stroke(255, 0, 10, 0.3);
    P5.ellipse(P5.random(0, width), P5.random(0, height), 10, 10);
  };
}

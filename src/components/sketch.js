/* eslint no-param-reassign: ["error", { "props": false }] */

import Particle from './Particle';

const attractors = [];
const particles = [];

export default function (P5) {
  let width = 0;
  let height = 0;
  P5.mousePressed = function () {
    attractors.push(P5.createVector(P5.mouseX, P5.mouseY));
  };

  P5.setup = function () {
    // TODO try to avoid using getElementById
    width = document.getElementById('sketch').clientWidth;
    height = document.getElementById('sketch').clientHeight;
    P5.createCanvas(width, height);
    P5.colorMode(P5.RGB, 255, 255, 255, 1);
  };

  P5.draw = function () {
    P5.fill(255, 100, 0, 1);
    P5.stroke(255, 0, 10, 0.3);
    P5.ellipse(P5.random(0, width), P5.random(0, height), 10, 10);

    P5.background(51);
    P5.stroke(255);
    P5.strokeWeight(4);
    particles.push(new Particle(P5.random(width), P5.random(height)));

    if (particles.length > 100) {
      particles.splice(0, 1);
    }

    for (let i = 0; i < attractors.length; i++) {
      P5.stroke(0, 255, 0);
      P5.point(attractors[i].x, attractors[i].y);
    }
    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];
      for (let j = 0; j < attractors.length; j++) {
        particle.attracted(attractors[j]);
      }
      particle.update();
      particle.show();
    }
  };
}

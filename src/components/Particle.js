// Daniel Shiffman
// http://codingtra.in
// Attraction / Repulsion
// Video: https://youtu.be/OAcXnzRNiCY

import P5 from 'p5';

export default function (x, y) {
  this.pos = P5.createVector(x, y);
  this.prev = P5.createVector(x, y);
  // this.vel = P5.createVector(); // p5.Vector.random2D();
  this.vel = P5.Vector.random2D();
  // this.vel.setMag(random(2, 5));
  this.acc = P5.createVector();

  this.update = function () {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.show = function () {
    P5.stroke(255, 255);
    P5.strokeWeight(4);
    P5.line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);

    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
  };

  this.attracted = function (target) {
    // var dir = target - this.pos
    const force = P5.createVector(target.x, target.y);
    force.sub(this.pos);
    let d = force.mag();
    d = P5.constrain(d, 1, 25);
    const G = 50;
    const strength = G / (d * d);
    force.setMag(strength);
    if (d < 20) {
      force.mult(-10);
    }
    this.acc.add(force);
  };
}

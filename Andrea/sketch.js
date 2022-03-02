// let x = 100;
// let y = 100;

// let speedX = 10;
// let speedY = 10;

// let position;
// let speed;

let particles = [];
let tropfs = [];

function setup() {
  createCanvas(1300, 800);
  colorMode(RGB);
  stroke(0);

  let from = color(255, 255, 255);
  let to = color(9, 1, 147);

  for (let i = 0; i < 50; i++) {
    let col = lerpColor(from, to, random(0, 1));
    let p = new Particle(
      random(0, width),
      random(0, height),
      random(0, 30),
      col
    );
    particles.push(p);
  }

  for (let i = 0; i < 10; i++) {
    let col = 255;
    let p = new Tropf(random(0, width), random(0, height), 300, col);
    tropfs.push(p);
  }

  // position = createVector(200, 100);
  // speed = createVector(8, -5);

  // speed.set(7, -1);

  // console.log(speed.mag());

  // console.log(speed);

  frameRate(50);
  angleMode(DEGREES);
}

function draw() {
  background(0, 30);

  // fill(0);
  // ellipse(f1.position.x, f1.position.y, 10, 10);

  // ellipse(f2.position.x, f2.position.y, 20, 20);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }

  for (let i = 0; i < tropfs.length; i++) {
    tropfs[i].update();
    tropfs[i].display();
  }

  // x = x + speedX;
  // y = y + speedY;
  // position.add(speed);

  // fill(255);
  // ellipse(position.x, position.y, 30, 30);

  // if (position.x > width || position.x < 0) {
  //   speed.x = -speed.x;
  // }

  // if (position.y > height || position.y < 0) {
  //   speed.y = -speed.y;
  // }
}

class Particle {
  constructor(x, y, r, c) {
    this.position = createVector(x, y);
    this.speed = createVector(3, 3);
    this.acceleration = createVector(2, 0);
    this.radius = r;
    this.maxspeed = 4;
    this.col = c;
  }

  update() {
    // let mouse = createVector(mouseX, mouseY);
    // let dir = p5.Vector.sub(mouse, this.position);
    // dir.normalize();
    // dir.mult(0.2);

    // this.acceleration = dir;

    this.acceleration = this.speed.copy();
    this.acceleration.normalize();
    this.acceleration.mult(0.1);
    this.acceleration.rotate(random(0, -200));

    this.speed.add(this.acceleration);
    this.speed.limit(this.maxspeed);
    this.position.add(this.speed);

    this.position.add(this.speed);
    if (this.position.x > width) {
      this.position.x = 0;
    }
    if (this.position.x < 0) {
      this.position.x = width;
    }
    if (this.position.y > height) {
      this.position.y = 0;
    }
    if (this.position.y < 0) {
      this.position.y = height;
    }
  }
  display() {
    fill(this.col);
    stroke(this.col);
    strokeWeight(2);
    line(
      this.position.x,
      this.position.y,
      this.position.x * -2,
      this.position.y * 1.5
    );
  }
}
class Tropf {
  constructor(x, y, r, c) {
    this.position = createVector(x, y);
    this.speed = createVector(10, 10);
    this.acceleration = createVector(2, 0);
    this.radius = r;
    this.maxspeed = 1;
    this.col = c;
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.position);
    dir.normalize();
    dir.mult(1);

    if (this.position.dist(mouse) < 150) {
      dir.mult(0);
    }

    this.acceleration = dir;

    // this.acceleration = this.speed.copy();
    // this.acceleration.normalize();
    // this.acceleration.mult(0.1);
    // this.acceleration.rotate(random(0, -200));

    this.speed.add(this.acceleration);
    this.speed.limit(this.maxspeed);
    this.position.add(this.speed);

    this.position.add(this.speed);
    if (this.position.x > width) {
      this.position.x = 0;
    }
    if (this.position.x < 0) {
      this.position.x = width;
    }
    if (this.position.y > height) {
      this.position.y = 0;
    }
    if (this.position.y < 0) {
      this.position.y = height;
    }
  }
  display() {
    noFill();
    strokeWeight(0.5);
    stroke(this.col);
    ellipse(this.position.x, this.position.y, this.radius);
  }
}

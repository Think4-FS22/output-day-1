let particles = [];

let doDraw = true;

function setup() {
  createCanvas(900, 600);

  for (let i = 0; i < 100; i++) {
    let p = new Particle(random(0, width), random(0, height), random(5, 30));
    particles.push(p);
  }

  angleMode(DEGREES);
}

function draw() {
  background(250);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
}

class Particle {
  constructor(x, y, r, c) {
    this.position = createVector(x, y);
    this.speed = createVector(5, 0);
    this.acceleration = createVector(0, 0);
    this.radius = r;
    this.col = c;
    this.maxspeed = 5;
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.position);
    dir.normalize();
    dir.mult(0.2);
    this.acceleration = dir;

    this.speed.add(this.acceleration);
    this.speed.limit(this.maxspeed);
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
    fill(0);
    ellipse(this.position.x, this.position.y, this.radius, this.radius);
  }
}

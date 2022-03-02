let particles = [];

function setup() {
  createCanvas(800, 800);

  colorMode(HSB, 255, 100, 100, 100);

  for (let i = 0; i < 100; i++) {
    let p = new Particle(random(0, width), random(0, height), 10);
    particles.push(p);
  }
}

function draw() {
  background(0, 0, 100, 1);

  let hW = width / 2;
  let qW = width / 4;
  let hqW = width / 4 + width / 2;
  let hH = height / 2;
  let qH = height / 4;
  let hqH = height / 4 + height / 2;

  noStroke();

  fill(0, 0, 100);
  textSize(50);
  text("ZONE1", 0, 38);
  text("ZONE2", hW, 38);
  text("ZONE3", 0, hH + 38);
  text("ZONE4", hW, hH + 38);

  for (let i = 0; i < 100; i++) {
    particles[i].update();
    particles[i].display();
  }

  fill(0, 0, 100, 100, 50);
  ellipse(qW, qH, 5, 5);
  ellipse(hqW, qH, 5, 5);
  ellipse(hqW, hqH, 5, 5);
  ellipse(qW, hqH, 5, 5);

  noFill();
  stroke(0, 0, 100, 50);
  ellipse(qW, qH, hW, hH);
  ellipse(hqW, qH, hW, hH);
  ellipse(hqW, hqH, hW, hH);
  ellipse(qW, hqH, hW, hH);

  ellipse(hW, hH, width / 4.9, height / 4.9);

  line(qW, 0, qW, height);
  line(hqW, 0, hqW, height);
  line(0, qH, width, qH);
  line(0, hqH, width, hqH);

  noStroke();
}

class Particle {
  constructor(x, y, r, c) {
    this.position = createVector(x, y);
    this.speed = createVector(4, 4);
    this.acceleration = createVector(4, 4);
    this.radius = r;
    this.col = c;
  }

  update() {
    let center = createVector(width / 2, height / 2);
    let dir = p5.Vector.sub(center, this.position);
    dir.normalize();
    dir.mult(0.1);

    this.acceleration = dir;

    this.speed.add(this.acceleration);
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
    fill(0, 100, 100, 10);
    ellipse(this.position.x / 2, this.position.y / 2, this.radius);
    ellipse(this.position.x / 2 + width / 2, this.position.y / 2, this.radius);
    ellipse(
      this.position.x / 2 + width / 2,
      this.position.y / 2 + height / 2,
      this.radius
    );
    ellipse(this.position.x / 2, this.position.y / 2 + height / 2, this.radius);
  }
}

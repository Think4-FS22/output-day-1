// let x = 100;
// let y = 100;

// let speedX = 5;
// let speedY = 5;

// let position;
// let speed;

let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 1200; i++) {
    let col = color(
      random(202, 71),
      random(21, 131),
      random(204, 220),
      random(50, 80)
    );
    let p = new Flugzeug(
      random(0, width),
      random(0, height),
      random(3, 10),
      // 5,
      col
    );
    // let p = new Flugzeug(200, 100, 10, 10);

    particles.push(p);
  }

  // position = createVector(200, 100);
  // speed = createVector(5, 5);

  //geschwindigkeit ändern
  // speed.set(7, -1);

  //speed.mag = länge von Vector ausrechnen
  // console.log(speed.mag());

  // console.log(speed);

  frameRate(50);
  angleMode(DEGREES);
}

function draw() {
  background(0, 78);
  // fill(0);
  // ellipse(f1.position.x, f1.position.y, 10, 10);

  // ellipse(f2.position.x, f2.position.y, 10, 10);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
  // x = x + speedX;
  // y = y + speedY;

  //geht nach vorne, vektor wird zu position addiert
  // position.add(speed);

  // fill(0);
  // ellipse(position.x, position.y, 30, 30);

  //prallt an Wand ab
  //   if (position.x > width || position.x < 0) {
  //     speed.x = -speed.x;
  //   }

  //   if (position.y > height || position.y < 0) {
  //     speed.y = -speed.y;
  //   }
}

class Flugzeug {
  constructor(x, y, r, c) {
    this.position = createVector(x, y);
    this.speed = createVector(0, 0);
    this.acceleration = createVector(0.2, 0);
    this.radius = r;
    this.maxspeed = 13;
    this.col = c;
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    //height durch width ersetzten
    let corner = createVector(random(0, width), random(0, width));
    let dir = p5.Vector.sub(corner, this.position);
    dir.normalize();
    dir.mult(0.05);

    this.acceleration = dir;

    // this.acceleration = this.speed.copy();
    // this.acceleration.normalize();
    // this.acceleration.mult(0.1);
    // this.acceleration.rotate(30);

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
    // if (this.radius < 10) {
    //   fill("rgba(190,190,190,0.5)");
    //   noStroke();
    // } else if (this.radius < 12) {
    //   fill("rgba(192,192,192, 1)");
    //   noStroke();
    // } else if (this.radius < 15) {
    //   fill("rgba(128,128,128, 0.7)");
    //   noStroke();
    // } else {
    //   fill("rgba(255,255,255, 0.2)");
    // }

    // if (this.col.toString == "rgbba(202,21,204,80)") {
    if (this.radius <= 4) {
      fill("rgba(255,255,0,70)");
    } else {
      fill(this.col);
      noStroke();
    }
    // fill(this.col);
    // ellipse(this.position.x, this.position.y, this.radius, this.radius);
    square(this.position.x, this.position.y, this.radius);
  }
}

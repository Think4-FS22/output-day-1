let flugzeuge = [];

let ABC = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "+",
  "*",
  "%",
  "&",
  "#",
];

function setup() {
  createCanvas(900, 600);

  for (let i = 0; i < 300; i++) {
    let col = color(0, random(240, 255), 110, random(0, 500));
    let f = new Flugzeug(random(0, width), random(0, 350), random(1, 30), col);
    flugzeuge.push(f);
  }
  frameRate(15);
  //angleMode(DEGREES);
}

function draw() {
  background(0, random(10, 35));

  for (let i = 0; i < 300; i++) {
    flugzeuge[i].update();
    flugzeuge[i].display();
  }
}
class Flugzeug {
  constructor(x, y, r, c) {
    this.position = createVector(x, y);
    this.speed = createVector(0, 1);
    this.acceleration = createVector(1, 0.2);
    this.radius = r;
    this.maxspeed = 15;
    this.col = c;
  }
  update() {
    this.acceleration = this.speed.copy();
    this.acceleration.normalize();
    this.acceleration.mult(random(0, 1));
    //this.acceleration.rotate(90);

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
      this.position.y = random(0, 250);
    }
    if (this.position.y < 0) {
      this.position.y = height;
    }
  }
  display() {
    let num = int(random(0, ABC.length));
    let flash = int(random(0, 100));

    if (flash > 50 && flash < 75) {
      noStroke();
      fill("#39ff14");
    } else {
      noStroke();
      fill(this.col);
    }

    //console.log(num);
    textFont("Agency FB");
    textSize(25);
    //ellipse(this.position.x, this.position.y, this.radius, this.radius);
    text(ABC[num], this.position.x, this.position.y);
  }
}

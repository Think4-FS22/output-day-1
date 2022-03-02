let airports = [];
let Flugzeuge = [];
function setup() {
  createCanvas(windowWidth, windowHeight);


  for (let i = 0; i < 10; i++) {
    let a = createVector(random(0, width), random(0, height));
    airports.push(a);
  }
// so startet für jeden Flughafen ein Flugzeug am Flughafen
  for (let p = 0; p < 10; p++) {
    let s = new Flugzeug(airports[p].x, airports[p].y, "✈", airports[int(random(0,airports.length))],random(2,6)
    )
    Flugzeuge.push(s)

  }
  angleMode(DEGREES)
 

}

function draw() {
  textAlign(CENTER);

  for (let i = 0; i < 10; i++) {

    Flugzeuge[i].update();

    Flugzeuge[i].display();

  }
  for (let i = 0; i < airports.length; i++) {
    fill(0, 255, 0);
    ellipse(airports[i].x, airports[i].y, 20, 20);
  }
  background(135, 206, 235, 15)

}
class Flugzeug {
  constructor(x, y, t, d, mS) {
    this.position = createVector(x, y);
    this.speed = createVector(0, 0);
    this.text = t;
    this.acceleration = createVector(0.1, 0.1)
    this.maxSpeed = mS
    this.angle= 0
    this.destination= d;
  }
  update() {
    let dir = p5.Vector.sub(this.destination, this.position);
    dir.normalize();
    dir.mult(10);
 
this.speed= dir
    
    this.speed.limit(this.maxSpeed)
    this.position.add(this.speed)
    if (this.position.x > width || this.position.x < 0) {
      this.speed.x = -this.speed.x
    }
    if (this.position.y > height || this.position.y < 0) {
      this.speed.y = -this.speed.y
    }
if(this.destination.dist(this.position)<10 ){
  this.destination = airports[int(random(0,airports.length))]
}
  }

  display() {
    let horizonv = createVector(1, 0)
let flugigrössi = this.destination.dist(this.position)*0.1
    push()
    let winkelflugi = horizonv.angleBetween(this.speed)
    translate(this.position.x, this.position.y)
    rotate(winkelflugi)  
    fill(250,200)
    textSize(82)
   // console.log(this.destination.dist(this.position))
    text(this.text, 0, 0)
   // console.log(this.destination.dist(this.position))
    pop()
  }
  /*displaychem() {
    let horizonv = createVector(1, 0)

    push()

    let winkelflugi = horizonv.angleBetween(this.speed)
    translate(this.position.x, this.position.y)
    rotate(winkelflugi)  
    fill(250)
    textSize(this.destination.dist(this.position))

    text(this.text, 0, 0)
    pop()
  }*/
}
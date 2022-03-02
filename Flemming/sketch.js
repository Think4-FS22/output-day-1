//let x = 50
//let y = 50
//let speed = 25;
//let yspeed = 22;

//let speed;
//let position;
let smileyArray= ["😎","😂","😨","😫","😲","😭"]
let Flugzeuge = [];
function setup() {
  createCanvas(900, 600);
  //position = createVector(200, 100);
  //speed = createVector(15, 10);
  
  for ( let p=0;p<200;p++){
    let s = new Flugzeug (random(0,width),random(0,height),"😎")
    Flugzeuge.push(s)
  }
angleMode(DEGREES)
}

function draw() {
  fill(0)
 
  textSize(50)
stroke(255)
for (let i=0; i<200; i++){
 
  Flugzeuge[i].update();
  Flugzeuge[i].display();
angleMode(DEGREES)
}
background(250,15)
}
class Flugzeug {
  constructor(x, y, t) {
    this.position = createVector(x, y);
    this.speed = createVector(1, 0);
    this.text = t;
    this.acceleration = createVector(0.1,0)
    this.maxSpeed = 6
  }
  update() {
/*let mouse = createVector(mouseX,mouseY);
let dir = p5.Vector.sub(mouse,this.position)
dir.normalize();
dir.mult(0.1)
this.acceleration = dir*/
this.acceleration = this.speed.copy()
this.acceleration.normalize();
this.acceleration.mult(0.1);
this.acceleration.rotate(random(15,19))
this.speed.add(this.acceleration)
this.speed.limit(this.maxSpeed)
    this.position.add(this.speed)
    if (this.position.x > width ) {
this.position.x=0    }
if (this.position.x < 0){
   this.position.x= width
}
    if (this.position.y > height ) {
      this.position.y=0    }
    if (this.position.y < 0){
      this.position.y = height
    }
  }

  display() {
    if(random (0,1)>.999){
    this.text= smileyArray[int(random(0,5))]}
text(this.text,this.position.x,this.position.y)
  }

}
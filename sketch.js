////John McCaffrey
////9-23-16
////demonstration of how circle collision works

var b1, b2;
var s;

function setup() {
  createCanvas(800, 600);
  b1 = new Ball(200, 300, color(255, 0, 0, 128), false);
  b2 = new Ball(400, 300, color(0, 255, 0, 128), true);
}

function draw() {
  background(200);
  //calculate the distance apart
  var d = dist(b1.x, b1.y, b2.x, b2.y);
  if (d < 100) {
    fill(255, 255, 0, 100);
    rect(0, 0, width, height);
  }
  //draw line between centers
  stroke(255, 255, 0);
  line(mouseX, mouseY, 400, 300);
  //draw the circles
  stroke(0);
  b1.update(mouseX, mouseY);
  b2.update(400, 300);
  b1.display();
  b2.display();

  //draw the text and other information
  fill(0);
  textSize(18);
  textAlign(CENTER);
  text("Collision Detection Using Circles\ndistance(c1.x, c1.y, c2.x, c2.y) < (c1.radius + c2.radius)", 400, 50);
  fill(0);
  stroke(70,70,255);
  line(100, 400, 200, 400);
  line(100, 430, 100 + d, 430);
  stroke(0);
  textSize(12);
  textAlign(LEFT);
  fill(50);
  text("circle1.radius + circle2.radius = 100", 100, 395);
  s = "distance between centers = " + d;
  text(s, 100, 425);
}

function Ball(tx, ty, tc, tfixed) {
  this.x = tx;
  this.y = ty;
  this.r = 50;
  this.c = tc;
  this.ang = 0;
  this.fixed = tfixed; //fixed means the circle does not move when true

  this.update = function(tx, ty) {
    this.x = tx;
    this.y = ty;
    if (this.fixed) {
      //calc the angle between b2 to b1
      this.ang = (atan2(mouseY - 300, mouseX - 400));
    } else {
      //calc the angle between b1 to b2
      this.ang = (atan2(300 - mouseY, 400 - mouseX));
    }
  }
  this.display = function() {
    push();
    translate(this.x, this.y);
    stroke(0);
    fill(this.c);
    ellipse(0, 0, this.r * 2, this.r * 2);
    rotate(this.ang);
    line(0, 0, this.r, 0);
    pop();
  }
}
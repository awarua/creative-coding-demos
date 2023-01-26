let btn;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(20);
  textStyle(BOLD);

  btn = createButton('Click me!');
  btn.position(10, 10);
  btn.mousePressed(sayHello);
}

function draw() {
  background(0, 10);
}

function sayHello(){
  text("Hello!", width / 2, height / 2);
}
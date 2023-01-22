let arrow, bg, hArrow, vArrow;
let pink, blue, grey;
let hasFocussed = false;

function preload(){
  arrow = loadImage('arrow-2.png');
  bg = loadImage('background-sm.jpg');
  hArrow = loadImage('mx.png');
  vArrow = loadImage('my.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(220);
  noCursor();
  pink = color("#e242ab");
  blue = color("#4194dc");
  grey = color("#7d7d7d");

  textSize(24);
  textStyle(BOLD);
  textFont('monospace');
}

function draw(){
  background(bg);

  let mx = 500; // width / 2;
  let my = 250; // height / 2;

  hasFocussed = hasFocussed || movedX > 0 || movedY > 0;

  if (hasFocussed){
    mx = mouseX;
    my = mouseY;
  }

  let dot = 10;
  let dash = 10;
  stroke(grey);
  strokeWeight(dot / 2);
  //line(0, my, mx, my);
  for (let x = dash; x < mx; x += dot + dash){
    let d = min(dot, mx - x);
    line(x, my, x + d, my);
  }
  for (let y = dash; y < my; y += dot + dash){
    let d = min(dot, my - y);
    line(mx, y, mx, y + d);
  }
  noStroke();

  image(arrow, mx - 10, my - 10);

  fill(pink);
  let x = 10;
  let y = my - 10;
  text("mouseY:", x, y);
  let w = textWidth("mouseY:");
  fill(blue);
  text(my, x + w, y);

  push();
  fill(pink);
  x = mx + 10;
  y = 10;
  translate(x, y);
  rotate(radians(90));
  text("mouseX:", 0, 0);
  w = textWidth("mouseX:");
  fill(blue);
  text(mx, w, 0);
  pop();

  push();
  fill(pink);
  x = 10;
  y = height - 10;
  translate(x, y);
  text("mouseIsPressed:", 0, 0);
  w = textWidth("mouseIsPressed:");
  fill(blue);
  text(mouseIsPressed, 0 + w, 0);
  pop();

}
// Demonstrates using random() to set the position of a shape

let lastCleared = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);

  background(220);

  // Set the fill to be a half transparent white colour
  fill(255, 127);
}

function draw(){
  if (frameCount - lastCleared < 100){
    push();
    noStroke();
    fill(150 - (frameCount - lastCleared), 4);
    text("Click to clear", width / 2, height / 2);
    pop();
  }

  stroke(0, 20);
  fill(255, 127);

  // Each time the draw function is called, draw
  // one circle randomly positioned on the canvas.
  // The diameter of the circles will also vary
  let x = random(width);
  let y = random(height);
  let d = random(10, 20);
  circle(x, y, d);
}

function mousePressed(){
  lastCleared = frameCount;
  // saveCanvas("random_demo-screenshot.png");
  background(220);
}
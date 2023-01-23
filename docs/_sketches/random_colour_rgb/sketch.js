let lastCleared = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  background(220);
  noStroke();
}

function draw(){
  if (frameCount - lastCleared < 100){
    noStroke();
    fill(150 - (frameCount - lastCleared), 4);
    text("Click to clear", width / 2, height / 2);
  }

  let randomColor = color(random(255), random(255), random(255));
  fill(randomColor);
  circle(random(width), random(height), 10);
}

function mousePressed(){
  lastCleared = frameCount;
  // saveCanvas("random_demo-screenshot.png");
  background(220);
}
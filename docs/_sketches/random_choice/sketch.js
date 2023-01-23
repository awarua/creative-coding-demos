let lastCleared = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(220);

  textAlign(CENTER, CENTER);
}

function draw(){
  if (frameCount - lastCleared < 100){
    push();
    noStroke();
    fill(150 - (frameCount - lastCleared), 4);
    text("Click to clear", width / 2, height / 2);
    pop();
  }

  // Randomly choose an x, y position
  let x = random(width);
  let y = random(height);

  // Toss a 'coin' and use the outcome to decide what to do
  let coin = random(100);

  if (coin < 50){
    // If less than 50, draw a black circle
    stroke(255);
    fill(0, 127);
    circle(x, y, 10);
  } else {
    // Otherwise, draw a white square
    stroke(0);
    fill(255, 127);
    square(x - 5, y - 5, 10);
  }

  console.log('foo');
}

function mousePressed(){
  lastCleared = frameCount;
  background(220);
}
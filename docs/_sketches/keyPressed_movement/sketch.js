// Variables to record position of character.
let x;
let y;

function setup(){
  createCanvas(windowWidth, windowHeight);
  fill(0, 255, 0);

  // Start the character off in the middle of the canvas
  x = width / 2;
  y = height / 2;
}

function draw(){
  background(220);

  // Draw the character at the current x, y position
  circle(x, y, 20);
}

function keyPressed(){
  if (key == 'w'){
    y -= 10;
  } else if (key == 'a'){
    x -= 10;
  } else if (key == 's'){
    y += 10;
  } else if (key == 'd'){
    x += 10;
  }
}
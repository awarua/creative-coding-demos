// Record keys that have been pressed?



// Demonstrtes keyboard variables
function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(86);
  noStroke();

  // See tutorial 5 for more info on text functions.
  textAlign(CENTER, CENTER);
  textSize(48);
}

function draw(){
  // If a key is pressed, make background lighter
  if (keyIsPressed){
    background(80);
  } else {
    background(86);
  }
  
  fill(keyCode, 50, 100);
  circle(width * 0.25, height / 2, min(width, height) * 0.75);
  circle(width * 0.75, height / 2, min(width, height) * 0.75);

  // Draw the values of 'key' and 'keyCode'
  // Set the fill so it contrasts with the circle
  fill(360 - keyCode, 100, 50);
  text(key, width * 0.25, height / 2);
  text(keyCode, width * 0.75, height / 2);
}

function keyPressed(){
  event.preventDefault();
  return false;
}

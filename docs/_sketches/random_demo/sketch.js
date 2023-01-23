/**
 * Demo of the random() function.
 * Choose an x position using the random function.
 * Draw a transparent stroke each time at that location.
 * You should see strokes randomly spread across the page. 
 *
 * Jared Donovan 2018
 */

let lastCleared = 0;
 
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255);
  // fill(0, 80);
  textAlign(CENTER, CENTER);
  // text("Click to clear", width / 2, height / 2);
  // stroke(0, 20);
}

function draw(){
  if (frameCount - lastCleared < 100){
    noStroke();
    fill(250 - (frameCount - lastCleared), 4);
    text("Click to clear", width / 2, height / 2);
  }
    // } else {
  //   noStroke();
  //   fill(255, 0, 0);
  //   text("Click to clear", width / 2, height / 2);
  // }
  stroke(0, 20);

  // Choose a random x position somewhere between 0..width
  let x = random(width);
  
  // Draw a line at x. Over time, lines will build up. Evenly spread across the page. 
  line(x, 0, x, height);  
}

function mousePressed(){
  lastCleared = frameCount;
  // saveCanvas("random_demo-screenshot.png");
  background(255);
}
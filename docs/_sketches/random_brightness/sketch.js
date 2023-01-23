let x = 0;
let w = 10;

function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(0);
  noStroke();
}

function draw(){
  // Pick a brightness somewhere between 0 and 100
  let b = random(0, 100);
  fill(240, 100, b);

 // Draw a rectangle with that colour
 let w = width / 20;
 let x = floor(random(20)) * w;
 rect(x, 0, w, height);
}
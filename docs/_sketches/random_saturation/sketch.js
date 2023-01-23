let x = 0;
let w = 50;

function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(100);
  noStroke();
}

function draw(){
  // Pick a saturation somewhere between 0 and 100
  let s = random(0, 100);
  fill(120, s, 100);

 // Draw a rectangle with that colour
 let w = width / 20;
 let x = floor(random(20)) * w;
 rect(x, 0, w, height);
}
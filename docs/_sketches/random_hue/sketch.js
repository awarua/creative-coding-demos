let x = 0;
let w = 10;

function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(100);
  noStroke();
}

function draw(){
  // Pick a hue somewhere between purple and red
  let h = random(300, 360);
  fill(random(300, 360), 50, 100);

 // Draw a rectangle with that colour
  let w = width / 20;
  let x = floor(random(20)) * w;
  rect(x, 0, w, height);
}
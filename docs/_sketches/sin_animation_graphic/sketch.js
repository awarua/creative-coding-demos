/**
 * Animate the position of a ball depending on sin function.
 *
 * Jared Donovan 2018.
 */
 
let xSample = 0;
let x = 60;
let inc = 0.04;
let traceGraphic;
let ballGraphic;
let hu = 0
let sldInc;
let rMargin = 85;
let tMargin = 55;
let bMargin = 55;
 
function setup(){
  createCanvas(740, 200);
  colorMode(HSB);
  fill(hu, 100, 60, 0.9);
  noStroke();
  textFont('monospace');

  sldInc = createSlider(0.01, 0.2, 0.04, 0.01);
  sldInc.position(10, height - 30);  

  ballGraphic = createGraphics(100, 100);
  ballGraphic.noStroke();
  ballGraphic.colorMode(HSB);
  ballGraphic.fill(hu, 100, 60, 0.5);
  for (let i = 0; i < 100; i++){
    let x = map(i, 0, 99, 50, 60);
    let y = map(i, 0, 99, 50, 40);
    let d = map(i, 0, 99, 100, 60);
    let br = map(i, 0, 99, 60, 100);
    let sa = map(i, 0, 99, 100, 50);
    ballGraphic.fill(hu, sa, br, 1);
    ballGraphic.circle(x, y, d)
  }

  traceGraphic = createGraphics(width, height);
  traceGraphic.colorMode(HSB);
  traceGraphic.noStroke();
  traceGraphic.fill(hu, 100, 100, 0.3);
}

function draw(){
  background(20);

  push();
  stroke(255, 50);
  line(10, height / 2, width - 30, height / 2);
  pop();

  // Change the sample point, so we get a slightly different
  // value for x each time.   
  let inc = sldInc.value();
  xSample = xSample + inc;

  // y will have a value between 0..1
  let y = sin(xSample);

  // Scale up the value of y from 0..1 to 100..500
  y = map(y, -1, 1, tMargin, height - bMargin);

  let distRemaining = (width - rMargin) - x;
  x = min(x + distRemaining / (width - rMargin), width - rMargin);

  // Draw a trace into the graphics object
  let pastTrace = traceGraphic.get(0, 0, traceGraphic.width, traceGraphic.height);
  traceGraphic.clear();
  traceGraphic.image(pastTrace, -1, 0, traceGraphic.width, traceGraphic.height);
  traceGraphic.circle(x, y, 10);

  image(traceGraphic, 0, 0);

  // Use the value of y to draw a circle
  //circle(x, y, 100);
  image(ballGraphic, x - 50, y - 50);
  
  fill(255);
  noStroke();
  text(`sin(frameCount * ${roundTo(inc, 2)})`, 145, height - 17);

  push();
  textAlign(RIGHT, CENTER);
  text(0, width - 20, height / 2);
  text(1, width - 20, tMargin);
  text(-1, width - 20, height - bMargin);
  pop();

}

function roundTo(num, places){
  let power = pow(10, places);
  return floor(power * num) / power;
}
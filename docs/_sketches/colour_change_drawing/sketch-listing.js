// Hue to fill circles with
let h = 0;
// Arrays to hold drawing data
let xValues = [];
let yValues = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function draw(){
  background(86);

  // Fill colour will change over time
  h = h + 1;
  if (h >= 360){
    h = 0;
  }

  stroke(h, 100, 50);
  fill(h, 50, 100);

  if (mouseIsPressed){
    // Store the x, y position the arrays
    xValues.push(mouseX);
    yValues.push(mouseY);
  }

  // Loop over the line data and draw it to the screen
  for (let i = 0; i < xValues.length; i++){
    let x = xValues[i];
    let y = yValues[i];
    circle(x, y, 20);
  } 
}

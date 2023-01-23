let jsonData;
// Hue to fill circles with
let h = 0;
// Diameter of circles.
let d = 20;
// We start with two empty arrays to store line data
let xValues = [];
let yValues = []

function preload(){
  jsonData = loadJSON('line_data.json');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  // noStroke();
  console.log(jsonData);

  xValues = jsonData.xValues;
  yValues = jsonData.yValues;
}

function draw(){
  background((h + 120) % 360, 10, 100);

  // Fill colour will change over time
  h = h + 1;
  if (h >= 360){
    h = 0;
  }

  stroke(h, 100, 50);
  fill(h, 50, 100);

  if (mouseIsPressed){
    // Store the x, y position in a mini-array and add it to the
    // end of our larger lineData array.
    xValues.push(mouseX);
    yValues.push(mouseY);

    // circle(mouseX, mouseY, d);
  }

  // Loop over the line data and draw it to the screen
  for (let i = 0; i < xValues.length; i++){
    let x = xValues[i];
    let y = yValues[i];
    circle(x, y, d);
  }
}

function keyPressed(){
  if (key == 's'){
    let d = {
      xValues,
      yValues,
    };

    saveJSON(d, 'data.json');
  } else if (key == 'c'){
    lineData = [];
    background(86);
    console.log('clear');
  }
}
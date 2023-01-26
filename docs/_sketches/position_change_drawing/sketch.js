// We start with an empty array to store line data
let lineData = [];
// Diameter of circles.
let d = 10;

function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  fill(180, 10, 100, 0.5);
  stroke(180, 50, 100, 0.8);
}

function draw(){
  background("#4194dc");

  if (mouseIsPressed){
    // Store the x, y position in a mini-array and add it to the
    // end of our larger lineData array.
    lineData.push([mouseX, mouseY]);
  }

  // Keep a copy of the previous x, y. 
  // Set this to the first item initialy.
  let prevPt = lineData[0];

  // Loop over the line data and draw it to the screen
  for (let pt of lineData){
    circle(pt[0], pt[1], d);

    line(prevPt[0], prevPt[1], pt[0], pt[1]);

    // Also move the x, y position by a small random amount
    pt[0] = pt[0] + random(-0.5, 0.5);
    pt[1] = pt[1] + random(-0.5, 0.5);

    // Store the pt as the prevPt.
    prevPt = pt;
  }
}
let skyBlue;
// let sunYellow;
let cloudWhite;
let driftSpeed = 2;
let cloudSize = 30;
// let sunSize = 50;
let cloudXs = [];
let cloudYs = [];

function setup(){
  createCanvas(windowWidth, windowHeight);

  colorMode(HSB);
  skyBlue = color(180, 30, 100);
  // sunYellow = color(40, 100, 100);
  cloudWhite = color(100, 50);
  fill(cloudWhite);
  noStroke();

  for (let i = 0; i < 50; i++){
    cloudXs[i] = random(-width - cloudSize, -cloudSize);
    cloudYs[i] = random(height);
  }
}

function draw(){
  background(skyBlue);

  // Draw the sun at the mouseX, mouseY position
  // fill(sunYellow);
  // circle(mouseX, mouseY, sunSize);

  // Draw the clouds and update their positions
  // fill(cloudWhite);

  for (let i = 0; i < cloudXs.length; i++){
    let x = cloudXs[i];
    let y = cloudYs[i];

    circle(x, y, cloudSize);

    // Update the x position of the cloud
    x = x + driftSpeed;

    // If the cloud goes off the right side move back to left
    if (x > width){
      x = x - width;      
    }

    // Store the updated position back in the array
    cloudXs[i] = x;
  }
}
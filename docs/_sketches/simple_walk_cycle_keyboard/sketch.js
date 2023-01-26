// Declare an array to hold frames and a counter.
let frames = [];
let counter = 0;

function preload(){
  // Load the frames into the array
  frames[0] = loadImage("data/frame0.png");
  frames[1] = loadImage("data/frame1.png");
  frames[2] = loadImage("data/frame2.png");
  frames[3] = loadImage("data/frame3.png");
}

function setup() {
  createCanvas(frames[0].width, frames[0].height);
}

function draw() {
  // Clear the background each time.
  background(255);

  // Get the current frame and display on the canvas
  // The 'counter' variable is used as the index on the array
  let frame = frames[floor(counter)];
  image(frame, 0, 0);

  // Only increment the counter if the spacebar is pressed
  if (keyIsPressed && key == " "){
    // Increment the current frame counter. If it goes past
    // the end of the array, then reset it to zero
    counter += 0.1;
    if(counter >= frames.length) {
      counter = 0;
    }
  }
}
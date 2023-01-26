// Declare an array to hold frames and a counter.
let frames = [];
let currentFrame = 0;

function preload(){
  // For convenience, use a for loop to load images.
  for(let i = 0; i < 4; i++){
    frames[i] = loadImage("data/frame" + i + ".png"); 
  }	
}

function setup() {
  createCanvas(300, 300);
  // Cap the frameRate at 5 so it doesn't go too fast.
  frameRate(5);
}

function draw() {
  // Clear the background each time.
  background(255);

  // Get the current frame and store it in a variable
  let frame = frames[currentFrame];
  image(frame, (width - frame.width) / 2, height - frame.height);
  text(currentFrame, 10, 20);

  // Increment the current frame counter. If it goes past
  // the end of the array, then reset it to zero
  currentFrame += 1;
  if(currentFrame >= frames.length) {
    currentFrame = 0;
  }
}
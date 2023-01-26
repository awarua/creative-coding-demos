// Declare an array to hold frames
let frames = [];
let counter = 0;

function preload(){
  // Load the frames into the array
  frames[0] = loadImage("data/frame0.png");
  frames[1] = loadImage("data/frame1.png");
  frames[2] = loadImage("data/frame2.png");
  frames[3] = loadImage("data/frame3.png");
}

function setup(){
  createCanvas(frames[0].width, frames[0].height);
}
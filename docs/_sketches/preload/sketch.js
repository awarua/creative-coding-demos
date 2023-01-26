// Declare a global variable 'img' to hold the image
let img;

// The 'preload' function will be called before setup.
// It ensures images are loaded before the sketch runs.
function preload(){
  // Load a placeholder image from 'picsum'
  img = loadImage('https://picsum.photos/600/400');
}

function setup(){
  // Create the canvas with the same width and height as image
  createCanvas(img.width, img.height);
}

function draw(){
  // Draw the image to the canvas in top left corner
  image(img, 0, 0);
}
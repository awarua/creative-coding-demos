/**
 * This sketch displays a series of images of a face
 * that follows the mouse around on the screen as it moves. 
 *
 * Jared Donovan - 2018.
 */
 
// We use an array to store the images.
let faces = [];

function preload(){
  // Use a for-loop to load images into the array
  for (let i = 0; i < 9; i++){
    faces[i] = loadImage("data/" + i + ".png");      
  }
}

function setup(){
  createCanvas(300, 300);
}

function draw(){
  // Variables to hold row and col numbers
  let row;
  let col;

  // Check that mouse is over the canvas
  if (mouseX > 0 && mouseX < width 
    && mouseY > 0 && mouseY < height){
    // Figure out which column mouse is in
    col = floor(mouseX / 100);
    row = floor(mouseY / 100);
  } else {
    // If mouse is not over canvas, just pick
    // the middle image
    row = 1;
    col = 1;
  }

  // The index of the image can be calculated from row/col number
  let idx = row * 3 + col;

  // Draw the image to the canvas
  image(faces[idx], 0, 0);
}
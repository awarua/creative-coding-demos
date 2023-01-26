// Declare a global variable to store the image data.
let img;

// The preload function runs before setup and ensures
// that images are loaded before the sketch runs.
function preload(){
  // Here we provide a local path to the file in a 'data' folder.
  img = loadImage('data/Mona_Lisa.jpg');
}

function setup() {
  // Create a canvas that's the same size as the image.
  createCanvas(img.width, img.height);
  console.log(img.width, img.height);
}

function draw() {
  background(220);
  // Draw the image to the canvas at 0, 0. The image is
  // the same size as the canvas, so we don't need to resize it
  image(img, 0, 0);
}
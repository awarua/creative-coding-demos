// Samples pixels and creates a more radical 
// effect, making use of colour attributes. 
let img;

function preload(){
	img = loadImage("https://picsum.photos/740/400");
}

function setup(){
  createCanvas(img.width, img.height);
}

function draw(){
  background(255);

  if (mouseIsPressed){
    // If the user presses the mouse, show the original image
    image(img, 0, 0);    
  } else {
    // Otherwise, loop over a grid of pixels in the image.
    // We sample every 20th pixel and use this to set the
    // fill colour for a circle.
    for(let i = 10; i < img.width; i += 20){
      for(let j = 10; j < img.height; j += 20){
        drawCell(i, j);
      }
    }
  }
}

// Function to draw a single cell in the mosaic.
// Takes the i, j position to sample from the image.
function drawCell(i, j){

  // Switch to RGB color mode to correctly sample color.
  // If we leave it in HSB color mode, the sampled colors will
  // not be correct.
  colorMode(RGB);

  let pixColor = img.get(i, j);
  let hu = hue(pixColor);
  let sa = saturation(pixColor);
  let br = brightness(pixColor);

  // Switch back to hsb mode and draw a line based 
  // on values of hu, sa, and br.
  colorMode(HSB);
  stroke(hu, sa, br, 0.5);
  strokeWeight(1 + hu / 16);
  line(i, j, i + br, j + sa);
}

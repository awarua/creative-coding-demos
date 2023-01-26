// Samples pixels in an image.
let img;

function preload(){
	img = loadImage("https://picsum.photos/740/400");
}

function setup(){
  createCanvas(img.width, img.height);
  noStroke();
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
        let pixColor = img.get(i, j);
        fill(pixColor);
        circle(i, j, 18);
      }
    }
  }
}

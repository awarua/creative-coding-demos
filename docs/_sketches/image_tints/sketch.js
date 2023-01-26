let img;

function preload(){
  // Load a random 100x100 pixel image from picsum
  img = loadImage('https://picsum.photos/100/100');
}

function setup(){
  // Create a canvas large enough to hold five copies of the image
  createCanvas(500, 100);
  background(255);
  image(img, 0, 0);

  // Draw a red, blue and green-tinted versions
  tint(255, 0, 0);
  image(img, 100, 0);

  tint(0, 255, 0);
  image(img, 200, 0);

  tint(0, 0, 255);
  image(img, 300, 0);

  // Finally, draw a transparent version without coloured tint
  tint(255, 120);
  image(img, 400, 0);
}

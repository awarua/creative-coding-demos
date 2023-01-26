let img;

function preload(){
  img = loadImage("https://picsum.photos/300/200");
}

function setup(){
  createCanvas(740, 200);
  cursor(CROSS);
  noStroke();
}

function draw(){
  // Get the colour at the current mouse position
  // And fill the background with this.
  let c = img.get(mouseX, mouseY);
  background(c);

  // Draw the image on the left half of the canvas.
  image(img, 0, 0);
}
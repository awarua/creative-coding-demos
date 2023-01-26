let img;

function preload(){
  img = loadImage("https://picsum.photos/300/200");
}

function setup(){
  createCanvas(740, 200);
  cursor(CROSS);
  // Text formatting omitted.
  noStroke();
}

function draw(){
  // Before doing anything, clear the background
  background(0);

  // Get the colour at the current mouse position
  // And fill the background with this.
  let c = img.get(mouseX, mouseY);
  background(c);

  // Draw the image on the left half of the canvas.
  image(img, 0, 0);

  // Get the rgb and hsb values
  let re = red(c);
  let gr = green(c);
  let bl = blue(c);
  let hu = hue(c);
  let sa = saturation(c);
  let br  = brightness(c);

  // Code to display rgb and hsb values omitted
}
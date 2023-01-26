let img;

function preload(){
  img = loadImage("https://picsum.photos/300/200");
}

function setup(){
  createCanvas(740, 200);
  cursor(CROSS);
  textSize(17);
  textFont('monospace');
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

  // Get the red, green, blue values and overall
  // brightness of the pixel colour
  let re = red(c);
  let gr = green(c);
  let bl = blue(c);
  let hu = hue(c);
  let sa = saturation(c);
  let br = brightness(c);

  fill(0);
  // In case the colour is dark, make text lighter.
  if (br < 50){
    fill(255);
  }

  // Display info about the colour parts
  text('re:' + re, 306, 30);
  text('gr:' + gr, 306, 60);
  text('bl:' + bl, 306, 90);

  // Round off the decimals for hsb parts
  text('hu:' + floor(hu), 306, 120);
  text('sa:' + floor(sa), 306, 150);
  text('br:' + floor(br), 306, 180);

  // Additionally, draw a bar chart for each part
  push();
  fill(127);
  rect(371,  15, 255, 20);
  rect(371,  45, 255, 20);
  rect(371,  75, 255, 20);
  rect(371, 105, 360, 20);
  rect(371, 135, 100, 20);
  rect(371, 165, 100, 20);
  pop();

  rect(371,  15, re, 20);
  rect(371,  45, bl, 20);
  rect(371,  75, gr, 20);
  rect(371, 105, hu, 20);
  rect(371, 135, sa, 20);
  rect(371, 165, br, 20);
  
}
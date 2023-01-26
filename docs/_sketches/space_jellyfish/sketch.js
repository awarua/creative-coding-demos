// load and display an image
let jellyFish;
let stars;

function preload(){
  // load the image into the variable
  jellyFish = loadImage("data/jelly.jpg");
  stars = loadImage("data/stars.jpg");
}

function setup() {
  createCanvas(740, 400);
}

function draw() {
  image(jellyFish, 0, 0, width, height);
  tint(255, 127);
  image(stars, 0, 0, width, height);
}
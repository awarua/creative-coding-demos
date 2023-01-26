// Don't quote me
// 
// Example sketch for the 'Don't quote me' activity.
// Displays a quote from Lady Ada Lovelace
//
// Jared Donovan 2021

// Text of quote we want to show
let quote = "If you can't give me poetry,\ncan't you give me poetical science?";
let attribution = "– Lady Ada Lovelace";

// Size of margin around text
let mt = 30;
let ml = 50;

// Declare and load fonts and background image
let bg;
let quoteFont;
let attributionFont;

function preload(){
  bg = loadImage("data/celestograph.jpg");
  quoteFont = loadFont("data/Raleway-ExtraBold.ttf");
  attributionFont = loadFont("data/Raleway-Light.ttf");
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  // Draw the image to the background so it covers
  coverBg(bg);
  
  fill(255);
  textFont(quoteFont);
  textAlign(LEFT, CENTER);
  textSize(48);
  text(quote, ml, mt, width - 2 * ml, height - 2 * mt);

  textFont(attributionFont);
  textAlign(RIGHT, BOTTOM);
  textSize(24);
  text(attribution, ml, mt, width - 2 * ml, height - 2 * mt);
}

// Function to draw an image so it 'covers' background
// Equivalent to CSS background-cover: cover;
function coverBg(img){
  // Figure out the width ratio
  let wr = width / img.width;

  // Figure out the resized height
  let rh = img.height * wr;

  // If the resized height can cover height, then go with this
  if (rh > height){
    // Figure out the vertical overlap
    let vo = rh - height;

    image(img, 0, -vo / 2, width, rh);
  } else {
    // Otherwise, resize to the height
    // First figure out the height ratio
    let hr = height / img.height;

    // figure out the resized width
    let rw = img.width * hr;

    // Figure out the horizontal overlap
    let ho = rw - width;

    // Draw the image
    image(img, -ho / 2, 0, rw, height);
  }
}


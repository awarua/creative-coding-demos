// Loads and plays back a video

let vid;

function preload(){
  // Create the video element and pass the name of the function to call when
  // it is finished loading.
  vid = createVideo("data/launch2.mp4", vidLoad);
  // vid.attribute("muted");
  // vid.attribute("controls");
}

function setup(){
  // Create a canvas the same size as the video file
  createCanvas(560, 406);
  noStroke();
}

function draw(){
  background(0);

  // If the mouse button is pressed, draw the original video. Otherwise, draw 
  // the mosaic effect
  if (mouseIsPressed){
    image(vid.get(0, 0, width, height), 0, 0);    
  } else {
    // Loop over the image and create a pixellated version 
    // Use the 'loadPixels' and 'updatePixels' functions to speed up
    // processing
    vid.loadPixels()

    // Because we use 'loadPixels()' the cell size can be smaller.
    let cellSize = 4;
    let cols = round(width / cellSize);
    let rows = round(height / cellSize);

    for (let i = 0; i < cols; i += 1){
      for (let j = 0; j < rows; j += 1){
        // Figure out the x, y position, remember that we will sample from
        // the center point of the cell. Also, make it a whole number.
        let x = round(i * cellSize + cellSize / 2);
        let y = round(j * cellSize + cellSize / 2);

        // Figure out the index of the pixel we want.
        let idx = 4 * (x + y * width);

        // Get colour for each point
        let r = vid.pixels[idx + 0];
        let g = vid.pixels[idx + 1];
        let b = vid.pixels[idx + 2];

        // Set the fill and draw a circle
        fill(r, g, b);
        circle(x, y, cellSize);
      }
    }
  }
}

// When this function is called, we will mute the video and set it looping.
function vidLoad(){
  vid.volume(0);
  vid.loop();
  vid.hide();
}
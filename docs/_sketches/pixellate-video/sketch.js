// Loads and plays back a video with a mosaic effect

// Variable to hold a reference to the video element.
let vid;

function setup(){
  // Create a canvas the same size as the video file
  // NOTE: We need to know these numbers before the video loads.
  createCanvas(560, 406);

  // Create the video element. And attach the function
  // to call when the video is ready.
  vid = createVideo("data/launch2.mp4", vidLoad);

  noStroke();
}

function draw(){
  background(0);

  // If the space key is pressed, draw the original video. 
  if (keyIsPressed && key == " "){
    image(vid.get(0, 0, width, height), 0, 0);    
  } else {
    // Otherwise, loop over the video frame
    // and create a pixellated version 
    for (let x = 0; x < 560; x += 40){
      for (let y = 0; y < 406; y += 40){
        // Get color for each point and set the fill.
        let c = vid.get(x + 20, y + 20);
        fill(c);
        // Draw a circle for this point of the mosaic.
        circle(x + 20, y + 20, 40);
      }
    }
  }
}

// When this function is called,
// mute the video, set it looping and hide it.
function vidLoad(){
  vid.volume(0);
  vid.loop();
  vid.hide();
}

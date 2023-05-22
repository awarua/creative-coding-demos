// Loads and plays back a video

// Variable to reference the HTML video element.
let vid;

function setup(){
  // We will use a browser 'video' element to 
  // play the video back so we don't need canvas.
  noCanvas();

  // Create the video element to play the video.
  // 'vidLoad' is the function to call when it's ready.
  vid = createVideo("data/launch2.mp4", vidLoad);
}

// When this function is called, it will mute the video
// and set it looping.
function vidLoad(){
  vid.volume(0);
  vid.loop();
}

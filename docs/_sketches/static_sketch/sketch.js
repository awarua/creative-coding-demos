// Draw a single circle and then nothing more
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(220);
  circle(370, 100, 100);
}

// Because we don't include the draw function, the
// sketch will not update after the initial setup.
// But because we included some drawing functions inside
// setup, it still produces a visual output.

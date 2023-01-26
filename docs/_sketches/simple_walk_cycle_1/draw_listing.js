function draw() {
  // Clear the background each time.
  background(255);

  // Get the current frame and display on the canvas
  // The 'counter' variable is used as the index on the array
  let frame = frames[counter];
  image(frame, 0, 0);

  // Increment the current frame counter. If it goes past
  // the end of the array, then reset it to zero
  currentFrame += 1;
  if(currentFrame >= frames.length) {
    currentFrame = 0;
  }
}
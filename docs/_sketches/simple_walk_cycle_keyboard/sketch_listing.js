  // Only increment the counter if the spacebar is pressed
  if (keyIsPressed && key == " "){
    // Increment the current frame counter. If it goes past
    // the end of the array, then reset it to zero
    counter += 0.1;
    if(counter >= frames.length) {
      counter = 0;
    }
  }

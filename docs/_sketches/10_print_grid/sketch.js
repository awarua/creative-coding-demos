function setup(){
  createCanvas(400, 400);
  stroke(255);
  strokeWeight(4);
}

function draw(){
  background(0, 0, 255);

  for (let x = 0; x < width; x += 20){
    for (let y = 0; y < height; y += 20){
      if (random(100) < 50){
        line(x, y, x + 20, y + 20);
      } else {
        line(x, y + 20, x + 20, y);
      }
    }
  }

  // Only draw once, then stop.
  noLoop();
}

// When the user presses any key, loop again
function keyPressed(){
  loop();
}

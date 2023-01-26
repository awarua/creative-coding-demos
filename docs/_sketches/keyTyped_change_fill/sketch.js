let fillColor;

function setup(){
  createCanvas(400, 400);

  // Set the fill colour to red by default
  fillColor = color(255, 0, 0);
}

function draw(){
  background(220);

  fill(fillColor);
  square(width / 2 - 100, 100, 200);
}

function keyTyped(){
  if (key == 'r'){
    fillColor = color(255, 0, 0);
  } else if (key == 'g'){
    fillColor = color(0, 255, 0);
  } else if (key == 'b'){
    fillColor = color(0, 0, 255);
  }
}
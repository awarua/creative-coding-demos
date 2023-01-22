// World's simplest drawing program.
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(220);

  fill(200);
  // textFont('sans serif');
  textAlign(CENTER, CENTER);
  textSize(64);
  textStyle(BOLD);
  let l = (width - min(width, 400)) / 2;
  text("Click and drag to draw", l, 0, min(width, 400), height);
  fill(255);
}

// Draw a circle whenever the mouse button is down.
function draw(){
  if(mouseIsPressed){
    ellipse(mouseX, mouseY, 20, 20);
  }
}

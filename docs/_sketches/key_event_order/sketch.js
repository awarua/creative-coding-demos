let txt = "";

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(220);
  fill(0);

  text(txt, 20, 20, width - 40, height - 40);
}

function keyPressed(){
  txt += `\nkeyPressed: ${key}`;
}

function keyReleased(){
  txt += `\nkeyReleased: ${key}`;
}

function keyTyped(){
  txt += `\nkeyTyped: ${key}`;
}
let sprayAmt = 20;
let dropDiameter = 5;
let preheat;

function preload(){
  preheat = loadImage('preheat.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(220);
  noStroke();
  colorMode(HSB);
  fill(270, 50, 100, 0.3);

  // Load the 'preheat' image to the canvas
  imageMode(CENTER, CENTER);
  image(preheat, width / 2, height / 2);
}

function draw(){
  if (mouseIsPressed){
    for (let i = 0; i < 10; i++){
      randomDrop(mouseX, mouseY);
    }
  }
}

function randomDrop(mx, my){
  let x = mx + random(-sprayAmt, sprayAmt);
  let y = my + random(-sprayAmt, sprayAmt);
  circle(x, y, dropDiameter);  
}

// function keyPressed(){
//   if (key == 's'){
//     save('download.png');
//   }
// }
let data = {
  lines: [[]]
};

// let data2;
let dIdx = 0;
let lIdx = 0;
let activeL;

function preload(){
  data = loadJSON('data/data.json');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(50);
  stroke(255, 230);
}

function draw(){
  if (dIdx < data.lines[0].length){
    let s = data.lines[0][dIdx];
    drawSegment(s);
    dIdx += 1;
  }

  if (mouseIsPressed){
    let s = {
      px: pmouseX,
      py: pmouseY,
      mx: mouseX,
      my: mouseY
    };

    data.lines[activeL].push(s);
    drawSegment(s);
  }
}

function drawSegment(s){
  // console.log('ds', s);
  let d = dist(s.px, s.py, s.mx, s.my);
  let sw = map(d, 0, 100, 2, 50);
  strokeWeight(sw);
  line(s.px, s.py, s.mx, s.my);  
}

function mouseDown(){
  
}

function keyPressed(){
  if (key == 's'){
    saveJSON(data, 'data.json');
  } else if (key == 'c'){
    background(50);
    data.lines = [[]];
  }
}
let mic;
let frames = [];
let noise = 0;
let accel = 0.0001;
let frameNum = 0;
let eyePosns = [
  [[454, 85], [547, 73]],
  [[454, 119], [547, 106]],
  [[450, 145], [530, 134]],
  [[451, 167], [539, 141]],
  [[462, 237], [512, 232]],
  [[-10000, -10000], [-10000, -10000]],
];

let hasBegun = false;

function preload(){
  for (let i = 0; i < 6; i++){
    frames[i] = loadImage('data/' + (i + 1) + '.png');
  }
}

function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
  frameRate(50);
  cursor(CROSS);
  textSize(40);
  textAlign(CENTER, CENTER);
  colorMode(HSB);

  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  background(211, 50, 100);
  fill(104, 51, 100);
  noStroke();
  let rectTop = (height / 2 + (frames[0].height / 2)) - 105;
  let rectHeight = height - rectTop;
  console.log(rectTop, rectHeight);

  rect(0, rectTop, width, rectHeight);

  if (!hasBegun){
    fill(0);
    drawFrame(5);
    fill(100, 0.7);
    rect(width / 2 - 250, height / 2 - 50, 500, 100, 20);
    fill(0);
    text("Click to start", width / 2, height / 2);
    noise = 6;
    accel = 0.002;
    return;
  }

  micLevel = mic.getLevel();
  let newNoise = map(micLevel, 0, 1, 0, 6);

  if (newNoise < noise){
    noise = noise - (noise - newNoise) * accel;
    accel *= 1.01;
  } else {
    noise = newNoise;
    accel = 0.0001;
  }

  // console.log('n', noise, 'a', accel);

  frameNum = int(noise);

  drawFrame(frameNum);
  drawEyes(frameNum);

  if (frameCount % 25 == 0){
    frameNum = (frameNum + 1) % 6;
  }
}

function drawFrame(idx){
  push();
  let frame = frames[idx];
  translate(width / 2 - frame.width / 2, height / 2 - frame.height / 2);
  image(frames[idx], 0, 0);
  pop();
}

function drawEyes(idx){
  push();
  fill(0);
  noStroke();
  let l = eyePosns[idx][0];
  let r = eyePosns[idx][1];
  let tX = width / 2 - (frames[0].width / 2);
  let tY = height / 2 - (frames[0].height / 2);

  let mX = mouseX - tX;
  let mY = mouseY - tY;

  let lookL = createVector(mX - l[0], mY - l[1]);
  lookL.setMag(10);
  let lookR = createVector(mX - r[0], mY - r[1]);
  lookR.setMag(10);

  translate(tX, tY);

  circle(l[0] + lookL.x, l[1] + lookL.y, 5);
  circle(r[0] + lookR.x, r[1] + lookR.y, 5);
  pop();
}

function mouseClicked(){
  hasBegun = true;
  // console.log(mouseX, mouseY);
}
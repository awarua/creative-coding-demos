/**
 * Sources:
 * 
 * https://publicdomainreview.org/collection/w-w-denslow-illustrations-wonderful-wizard-of-oz-1900
 * https://publicdomainreview.org/collection/karl-blossfeldt-s-urformen-der-kunst-1928
 * https://publicdomainreview.org/collection/physical-training-for-business-men-1917
 * https://publicdomainreview.org/collection/curiosities-from-the-museum-of-giovanni-carafa-1778
 * https://publicdomainreview.org/collection/chladni-figures-1787
 * https://publicdomainreview.org/collection/marcus-selmer-s-photographs-of-19th-century-norwegians
 * https://publicdomainreview.org/collection/skating-with-bror-myer-1921
 * https://publicdomainreview.org/collection/the-art-of-ornamental-orange-peeling-1910
 * https://publicdomainreview.org/collection/beards-of-time
 * https://publicdomainreview.org/collection/plantscapes-from-kerner-von-marilaun-s-pflanzenleben-1887
 * https://publicdomainreview.org/collection/the-british-library-s-mechanical-curator-million
 * https://www.flickr.com/photos/britishlibrary
 * https://publicdomainreview.org/collection/the-world-turned-upside-down-18th-century
 * 
 * https://github.com/stc/face-tracking-p5js
 * 
 */

let doLoop = true;
let lastLoop = 0;

let w = 400;
let h = 600;
let f1, f2, f3;

let hairImgs = [];
let numHairs = 5;
let hairIdx = 0;

let beardImgs = [];
let numBeards = 5;
let beardIdx = 0;

let noseImgs = [];
let numNoses = 6;
let noseIdx = 0;

let numEyes = 5;
let eyeImgs = [];
let eyeIdx = 0;

let numMouths = 2;
let mouthImgs = [];
let mouthIdx = 0;

function preload(){

  for (let i = 0; i < numHairs; i++){
    console.log(i);
    hairImgs[i] = loadImage(`data/pieces/hairs/${i}.png`);
  }

  for (let i = 0; i < numBeards; i++){
    beardImgs[i] = loadImage(`data/pieces/beards/${i}.png`);
  }

  for (let i = 0; i < numNoses; i++){
    noseImgs[i] = loadImage(`data/pieces/noses/${i}.png`);
  }

  for (let i = 0; i < numEyes; i++){
    eyeImgs[i] = loadImage(`data/pieces/eyes/${i}.png`);
  }

  for (let i = 0; i < numMouths; i++){
    mouthImgs[i] = loadImage(`data/pieces/mouths/${i}.png`);
  }
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  colorMode(HSB);

  f1 = new Face(width / 2, height / 2, 0.8 * w * (height / w), 0.8 * height);
  //f2 = new Face(width / 2, height / 2, w, h);
  //f3 = new Face(width / 2 + w, height / 2, w, h);

  // background(random(360), 74, 76);
  // f1.pickPieces();
  // f1.show();
}

function draw(){

  if (doLoop && (millis() > lastLoop + 1000)){
    background(random(360), 74, 76);
    f1.pickPieces();
    f1.show();
    lastLoop = millis();
  } else if (!doLoop){
    background(random(360), 74, 76);
    f1.pickPieces();
    f1.show();
  }

  // f2.show();
  // f3.show();

  //filter(GRAY);

  if (!doLoop){
    //noLoop();
  }
}

function keyPressed(){
  // f1.pickPieces();
  // f2.pickPieces();
  // f3.pickPieces();

  if (key == 'l'){
    //doLoop = !doLoop;
    lastLoop = millis() - 3000;
  }

  //loop();
}

function mousePressed(){
  //loop();  
}
/**
 * For loop animation example, by Dimity Miller
 */

let forloop;
let x = -500/3;
let y = -500/3;
let w = 1000;
let h = 500;
let count = 0;
let doDraw = false;
let xInit = false;
let yInit = false;
let finish = false;
r1 = [569, 58, 102, 33];
r2 = [682, 58, 135, 33];
r3 = [824, 58, 143, 33];
r4 = [591, 104, 102, 31];
r5 = [704, 104, 120, 31];
r6 = [835, 102, 136, 31];
r7 = [551, 140, 260, 46];
r =  [0, 0, 0, 0];

function preload(){
  forloop = loadImage("data/forloopFinal2.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255);
  scale(0.74, 0.74);
  line(w/2, 0, w/2, h);
}

function draw(){
  scale(0.74, 0.74);
  if (doDraw) {
    fill(0);
    ellipse(x, y, 125, 125);
  }

  fill(255);
  rect(w/2, 0, w/2, h);
  
  image(forloop, 1+w/2, 36, w/2, h/2);

  fill(235);
  rect(788, 325, 957-788, 388-325);

  fill(0);
  textSize(15);
  text("Conditional Evaluator", 788, 315);
  textSize(25);

  if (x >= 0) {
    text("x = " + int(x), w/2+30, 130+h/2);
  }
  if (y >= 0) {
    text("y = " + int(y), w/2+30, 100+h/2);
  }
  
  text("width = " + w/2, w/2+30, 180+h/2);
  text("height = " + h, w/2+30, 210+h/2);

  let conditional = "";
  if ((r == r2)&&(y != -125)) {
    text(int(y) + " <= " + h, 50+3*w/4, 100+h/2);
    if (y <= h) {
      fill(0, 255, 0);
      conditional = "TRUE";
    } else {
      fill(255, 0, 0);
      conditional = "FALSE";
    }

    text(conditional, 70+3*w/4, 130+h/2);
    
  }
  if (r == r5) {
    text(int(x) + " <= " + w/2, 50+3*w/4, 100+h/2);
    if (x <= w/2) {
      fill(0, 255, 0);
      conditional = "TRUE";
    } else {
      fill(255, 0, 0);
      conditional = "FALSE";
    }
    text(conditional, 70+3*w/4, 130+h/2);
  }


  fill(255, 255, 0, 50);
  rect(r[0], r[1], r[2], r[3]);
}

function keyPressed() {
  if (finish){
    y = -125;
    r[0] = 0;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
  }
  //saveFrame("####.png");
  if (!yInit) {
    if (count == 0) {
      r = r1;
      y = 0;
    }
    if (count == 1) {
      r = r2;
      count = -1;
      yInit = true;
      if (y > h) {
        finish = true;
      }
    }
  } 
  else if (!xInit) {
    if (count == 0) {
      r = r4;
      x = 0;
    }
    if (count == 1) {
      r = r5;
      count = -1;
      xInit = true;
    }
  } 
  else {
    if (count == 0) {
      doDraw = true;
      r = r7;
    }
    else {
      doDraw = false;
      if (count == 1) {
        if (x > w/2) {
          x = -125;
          xInit = false;
          yInit = false;
          y += h/2;
          r = r3;
          count = 0;
        } 
        else {
          r = r6;
          x+=w/4;
        }
      }
      if (count == 2) {
        r = r5;
        count = -1;
        if (x > w/2) {
          count = 0;
        }
      }
    }
  }
  if (!finish) {
    count += 1;
  }
}
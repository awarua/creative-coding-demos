let hue2 = 180;
let sat = 100;
let bri = 100;
let m, w;
let mouseAngle = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  textAlign(CENTER, CENTER);
  textFont("'Helvetica', sans-serif");
}

function draw(){
  m = 15;
  w = (width - m * 4) / 3;

  background(map(220, 0, 255, 0, 100));

  drawHue(m, m, w);
  drawSaturation(2 * m + w, m, w);
  drawBrightness(3 * m + 2 * w, m, w);

  // noLoop();
}

function drawHue(x, y, w){

  push();
  noStroke();
  translate(x, y);

  textAlign(CENTER, CENTER);
  text("HUE", 0, w, w, 40);
  textSize(36);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text(floor(hue2), 0, w - 30, w, 40);


  let vi1 = createVector(w / 4, 0);
  let vo1 = createVector(w / 2, 0);
  let vi2 = createVector(w / 4, 0);
  let vo2 = createVector(w / 2, 0);



  translate(w / 2, w / 2);

  push();
  rotate(radians(120));
  let a1 = 300 / 36;
  for (let i = 0; i <= 350; i += 10){
    let h = i + 5;
    let a = radians(map(i + a1, a1, 360, 0, 300));
    // console.log(a);
    vi2.rotate(a - vi2.heading());
    vo2.rotate(a - vo2.heading());
    fill(h, 100, 100);
    quad(vi1.x, vi1.y, vi2.x, vi2.y, vo2.x, vo2.y, vo1.x, vo1.y);

    vi1.rotate(a - vi1.heading());
    vo1.rotate(a - vo1.heading());

    //line(w / 4, 0, w / 2, 0);
  }

  rotate(radians(map(hue2, 0, 360, 0, 300)));
  fill(100);
  stroke(0);
  strokeWeight(2);
  line(0, 0, 3 * w / 8, 0);
  circle(3 * w / 8, 0, 20);
  pop();

  // rotate(mouseAngle);
  // stroke(0, 50);
  // strokeWeight(5);
  // line(0, 0, w, 0);

  pop();
}

function drawSaturation(x, y, w){
  // square(x, y, w);

  push();
  noStroke();
  translate(x, y);

  text("SATURATION", 0, w, w, 40);
  textSize(36);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text(floor(sat), 0, w - 30, w, 40);


  for (let i = 0; i < 100; i += 10){
    let x1 = map(i, 0, 100, m, w - m);
    let y1 = y + w / 8;
    let w1 = (w - 2 * m) / 10;
    let s = i + 5;
    fill(hue2, s, 100);
    stroke(hue2, s, 100);
    rect(x1, y1, w1, w / 2);
  }

  stroke(0);
  strokeWeight(2);
  fill(100);
  let xSat = map(sat, 0, 100, m, w - m);

  line(xSat, (y + w / 8) - m, xSat, (y + w / 8 + w / 2 + m));
  circle(xSat, y + w / 8 + w / 4, 20);
  pop();
}

function drawBrightness(x, y, w){ 
  // square(x, y, w);  
  push();
  noStroke();
  translate(x, y);

  text("BRIGHTNESS", 0, w, w, 40);
  textSize(36);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text(floor(bri), 0, w - 30, w, 40);

  for (let i = 0; i < 100; i += 10){
    let x1 = map(i, 0, 100, m, w - m);
    let y1 = y + w / 8;
    let w1 = (w - 2 * m) / 10;
    let b = i + 5;
    fill(hue2, sat, b);
    stroke(hue2, sat, b);
    rect(x1, y1, w1, w / 2);
  }

  stroke(0);
  strokeWeight(2);
  fill(100);
  let xBri = map(bri, 0, 100, m, w - m);

  line(xBri, (y + w / 8) - m, xBri, (y + w / 8 + w / 2 + m));
  circle(xBri, y + w / 8 + w / 4, 20);
  pop();
}

function mousePressed(){
  if (mouseX < width / 3){
    calcHue(mouseX, mouseY);
  } else if (mouseX < 2 * width / 3){
    calcSat(mouseX, mouseY);
  } else {
    calcBri(mouseX, mouseY);
  }
}

function mouseDragged(){
  if (mouseX < width / 3){
    calcHue(mouseX, mouseY);
  } else if (mouseX < 2 * width / 3){
    calcSat(mouseX, mouseY);
  } else {
    calcBri(mouseX, mouseY);
  }
}

function calcHue(mx, my){
  let cx = m + w / 2;
  let cy = m + w / 2;
  let d = dist(cx, cy, mouseX, mouseY);

  if (d > w / 4 && d < w / 2){

    //console.log('d', d);

    let a = atan2(my - cy, mx - cx);
    a = ((a + TWO_PI) % TWO_PI);

    if (a < radians(60)){
      hue2 = map(a, 0, radians(60), (360 / 300) * 240, 360);
    } else if (a < radians(90)){
      hue2 = 360;
    } else if (a < radians(120)){
      hue2 = 0;
    } else {
      hue2 = map(a, radians(120), radians(360), 0, (360 / 300) * 240);
    }
  }
}

function calcSat(mx, my){
  let t = m + w / 8;
  let l = 3 * m + w;
  let r = l + w - 2 * m;
  let b = t + w / 2;

  if (mx > l && mx < r && my > t && my < b){
    let s = mx - l;
    sat = map(s, 0, r - l, 0, 100);
    // console.log('sat', sat);
  }
}

function calcBri(mx, my){
  let t = m + w / 8;
  let l = 4 * m + 2 * w;
  let r = l + w - 2 * m;
  let b = t + w / 2;

  if (mx > l && mx < r && my > t && my < b){
    let b = mx - l;
    bri = map(b, 0, r - l, 0, 100);
    // console.log('bri', bri);
  }
}
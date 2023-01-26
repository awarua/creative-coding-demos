let grid;
let arrow;
let l = 40;
let t = 40;
let w = 300;
let h = 300;
let r = l + w;
let b = t + h;
let cols = 3;
let colW = w / cols;
let rows = 3;
let rowH = h / rows;
let mx = l + 250; // w / 2;
let my = t + 250; // h / 2;
let lastMouseMoveWasIn = false;

function preload(){
  grid = loadImage('data/mouse-grid-blank.png');
  arrow = loadImage('data/arrow.png');
}

function setup(){
  createCanvas(grid.width, grid.height);
  textFont('monospace');
  arrow.resize(0, 40);
  noCursor();

}

function draw(){
  background(220);
  noStroke();
  fill(255);
  rect(l, t, w, h);
  image(grid, 0, 0);

  // Detect which row / col mouse is in
  if (mx > l && mx < r && my > t && my < b){
    col = floor((mx - l) / colW);
    row = floor((my - t) / rowH);

    push();
    translate(l, t);

    fill(0, 200, 255, 70);
    rect(col * colW, 0, colW, h);
    fill(255, 0, 200, 70);
    rect(0, row * rowH, w, rowH);

    // Write the label
    fill(0);
    textAlign(LEFT, TOP);
    text(`row:${row}\ncol:${col}`, col * colW + 5, row * rowH + 10, colW - 10, rowH - 20);

    // Write the logic 
    translate(w + 20, 0);

    let mmx = mx - l;
    let mmy = my - t;

    drawMouseCalc(mmy, 'mouseY', 'row', 50, color(230, 0, 180));
    drawMouseCalc(mmx, 'mouseX', 'col', 150, color(0, 180, 230));

    pop();

    image(arrow, mx, my);
  }
}

function drawMouseCalc(mVar, mLabel, rcLabel, top, lblCol){
  let tw = 0;
  push();

  translate(0, top);
  textSize(18);
  textAlign(LEFT);
  fill(0);
  text(`${mLabel}: `, 0, 0);
  tw = textWidth(`${mLabel} < `);
  text(`${mVar}`, tw, 0);
  // text(`${mLabel} / 100: ${nf(mVar / 100, 0, 2)}`, 0, 20);
  result = floor(mVar / 100);
  text(`floor(${mLabel} / 100): ${result}`, 0, 20);
  fill(lblCol);
  textStyle(BOLD);
  text(`${rcLabel}: ${result}`, 0, 50);

  pop();
}


function drawMouseCalcOld(mVar, mLabel, rcLabel, top){
  let tw = 0;
  
  push();
  translate(0, top);
  textSize(18);
  textAlign(LEFT);

  text(`${mLabel}: `, 0, 0);
  tw = textWidth(`${mLabel} < `);
  text(`${mVar}`, tw, 0);

  if(! drawTest(mVar, mLabel, rcLabel, 0, 20, 100)){
    if (! drawTest(mVar, mLabel, rcLabel, 1, 40, 200)){
      drawTest(mVar, mLabel, rcLabel, 2, 60, 300);
    }
  }

  pop();
}

function drawTest(mVar, mLabel, rcLabel, rcNum, top, testVal){
  let lw = 0;
  let m = 10;
  let trueCol = color(0, 150, 0);
  let falseCol = color(200, 0, 0);

  push();
  textAlign(RIGHT);
  lw = textWidth(`${mLabel}`);
  text(mVar, lw, top);

  textAlign(LEFT);
  fill(0);
  text(` < ${testVal}?`, lw, top);
  let tw = textWidth(`${mLabel} < ${testVal}?`) + m;

  let passedTest = mVar < testVal;
  if(passedTest){
    fill(trueCol);
    text(`true ==> ${rcLabel} is ${rcNum}`, tw, top);
    pop();
    return true;
  } else {
    fill(falseCol);
    text("false", tw, top);  
  }
    
  pop();
  return passedTest;
}

function mouseMoved(){
  if (mouseX > l && mouseX < r && mouseY > t && mouseY < b){  
    noCursor();
    mx = mouseX;
    my = mouseY;
    lastMouseMoveWasIn = true;
  } else {
    if (lastMouseMoveWasIn){
      mx = 0;
      my = 0;
    }
    lastMouseMoveWasIn = false;
    cursor(CROSS);
  }
}

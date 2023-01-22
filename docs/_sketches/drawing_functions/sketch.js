

// Left and top padding
let p = 1;
// Margin
let m = 10;
// Col width
let cw = (738 - 4 * m) / 3;
// Row height
let rh = (400 - 3 * m) / 2;

let shapes, pt, ln, el, sq, re, tr;

// Stroke weight
let sw = 1;

// Currently dragging shape
let activeShape = false;

function setup(){

  pt = new Pt(p + m, p + m, cw, rh);
  ln = new Ln(pt.l + cw + m, pt.t, cw, rh);
  el = new El(ln.l + cw + m, pt.t, cw, rh);
  sq = new Sq(pt.l, pt.t + rh + m, cw, rh);
  re = new Re(ln.l, sq.t, cw, rh);
  tr = new Tr(el.l, sq.t, cw, rh);

  shapes = [pt, ln, el, sq, re, tr];

  createCanvas(740, 400);
  strokeWeight(12);
  textAlign(CENTER, TOP);
  textFont('monospace');
  textSize(11);
}

function draw(){
  background(220);

  for(let s of shapes){
    s.show();
  }

  // noLoop();
}

function mousePressed(){
  for (let s of shapes){
    if (s.mousePressed()){
      activeShape = s;
      break;
    }
  }
}

function mouseDragged(){
  if (activeShape){
    activeShape.mouseDragged();
  }
}

function mouseReleased(){
  activeShape.isDragging = false;
  activeShape = false;
}


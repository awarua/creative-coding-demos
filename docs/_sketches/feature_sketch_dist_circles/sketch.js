let diagDist;
let mx;
let my;
let xFreq = 100;
let xExtent = 0.25;
let yFreq = 50;
let yExtent = 0.25;
let r;
let cnv;
let mouseDidMove = 0;
let tx, ty;
let ch = '';
let drawCircles = true;

function setup(){
  // cnv = createCanvas(400, 400);
  
  createCanvas(windowWidth, windowHeight);
  noCursor();
  // cnv.mouseOver(() => {
  //   console.log('mouse over canvas' + frameCount);
  // });

  r = PI;

  mx = width / 2;
  my = height / 2;

  tx = mx;
  ty = my;

  diagDist = dist(0, 0, width, height);
}

function draw(){
  background(50);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(255, 50);

  mx = width / 2 + map(sin(PI + frameCount / xFreq), 1, -1, -width * xExtent, width * xExtent);
  my = height / 2 + map(sin(frameCount / yFreq), 1, -1, -height * yExtent, height * yExtent);

  // if (mouseDidMove > 0){
  //   mx = mouseX;
  //   my = mouseY;
  // }

  mx = lerp(mx, mouseX, mouseDidMove);
  my = lerp(my, mouseY, mouseDidMove);

  let spacing = width / 20;

  let t = (height % spacing) / 2;

  for (let y = t; y < height; y += spacing){
   for (let x = spacing / 2; x < width; x += spacing){

    //let x = width / 2;
    //let y = height / 2;

      let di = dist(x, y, mx, my);
      let d = map(di, 0, diagDist / 2, HALF_PI, 3 * HALF_PI);
      d = constrain(d, HALF_PI, 3 * HALF_PI);
      // d = d * d;
      let d2 = map(sin(d), 1, -1, spacing * 1.1, spacing / 20);

      // console.log(d);
      // console.log(di);
      // console.log(diagDist);

      // noStroke();
      // fill(255);
      // text(floor(di), x, y - 24);
      // text(nf(d, 0, 2), x, y);
      // text(floor(d2), x, y + 24);
      
      //noFill();
      //stroke(255);
      fill(255);

      if (drawCircles){
        circle(x, y, d2);
      } else {
        textSize(d2 * 2);
        text(ch, x, y);
      }
    }
  }

  mouseDidMove = max(0, mouseDidMove - 0.001);
  // console.log(frameCount, 'mm', mouseDidMove);

  // fill(255);
  // noStroke();
  // rect(0, 0, 80, 40);
  // fill(255, 0, 0);
  // textSize(12);
  // text(nf(mouseDidMove, 0, 2), 0, 0, 80, 40);
}

function mouseMoved(){
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
    mouseDidMove = min(1, mouseDidMove + 0.02);
    // console.log('md', mouseX, mouseY);  
  }
}

// function keyPressed(){
//   if (key == ' '){
//     drawCircles = true;
//   } else {
//     drawCircles = false;
//     ch = key;
//   }
// }
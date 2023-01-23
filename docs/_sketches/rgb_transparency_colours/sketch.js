function setup(){
  createCanvas(windowWidth, windowHeight);
  textFont("'Menlo', monospace");
  textSize(10);
  textAlign(LEFT, CENTER);
}

function draw(){
  background(220);
  noStroke();
  fill(0);
  let stripH = (130 - 60) / 2;
  rect(0, 45, width, stripH);
  fill(255);
  rect(0, 45 + stripH, width, stripH);

  let h = 130;
  let mt = 15;
  let ml = mt; // (width % w) / (floor(width / w) + 1);
  let numSwatches = 5;
  let w = floor((width - mt * (numSwatches + 1)) / numSwatches);
  // let x = mt;
  // let y = mt;
  for (let [x,y] = [ml, mt]; x + w + ml <= width; x+= w + ml){
    noStroke();
    let r = 255;
    let g = 127;
    let b = 127;

    let a = floor(map(x, ml, width - ml - w, 0, 255));
    fill(r, g, b, a);
    //if (a == 0){
      stroke(r, g, b);
    //}
    rect(x, y, w, h);
    fill(0);
    noStroke();
    text(`fill(${r},${g},${b},${a})`, x, y + w, w, 30);
  }

  // console.log("swatch width: " + w);

  noLoop();
}
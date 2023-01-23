function setup(){
  createCanvas(windowWidth, windowHeight);
  textFont("'Menlo', monospace");
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
    let g = 127;
    let a = floor(map(x, ml, width - ml - w, 0, 255));
    fill(g, a);
    //if (a == 0){
      stroke(g);
    //}
    rect(x, y, w, h);
    fill(0);
    noStroke();
    text(`fill(${g}, ${a})`, x, y + w, w, 30);
  }

  // console.log("swatch width: " + w);

  noLoop();
}
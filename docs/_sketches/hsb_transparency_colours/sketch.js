function setup(){
  createCanvas(windowWidth, windowHeight);
  textFont("'Menlo', monospace");
  textAlign(LEFT, CENTER);
}

function draw(){
  colorMode(RGB);
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
    let hu = 0;
    let sa = 50;
    let br = 100;
    let a = map(x, ml, width - ml - w, 0, 1);
    colorMode(HSB);
    fill(hu, sa, br, a);
    // if (a == 0){
       stroke(hu, sa, br);
    //}
    rect(x, y, w, h);
    fill(0);
    noStroke();
    textSize(10);
    text(`fill(${hu},${sa},${br},${nf(a, 0, 1)})`, x, y + w, w, 30);
  }

  // console.log("swatch width: " + w);

  noLoop();
}
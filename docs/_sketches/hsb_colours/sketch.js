function setup(){
  createCanvas(windowWidth, windowHeight);
  textFont("'Menlo', monospace");
  textAlign(LEFT, CENTER);
}

function draw(){
  colorMode(RGB);
  background(220);
  noStroke();

  let h = 130;
  let mt = 15;
  let ml = mt; // (width % w) / (floor(width / w) + 1);
  let numSwatches = 5;
  let w = floor((width - mt * (numSwatches + 1)) / numSwatches);
  // let x = mt;
  // let y = mt;
  for (let [x,y] = [ml, mt]; x + w + ml <= width; x+= w + ml){
    noStroke();
    let hu = floor(map(x, ml, width - ml - w, 220, 300));
    let sa = floor(map(x, ml, width - ml - w, 40, 60));;
    let br = 100; // floor(map(x, ml, width - ml - w, 100, 50));
    // let a = floor(map(x, ml, width - ml - w, 0, 255));
    colorMode(HSB);
    fill(hu, sa, br);
    //if (a == 0){
    //   stroke(hu, sa, br);
    //}
    rect(x, y, w, h);
    fill(0);
    noStroke();
    text(`fill(${hu},${sa},${br})`, x, y + w, w, 30);
  }

  // console.log("swatch width: " + w);

  noLoop();
}
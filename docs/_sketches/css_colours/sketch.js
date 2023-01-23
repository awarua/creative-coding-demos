colours = [
  "#FF0000",
  "#E242AB",
  "#000",
  "Yellow",
  "Salmon"
];

function setup(){
  createCanvas(windowWidth, windowHeight);
  textFont("'Menlo', monospace");
  textAlign(LEFT, CENTER);
}

function draw(){
  background(220);
  noStroke();

  let h = 130;
  let mt = 15;
  let ml = mt; // (width % w) / (floor(width / w) + 1);
  let numSwatches = 5;
  let i = 0;
  let w = floor((width - mt * (numSwatches + 1)) / numSwatches);
  // let x = mt;
  // let y = mt;
  for (let [x,y] = [ml, mt]; x + w + ml <= width; x+= w + ml){
    // let g = floor(map(x, ml, width - ml - w, 0, 255));
    let css = colours[i];
    fill(css);
    rect(x, y, w, h);
    fill(0);
    text(`fill("${css}")`, x, y + w, w, 30);
    i++;
  }

  // console.log("swatch width: " + w);

  noLoop();
}
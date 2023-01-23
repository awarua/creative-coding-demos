let sel;
let sldR;
let sldG;
let sldB1;
let sldA1;
let sldH;
let sldS;
let sldB2;
let sldA2;
let mode = "RGB";
let m = 20;
let c;
let d = 0.85;

function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();

  sldR = createSlider(0, 255, 127);
  sldG = createSlider(0, 255, 127);
  sldB1 = createSlider(0, 255, 127);
  sldA1 = createSlider(0, 255, 127);

  sldH = createSlider(0, 360, 127);
  sldS = createSlider(0, 100, 50);
  sldB2 = createSlider(0, 100, 50);
  sldA2 = createSlider(0, 1, 0.5, 0.001);

  sldR.input(loop);
  sldG.input(loop);
  sldB1.input(loop);
  sldA1.input(loop);
  sldH.input(loop);
  sldS.input(loop);
  sldB2.input(loop);
  sldA2.input(loop);

  sel = createSelect();
  sel.position(m, m);
  sel.option('fill(g)');
  sel.option('fill(g, a)');
  sel.option('fill(cssString)');
  sel.option('fill(r, g, b)');
  sel.option('fill(r, g, b, a)');
  sel.option('fill(h, s, b)');
  sel.option('fill(h, s, b, a)');
  sel.selected('fill(r, g, b)');
  sel.changed(argPatternSelected);

  colorMode(HSB);
  c = color(random(360), 50, 80);

  mode = "RGB";
  patternRGB();
}

function draw(){
  colorMode(RGB);
  background(220);
  fill(0);
  rect(width / 2, 0, width / 2, height);

  if (mode === "G") {
    drawG();
  } else if (mode === "GA"){
    drawGA();
  } else if (mode === "CSS"){
    drawCSS();
  } else if (mode === "RGB"){
    drawRGB();
  } else if (mode === "RGBA"){
    drawRGBA();
  } else if (mode === "HSB"){
    drawHSB();
  } else if (mode === "HSBA"){
    drawHSBA();
  }

  noLoop();
}

function drawFillString(str, c){
  // console.log('drawFillString()', str, c);
  // console.log('brightness(c)', brightness(c));

  push();
  colorMode(RGB);

  textAlign(CENTER, CENTER);
  textSize(24);

  let w = textWidth(str) + m;
  fill(red(c), green(c), blue(c));
  rect(width / 2 - w / 2, height / 2 - 12 - m * 0.5, w, 24 + m, 6, 6, 6, 6);

  fill(0);
  if (brightness(c) < 50){
    fill(255);
  }
  noStroke();

  text(str, 0, 0, width, height);
  pop();
}

function drawG(){
  let g = sldG.value();

  fill(0);
  text("G:", m, windowHeight - m * 4.3);

  c = color(g);
  fill(c);
  circle(width / 2, height / 2, min(width, height) * d); 
  drawFillString(`fill(${g})`, c);
}

function drawGA(){
  let g = sldG.value();
  let a = sldA1.value();

  fill(0);
  text("G:", m, windowHeight - m * 4.3);
  text("A:", m, windowHeight - m * 3.3);

  c = color(g, a);
  fill(c);
  circle(width / 2, height / 2, min(width, height) * d); 
  drawFillString(`fill(${g}, ${a})`, c);
}

function drawCSS(){
  //let css = "#FF0000";
  let css = "rgba(255, 0, 0, 0.5)";

  fill(0);
  text("CSS: " + css, m, windowHeight - m * 4.3);

  c = color(css);
  fill(c);
  circle(width / 2, height / 2, min(width, height) * d); 
  drawFillString(`fill("${css}")`, c);
}

function drawRGB(){
  let r = sldR.value();
  let g = sldG.value();
  let b = sldB1.value();

  fill(0);
  text("R:", m, windowHeight - m * 4.3);
  text("G:", m, windowHeight - m * 3.3);
  text("B:", m, windowHeight - m * 2.3);

  c = color(r, g, b);
  fill(c);
  circle(width / 2, height / 2, min(width, height) * d); 
  drawFillString(`fill(${r}, ${g}, ${b})`, c);
}

function drawRGBA(){
  let r = sldR.value();
  let g = sldG.value();
  let b = sldB1.value();
  let a = sldA1.value();

  fill(0);
  text("R:", m, windowHeight - m * 4.3);
  text("G:", m, windowHeight - m * 3.3);
  text("B:", m, windowHeight - m * 2.3);
  text("A:", m, windowHeight - m * 1.3);

  c = color(r, g, b, a);
  fill(c);
  circle(width / 2, height / 2, min(width, height) * d); 
  drawFillString(`fill(${r}, ${g}, ${b}, ${a})`, c);
}

function drawHSB(){
  let h = sldH.value();
  let s = sldS.value();
  let b = sldB2.value();

  fill(0);
  text("H:", m, windowHeight - m * 4.3);
  text("S:", m, windowHeight - m * 3.3);
  text("B:", m, windowHeight - m * 2.3);

  colorMode(HSB);
  c = color(h, s, b);
  fill(c);
  circle(width / 2, height / 2, min(width, height) * d); 
  drawFillString(`fill(${h}, ${s}, ${b})`, c);
}

function drawHSBA(){
  let h = sldH.value();
  let s = sldS.value();
  let b = sldB2.value();
  let a = sldA2.value();

  fill(0);
  text("H:", m, windowHeight - m * 4.3);
  text("S:", m, windowHeight - m * 3.3);
  text("B:", m, windowHeight - m * 2.3);
  text("A:", m, windowHeight - m * 1.3);

  colorMode(HSB);
  c = color(h, s, b, a);
  fill(c);
  circle(width / 2, height / 2, min(width, height) * d); 
  drawFillString(`fill(${h}, ${s}, ${b}, ${nf(a, 0, 2)})`, c);
}

function argPatternSelected(e){
  let pattern = sel.value();
  // console.log('sel.value()', pattern);

  if (pattern === "fill(g)"){
    patternG();
  } else if (pattern == "fill(g, a)"){
    patternGA();
  } else if (pattern === "fill(cssString)"){
    patternCSS();
  } else if (pattern === "fill(r, g, b)"){
    patternRGB();
  } else if (pattern === "fill(r, g, b, a)"){
    patternRGBA();
  } else if (pattern === "fill(h, s, b)"){
    patternHSB();
  } else if (pattern === "fill(h, s, b, a)"){
    patternHSBA();
  } 

  loop();
}

function hideSliders(){
  sldR.hide();
  sldG.hide();
  sldB1.hide();
  sldA1.hide();
  sldH.hide();
  sldS.hide();
  sldB2.hide();
  sldA2.hide();  
}

function patternG(){
  mode = "G";
  hideSliders();
  sldG.show();
  sldG.position(2 * m, windowHeight - m * 5);
  sldG.value(map(brightness(c), 0, 100, 0, 255));
}

function patternGA(){
  mode = "GA";
  hideSliders();
  sldG.show();
  sldG.position(2 * m, windowHeight - m * 5);
  sldG.value(map(brightness(c), 0, 100, 0, 255));
  sldA1.show();
  sldA1.position(2 * m, windowHeight - m * 4);
  sldA1.value(map(alpha(c), 0, 1, 0, 255));
}

function patternCSS(){
  mode = "CSS";
  hideSliders();
}

function patternRGB(){
  mode = "RGB";
  hideSliders();
  sldR.show();
  sldR.position(2 * m, windowHeight - m * 5);
  sldR.value(red(c));

  sldG.show();
  sldG.position(2 * m, windowHeight - m * 4);
  sldG.value(green(c));

  sldB1.show();
  sldB1.position(2 * m, windowHeight - m * 3);
  sldB1.value(blue(c));
}

function patternRGBA(){
  mode = "RGBA";
  hideSliders();
  sldR.show();
  sldR.position(2 * m, windowHeight - m * 5);
  sldR.value(red(c));

  sldG.show();
  sldG.position(2 * m, windowHeight - m * 4);
  sldG.value(green(c));

  sldB1.show();
  sldB1.position(2 * m, windowHeight - m * 3);
  sldB1.value(blue(c));

  sldA1.show();
  sldA1.position(2 * m, windowHeight - m * 2);
  sldA1.value(map(alpha(c), 0, 1, 0, 255));

}

function patternHSB(){
  mode = "HSB";
  hideSliders();
  sldH.show();
  sldH.position(2 * m, windowHeight - m * 5);
  sldH.value(hue(c));

  sldS.show();
  sldS.position(2 * m, windowHeight - m * 4);
  sldS.value(saturation(c));

  sldB2.show();
  sldB2.position(2 * m, windowHeight - m * 3);
  sldB2.value(brightness(c));
}

function patternHSBA(){
  mode = "HSBA";
  hideSliders();
  sldH.show();
  sldH.position(2 * m, windowHeight - m * 5);
  sldH.value(hue(c));

  sldS.show();
  sldS.position(2 * m, windowHeight - m * 4);
  sldS.value(saturation(c));

  sldB2.show();
  sldB2.position(2 * m, windowHeight - m * 3);
  sldB2.value(brightness(c));

  sldA2.show();
  sldA2.position(2 * m, windowHeight - m * 2);
  sldA2.value(map(alpha(c), 0, 255, 0, 1));

  // console.log('alpha(c)', alpha(c));
}
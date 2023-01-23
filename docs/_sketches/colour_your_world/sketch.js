
let g;
let g2;
let font;
let d = 5; // 100;
let fgC = 350;
let bgC = fgC - 120;

function preload(){
  font = loadFont("data/RubikMonoOne-Regular.ttf");
  img = loadImage("color_your_world_preheat.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(color(bgC - 15, 50, 50));
  noStroke();

  g = createGraphics(width, height);
  // g.background(100);
  g.textAlign(CENTER, CENTER);
  g.textFont(font);
  g.textSize(120);
  g.textStyle(BOLD);
  g.text("COLOUR", g.width / 2,     g.height / 4 - 20);
  g.text("YOUR", g.width / 2,       g.height / 2 - 20);
  g.text("WORLD", g.width / 2,  3 * g.height / 4 - 20);

  g2 = createGraphics(width, height);
  g2.image(img, 0, 0, g2.width, g2.height);
  g2.colorMode(HSB);
  g2.noStroke();
}

function draw(){
  background(color(bgC - 15, 50, 50));

  while(d > 5){
    pickPoints();
    d = max(5, d - 1);
  }
  pickPoints();
  // console.log('hi7');

  let op = min(1, frameCount / 5);

  tint(255, op);
  // console.log('op', op);
  image(g2, 0, 0);
}

function pickPoints(){
  let opacity = 0.6; //  map(d, 100, 10, 0.1, 0.8);

  for (let i = 0; i < 5; i++){
    let x = random(width);
    let y = random(height);    
    let gc = g.get(x, y);

    let fgH = (random(fgC - 30, fgC) + frameCount / 50) % 360;

    let c = color(fgH, 100, 100, opacity);

    if (gc[3] == 0){
      // c = color(random(bgC - 30, bgC), 50, 50, opacity);
      c = color(bgC - 15, 50, 50);
    }
    drawFlower(x, y, c, d);    
  }  
}

function drawFlower(x, y, c, d){
  g2.fill(c);
  g2.circle(x, y, d);
}
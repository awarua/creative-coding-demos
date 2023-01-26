let sldHue;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(40);
  textStyle(BOLD);

  sldHue = createSlider(0, 359, 100, 2);
  sldHue.position(10, 10);
}

function draw() {
  let hu = sldHue.value();
  background(hu, 20, 100);
  text("HUE: " + hu, width / 2, height / 2);
}
let selBg;

function setup(){
  createCanvas(200, 200);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(20);
  textStyle(BOLD);
  
  selBg = createSelect();
  selBg.position(10, 10);
  selBg.option("antiquewhite");
  selBg.option("burlywood");
  selBg.option("goldenrod");
  selBg.option("darkorchid");
  selBg.option("salmon");

  selBg.changed(setBg);

  // Set the initial background
  setBg();
}

function setBg(){
  let bg = selBg.value();
  background(bg);
  text(bg, width / 2, height / 2);
}
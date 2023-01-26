let fishes = [];
let showText = true;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background('blue');
  textAlign(CENTER, CENTER);
  textSize(20);
  textStyle(BOLD);

  fishes.push(new Fish(width / 2, height * 0.65));
}

function draw(){
  background('blue');

  if (showText){
    fill(255, 150);
    text("Press 'f' to add fishes", width / 2, height / 2);  
  }

  for (let f of fishes){
    f.update();
    f.show();
  }
}

function keyTyped(){
  if (key == 'f'){
    let x = random(width);
    let y = random(height);
    fishes.push(new Fish(x, y));
    showText = false;
  }
}
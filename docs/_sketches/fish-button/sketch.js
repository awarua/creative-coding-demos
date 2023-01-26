let fishes = [];
let btn;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background('blue');

  // Add a single fish initially...
  fishes.push(new Fish(width / 2, height / 2));

  // Create a button, position it, and hook it up to a function
  btn = createButton("Add Fish");
  btn.position(10, 10);
  btn.mousePressed(addFish);
}

function draw(){
  background('blue');

  // Loop over the array of fishes and show them
  for (let f of fishes){
    f.update();
    f.show();
  }
}

// Function to add a new fish to the 'fishes' array
function addFish(){
  let x = random(width);
  let y = random(height);
  fishes.push(new Fish(x, y));
}
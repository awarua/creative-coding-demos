// The two loops in this example draw a grid of circles
function setup(){
  createCanvas(400, 320);
  colorMode(HSB);
  background(240, 60, 100);
  fill(120, 20, 100);
  // stroke(120, 100, 50);
  noStroke();

  let spacing = width / 5;
  let w = spacing / 2;

  for(let y = spacing / 4; y < height; y += spacing){
    // Log to the console so we can see how it works
    console.log("Drawing a row with y = ", y);

    for(let x = spacing / 4; x < width; x += spacing){
      // Log to the console so we can see how it works
      // console.log("Drawing a square with x = ", x);

      square(x, y, w);
    }
  }
}

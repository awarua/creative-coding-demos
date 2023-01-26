// The two loops in this example draw a grid of circles
// The user can change the colour of circles with keyboard
let spacing;
let circleColor;
let circleSize;

function setup(){
  createCanvas(280, 200);
  background(220);

  spacing = width / 7;

  // By default, circles will be blue
  circleColor = color(0, 0, 255, 100);

  // By default circle size will be twice spacing.
  circleSize = spacing * 2;
}

function draw(){
  background(220);

  // Fill with the current circle colour, this will
  // change in the keyboard handler below.
  fill(circleColor);

  for(let y = spacing / 2; y < height; y += spacing){
    // Log to the console so we can see how it works
    //console.log("Drawing a row with y = ", y);

    for(let x = spacing / 2; x < width; x += spacing){
      // Log to the console so we can see how it works
      //console.log("Drawing a circle with x = ", x);

      circle(x, y, circleSize);
    }
  }
}

// When the user presses, r, g, b keys, change circle color
function keyTyped(){
  if (key == 'r'){
    circleColor = color(255, 0, 0, 100);
  } else if (key == 'g'){
    circleColor = color(0, 255, 0, 100);
  } else if (key == 'b'){
    circleColor = color(0, 0, 255, 100);
  } else if (key == '+'){
    circleSize += 1;
  } else if (key == '-'){
    circleSize -= 1;
  }
  console.log('key', key);
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  background(220);

  // Loop across the canvas and draw a series of lines
  for(let i = 20; i <= 300; i += 20){
    line(i, 20, i, height - 20);
  }
}
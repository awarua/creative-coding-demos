function setup(){
  createCanvas(400, 400);
}

function draw(){
  background(0);

  for (let x = 10; x < width; x += 20){
    for (let y = 10; y < height; y += 20){
      // Calculate the distance to the mouse x, y
      let d = dist(x, y, mouseX, mouseY);

      // Use the distance to set a radius on a circle
      circle(x, y, d);
    }
  }
}
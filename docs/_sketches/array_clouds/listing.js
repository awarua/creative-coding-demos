let cloudXs = [];
let cloudYs = [];

function setup(){
  // Setup omitted (includes setting random cloud positions)
}

function draw(){
  background(180, 30, 100);

  // Draw the clouds and update their positions
  for (let i = 0; i < cloudXs.length; i++){
    let x = cloudXs[i];
    let y = cloudYs[i];

    circle(x, y, 20);

    // Update the x position of the cloud
    x = x + 2;

    // If the cloud goes off the right side move back to left
    if (x > width){
      x = x - width;      
    }

    // Store the updated position back in the array
    cloudXs[i] = x;
  }
}
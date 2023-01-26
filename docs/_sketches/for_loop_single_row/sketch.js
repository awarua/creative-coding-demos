// The for loop in this code draws a row of circles
function setup(){
  createCanvas(280, 200);
  background(220);

  // Calculate the spacing so that seven circles fit in a row
  let spacing = width / 7;

  // The left and right margin will be half the spacing
  let margin = spacing / 2;

  // Also calculate a diameter based on the spacing
  let d = spacing / 2;

  // Loop seven times with i = 0,1,2,3,4,5,6
  for (let i = 0; i < 7; i = i + 1){
    // Calculate the x position based on the value of i.
    let x = margin + spacing * i;

    // Y will always be at the same height.
    let y = margin;
    console.log("  Draw circle at x, y:", x, y);
    circle(x, y, d);
  }
}

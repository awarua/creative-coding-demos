function resetTest(){
  fill(255, 0, 0);
}

function testFunction(fn){
  noStroke();
  evalFn(fn);
}

function drawFunction(){
  background(220);

  circle(width / 2, height / 2, min(width, height) * 0.9);

  push();
  fill(0);
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(24);
  text(`fill(${aSpan.html().replace(/&nbsp;/, ' ')})`, width / 2, height / 2);
  pop();

  noLoop();
}
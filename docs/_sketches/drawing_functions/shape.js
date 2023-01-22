class Shape{
  constructor(l, t, cw, ch){
    this.l = l;
    this.t = t;
    this.cw = cw;
    this.ch = ch;
    this.controlColor = color(40, 40, 50, 100);
    this.activeColor = color(200, 40, 50, 100);
    this.isDragging = false;
    this.hitRadius = 15;
  }

  mouseOver(){
    return (mouseX > this.l && mouseX < this.l + this.cw
      && mouseY > this.t && mouseY < this.t + this.ch);
  }

  hitTest(x, y){
    return dist(this.l + x, this.t + y, mouseX, mouseY) < this.hitRadius;
  }

  clampMouseX(){
    return constrain(mouseX - this.l, 0, this.cw);
  }

  clampMouseY(){
    return constrain(mouseY - this.t, 0, this.ch);     
  }

  mousePressed(){
    return this.isDragging;
  }

  mouseDragged(){
    return this.isDragging;
  }

  toString(){
    return "shape";
  }

  drawTextBg(){
    push();
    fill(255, 150);
    noStroke();
    rect(0, this.ch - 28, this.cw, 28);
    pop();
  }

  drawArgLine(startTxt, argTxt){
    let adjust = -3;
    push();
    noStroke();
    fill(this.activeColor);

    // textSize(10);
    // textFont('monospace');

    let textW = textWidth(this.toString());
    let startW = textWidth(startTxt);
    let argW = textWidth(argTxt);

    let x = ((this.cw - textW) / 2) + startW;
    rect(x + adjust, this.ch - 10, argW, 1);

    pop();
  }

  drawHandle(x, y, isActive){
    push();
    translate(this.l, this.t);
    noStroke();
    if (this.isDragging && isActive){
      fill(this.activeColor);
    } else {
      fill(this.controlColor);
    }
    circle(x, y, 2 * this.hitRadius);
    pop();
  }

  showBackground(){
    push();
    noStroke();
    fill(230);
    translate(this.l, this.t);

    rect(0, 0, this.cw, this.ch);
    pop();
  }

  showShape(){
    // To override
  }

  showControls(){
    push();
    translate(this.l, this.t);
    fill(255, 0, 0);
    noStroke();
    square(10, 10, 10);
    pop();
  }

  showText(){
    push();
    translate(this.l, this.t);
    this.drawTextBg();
    fill(100, 100, 200);
    text(this.toString(), 0, this.ch - 20, this.cw, 20);
    pop();    
  }

  show(){
    this.showBackground();
    this.showShape();
    if (this.isDragging || (this.mouseOver() && !activeShape)){
      this.showControls();
    }
    this.showText();
  }

}
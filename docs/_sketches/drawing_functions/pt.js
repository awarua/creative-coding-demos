class Pt extends Shape{
  constructor(l, t, cw, ch){
    super(l, t, cw, ch);
    this.x = cw / 2;
    this.y = ch / 2;
  }

  toString(){
    return `point(${floor(this.x)},${floor(this.y)})`;
  }

  mousePressed(){
    this.isDragging = this.hitTest(this.x, this.y);
    return this.isDragging;
  }

  mouseDragged(){
    if (this.isDragging){
      this.x = this.clampMouseX();
      this.y = this.clampMouseY();
    }
  }

  drawTextBg(){
    // first draw the regular background
    super.drawTextBg();
    // check if it is dragging. If so, underline the parameters that will
    // change
    if (this.isDragging){
      this.drawArgLine("point(", `${floor(this.x)}`);
      this.drawArgLine(`point(${floor(this.x)},`, `${floor(this.y)}`);
    }
  }

  showControls(){
    this.drawHandle(this.x, this.y, this.isDragging);
  }

  showShape(){
    push();
    translate(this.l, this.t);

    noFill();
    stroke(0);
    strokeWeight(sw * 3);
    point(this.x, this.y);
    pop();
  }
}
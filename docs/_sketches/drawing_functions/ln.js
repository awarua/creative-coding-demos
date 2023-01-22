class Ln extends Shape{
  constructor(l, t, cw, ch){
    super(l, t, cw, ch);
    this.x1 = cw * 0.4;
    this.y1 = rh * 0.7;
    this.x2 = cw * 0.6;
    this.y2 = rh * 0.3;
  }

  toString(){
    let a = [this.x1, this.y1, this.x2, this.y2];
    a = a.map(e => floor(e));
    return `line(${a[0]},${a[1]},${a[2]},${a[3]})`;
  }

  mousePressed(){
    this.isDragging = false;

    if (this.hitTest(this.x1, this.y1)){
      this.isDragging = true;
      this.dragNum = 1;
    } else if (this.hitTest(this.x2, this.y2)) {
      this.isDragging = true;
      this.dragNum = 2;
    }
    return this.isDragging;
  }

  mouseDragged(){
    if (this.isDragging){
      if (this.dragNum == 1){
        this.x1 = this.clampMouseX();
        this.y1 = this.clampMouseY();
      } else if (this.dragNum == 2){
        this.x2 = this.clampMouseX();
        this.y2 = this.clampMouseY();
      }
    }
  }

  drawTextBg(){
    // first draw the regular background
    super.drawTextBg();
    // check if it is dragging. If so, underline the parameters that will
    // change
    if (this.isDragging){
      if (this.dragNum == 1){
        this.drawArgLine("line(", `${floor(this.x1)}`);
        this.drawArgLine(`line(${floor(this.x1)},`, `${floor(this.y1)}`);
      } else if (this.dragNum == 2){
        this.drawArgLine(`line(${floor(this.x1)},${floor(this.y1)},`, `${floor(this.x2)}`);
        this.drawArgLine(`line(${floor(this.x1)},${floor(this.y1)},${floor(this.x2)},`, `${floor(this.y2)}`);
      }
    }
  }

  showControls(){
    this.drawHandle(this.x1, this.y1, this.dragNum == 1);
    this.drawHandle(this.x2, this.y2, this.dragNum == 2);
  }

  showShape(){
    push();
    stroke(0);
    translate(this.l, this.t);
    strokeWeight(sw);
    fill(255);
    line(this.x1, this.y1, this.x2, this.y2);
    pop();
  }
}
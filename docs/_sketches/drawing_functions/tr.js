class Tr extends Shape {
  constructor(l, t, cw, ch){
    super(l, t, cw, ch);
    this.x1 = cw / 2;
    this.y1 = rh * 0.3;
    this.x2 = cw * 0.3;
    this.y2 = rh * 0.7;
    this.x3 = cw * 0.7;
    this.y3 = this.y2;  
  }

  toString(){
    let a = [this.x1, this.y1, this.x2, this.y2, this.x3, this.y3];
    a = a.map(e => floor(e));
    return `triangle(${a[0]},${a[1]},${a[2]},${a[3]},${a[4]},${a[5]})`;
  }

  mousePressed(){
    this.isDragging = false;

    if (this.hitTest(this.x1, this.y1)){
      this.isDragging = true;
      this.dragNum = 1;
    } else if (this.hitTest(this.x2, this.y2)) {
      this.isDragging = true;
      this.dragNum = 2;
    } else if (this.hitTest(this.x3, this.y3)) {
      this.isDragging = true;
      this.dragNum = 3;
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
      } else if (this.dragNum == 3){
        this.x3 = this.clampMouseX();
        this.y3 = this.clampMouseY();
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
        this.drawArgLine("triangle(",                   `${floor(this.x1)}`);
        this.drawArgLine(`triangle(${floor(this.x1)},`, `${floor(this.y1)}`);
      } else if (this.dragNum == 2){
        this.drawArgLine(`triangle(${floor(this.x1)},${floor(this.y1)},`,                   `${floor(this.x2)}`);
        this.drawArgLine(`triangle(${floor(this.x1)},${floor(this.y1)},${floor(this.x2)},`, `${floor(this.y2)}`);
      } else if (this.dragNum == 3){
        this.drawArgLine(`triangle(${floor(this.x1)},${floor(this.y1)},${floor(this.x2)},${floor(this.y2)},`,                  `${floor(this.x3)}`);
        this.drawArgLine(`triangle(${floor(this.x1)},${floor(this.y1)},${floor(this.x2)},${floor(this.y2)},${floor(this.x3)},`,`${floor(this.y3)}`);
      }
    }
  }

  showControls(){
    this.drawHandle(this.x1, this.y1, this.dragNum == 1);    
    this.drawHandle(this.x2, this.y2, this.dragNum == 2);    
    this.drawHandle(this.x3, this.y3, this.dragNum == 3);    
  }

  showShape(){
    push();
    stroke(0);
    translate(this.l, this.t);
    strokeWeight(sw);
    fill(255);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    pop();
  }
}
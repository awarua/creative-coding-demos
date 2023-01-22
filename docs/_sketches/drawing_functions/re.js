class Re extends Shape{
  constructor(l, t, cw, ch){
    super(l, t, cw, ch);
    this.h = min(cw, rh) * 0.2;
    this.w = min(cw, rh) * 0.7;
    this.x = (cw - this.w) / 2;
    this.y = (rh - this.h) / 2;
  }

  toString(){
    let a = [this.x, this.y, this.w, this.h];
    a = a.map(e => floor(e));
    return `rect(${a[0]},${a[1]},${a[2]},${a[3]})`;
  }

  mousePressed(){
    this.isDragging = false;

    if (this.hitTest(this.x, this.y)){
      this.isDragging = true;
      this.dragNum = 1;
    } else if (this.hitTest(this.x + this.w, this.y + this.h / 2)) {
      this.isDragging = true;
      this.dragNum = 2;
    } else if (this.hitTest(this.x + this.w / 2, this.y + this.h)) {
      this.isDragging = true;
      this.dragNum = 3;
    }
    return this.isDragging;
  }
  
  mouseDragged(){
    if (this.isDragging){
      if (this.dragNum == 1){
        this.x = this.clampMouseX();
        this.x = constrain(this.x, 0, this.cw - this.w);
        this.y = this.clampMouseY();
        this.y = constrain(this.y, 0, this.ch - this.h);
      } else if (this.dragNum == 2){
        let mx = this.clampMouseX();
        this.w = mx - this.x;
      } else if (this.dragNum == 3){
        let my = this.clampMouseY();
        this.h = my - this.y;
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
        this.drawArgLine("rect(",                  `${floor(this.x)}`);
        this.drawArgLine(`rect(${floor(this.x)},`, `${floor(this.y)}`);
      } else if (this.dragNum == 2){
        this.drawArgLine(`rect(${floor(this.x)},${floor(this.y)},`,                  `${floor(this.w)}`);
      } else if (this.dragNum == 3){
        this.drawArgLine(`rect(${floor(this.x)},${floor(this.y)},${floor(this.w)},`, `${floor(this.h)}`);
      }
    }
  }

  showControls(){
    this.drawHandle(this.x, this.y, this.dragNum == 1);
    this.drawHandle(this.x + this.w, this.y + this.h / 2, this.dragNum == 2);
    this.drawHandle(this.x + this.w / 2, this.y + this.h, this.dragNum == 3);
  }

  showShape(){
    push();
    translate(this.l, this.t);
    stroke(0);
    strokeWeight(sw);
    fill(255);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
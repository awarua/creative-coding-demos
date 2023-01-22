class El extends Shape{
  constructor(l, t, cw, ch){
    super(l, t, cw, ch);
    this.x = cw / 2;
    this.y = ch / 2;
    this.w = cw * 0.6;
    this.h = rh * 0.3;

  }

  toString(){
    let a = [this.x, this.y, this.w, this.h];
    a = a.map(e => floor(e));
    return `ellipse(${a[0]},${a[1]},${a[2]},${a[3]})`;
  }

  mousePressed(){
    this.isDragging = false;

    if (this.hitTest(this.x, this.y)){
      this.isDragging = true;
      this.dragNum = 1;
    } else if (this.hitTest(this.x + this.w / 2, this.y)) {
      this.isDragging = true;
      this.dragNum = 2;
    } else if (this.hitTest(this.x, this.y + this.h / 2)) {
      this.isDragging = true;
      this.dragNum = 3;
    }
    return this.isDragging;
  }
  
  mouseDragged(){
    if (this.isDragging){
      if (this.dragNum == 1){
        this.x = this.clampMouseX();
        this.x = constrain(this.x, this.w / 2, (this.cw - this.w / 2));
        this.y = this.clampMouseY();
        this.y = constrain(this.y, this.h / 2, (this.ch - this.h / 2));
      } else if (this.dragNum == 2){
        let mx = this.clampMouseX();
        let maxW = 2 * min(this.x, this.cw - this.x);
        this.w = constrain(2 * (mx - this.x), -maxW, maxW);
      } else if (this.dragNum == 3){
        let my = this.clampMouseY();
        let maxH = 2 * min(this.y, this.ch - this.y);
        this.h = constrain(2 * (my - this.y), -maxH, maxH);
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
        this.drawArgLine("ellipse(",                  `${floor(this.x)}`);
        this.drawArgLine(`ellipse(${floor(this.x)},`, `${floor(this.y)}`);
      } else if (this.dragNum == 2){
        this.drawArgLine(`ellipse(${floor(this.x)},${floor(this.y)},`,                  `${floor(this.w)}`);
      } else if (this.dragNum == 3){
        this.drawArgLine(`ellipse(${floor(this.x)},${floor(this.y)},${floor(this.w)},`, `${floor(this.h)}`);
      }
    }
  }

  showControls(){
    this.drawHandle(this.x, this.y, this.dragNum == 1);
    this.drawHandle(this.x + this.w / 2, this.y, this.dragNum == 2);
    this.drawHandle(this.x, this.y + this.h / 2, this.dragNum == 3);
  }

  showShape(){
    push();
    translate(this.l, this.t);
    stroke(0);
    strokeWeight(sw);
    fill(255);
    ellipse(this.x, this.y, this.w, this.h);
    pop();
  }
}
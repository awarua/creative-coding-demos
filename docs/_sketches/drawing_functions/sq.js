class Sq extends Shape{
  constructor(l, t, cw, ch){
    super(l, t, cw, ch);
    this.w = min(cw, rh) * 0.4;
    this.x = (cw - this.w) / 2;
    this.y = (rh - this.w) / 2;
  }

  toString(){
    let a = [this.x, this.y, this.w];
    a = a.map(e => floor(e));
    return `square(${a[0]},${a[1]},${a[2]})`;  
  }

  mousePressed(){
    this.isDragging = false;

    if (this.hitTest(this.x, this.y)){
      this.isDragging = true;
      this.dragNum = 1;
    } else if (this.hitTest(this.x + this.w, this.y + this.w / 2)) {
      this.isDragging = true;
      this.dragNum = 2;
    } 
    return this.isDragging;
  }

  mouseDragged(){
    if (this.isDragging){
      if (this.dragNum == 1){
        this.x = this.clampMouseX();
        this.x = constrain(this.x, 0, (this.cw - this.w));
        this.y = this.clampMouseY();
        this.y = constrain(this.y, 0, (this.ch - this.w));
      } else if (this.dragNum == 2){
        let mx = this.clampMouseX();
        let maxW = min(this.cw - this.x, this.ch - this.y);
        let minW = -min(this.x, this.y);
        this.w = constrain((mx - this.x), minW, maxW);
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
        this.drawArgLine("square(",                  `${floor(this.x)}`);
        this.drawArgLine(`square(${floor(this.x)},`, `${floor(this.y)}`);
      } else if (this.dragNum == 2){
        this.drawArgLine(`square(${floor(this.x)},${floor(this.y)},`,                  `${floor(this.w)}`);
      } 
    }
  }

  showControls(){
    this.drawHandle(this.x, this.y, this.dragNum == 1);
    this.drawHandle(this.x + this.w, this.y + this.w / 2, this.dragNum == 2);    
  }

  showShape(){
    push();
    translate(this.l, this.t);
    stroke(0);
    strokeWeight(sw);
    fill(255);
    square(this.x, this.y, this.w);
    pop();
  }
}
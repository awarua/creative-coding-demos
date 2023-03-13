class Key {
  constructor (x, y, lower, lowerCode, upper, upperCode, w, xOffset){
    this.x = x + (xOffset || 0);
    this.y = y;
    this.lower = lower;
    this.lowerCode = lowerCode;
    this.w = w ? w * 40 : 40;
    this.h = 30;
    
    if (upper == null){    
      this.upper = lower;
      this.upperCode = lowerCode;
    } else {
      this.upper = upper;
      this.upperCode = upperCode;
    }
    
    this.isPressed = false;      
  }
  
  
  show () {
    push();
    translate(this.x, this.y);
    
    fill(70);
    noStroke();

    
    if (this.isPressed){
      rect(1,1,this.w, this.h, 4);
      fill(50, 80, 100);
    } else {

      rect(1,2,this.w, this.h, 4);      
      fill(100);      
    }
    //stroke(0);
    //strokeWeight(4);
    noStroke();
    rect(0, 0, this.w, this.h, 4);
    
    translate(this.w / 2, this.h / 2);
    fill(0);
    textAlign(CENTER, CENTER);
    let txt = this.lower;
    if (keyIsDown(SHIFT)){
      txt = this.upper;          
    }
    
    if (txt.length > 1){
      textSize(10);
    } else {
      textSize(14);
    }
    
    text(txt, 0, 0);
    
    pop();
  }
  
  reset () {
    this.isPressed = false;
  }
}
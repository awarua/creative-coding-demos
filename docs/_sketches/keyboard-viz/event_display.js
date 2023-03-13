class EventDisplay {
  constructor(x, y, label, yBendOffset, endXOffset){
    this.x = x;
    this.y = y;
    this.h = 100;
    this.w = 100;
    this.label = label;
    this.key = null;
    this.keyCode = null;
    this.kX = null;
    this.kY = null;
    this.yBendOffset = yBendOffset;
    this.endXOffset = endXOffset;
    this.MAX_AGE = 60;
    this.DELAY = 40;
    this.age = 200;
  }
  
  update(key, keyCode){
    this.age = this.age + 1;
  }
  
  trigger(k, key, keyCode){
    this.kX = k.x + k.w / 2 + this.endXOffset;
    this.kY = k.y;
    this.key = key;
    this.keyCode = keyCode;
    this.age = 0;
  }
  
  show(){
    let drawAge = pow(
      map(constrain(this.age, this.DELAY, this.MAX_AGE), this.DELAY, this.MAX_AGE, 0, 1), 3);
    
    
    push();
    
    if (this.age < this.MAX_AGE){
      let s = map(constrain(drawAge, 0, 0.015), 0, 0.015, 80, 0);
      fill(50, s, 100);      
    } else {
      fill(100);    
    }
    
    rect(this.x, this.y, this.w, this.h, 10);
    
    fill(0);
    noStroke();
    text(this.label, this.x + 10, this.y + 20);
    
    if (this.key){
      text(`key: ${this.key}`, this.x + 10, this.y + 40);
    }
    
    if (this.keyCode){
      text(`keyCode: ${this.keyCode}`, this.x + 10, this.y + 60);
    }
    
    if (this.age < this.MAX_AGE){   
      if (this.kX && this.kY){
        stroke(0);
        let x1 = this.x + this.w / 2;
        let y1 = this.y + this.h;

        let x2 = x1;
        let y2 = this.y + this.h + 50 + this.yBendOffset;

        let x3 = this.kX;
        let y3 = y2;

        let x4 = this.kX;
        let y4 = this.kY;

        let dist1 = dist(x1, y1, x2, y2);
        let dist2 = dist(x2, y2, x3, y3);
        let dist3 = dist(x3, y3, x4, y4);
        let totalDist = dist1 + dist2 + dist3;

        let distToDraw = map(drawAge, 0, 1, totalDist, 0);
        let a = map(drawAge, 0, 1, 1, 0);
        stroke(50, 80, 100, a);
        strokeWeight(4);
        
        if (distToDraw < dist1){  
          y2 = lerp(y1, y2, distToDraw / dist1);             
          line(x1, y1, x2, y2);
        } else {
          line(x1, y1, x2, y2);
          
          distToDraw = distToDraw - dist1;
          
          if (distToDraw < dist2){
            x3 = lerp(x2, x3, distToDraw / dist2);
            line(x2, y2, x3, y3);
          } else {
            line(x2, y2, x3, y3);
            
            distToDraw = distToDraw - dist2;
            
            if (distToDraw < dist3){
              y4 = lerp(y3, y4, distToDraw / dist3);
              line(x3, y3, x4, y4);
            } else {
              line(x3, y3, x4, y4);
            }
          }
        }
      }
    }
    
    pop();
  }
  
}
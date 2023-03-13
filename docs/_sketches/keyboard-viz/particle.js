class Particle {
  constructor(x, y, key, keyCode){
    this.x = x;
    this.y = y;
    
    this.d = 20;
    this.age = 0;
    this.opacity = 0.5;
    this.keyCode = keyCode
    this.key = key;
    // console.log('p', this.x, this.y, this.msg);
  }
  
  update(){
    let xVel = map(noise(frameCount / 500, this.x, this.y/1000), 0, 1, -5, 5);
    this.x = this.x + xVel;
    this.y = this.y + -0.2 * (this.age * this.age) / 100;
    // this.d = this.d + random(0, 1);
    this.opacity = max(0.1, this.opacity - 0.0025);
    this.age += 1;
  }
  
  show(){
    push();
    stroke(this.keyCode, 90, 100, 0.8);
    fill(this.keyCode, 90, 100, this.opacity);
    circle(this.x, this.y, this.d);
    fill(0);
    textAlign(CENTER, CENTER);
    
    if (this.key.length > 1){
      textSize(10);
    } else {
      textSize(14)
    }
    text(this.key, this.x, this.y);
    pop();
  }
}
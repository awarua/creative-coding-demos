class Fish {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.dir = 2 * floor(random(2)) - 1;
    this.speed = random(1,2);
  }

  update(){
    this.x += this.speed * this.dir;

    if (this.x < 0 || this.x > width){
      this.dir = - this.dir;
      this.x += this.speed * this.dir;
    }
  }

  show(){
    push();
    noStroke();
    fill('orange');
    ellipse(this.x, this.y, 20, 10);
    rect(this.x + this.dir * -15, this.y - 5, this.dir * 5, 10);
    pop();
  }
}
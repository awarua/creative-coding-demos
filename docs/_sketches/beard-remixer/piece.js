class Piece {
  constructor(x, y, w, h, img, g){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
    this.g = g;
  }

  show(){
    this.g.image(this.img, this.x, this.y, this.w, this.h);
  }
}
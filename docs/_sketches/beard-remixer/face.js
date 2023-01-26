class Face{
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.g = createGraphics(w, h);
    this.g.colorMode(HSB);
    this.g.imageMode(CENTER);
    this.pickPieces();
  }

  pickPieces(){
    let hairIdx = int(random(numHairs));
    this.hair = new Piece(
      this.w / 2, this.h * 0.4, 
      random(this.w / 2, this.w),
      random(this.h / 2, this.h), 
      hairImgs[hairIdx], this.g);
  
    let beardIdx = int(random(numBeards));
    this.beard = new Piece(
      this.w / 2, this.h * 0.8, 
      random(this.w / 2, this.w), 
      random(this.h / 2, this.h), 
      beardImgs[beardIdx], this.g);
  
    let noseIdx = int(random(numNoses));
    this.nose = new Piece(
      this.w / 2, this.h * 0.4, 
      random(this.w / 6, this.w / 3), 
      random(this.h / 6, this.h / 3), 
      noseImgs[noseIdx], this.g);
  
    let lEyeIdx = int(random(numEyes));
    this.lEye = new Piece(
      this.w * 0.3, this.h * 0.4, 
      random(this.w / 7, this.w / 6), 
      random(this.h / 7, this.h / 6), 
      eyeImgs[lEyeIdx], this.g);
  
    let rEyeIdx = int(random(numEyes));
    this.rEye = new Piece(
      this.w * 0.7, this.h * 0.4, 
      random(this.w / 7, this.w / 6), 
      random(this.h / 7, this.h / 6), 
      eyeImgs[rEyeIdx], this.g);
    
    let mouthIdx = int(random(numMouths));
    this.mouth = new Piece(
      this.w / 2, this.h * 0.6, 
      random(this.w / 6, this.w / 2), 
      random(this.h / 7, this.h / 6), 
      mouthImgs[mouthIdx], this.g);
  }

  show(){
    this.g.clear();
    // this.g.background(100);
    this.g.noStroke();
    this.g.colorMode(HSB);
    this.g.fill(80);
    this.g.ellipse(this.w / 2, this.h / 2, this.hair.w * 0.8, random(this.h * 0.6, this.h * 0.8));

    this.hair.show();
    this.beard.show();
    this.nose.show();
    this.lEye.show();
    this.rEye.show();
    this.mouth.show();

    // fill(0);
    // this.g.text(this.w, 20, 20);
    // this.g.text(this.h, 20, 60);
  
    image(this.g, this.x, this.y);
  }

}
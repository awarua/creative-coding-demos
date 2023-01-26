// Samples pixels in an image.
let img;
let piece;
let mx = 0;
let my = 0;

function preload(){
  img = loadImage("https://picsum.photos/540/200");
}

function setup(){
  createCanvas(740, 200);
  noCursor();
  stroke(255);
  noFill();

  // Set piece to initially be a bit from
  // top left corner of the image
  piece = img.get(0, 0, 40, 40);
}

function draw(){
  background(0);
  image(img, 0, 0);

  // If the mouse is over the image,
  // copy that location into the 'piece' variable. 
  if (mouseX > 0 && mouseX < img.width
    && mouseY > 0 && mouseY < img.height){
    piece = img.get(mouseX - 20, mouseY - 20, 40, 40);    
    mx = mouseX;
    my = mouseY;
  }  

  // Draw a rectangle on the original image to show where
  // the piece was taken from
  square(mx - 20, my - 20, 40);

  // Display the piece on the right hand side. Make
  // it display larger, to create a magnification effect. 
  image(piece, 540, 0, 200, 200);
}


let img;
let adaQuotes = [
  "I never am really satisfied that I understand anything; because, understand it well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand about the many connections and relations which occur to me, how the matter in question was first thought of or arrived at.",
  "The more I study, the more insatiable do I feel my genius for it to be.",
  " The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.",
  " Imagination is the Discovering Faculty, pre-eminently. It is that which penetrates into the unseen worlds around us, the worlds of Science.",
  " Your best and wisest refuge from all troubles is in your science.",
  " Mathematical science shows what is. It is the language of unseen relations between things. But to use and apply that language, we must be able to fully to appreciate, to feel, to seize the unseen, the unconscious.",
  " As soon as I have got flying to perfection, I have got a scheme about a steam engine.",
  " That brain of mine is something more than merely mortal; as time will show.",
];

let adaQuote;

let sizes = [];
let spacing, prop;
let xOff;
let fg = 50;
let firstMs = -1;

function preload(){
  img = loadImage('ada_lovelace-cropped.jpeg');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);

  adaQuote = adaQuotes.join(" ");
  adaQuotes.push(adaQuotes.shift());
  adaQuote += " " + adaQuotes.join(" ");
  adaQuotes.push(adaQuotes.shift());
  adaQuote += " " + adaQuotes.join(" ");

  prop = img.width / width;
  spacing = width / 74;
  noStroke();

  // Pre-calculate sizes
  for (let i = 0; spacing * i <= height; i++){
    sizes.push([]);
    let y = spacing / 2 + spacing * i;

    for (let j = 0; spacing * j <= width; j++){
      let x = spacing / 2 + spacing * j;
      let c = color(0);
      if (y * prop <= img.height){
        c = img.get(min(x * prop, img.width - 1), min(y * prop, img.height - 1));
      }
      let siz = map(brightness(c), 0, 255, spacing / 2, spacing * 6);

      sizes[i][j] = siz;
    }
  }

  // console.log(sizes.length, sizes[0].length);
}

function draw(){
  let ms = millis();
  let spd = 1000;
  let idx = floor(ms / spd);
  let thisXOff = int(map(ms % spd, 0, spd, 0, spacing));

  if (thisXOff === xOff){
    return;
  }

  xOff = thisXOff;

  background(50);
  textAlign(CENTER, CENTER);
  if (firstMs == -1){
    firstMs = ms;
  }

  // console.log(fg);

  fg = min(255, fg + (ms - firstMs) / 300 );
  fill(fg);
  // fill(min(255, 50 + 3 * frameCount));

  let searchTxt = "Ada Lovelace wrote the first computer algorithm"; //  is believed by some to be the first to recognise that the Analytical Engine proposed by Charles Babbage had applications beyond pure calculation";
  let searchIdx = 0;
  let searchCh = searchTxt.charAt(searchIdx).toUpperCase();
  let searching = true;
  
  // Draw sized text
  for (let i = 0; spacing * i <= height; i++){
    let y = spacing / 2 + spacing * i;

    let prevSiz;

    for (let j = 0; spacing * j <= width; j++){
      let x = spacing / 2 + spacing * j;
      let ch = adaQuote.charAt(idx % adaQuote.length);

      // fill(255);
      let siz = sizes[i][j];

      if (j == 0){
        prevSiz = siz;
      }

      // if (searching && ch.toUpperCase() == searchCh && siz > spacing){
      //   fill("#e866ba");
      //   // siz = 48;
      //   searchIdx += 1;
      //   searchCh = searchTxt.charAt(searchIdx).toUpperCase();
      //   searching = searchIdx < searchTxt.length;
      // }

      let theSiz = lerp(siz, prevSiz, xOff / (spacing - 1));

      textSize(theSiz);
      text(ch, x - xOff, y);
      idx += 1;

      prevSiz = siz;
    }
  }



  // fill(255, 0, 0);
  // textSize(48);
  // textAlign(LEFT, TOP);
  // text(frameCount % 10, 10, 50);
  // text(spacing, 10, 100);
  // text(xOff, 10, 150);

  // console.log(i - frameCount, adaQuote.length);

  // image(img, 0, 0);

  // noLoop();
}

function keyPressed(){
  // loop();
}

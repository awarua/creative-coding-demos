
let a = [1, 2, 3, 4, 5, 'a'];

function resetTest(){
  a = [1, 2, 3, 4, 5];
}

function testFunction(fn){
  // evalFn(fn);
  let aCpy = a.slice();

  // console.log(fn);
  // res = evalFn(`(() => {let a = [${a.toString()}]; ${fn}; return a;})()`);
  res = evalFn(fn);
  // console.log('after evalFn()', fn);
  // console.log(res);
  // console.log(a);
  if (!res.exception){
    // a = res.value;
    console.log('result', res.value);
  } else {
    a = aCpy.slice();
    showException(res.exception);
  }
}

function drawFunction(){
  background(220);
  noStroke();
  textAlign(CENTER, CENTER);
  let s = 48;
  textSize(s);

  let txtA = aToS(a);

  let txt = txtA.toString().replace(/,/gi, ',');
  txt = `a = [${txt}]`;
  // console.log(a.length);

  let w = textWidth(txt.toString());
  if (w > 0.9 * width){
    s = 0.9 * s * width / w;
    console.log(s);
    textSize(s);
  }

  // push();
  // stroke(0, 20);
  // noFill();
  // rect(0, 50, width, height - 30);
  // pop();

  text(txt, 0, 30, width, height - 30);

  if (a.length <= 2){
    showTiger();
  }

  noLoop();
}

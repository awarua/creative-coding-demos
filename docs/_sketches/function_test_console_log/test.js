let args = [];

function resetTest(){
  args = [];
}

function testFunction(fn){
  // evalFn(fn);
  // let aCpy = a.slice();

  (function(){
    var oldLog = console.log;
    console.log = function(){
      args = arguments;
      // msg = arguments.join(", ");
      oldLog.apply(console, arguments);
    };
  })();

  // console.log(fn);
  // res = evalFn(`(() => {let a = [${a.toString()}]; ${fn}; return a;})()`);
  res = evalFn(fn);
  // console.log('after evalFn()', fn);
  // console.log(res);
  // console.log(a);
  if (!res.exception){
    // a = res.value;
  } else {
    // a = aCpy.slice();
    showException(res.exception);
  }
}

function drawFunction(){
  background(220);
  noStroke();
  textAlign(CENTER, CENTER);
  let s = 48;
  textSize(s);

  let txt = argsToS(args);

  txt = txt.toString().replace(/,/gi, ',');
  txt = `> ${txt}`;
  // console.log(a.length);

  let w = textWidth(txt.toString());
  if (w > 0.9 * width){
    s = 0.9 * s * width / w;
    // console.log(s);
    textSize(s);
  }

  // push();
  // stroke(0, 20);
  // noFill();
  // rect(0, 50, width, height - 30);
  // pop();

  text(txt, 0, 30, width, height - 30);

  if (args[0] === "tiger"){
    showTiger();
  }

  noLoop();
}

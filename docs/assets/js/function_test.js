// To use this from a jekyll page, call with the following code.
// {% include function_test_iframe.html function="fill" args="255, 0, 0" evalFn="tut02/code/fill_function_test/fill.js" %}

let inDiv;
let exDiv;
let eSpan;
let fSpan;
let aSpan;
let btn;
let rst;
// let query = {};
let doEval = false;
let tigerGif;
let currentArgs = [];

function preload(){
  // let msgs = location.search.substr(1).replace(/%20/g, ' ').split('&');
  // for (let m of msgs){
  //   let [k, v] = m.split('=');
  //   query[k] = v;
  // }

  // let scrElem = document.createElement("script");
  // scrElem.src = query.e;
  // document.head.appendChild(scrElem);

  if (typeof(testPreload) == "function"){
    testPreload();
  } 
  
  // tigerGif = createImg("../images/stickers/tiger.gif");
  // tigerGif.addClass("sticker");
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  tigerGif = select("#tiger");
  tigerGif.hide();
  tigerGif.parent(select('main'));

  fSpan = select("#f");
  aSpan = select("#a");
  eSpan = select("#e");
  fSpan.html(function_test.fn); 
  aSpan.html(function_test.args);
  aSpan.attribute('contentEditable', 'true');
  aSpan.elt.addEventListener('keypress', (evt) => {handleASpanKeydown(evt);});
  aSpan.elt.addEventListener('paste', (evt) => {console.log(evt); evt.preventDefault();});

  // on('paste', function(e) {
    //strips elements added to the editable tag when pasting
    // var $self = $(this);
    // setTimeout(function() {$self.html($self.text());}, 0);

  inDiv = select('#in_div');
  inDiv.show();
  inDiv.parent(select('main'));

  exDiv = select('#ex_div');
  // exDiv.show();
  exDiv.parent(select('main'));

  btn = select("#b");
  btn.mousePressed((e) => {return handleButtonPress(e);});

  rst = select("#r");
  rst.mousePressed((e) => {return handleResetPress(e);});
}


function draw(){
  if (doEval){
    clearException();

    let fnTxt = `${fSpan.html()}(${aSpan.html().replace(/&nbsp;/, ' ')})`;

    if (typeof(testFunction) == "function"){
      testFunction(fnTxt);
    } else {
      evalFn(fnTxt);
    }  
    doEval = false;
  }
  if (typeof(drawFunction) == "function"){
    drawFunction();
  } else {
    background(220);
    console.log('no drawFunction provided');
  }
}

function handleASpanKeydown(evt){
  if (evt.keyCode === 13) {
    handleButtonPress();
    evt.preventDefault();
  }

  // console.log(keyCode);
  // if (key ==)
  // $("#idContentEditable").keypress(function(e){ return e.which != 13; });
}

function handleButtonPress(evt){
  doEval = true;
  loop();
  event.preventDefault();
  return false;
}

function handleResetPress(evt){
  aSpan.html(function_test.args);
  if (typeof(resetTest) == "function"){
    resetTest();
  }
  tigerGif.hide();
  clearException();
  doEval = false;
  loop();
  event.preventDefault();
  return false;
}

function evalFn(fnTxt){
  let result = {
    value: null,
    exception: false
  };
  try {
    result.value = eval(fnTxt);
  } catch(e) {
    console.log(e);
    result.exception = e;
  }
  return result;
}

function showException(ex){
  eSpan.html(ex.toString());
  exDiv.show();
}

function clearException(){
  eSpan.html('');
  exDiv.hide();
}

function aToS(ary){
  let retAry = ary.slice();

  for (let i = 0; i < ary.length; i++){
    retAry[i] = prettyPrint(ary[i]);
  }

  // console.log('ary', retAry);

  return retAry;
}

function prettyPrint(elem){
  let t = typeof(elem);
  let retStr = elem.toString();

  if (t == "string"){
    let txt = elem.replace(/"/gi, '\"');
    retStr = `"${txt}"`;
  } else if (Array.isArray(elem)) {
    retStr = `Array(${elem.length})`;
  } else if (t == "object"){
    retStr = "Object";
  } else if (t == "undefined") {
    retStr = "empty";
  }
  return retStr;
}

function argsToS(args){
  let retAry = [];
  for (let i = 0; i < args.length; i++){
    retAry.push(prettyPrint(args[i]));
  }

  return retAry;
}

function showTiger(){
  // console.log(`placing tiger at: w ${width}, h ${height}`);
  tigerGif.position(max(0, width - tigerGif.elt.width), max(0, height - tigerGif.elt.height));
  tigerGif.show();
}
// TODO: Lowercase keys get the uppercase keyCode
//       Numbers get the number keyCode.

const L = -1;
const U = -2;

let rows = [
  [[['`',192], '~'],['1',['!',49]],['2',['@',50]],['3',['#',51]],['4',['$',52]],['5',['%',53]],['6',['^',54]],['7',['&',55]],['8',['*',56]],['9',['(',57]],['0',[')',48]],[['-',189],'_'],[['=',187],'+'],[['Backspace',8],null, 1.5]
  ],
  [
    [['Tab', 9],null, 1.5],[['q',81],'Q'],[['w',87],'W'],[['e',69],'E'],[['r',82],'R'],[['t',84],'T'],[['y',89],'Y'],[['u',85],'U'],[['i',73],'I'],[['o',79],'O'],[['p', 80],'P'],[['[',219],'{'],[[']',221],'}'],[['\\',220],'|']
  ],
  [
    [['CapsLock',20],null, 1.875],[['a',65],'A'],[['s',83],'S'],[['d',68],'D'],[['f',70],'F'],[['g',71],'G'],[['h',72],'H'],[['j',74],'J'],[['k',75],'K'],[['l',76],'L'],[[';',186],[':',186]],[['\'',222],['"',222]],[['Enter',13],null, 1.875]
  ],
  [
    [['Shift',16],null, 2.5],[['z',90],'Z'],[['x',88],'X'],[['c',67],'C'],[['v',86],'V'],[['b',66],'B'],[['n',78],'N'],[['m',77],'M'],[[',',188],['<',188]],[['.',190],['>',190]],[['/',191],['?',191]],[['Shift',16],null, 2.5]    
  ],
  [
    [['Control',17],null,null,50],[['Alt',18]],[['Meta',91],null,1.25],[' ',null, 6],[['Meta',93],null,1.25],[['Alt',18]],[['←',37],null,0.6875],[['↑',38],null, 0.6875],[['↓',40],null,0.6875],[['➞',39],null,0.6875]
  ],
]

let keys = [];
let keyHash = {};
let particles = [];
let lastParticle = null;

let keyPressedDisplay;
let keyTypedDisplay;
let keyReleasedDisplay;

function setup() {
  createCanvas(740, 600);
  colorMode(HSB);
  
  keyPressedDisplay = new EventDisplay(20, 120, "keyPressed()", 10, -10);
  keyTypedDisplay = new EventDisplay(160, 120, "keyTyped()", 0, 0);
  keyReleasedDisplay = new EventDisplay(300, 120, "keyReleased()", 10, 10);
  
  // console.log('textSize', textSize());
  
  let x = 15;
  let y = 360;
  
  for (let r of rows){
    y = y + 40;
    
    for (let k of r){
      let lower;
      let lowerCode;
      let upper = null;
      let upperCode = null;
      let w = k[2] ? k[2]: 1;
      let xOffset = k[3] ? k[3]: 0;
      
      if (typeof(k[0]) === 'object'){
        lower = k[0][0];
        lowerCode = k[0][1];
        // console.log('..ob', k, typeof(k[0]), k[0], lower, lowerCode);
      } else {
        lower = k[0];
        lowerCode = lower.charCodeAt(0);
      }
      
      if (k[1] !== null && typeof(k[1]) !== 'undefined'){
        if (typeof(k[1]) == 'object'){
          // console.log('k', k);
          // console.log('line 50');
          upper = k[1][0];
          upperCode = k[1][1];
        } else {
          // console.log('line 54');
          upper = k[1];
          upperCode = upper.charCodeAt(0);
        }
      } 
      
      let newKey = new Key(
        x, y, lower, lowerCode, upper, upperCode, w, xOffset
      );
      
      keys.push(newKey)
      
      if (keyHash.hasOwnProperty(lowerCode)){
        keyHash[lowerCode].push(newKey);   
      } else {
        keyHash[lowerCode] = [newKey];          
      }
      
      if (upperCode){
        if (keyHash.hasOwnProperty(upperCode)){
          keyHash[upperCode].push(newKey);
        } else {
          keyHash[upperCode] = [newKey];
        }
      }
        
      // console.log(newKey.lower, newKey.lowerCode, newKey.upper, newKey.upperCode);

      x = newKey.x + newKey.w + 10;
    }
    
    x = 15;
  }
  
  cursor(CROSS);
  
}

function draw() {
  background(80);

  push();
  noStroke();
  fill(0);
  text(`keyIsPressed: ${keyIsPressed}`, 10, 20);    
  text(`key: '${key}'`, 10, 40);
  text(`keyCode: ${keyCode}`, 10, 60);
  pop();
    
  if (keyIsPressed){
    // console.log('key', key, keyCode)
    let charCode = keyCode;
    // if (keyCode == 229){
    //   charCode = key.charCodeAt(0);
    // }
    
    if (keyHash.hasOwnProperty(keyCode)){
      keyHash[keyCode].forEach(k => k.isPressed = true);
      // Emit a particle
      let k = keyHash[keyCode][0];
      
      if (lastParticle && lastParticle.key == key){
        lastParticle.d = lastParticle.d + 1;
      } else {
        if (lastParticle){
          particles.push(lastParticle);
        }
        lastParticle = new Particle(k.x + k.w / 2, k.y + k.h / 2, key, keyCode);
      }
    }
  } else {
    if (lastParticle){
      particles.push(lastParticle);
    }
    lastParticle = null;
  }
  
  for (let k of keys){
    k.show();
    k.reset();
  }
  
  keyPressedDisplay.show();
  keyTypedDisplay.show();
  keyReleasedDisplay.show();

  keyPressedDisplay.update();
  keyTypedDisplay.update();
  keyReleasedDisplay.update();  
  
  for (let i = particles.length - 1; i >= 0; i--){
    let p = particles[i];
    // console.log('p', p.msg);
    p.update();
    p.show();
        
    if (p.y + p.d / 2 < 0){
      particles.splice(i, 1);
    }
  }
  
  if (lastParticle){
    lastParticle.show();
  }
}

function keyPressed(){
  if (keyHash.hasOwnProperty(keyCode)){
    let k = keyHash[keyCode][0];
    keyPressedDisplay.trigger(k, key, keyCode);
  }
}

function keyTyped(){
  if (keyHash.hasOwnProperty(keyCode)){
    let k = keyHash[keyCode][0];
    keyTypedDisplay.trigger(k, key, keyCode);
  }
}

function keyReleased(){
  if (keyHash.hasOwnProperty(keyCode)){
    let k = keyHash[keyCode][0];
    keyReleasedDisplay.trigger(k, key, keyCode);
  }
}


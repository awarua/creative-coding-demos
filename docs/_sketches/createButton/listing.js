/* 
 * Simple demonstration of adding a button in P5js
 * Jared Donovan: 2021
 */

// Global variable to hold button object
let btn;

function setup() {
  // Canvas setup and formatting omitted

  // Create a new button with given text
  btn = createButton('Click me!');

  // Position the button on the canvas. If you leave this out, 
  // the button will be added to the html page beneath the canvas.
  btn.position(10, 10);

  // Hook up the 'sayHello' function to be triggered when pressed
  btn.mousePressed(sayHello);
}

function draw() {
 background(0, 10);
}

// This function will be called whenever the button is clicked
function sayHello(){
  text("Hello!", width / 2, height / 2);
}
let xCoord = 0
let yCoord = 0
const rectWidth = 50
const rectHeight = 50
let r, g, b
/**
You always need a setup function in p5.js.

This gets applied just once upon the initial
load of your sketch.
**/
function setup() {
    createCanvas(800, 600)
    background(0)
    r = random(255)
    g = random(255)
    b = random(255)
}

/**
You always need a draw function in p5.js.
Right after setup(), gets executed, this gets called continuously
in the background. You can think of this function as
your primary animation loop––each "frame" of your sketch.
**/
function draw() {
    for (var i=0; i <= width/rectWidth; i++) {
        rect(i * (rectWidth + rectWidth), yCoord, rectWidth, rectHeight)
        fill(r, g, b)
        stroke(255)
    }
    yCoord += 5
    if (yCoord >= height) {
        r = random(255)
        g = random(255)
        b = random(255)
        yCoord = 0
    }
}

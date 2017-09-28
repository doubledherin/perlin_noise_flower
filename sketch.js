// http://xie-emily.com/generative_art/noise_flower.html

var centerX
var centerY
var radius
var totalDegrees = 360

function setup() {
    createCanvas(
        window.innerWidth,
        window.innerHeight
    )
    background(0)
    centerX = width / 2
    centerY = height / 2
    radius = height / 2
    angleMode(DEGREES)
}

function draw() {
    noFill()
    stroke(255, 128, 128, 25)
    beginShape()
        for (let i=0; i <=totalDegrees; i++) {
            var noiseFactor = noise(i / 40, frameCount / 120)
            var x = centerX + radius * cos(i) * noiseFactor
            var y = centerY + radius * sin(i) * noiseFactor
            curveVertex(x, y)
        }
    endShape(CLOSE)
    if (radius <= 0) {
        noLoop()
    }
    radius -= 0.65
}

var centerX
var centerY
var radius
var totalDegrees = 369
var direction
var rotation
var r = 255
var g = 128
var b = 128

function setup() {
    canvas = createCanvas(
        window.innerWidth,
        window.innerHeight
    )
    background(0)
    centerX = width / 2
    centerY = height / 2
    radius = 1
    angleMode(DEGREES)
    translateX = 0
    translateY = 0
    opacity = 255
    direction = "out"
    rotation = 24.0
}

function draw() {

    noFill()
    stroke(r, g, b, opacity)
    beginShape()
        for (let i=0; i <=totalDegrees; i++) {
            var noiseFactor = noise(i / 40, frameCount / 320)
            var x = centerX + radius * cos(i) * noiseFactor
            var y = centerY + radius * sin(i) * noiseFactor
            curveVertex(x, y)
            rotate(PI/rotation);
        }
    endShape(CLOSE)
    if (direction == "out") {
        if (radius > height / 2) {
            direction == "in"
        } else {
            radius += 0.65
        }
    } else {
        if (radius <= 0) {
            radius = 100
            direction == "out"
        } else {
            radius -= 0.65
        }
    }
    rotation += 0.1
    if (frameCount > 200) {
        translateX = 0
        translateY = 0
    }
    if (r > 255) {
        r = 0
    }
    if (g > 255) {
        g = 0
    }
    if (b > 255) {
        b = 0
    }
    if (opacity == 0) {
        opacity = 255
    }
    translateX *= frameCount
    translateY *= frameCount
    opacity -= 1
    r += 1
    g += 1
    b += 1
}

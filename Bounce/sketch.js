let cx = 0;
let hastighed = 4;
let diameter = 50;
let a=[10,20,30,50,60,70,80,90,100]

function setup() {
    createCanvas(600, 600);

}

function draw() {
    background(220);
    circle(cx, 300, diameter);

    if (cx > width - diameter / 2) {
        position = -hastighed
    }
    if (cx < 0 + diameter / 2) {
        position = hastighed
    }
    cx = cx + position
}
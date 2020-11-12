function setup() {
  createCanvas(600, 800);
  fill(0, 0, 0)
}

function draw() {
  background(220);
  circle(20, 20, 15)
  circle(580, 20, 15)
  circle(width/2, mouseY, 15)
  line(20, 20, width/2, mouseY)
  line(580, 20, width/2, mouseY)

  let n = map(mouseX, 20, width, 2, 10, true);
  n = round(n)
}
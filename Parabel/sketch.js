function setup() {
  createCanvas(600, 600);
  fill(0, 0, 0);
}

function draw() {
  background(220);
  circle(20, 20, 10);
  circle(width - 20, 20, 10);
  circle(width / 2, mouseY, 10);
  line(20, 20, 300, mouseY);
  line(width - 20, 20, 300, mouseY);

  let n = map(mouseX, 20, width/2, 2, 10);
  n = round(n)

  for (let i = 0; i <= n; i++) {
      const x1 = map(i, 0, n, 20, width / 2, true)
      const y1 = map(i, 0, n, 20, mouseY, true)
      const x2 = map(i, 0, n, width / 2, width - 20, true)
      const y2 = map(i, 0, n, mouseY, 20, true)
      circle(x1, y1, 10)
      circle(x2, y2, 10)
      line(x1, y1, x2, y2)
  }
}

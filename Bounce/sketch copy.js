let balls = new Array(10);
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < balls.length; i++) {
    let d = random(50, 120)
    balls[i] = new RandomBall(random(width - d, 0 + d), random(height - d, 0 + d));
  }
}
 
function draw() {
  background(220);
  for (let i = 0; i < balls.length; i++) {
    const b = balls[i]
    b.render();
    b.update();
  }
}
 
class RandomBall {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.d = random(50, 120)
    const sMax = 10
    this.speedX = random(-sMax, sMax)
    this.speedY = random(-sMax, sMax)
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
 
    if (this.x + this.d / 2 > width || this.x - this.d / 2 < 0) {
      this.speedX = -this.speedX
    }
    if (this.y + this.d / 2 > height || this.y - this.d / 2 < 0) {
      this.speedY = -this.speedY
    }
  }
  render() {
    circle(this.x, this.y, this.d)
  }
}

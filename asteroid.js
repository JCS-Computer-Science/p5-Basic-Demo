class Asteroid extends Sprite {
	constructor(x, y, size) {
		super(x, y, size);
		this.xVel = random(-0.5, 0.5);
		this.yVel = random(-0.5, 0.5);
	}
	draw() {
		noFill();
		stroke("white");
		circle(this.x, this.y, this.size);
	}
}

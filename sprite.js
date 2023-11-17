class Sprite {
	xVel = 0;
	yVel = 0;
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
	}
	draw() {
		circle(this.x, this.y, this.size);
	}
	move() {
		this.x += this.xVel;
		this.y += this.yVel;
		if (this.x < 0) {
			this.x = width;
		}
		if (this.x > width) {
			this.x = 0;
		}
		if (this.y < 0) {
			this.y = height;
		}
		if (this.y > height) {
			this.y = 0;
		}
	}
}

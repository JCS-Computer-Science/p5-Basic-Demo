const ROTATE_SPEED = 6;
const ACCEL = 0.2;
const SHIP_SIZE = 25;

class Ship extends Sprite {
	angle = 0;
	constructor(x, y) {
		super(x, y, SHIP_SIZE);
	}
	draw() {
		stroke(255);
		noFill();

		push();

		translate(this.x, this.y);
		rotate(-this.angle);
		triangle(0, -15, -10, 10, 10, 10);

		pop();

		stroke(255, 0, 0);
		circle(this.x, this.y, this.size);
	}
	control() {
		if (keyIsDown(LEFT_ARROW)) {
			this.angle += ROTATE_SPEED;
		}
		if (keyIsDown(RIGHT_ARROW)) {
			this.angle -= ROTATE_SPEED;
		}
		if (keyIsDown(UP_ARROW)) {
			let xAccel = -ACCEL * sin(this.angle);
			this.xVel += xAccel;

			let yAccel = -ACCEL * cos(this.angle);
			this.yVel += yAccel;
		}
	}
}

const LASER_SIZE = 5;
const LASER_SPEED = 2;

class Laser extends Sprite {
	constructor(x, y, angle) {
		super(x, y, LASER_SIZE);
		this.xVel = -LASER_SPEED * sin(angle);
		this.yVel = -LASER_SPEED * cos(angle);
	}
}

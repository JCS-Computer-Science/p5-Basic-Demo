let circles = [];

function setup() {
	createCanvas(600, 400);
}
function draw() {
	background(100, 100, 100);

	for (let i = 0; i < circles.length; i++) {
		circles[i].draw();
		circles[i].update();
	}
}

function mouseClicked() {
	let b = new Ball(mouseX, mouseY);
	circles.push(b);
}

class Ball {
	speed = 0;
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	draw() {
		circle(this.x, this.y, 50);
	}
	update() {
		this.speed = this.speed + 0.2;
		this.y = this.y + this.speed;
		if (this.y > height - 25) {
			this.y = height - 25;
			this.speed = this.speed * -0.7;
		}
	}
}

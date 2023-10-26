let circles = [];

function setup() {
	createCanvas(600, 400);
}
function draw() {
	background(100, 100, 100);

	for (let i = 0; i < circles.length; i++) {
		circle(circles[i].x, circles[i].y, 50);
		applyPhysics(circles[i]);
	}
}

function mouseClicked() {
	let newCircle = {
		x: mouseX,
		y: mouseY,
		speed: 0,
	};
	circles.push(newCircle);
}

function applyPhysics(c) {
	c.speed = c.speed + 0.2;
	c.y = c.y + c.speed;
	if (c.y > height - 25) {
		c.y = height - 25;
		c.speed = c.speed * -0.7;
	}
}

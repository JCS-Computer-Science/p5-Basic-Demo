let asteroids = [];

function setup() {
	createCanvas(600, 400);
	for (let i = 0; i < 10; i++) {
		let randX = random(width);
		let randY = random(height);
		let randSize = random(15, 70);
		asteroids.push(new Asteroid(randX, randY, randSize));
	}
}
function draw() {
	background(0);

	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].draw();
		asteroids[i].move();
	}
}

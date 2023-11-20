let asteroids = [];
let player;

function setup() {
	createCanvas(600, 400);
	angleMode(DEGREES);
	player = new Ship(width / 2, height / 2);
	for (let i = 0; i < 10; i++) {
		let randX = random(width);
		let randY = random(height);
		let randSize = random(15, 70);
		asteroids.push(new Asteroid(randX, randY, randSize));
	}
}
function draw() {
	background(0);
	player.control();
	player.move();
	player.draw();
	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].draw();
		asteroids[i].move();
		if (player.isColliding(asteroids[i])) {
			console.log("colliding");
		}
	}
}

let asteroids = [];
let lasers = [];

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
	for (let i = 0; i < lasers.length; i++) {
		lasers[i].move();
		lasers[i].draw();
		for (let j = 0; j < asteroids.length; j++) {
			if (lasers[i].isColliding(asteroids[j])) {
				lasers.splice(i, 1);
				if (asteroids[j].size > 30) {
					asteroids.push(new Asteroid(asteroids[j].x, asteroids[j].y, random(15, 30)));
					asteroids.push(new Asteroid(asteroids[j].x, asteroids[j].y, random(15, 30)));
				}
				asteroids.splice(j, 1);
				break;
			}
		}
	}
}

function keyPressed() {
	if (key == " ") {
		lasers.push(new Laser(player.x, player.y, player.angle));
	}
}

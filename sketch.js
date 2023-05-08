let karte
let schiff
let current_x = 250
let current_y = 250
let x = current_x
let y = current_y
let size = 150
let speed = 0.02

function preload() {
	karte = loadImage('Schatzinsel.png')
	schiff = loadImage('Schiff.png')
	console.log(schiff);
}

function setup() {
	createCanvas(1280, 720)
}

function draw() {
	current_x = lerp(current_x, x, speed)
	current_y = lerp(current_y, y, speed)

	image(karte, 0, 0)

	image(schiff, current_x, current_y, size, size)


}

function distance(x1, y1, x2, y2) {
	let dx = x1 - x2
	let dy = y1 - y2
	return sqrt(dx*dx + dy*dy)
}

function mouseClicked() {
	x = mouseX - size/2
	y = mouseY - size/2
}

function keyPressed() {
	if (key = 'r') {
		x = 250
		y = 250
	}
}
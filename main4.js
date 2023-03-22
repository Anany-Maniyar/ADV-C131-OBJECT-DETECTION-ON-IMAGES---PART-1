img = "";

function preload() {
    img = loadImage('desk.png');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("laptop  80%", 187, 22);
    noFill();
    stroke("#FF0000");
    rect(182, 8, 500, 420);
}

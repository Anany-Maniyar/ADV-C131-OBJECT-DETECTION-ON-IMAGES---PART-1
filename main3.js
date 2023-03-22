img = "";

function preload() {
    img = loadImage('TV.png');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("TV  88%", 190, 280);
    noFill();
    stroke("#FF0000");
    rect(170, 260, 250, 170);
}

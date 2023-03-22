img = "";

function preload() {
    img = loadImage('bed.png');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("bed  97%", 130, 150);
    noFill();
    stroke("#FF0000");
    rect(120, 130, 450, 280);
    rect(10, 140, 110, 280);
    text("chair  56%", 20, 160);
}

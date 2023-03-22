img = "";

function preload() {
    img = loadImage('bottle.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("bottle  74%", 82, 77);
    text("bottle  90%", 255, 97);
    text("bottle  56%", 455, 97);
    noFill();
    stroke("#FF0000");
    rect(72, 63, 120, 420);rect(242, 83, 120, 420);rect(442, 83, 120, 420);
}

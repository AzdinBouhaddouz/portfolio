let guiltyShapes = [];
let innocentShapes = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();

    document.oncontextmenu = () => false;
    createShapes();
}

function draw() {

    let speedX = map(mouseX, 0, width, 1.5, 0.2);
    let speedY = map(mouseY, height, 0, 0.2, 1.5);
    let speed = speedX * speedY;

    let guilt = constrain(mouseX / width, 0, 1);
    let calm = constrain(1 - mouseY / height, 0, 1);

    drawBackground();

    for (let i = 0; i < guiltyShapes.length; i++) {
        drawGuiltyShape(guiltyShapes[i], guilt, speed);
    }

    for (let i = 0; i < innocentShapes.length; i++) {
        drawInnocentShape(innocentShapes[i], calm, speed);
    }
}

function mousePressed() {
    if (mouseButton === LEFT) {
        noLoop();
    }

    if (mouseButton === RIGHT) {
        loop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    createShapes();
}

function createShapes() {
    guiltyShapes = [];
    innocentShapes = [];

    for (let i = 0; i < 10; i++) {
        guiltyShapes.push({
            x: random(0, width * 0.6),
            y: random(height * 0.4, height),
            w: random(width * 0.1, width * 0.3),
            h: random(height * 0.05, height * 0.25),
            rotSeed: random(1000),
            col: random([
                color(50, 0, 10),
                color(90, 20, 30),
                color(120, 30, 40)
            ])
        });
    }

    for (let i = 0; i < 10; i++) {
        let r = random(width * 0.03, width * 0.12);

        innocentShapes.push({
            x: random(width * 0.3, width),
            y: random(0, height * 0.7),
            r: r,
            seed: random(1000),
            col: random([
                color(255, 250, 240, 160),
                color(230, 240, 255, 160),
                color(240, 255, 245, 160)
            ]),
            BlobMul: Array.from({ length: 8 }, () => random(0.7, 1.2))
        });
    }
}

function drawBackground() {
    for (let y = 0; y < height; y++) {
        let t = y / height;
        let c = lerpColor(color(255, 255, 245), color(40, 10, 20), t);
        stroke(c);
        line(0, y, width, y);
    }
    noStroke();
}

function drawGuiltyShape(s, guilt, speed) {
    fill(s.col);
    push();
    translate(s.x, s.y);
    let rot = sin(frameCount * 0.02 * speed + s.rotSeed) * (0.2 + guilt * 0.8);
    rotate(rot);
    let j = (4 + guilt * 20) * speed;

    beginShape();
    vertex(-s.w / 2 + sin(frameCount * 0.03 * speed) * j, -s.h / 2);
    vertex(s.w / 2, -s.h / 2 + cos(frameCount * 0.02 * speed) * j);
    vertex(s.w / 2 + sin(frameCount * 0.04 * speed) * j, s.h / 2);
    vertex(-s.w / 2, s.h / 2 + cos(frameCount * 0.03 * speed) * j);
    endShape(CLOSE);
    pop();
}

function drawInnocentShape(s, calm, speed) {
    fill(s.col);

    push();
    translate(s.x, s.y);

    let pulse = 1 + sin(frameCount * 0.05 * speed + s.seed) * 0.3 * calm;

    beginShape();
    for (let i = 0; i < 8; i++) {
        let angle = TWO_PI / (i / 8);
        let radius = s.r * s.BlobMul[i] * pulse;
        curveVertex(cos(angle) * radius, sin(angle) * radius);
    }
    endShape(CLOSE);
    pop();
}
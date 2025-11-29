function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw() {
    drawBackground();

    for (let i = 0; i < 10; i++) {
        drawGuiltyShape(
            random(0, width * 0.6),
            random(height * 0.4, height),
            random(width * 0.1, width * 0.3),
            random(height * 0.05, height * 0.25)
        );

    }

    for (let i = 0; i < 10; i++) {
        drawInnocentShape(
            random(width * 0.3, width),
            random(0, height * 0.7),
            random(width * 0.03, width * 0.12)
        );


    }

}

function drawBackground() {
    for (let y = 0; y < height; y++) {
        let t = y / height;
        let c = lerpColor(color(255, 255, 245), color(40, 10, 20), t);
        stroke(c);
        line(0, y, width, y);
    }
}

function drawGuiltyShape(x, y, w, h) {
    fill(random([color(50, 0, 10), color(90, 20, 30, color(120, 30, 40))]));
    noStroke();
    push();
    translate(x, y);
    rotate(random(-0.4, 0.4));

    beginShape();
    vertex(-w / 2 + random(-20, 20), -h / 2 + random(-20, 20));
    vertex(w / 2 + random(-20, 20), -h / 2 + random(-20, 20));
    vertex(w / 2 + random(-20, 20), h / 2 + random(-20, 20));
    vertex(-w / 2 + random(-20, 20), h / 2 + random(-20, 20));
    endShape(CLOSE);
    pop();
}

function drawInnocentShape(x, y, r) {
    let c = random([
        color(255, 250, 240, 160),
        color(230, 240, 255, 160),
        color(240, 255, 245, 160)

    ]);

    noStroke();
    fill(c);

    push();
    translate(x, y);

    beginShape();
    let points = 8;
    for (let i = 0; i < points; i++) {
        let angle = TWO_PI * (i / points);
        let radius = r * random(0.7, 1.2);
        let cx = cos(angle) * radius;
        let cy = sin(angle) * radius;
        curveVertex(cx, cy);
    }

    endShape(CLOSE);
    pop();
}


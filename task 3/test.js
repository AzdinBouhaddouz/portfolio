function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop(); // geen animatie
}

function draw() {
    drawBackground();

    // SCHULDIGE VORMEN (hoekig, donker)
    for (let i = 0; i < 10; i++) {

        random(0, width * 0.6),
            random(height * 0.4, height),
            random(width * 0.1, width * 0.3),
            random(height * 0.05, height * 0.25);

    }

    // ONSCHULDIGE VORMEN (zacht, licht)
    for (let i = 0; i < 12; i++) {

        random(width * 0.3, width),
            random(0, height * 0.7),
            random(width * 0.03, width * 0.12);

    }
}

/* ------------------------------
   ACHTERGROND (licht → donker)
--------------------------------*/
function drawBackground() {
    for (let y = 0; y < height; y++) {
        let t = y / height;
        let c = lerpColor(color(255, 255, 245), color(40, 10, 20), t);
        stroke(c);
        line(0, y, width, y);
    }
}
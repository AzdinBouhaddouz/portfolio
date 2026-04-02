let zonY;
let golvenOffset = 0;
let palmbomen = [];
let vogels = [];

function setup() {
  createCanvas(800, 600);
  
  // Startpositie zon (volgt de muis)
  zonY = height / 3;
  
 
  palmbomen.push({ x: 100, schaal: 0.8 });
  palmbomen.push({ x: 650, schaal: 1.0 });
  palmbomen.push({ x: 750, schaal: 0.6 });
  
  
  for (let i = 0; i < 5; i++) {
    vogels.push({
      x: random(width),
      y: random(50, 150),
      snelheid: random(1, 3)
    });
  }
}

function draw() {
  
  tekenLucht();
  
  
  zonY = lerp(zonY, mouseY, 0.05); // Smooth beweging
  tekenZon(width / 2, constrain(zonY, 50, 400));
  
  
  tekenWolk(100, 80);
  tekenWolk(500, 120);
  tekenWolk(300, 60);
  
  
  for (let vogel of vogels) {
    tekenVogel(vogel.x, vogel.y);
    vogel.x += vogel.snelheid;
    if (vogel.x > width + 20) {
      vogel.x = -20;
    }
  }
  
  
  tekenZee();
  
  
  tekenStrand();
  
  
  for (let palm of palmbomen) {
    tekenPalmboom(palm.x, 420, palm.schaal);
  }
  
  
  fill(255, 200);
  textSize(14);
  textAlign(LEFT);
  text("Beweeg muis omhoog/omlaag voor de zon", 20, height - 20);
}



function tekenLucht() {
  
  for (let y = 0; y < height / 2; y++) {
    let tussen = map(y, 0, height / 2, 0, 1);
    let kleur = lerpColor(color(255, 150, 50), color(255, 100, 150), tussen);
    stroke(kleur);
    line(0, y, width, y);
  }
}

function tekenZon(x, y) {
  
  noStroke();
  for (let i = 100; i > 0; i -= 10) {
    fill(255, 200, 50, map(i, 0, 100, 100, 0));
    ellipse(x, y, i * 2);
  }
  
  fill(255, 220, 100);
  ellipse(x, y, 80);
}

function tekenWolk(x, y) {
  noStroke();
  fill(255, 255, 255, 150);
  ellipse(x, y, 60, 40);
  ellipse(x + 30, y, 50, 35);
  ellipse(x - 25, y + 5, 40, 30);
}

function tekenVogel(x, y) {
  stroke(50);
  strokeWeight(2);
  noFill();
  
  let flapOffset = sin(frameCount * 0.2 + x) * 5;
  beginShape();
  vertex(x - 10, y + flapOffset);
  vertex(x, y);
  vertex(x + 10, y + flapOffset);
  endShape();
  strokeWeight(1);
}

function tekenZee() {
  
  noStroke();
  fill(30, 100, 150);
  rect(0, height / 2, width, height / 2 - 100);
  
  
  
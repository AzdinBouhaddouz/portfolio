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




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


let schuldgevoel; // 0 = onschuldig, 1 = schuldig

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();


  schuldgevoel = random(0, 1);

  tekenAchtergrondKleur();   // NIEUW → achtergrond zelf verandert mee
  tekenAchtergrondSpatten();
  tekenOnschuld();
  tekenSchuld();
}

// ACHTERGRONDKLEUR

function tekenAchtergrondKleur() {
  // lichte kleur → onschuldig
  let licht = color("#faf7ff");

  // donkere kleur → schuldig
  let donker = color("#0a090b");

  // mix de twee afhankelijk van schuldgevoel
  let bg = lerpColor(licht, donker, schuldgevoel);

  background(bg);
}

//  ACHTERGRONDSPATTEN (ellipsen) 

function tekenAchtergrondSpatten() {
  let felKleuren = [
    color('#FFB3BA'),
    color('#FFDFBA'),
    color('#FFFFBA'),
    color('#BAFFC9'),
    color('#BAE1FF')
  ];

  let donkerKleuren = [
    color('#1a1a1a'),
    color('#2a0f0f'),
    color('#3d0c0c'),
    color('#120909'),
    color('#000000')
  ];

  let hoeveel = 40;

  for (let i = 0; i < hoeveel; i++) {
    let x = random(width);
    let y = random(height);
    let grootte = random(width * 0.05, width * 0.15);

    let k;
    if (schuldgevoel < 0.5) {
      k = random(felKleuren);
    } else {
      k = random(donkerKleuren);
    }

    fill(k);
    ellipse(x, y, grootte);
  }
}

// ---------- ONSCHULD (circles) ----------

function tekenOnschuld() {
  let aantal = int(map(1 - schuldgevoel, 0, 1, 3, 12));

  for (let i = 0; i < aantal; i++) {
    let x = random(width);
    let y = random(height);
    let grootte = random(width * 0.05, width * 0.15);

    let pastel = [
      color('#E6F3FF'),
      color('#FFF9E6'),
      color('#E6FFEE'),
      color('#F5E6FF')
    ];

    let c = random(pastel);

    fill(red(c), green(c), blue(c), random(120, 200));
    ellipse(x, y, grootte);
  }
}

//  SCHULD (triangles) 

function tekenSchuld() {
  let aantal = int(map(schuldgevoel, 0, 1, 3, 12));

  for (let i = 0; i < aantal; i++) {
    let x = random(width);
    let y = random(height);
    let grootte = random(width * 0.05, width * 0.25);

    let donker = [
      color('#1A0B0B'),
      color('#3D0C0C'),
      color('#5C0A0A'),
      color('#8A0E0E')
    ];

    let c = random(donker);

    fill(red(c), green(c), blue(c), random(150, 255));

    push();
    translate(x, y);
    rotate(random(TWO_PI));
    triangle(
      0, -grootte / 2,
      -grootte / 2, grootte / 2,
      grootte / 2, grootte / 2
    );
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('schuldig_onschuldig', 'png');
  }
}

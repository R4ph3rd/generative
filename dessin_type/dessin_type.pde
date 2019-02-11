String banque = "Le zèbres'estégarédansunwagonetlewapitiaparléaukoalamaisiln'apasvoulubougerd'uniota";
float x = 0, y = 0, angle = 0, couleur = 0, fond = 255;
PFont font;

void setup() {
  size(800, 1200);
  background(255);
  smooth();

  font = createFont("Fira Sans", 60);
  textFont(font, 5);
  textAlign(LEFT);
  fill(0);
}

void draw() {
  fill(couleur);

  if (mousePressed) {
    pushMatrix();
    float xpos = mouseX;
    float ypos = mouseY;
    translate(xpos, ypos);

    float distance = dist(x, y, xpos, ypos);
    char lettre = banque.charAt(int(random(banque.length())));
    float taille = map(distance, 0, 70, 3, 120);

    rotate(angle);
    textSize(taille);
    text(lettre, 0, 0);
    x = xpos;
    y = ypos;

    popMatrix();
  }
}

void keyPressed() {
  if (key == 'a' || key == 'A') background(255);
  
  if (key == 'r' || key == 'R') angle += PI/12;
  else angle = 0;
  
  if (keyCode == LEFT){
   couleur += 20;
   fond -= 20;
   background(fond);
  }
  
  if (keyCode == RIGHT){
    couleur -= 20;
    fond += 20;
    background(fond);
  }
}

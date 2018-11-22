float time = 0;

void setup() {
  size(800, 800);
  background(0);
}

void draw() {
  background(0, 2);
  for (float x = 0; x <= width; x = x + 20) {
    for (float y = 0; y <= height; y = y + 20) {

      float xAngle = map(mouseX, 0, width, 0, 360);
      float yAngle = map(mouseY, 0, height, 0, 360);
      // and also varies based on the particle's location
      float angle = xAngle * (x / width) + yAngle * (y / height);


      float myX = x + 20 * cos(2 * PI * time + angle);
      float myY = y + 20 * sin(2 * PI * time + angle);

      noStroke();
      fill(x, random(255), y);
      ellipse(myX, myY, 15, 15); // draw particle
      //avec un rect + rectMode center et souris pointée en haut à gauche, damier qui bouche ensemble!
    }
  }

  time += 0.01; // update time
}

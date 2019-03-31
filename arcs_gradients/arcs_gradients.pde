int nb = 13;
int mx_forms ;
int ct, ci; //colors picked
PVector[] pos = new PVector[nb];
color[] c = new color[6];

void setup() {
  size(900, 900);
  background(15);
  colorMode(HSB, 360, 100, 100);
  smooth();
  //randomSeed(1234);


  c[0] = color(250, 90, 81); // violet foncé
  c[1] = color(240, 96, 36); //bleu très foncé
  c[2] = color(238, 29, 94); //bleu foncé
  c[3] = color(233, 71, 91); //bleu moyen
  c[4] = color(240, 7, 94); // blanc
  c[5] = color(288, 94, 96); // rose



  mx_forms = int (random(12, 16));
  /*  noFill();
   stroke(255);
   strokeWeight(2);*/
  noStroke();
  ell();
}

void ell() {

  //big circles on background
  for (int i = 0; i < 4; i ++) {
    float x = random(width);
    float y = random(height);
    float radius = random ( (width / 1.3 ) - (width / 4), (width / 1.3 ) + (width / 6));
    ci = int(random(c.length - 1));
    ct = int(random(c.length - 1));

    for (int k = int(radius); k > 0; k --) {
      float km = map (k, radius, 0, 0, 1);
      color h = lerpColor(c[ci], c[ct], km);
      fill(h);
      ellipse(x, y, k, k);
    }
  }

  for (int i = 0; i < mx_forms; i++) {
    pushMatrix();
    // calculate pos & ang
    float x = random(width * 0.98);//((i + 5) * 20) * cos(i) ;
    float y = random(height * 0.95); //((i + 5) * 20) * sin(i);
    int rad = int(random(20, 230)) ;
    int fullrad = int(random(rad * 0.2, rad));
    boolean pivot = random(1) < 0.5;

    translate(x, y);
    if (pivot) rotate(PI);

    //shade
    color w = c[int(random(c.length - 1))];
    if ( map(fullrad, rad * 0.2, rad, 0, 1) > 0.5) {
      noFill();
      for (int k = rad; k > fullrad; k --) {
        float a = map(k, rad, fullrad, 0, 90);
        strokeWeight(1);
        stroke(w, a);
        arc(0, 0, k, k, 0, PI);
      }
      noStroke();
    } else {
      for (int k = rad + rad / 4; k > rad; k --) {
        println("k = ", k);
        float a = map(k, rad + rad / 3, rad, 0, 90);
        println("a = ", a);
        stroke(w, a);
        strokeWeight(1);
        noFill();
        ellipse(0, 0, k, k);
      }
      noStroke();
    }

    //draw shapes + gradient _principal shape
    ct = int(random(c.length - 1));
    ci = int(random(c.length - 1));
    for (int k = fullrad; k > 0; k--) {
      float km = map (k, fullrad, 0, 0, 1);
      color h = lerpColor(c[ci], c[ct], km);
      fill(h);
      arc(0, 0, fullrad, fullrad, 0, PI);
    }

    //reverse _larger
    rotate(PI);
    ct = int(random(c.length - 1));
    ci = int(random(c.length - 1));
    for (int k = rad; k > 0; k--) {
      float km = map (k, rad, 0, 0, 1);
      color h = lerpColor(c[ct], c[ci], km);
      fill(h);
      arc(0, 0, k, k, 0, PI);
    }

    ct = int(random(c.length - 1));
    ci = int(random(c.length - 1));
    for (int k = rad / 2; k > 0; k--) {
      float km = map (k, rad/2, 0, 0, 1);
      color h = lerpColor(c[ct], c[ci], km);
      fill(h);
      arc(0, 0, k, k, 0, PI);
    }

    ct = int(random(c.length - 1));
    ci = int(random(c.length - 1));
    for (int k = rad / 5; k > 0; k--) {
      float km = map (k, rad / 5, 0, 0, 1);
      color h = lerpColor(c[ct], c[ci], km);
      fill(h);
      arc(0, 0, k, k, 0, PI);
    }

    float k = rad / 8;
    fill(c[1]);
    arc(0, -0.2, k, k, 0, PI);

    popMatrix();
  }
}

void draw() {
}

void keyPressed() {
  if (key =='s' || key == 'S') saveFrame("arcs_gradient-###.png");
}

void mouseClicked(){
 background(15);
 ell();
}

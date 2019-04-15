import peasy.*;
CameraState state;
PeasyCam cam;

int maxag = 40000;
Agent[] agent = new Agent[maxag];
float noiseStep, noiseForce ;
float strokeWidth = 0.3;
color[] c = new color[4];

void setup() {
  size(900, 900, P3D);
  smooth();
  strokeWeight(1);
    cam = new PeasyCam(this, 400);
  state = cam.getState();

  noiseStep = random(150, 600);
  noiseForce = random(20);

 /* c[0] = color(210, 18, 250); //rose
  c[1] = color(250, 54, 5); //rouge 
  c[2] = color(5, 84, 250); // bleu
  c[3] = color(250, 197, 5); //jaune */
  
  c[0] = color(12, 79, 245); //cyan ++
  c[1] = color(12, 118, 245); //bleu ciel
  c[2] = color(26, 24, 198); // bleu klein
  c[3] = color(144, 196, 250); //bleu pale


  for (int i = 0; i < maxag; i ++) agent[i] = new Agent();
}

void draw() {
  noStroke();
  fill(10);
  //rect(0, 0, width* 5, height *5);
  box(10 * height);
  stroke(255);

  for (int i = 0; i < maxag; i ++) {
    agent[i].update();
    agent[i].display();
  }
}

void keyPressed() {
  if (key == 's' || key == 'S' ) saveFrame("noisy_fluctuations-###.png");

  if (key == ENTER ) {
    pushMatrix();
      fill(10);
      noStroke();
  //rect(0, 0, width* 5, height *5);
  box(10 * height);
  popMatrix();
    noiseStep = random(150, 600);
    noiseForce = random(20);
    for (int i = 0; i < maxag; i ++) agent[i] = new Agent();
    
  }
}

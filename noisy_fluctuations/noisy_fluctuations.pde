int maxag = 40000;
Agent[] agent = new Agent[maxag];
float noiseStep, noiseForce ;
float strokeWidth = 0.3;
color[] c = new color[4];

void setup() {
  size(900, 900, P2D);
  smooth();
  strokeWeight(1);

  noiseStep = random(150, 600);
  noiseForce = random(20);

  c[0] = color(210, 18, 250); //rose
  c[1] = color(250, 54, 5); //rouge 
  c[2] = color(5, 84, 250); // bleu
  c[3] = color(250, 197, 5); //jaune 

  for (int i = 0; i < maxag; i ++) agent[i] = new Agent();
}

void draw() {
  noStroke();
  fill(10, 10);
  rect(0, 0, width, height);

  stroke(255);

  for (int i = 0; i < maxag; i ++) {
    agent[i].update();
    agent[i].display();
  }
}

void keyPressed() {
  if (key == 's' || key == 'S' ) saveFrame("noisy_fluctuations-###.png");

  if (key == ENTER ) {
    noiseStep = random(150, 600);
    noiseForce = random(20);
    for (int i = 0; i < maxag; i ++) agent[i] = new Agent();
    
  }
}

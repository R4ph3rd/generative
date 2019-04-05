import peasy.*;

OpenSimplexNoise noise;
PeasyCam cam;
CameraState state;

boolean recording = true;

float SEED;

int max = 2000;
float rad = 1.5;
float nperiod = 10.0;
float theta1 = random(20);
float theta2 = random(90);
float dx, dy, dz;
float rotation = 0;

int maxag = 40000;
Agent[] agent = new Agent[maxag];
float noiseStep, noiseForce ;
float strokeWidth = 0.3;
color[] c = new color[4];

float zpos = 0;

void setup() {
  size(900, 900, P3D);
  smooth();
  strokeWeight(1);

  noise = new OpenSimplexNoise();

  cam = new PeasyCam(this, 400);
  state = cam.getState();

  SEED = random(10, 1000);
  dx = width /2 + 100 ;
  dy = height / 2 + 100 ;
  dz = width / 2 + 100 ;


  noiseStep = random(150, 600);
  noiseForce = random(20);

  /* c[0] = color(210, 18, 250); //rose
   c[1] = color(250, 54, 5); //rouge 
   c[2] = color(5, 84, 250); // bleu
   c[3] = color(250, 197, 5); //jaune */

  c[0] = color(255, 166, 0); //orange-jaune
  c[1] = color(250, 54, 5); //rouge 
  c[2] = color(200, 247, 15); // vert
  c[3] = color(250, 197, 5); //jaune 

  for (int i = 0; i < maxag; i ++) agent[i] = new Agent();
}

void mouseWheel(MouseEvent event) {
  float e = event.getCount();
  zpos = map(e, -1000, 1000, 0, width);
}

void draw() {
  lights();
  noStroke();
  pushStyle();
  pushMatrix();
  fill(0, 100);
  /*rectMode(CENTER);
   
   rect(width / 2, height / 2, width * 20,height * 20);*/
  box(width * 5);
  popMatrix();
  popStyle();

  float orbitRadius= 50;
  float rotationc = cos(rotation);
  int t = 200 ;
  int n = t * (frameCount % t) ;
  if ( n == 1 ) println("step 1");
  int max = t + n;
  float ypos = 100 + map (frameCount, max - t, max, 0, TWO_PI * 2); //map(rotation,0,240,0,height);
  float xpos =  100 + map (frameCount, max - t, max, 0, TWO_PI * 2);//map(rotation,0,240,0,width);
  rotation ++;
  zpos = mouseX;
  println("camera position : ", xpos, "  ", ypos);


 // camera(100,100, width + width/2 + xpos - 100, width/2, height/2, 0, 0, 1, 0);
  rotation+=0.3;
  //camera(100,100,width + width /2,centerx




  /* for (int i = 0; i < max; i ++) {
   float p = 1.0 * i / max;
   float dx = 250* (float) noise.eval( SEED + rad * cos(TWO_PI * (nperiod * p )), rad * sin(TWO_PI * ( nperiod * p )), cos( theta1 - TWO_PI ));
   float dy = 250 * (float) noise.eval( 2 * SEED + rad * cos(TWO_PI * ( nperiod * p )), rad * sin(TWO_PI * ( nperiod * p )), sin(theta2 - TWO_PI ) );
   
   ellipse(dx, dy, 3, 3);
   }*/

  for (int i = 0; i < maxag; i ++) {
    agent[i].update();
    agent[i].display();
  }
  /* if (frameCount % 2 == 0) saveFrame("noisysimplex_fluctuations-###.gif"); println( frameCount / 2, "/ 60");
   if (frameCount == 120 ) noLoop();*/
}


void keyPressed() {
  if (key == 's' || key == 'S' ) saveFrame("noisy_fluctuations-###.png");

  if (key == ENTER ) {
    noiseStep = random(150, 600);
    noiseForce = random(20);
    for (int i = 0; i < maxag; i ++) agent[i] = new Agent();
  }
}

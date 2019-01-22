int n=10000;
Particle[] particules = new Particle[10];
PVector target;
float posx, posy;
float xoff, yoff;
float[] x = new float[n]; 
float[] y = new float[n]; 


void setup() {
  size(500, 500);
  background(255);
  posx = width/2;
  posy = height/2;
  smooth();
  target = new PVector(posx, posy);
  stroke(0, 64);

  for (int i = 0; i < particules.length; i++) {
    particules[i] = new Particle(int(random(0, width)), //x
      int(random(0, height))); //y
  }
}

void draw() {
  pushMatrix();
  fill(255, 20);
  rect(0, 0, width, height);
  popMatrix();

  //set new noise value
  xoff += 0.005;
  yoff += 0.006;

  for (int i =0; i < particules.length; i++) {
    particules[i].update();
    particules[i].display();
    //  particules[i].proximity();
  }
}
/*
  for(int i = length-1 ; i > 0 ; i-- ){
 x[i] = x[i-1];
 y[i] = y[i-1];
 }
 x[0]= noise(xoff) * width;
 y[0]= noise(yoff) * height;
 
 fill(0);
 ellipse(x[0],y[0],1,1);
 
 for(int i=1; i<1000; i++){
 //Distance 
 float d = dist(x[0],y[0], x[i], y[i]);
 //Probabilité de rencontre
 float p = random(20);
 if(d <= 20 && p<1){
 line(x[0], y[0],x[i - 1], y[i - 1]);
 }
 }
 }*/

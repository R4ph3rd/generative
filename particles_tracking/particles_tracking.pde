Particle [] particles = new Particle[2000];
Attractor [] attractors = new Attractor[50];

void setup(){
  size(displayWidth, displayHeight);
  background(0);
  noStroke();
  noCursor();
  
  //multiples to-reach points
 for (int i = 0 ; i < attractors.length ; i ++) attractors[i] = new Attractor();
  
  for (int i = 0 ; i < particles.length; i++) particles[i] = new Particle(); 
}

void draw(){
pushStyle();
fill(0,30);
rect(0,0,width,height);
popStyle();

//multiples to-reach points
for (int i = 0 ; i < attractors.length ; i ++) attractors[i].update();
  for( int i = 0; i < particles.length; i++){
    particles[i].update(); 
    particles[i].display(); 

  } 
}

void keyPressed(){
  
  if (keyCode == ENTER){
     for (int i = 0 ; i < attractors.length ; i ++) attractors[i] = new Attractor();
  for (int i = 0 ; i < particles.length; i++) particles[i] = new Particle(); 
  }
  
}

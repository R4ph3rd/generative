class Particle {
  PVector location, vitesse, acceleration;
  float xT,yT;
  float[] xoff = new float[n];
  float[] yoff = new float[n];


  Particle(int x, int y) {
    // particle class should have location, vitesse, acceleration, friction, and attraction
    // particles should be attracted to mouse
    location = new PVector(x, y);
    vitesse = new PVector(0, 0);
    acceleration = new PVector(0, 0);
  }

  PVector calculateAttraction(float _xT, float _yT) {
    target = new PVector(_xT, _yT);
    PVector attraction = PVector.sub(target, location); //make vector pointing towards mouse
    float distance = attraction.mag(); //distance between particle and mouse
    float m = (9.81 * 200)/(distance * distance); //formule de gravité pour calculer la force = l'accélération
    attraction.normalize(); //distance vecteur = 1
    attraction.mult(m);
    return attraction;
  }

  PVector calculateFriction() {
    PVector friction = vitesse.get();
    friction.normalize();
    friction.mult(-1); //produit scalaire
    friction.mult(0.4);
    return friction;
  }

  void update() {  
    //set new noise value
    for (int i =0 ; i <particules.length; i ++){
    xoff[i] += random(0.006);;
    yoff[i] += random(0.008);
    xT = noise(xoff[i]) * width;
    yT = noise(yoff[i]) * height;
    }
    
    for (int i = y.length-1; i > 0; i-- ) {
      x[i] = x[i-1];
      y[i] = y[i-1];
    }

    PVector attraction = calculateAttraction(xT,yT);
    PVector friction = calculateFriction();
    //float distance = PVector.dist(location, mouse);


    acceleration.add(attraction);
    acceleration.add(friction); //ici le vecteur accélération est calculé
    vitesse.add(acceleration); //la vitesse = dérivée de l'accélération
    vitesse.limit(5); //vitesse max
    location.add(vitesse); // vecteur position = dérivée de la vitesse
    // check();
    acceleration.mult(0); //clear acceleration each frame
  }

  void display() {
    ellipse(location.x, location.y, 5, 5);
  }
}


/*
  for(int i = y.length-1 ; i > 0 ; i-- ){
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

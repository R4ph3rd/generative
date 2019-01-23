class Particle {
  PVector location, vitesse, acceleration;
  //  float[] xT = new float [n];
  // float[] yT = new float[n];
  float xT, yT;
  float[] xoff = new float[n];
  float[] yoff = new float[n];
  float[] xpos = new float[n];
  float[] ypos = new float[n];
  float numDist ;//numérateur pour l'attraction, modifié pour changer le rapport m 
  ArrayList<Toile> toiles = new ArrayList();


  Particle(int x, int y) {
    // particle class should have location, vitesse & acceleration
    location = new PVector(x, y);
    vitesse = new PVector(0, 0);
    acceleration = new PVector(0, 0);
  }

  /////////////////////////////// CALCULS VECTEURS /////////////////////////
  PVector calculAttraction(float _xT, float _yT) {
    target = new PVector(_xT, _yT);
    // println("target :", target.x, "  ", target.y);
    // println("location :", location.x, "  ", location.y);
    PVector attraction = PVector.sub(target, location); //make vector pointing towards mouse
    float distance = attraction.mag(); //distance between particle and mouse
    float m = numDist /(distance * distance); //formule de gravité pour calculer la force = l'accélération
    attraction.normalize(); //distance vecteur = 1
    attraction.mult(m);
    return attraction;
  }


  PVector calculFriction() {
    PVector friction = vitesse.get();
    friction.normalize();
    friction.mult(-1); //produit scalaire
    friction.mult(0.4);
    return friction;
  }


  ///////////////////////////////////////  APPLY FORCES ///////////////////////////////////
  void applyForces() {
    PVector attraction = calculAttraction(xT, yT);
    PVector friction = calculFriction();
    acceleration.add(attraction);
    acceleration.add(friction); //ici le vecteur accélération est calculé
    vitesse.add(acceleration); //la vitesse = dérivée de l'accélération
    vitesse.limit(5); //vitesse max
  }


  ////////////// RESTER DANS L'ECRAN /////////////////////////////////
  //ensure that the particles remain on screen
  void stayHereBro() {
    PVector testZone = location; // vecteur temporaire pour faire les tests
    testZone.add(vitesse);
    int dir = (int(random(0, 2)) < 1) ? 1: -1;     //set rebound direction

    if (testZone.x > width - 10 || testZone.x < 10) {
      vitesse.x = - vitesse.x * 2; //rebondir sur la paroi,
      vitesse.y = dir * vitesse.y; //dans n'importe quelle direction
      //println("sortie X");
    }

    if (testZone.y > height - 10 || testZone.y < 10) {
      vitesse.y = - vitesse.y * 2;
      vitesse.x = dir * vitesse.y;
      //   println("sortie Y");
    }

    degagedela(testZone.x, testZone.x, dir); //zone centrale
  }

  /////////////////////// ZONE CENTRALE //////////////////////////////////
  void degagedela(float _zoneX, float _zoneY, int _dir) {
    //dégagez ! c'est le blackhole ici !
    float  trou = dist(width/2, height/2, _zoneX, _zoneY);

    if (trou < 71 && ok == false) { //si ils sont à X distance du centre et qu'il n'y a pas de food,
      int dir2 = (int(random(0, 2)) < 1) ? 1: -1;       //set rebound direction
      xT = _zoneX +( 50 * _dir );     // forcer une ejection du centre
      yT = _zoneY + ( 50 * dir2 );
      applyForces();

      //tracés fantômes ; d'où sortent-ils ?
      pushStyle();
      fill(255, 0, 0);
      noStroke();
      ellipse(_zoneX, _zoneY, 5, 5);
      popStyle();

      println("trou = ", trou);
      println("////////////", _zoneX, " ////// zoneY = ", _zoneY);
      println("vitesse = ", vitesse);
    }
  }

  /////////////////// COWARDS ////////////////////////////////////// 
  //sometimes, some of them are des petits coquins qui passent à travers les mailles du filet, et ici, c'est une dictature !
  //donc les lâches fuyant la sainte mère patrie seront éliminés sans regrets
  void killCowards(int index) {
    if (xT < 0 || xT > width || yT < 0 || yT > height) {
      //reset noise values to respawn it in the screen
      xoff[index] = 0;
      yoff[index] = 0;
      if (xT<0) xT = random(11, (width/2) - 51);
      if (xT>width) xT = random((width/2) + 51, width -11);
      if (yT<0) yT = random(11, (height/2)- 51);
      if (yT>height) yT = random((height/2)+51, height - 11);
      applyForces();
    }
  }


  /////////////////////////////// TOILE D ARAIGNEE //////////////////////////

  void toileAraignee(float _x, float _y) {
    //virer les anciennes valeurs
    if (toiles.size() > 1000) toiles.remove(0);



    if (toiles.size() >= 1000) {
      for (int i = 1; i < 1000; i++) {
        //println("toilessize ok");
        Toile t = toiles.get(i);
        //Distance 
        float d = dist(_x, _y, t.posX, t.posY);
        //Probabilité de rencontre
        float p = random(20);
        if (d <= 100 && p<1) {
          println("on peut dessiner");
          pushStyle();
          strokeWeight(2);
          stroke(0);
          line(_x, _y, t.posX, t.posY);
          popStyle();
        }
      }
    }
  }

  /////////////////// UPDATE ///////////////////////////////////////////////////////////
  void update() {  
    numDist = 20;
    for (int i =0; i <particules.length; i ++) {
      xoff[i] += random(0.006);
      yoff[i] += random(0.008);
      //float bou = map (noise(xoff[i],i*5,50), 0, 1, -5, 5);
      //float lou =  map (noise(yoff[i],i*23,15), 0, 1, -5, 5);
      // println(bou,"  ",lou);
      // xT = location.x + (bou * 2) ;
      // yT = location.y + (lou * 2);
      xT = noise (xoff[i]) * width ;
      yT = noise (yoff[i]) * height ;
    }

    //test en attendant : lorsqu'un nouvel objet apprait, diriger les points vers le centre
    if (ok == true) {
      numDist = 10000;
      target = new PVector(width/2, height/2);
      for (int i = 0; i < particules.length; i ++) {
        xT = target.x; //keep them on the central target
        yT = target.y;
      }
    }   

    applyForces();

    //vérification que l'on est pas hors champ ou dans la zone 
    if (ok == false) stayHereBro();
    location.add(vitesse); // vecteur position = dérivée de la vitesse
    acceleration.mult(0); //clear acceleration each frame

    //enregistrer les anciennes positions
    Toile oldPos = new Toile(location.x, location.y);
    toiles.add(oldPos);
  }


  /////////////////////////////// DISPLAY ////////////////////////////////
  PVector display(int _index) {
    fill(0, 255, 0);
    ellipse(location.x, location.y, 5, 5);

    toileAraignee(location.x, location.y);
    noFill();
    ellipse(width/2, height/2, 100, 100);

    killCowards(_index);
    return location;
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

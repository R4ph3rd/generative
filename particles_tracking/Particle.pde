class Particle {
  PVector pos, vel, a, proxi; 
  float siz ;

  Particle() {
    pos = new PVector(random(width), random(height));
    vel = new PVector();
    a = new PVector();
    proxi = new PVector();
    siz = random(2,5);
  }

  void update() {
    //multiples to-reach points
    proxi.set(attractors[0].pos);
    
    float d = dist(pos.x, pos.y, proxi.x, proxi.y);
    
    for (int i = 1 ; i < attractors.length ; i ++){
      if (dist(pos.x, pos.y, attractors[i].pos.x, attractors[i].pos.y) < d){
        proxi.set(attractors[i].pos.x, attractors[i].pos.y) ;
      }
    }
    a.set(proxi.x - pos.x, proxi.y - pos.y); 
    
    //unique to-reach point
    //a.set(mouseX - pos.x, mouseY - pos.y);
    a.limit(.45);
    
    vel.add(a);
    vel.limit(10);
    pos.add(vel);
  }

  void display() {
    pushStyle();
    fill(255);
    ellipse(pos.x, pos.y, siz, siz);
    popStyle();
   // oldPos.set(pos);
  }
}


/*class Particle {
  PVector pos, oldPos, vel, a; 
  float siz ;

  Particle() {
    pos = new PVector(random(width), random(height));
    oldPos = new PVector (pos.x, pos.y);
    vel = new PVector();
    a = new PVector();
    siz = random(0.5,3);
  }

  void update() {
    a = new PVector(mouseX - pos.x, mouseY - pos.y); 
    a.limit(.45);
    
    vel.add(a);
    vel.limit(10);
    pos.add(vel);
  }

  void display() {
    pushStyle();
    stroke(255);
    strokeWeight(siz);
    //ellipse(pos.x, pos.y, siz, siz);
    line(pos.x, pos.y, oldPos.x, oldPos.y);
    popStyle();
    oldPos.x = pos.x ;
    oldPos.y = pos.y ;
  }
}

*/

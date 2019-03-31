class Agent {
  PVector pos, oldPos;
  float stepSize, angle;
  float noisy, noisySpeed = 0.4;
  color cAgent ;

  //constructor
  Agent() {
    pos = new PVector(random(width), random(height));
    oldPos = new PVector(pos.x, pos.y);
    stepSize = random(1, 8);
   // int colorPos = int (map(pos.x * pos.y,0,width * height, 0, c.length));
       int cc = int (map (cos(pos.x * pos.y), -1, 0.9, 0, 3));
    if (cc > 3) cc = 3;
    cAgent = c[cc];
  }


  void update() {
    angle = map(noise(pos.x/noiseStep, pos.y/noiseStep), 0, 1, 0, TWO_PI) ;// * noiseForce;
    angle = (angle - angle * 0.8) * noiseForce;

    pos.x += cos(angle) * stepSize;
    pos.y += sin(angle) * stepSize;
    
    
//in case that it goes out 
    if ( pos.x > width + 5 || pos.x < -5 || pos.y > height + 5 || pos.y < -5) {
      pos.x = random(width);
      pos.y = random(height);
      oldPos.set(pos);
    }
    noisy += noisySpeed;
  }

  void display() {
    //strokeWeight(strokeWidth * stepSize);
    stroke(cAgent);
    line(oldPos.x, oldPos.y, pos.x, pos.y);
    oldPos.set(pos);
  }
}

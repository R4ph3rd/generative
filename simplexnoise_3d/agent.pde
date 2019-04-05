class Agent {
  PVector pos, oldPos;
  float stepSize, angle;
  float noisy, noisySpeed = 0.4;
  color cAgent ;
  int dir ;

  //constructor
  Agent() {
    pos = new PVector(random(width), random(height));
    oldPos = new PVector(pos.x, pos.y);
    stepSize = random(1, 8);
    // int colorPos = int (map(pos.x * pos.y,0,width * height, 0, c.length));
    //int cc = int (map (cos(pos.x * pos.y), -1, 0.9, 0, 3));
    int cc = int(random(3.1));
    dir = random(1) > 0.5 ? 1 : -1 ;
    if (cc > 3) cc = 3;
    cAgent = c[cc];
  }


  void update() {
    angle = map((float)noise.eval(pos.x /noiseStep , pos.y /noiseStep ), -1, 1, 0, TWO_PI) ;// * noiseForce;
  // angle = (angle - angle * 0.8) * noiseForce;

 /*   pos.x += cos(angle) * stepSize;
    pos.y += sin(angle) * stepSize;*/
    
    pos.x += sin( random(noisySpeed) + cos(angle)) * stepSize * dir;
    pos.y += cos( random(noisySpeed) + sin(angle)) * stepSize * dir;
    pos.z += sin( random(noisySpeed)) + sin(angle) * stepSize * dir;

   /* float dx = 250 * (float) noise.eval( SEED + rad * cos(TWO_PI * (nperiod * p )), rad * sin(TWO_PI * ( nperiod * p )), cos( theta1 - TWO_PI ));
    float dy = 250 * (float) noise.eval( 2 * SEED + rad * cos(TWO_PI * ( nperiod * p )), rad * sin(TWO_PI * ( nperiod * p )), sin(theta2 - TWO_PI ) );
*/


    //in case that it goes out 
/*    if ( pos.x > width + 5 || pos.x < -5 || pos.y > height + 5 || pos.y < -5) {
      pos.x = random(width);
      pos.y = random(height);
      oldPos.set(pos);
    }*/
    noisy += noisySpeed;
  }

  void display() {
    //strokeWeight(strokeWidth * stepSize);
    stroke(cAgent);
    line(oldPos.x, oldPos.y, oldPos.z, pos.x, pos.y, pos.z);
    oldPos.set(pos);
  }
}

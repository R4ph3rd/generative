class Attractor {
  PVector pos;
  float r,R, o, min, max;

  Attractor() {
    pos = new PVector(random(width), random(height));
    min = 100;
    max = 450;
    r = random(min, max);
    R = random(min, max);
    o = map(r+R, min, max, 0,TWO_PI); 
    println("r= ", r, "  R = ", R, "  o = ", o);
  }
  
  void update(){
    pos.set(mouseX + r * cos(o), mouseY + R * sin(o));
  }
}

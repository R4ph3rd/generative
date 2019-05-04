import controlP5.*;

color bgrd = color(240,191,233);
color sc, sh, sh1, nc, pc;

//coefs
float shoulders = 1.2;

//sizes
float noise = 15;
int eye = 50;

//eyes
float le,he, ee;

//mouth
float lm, hm;

//head
float lh, hh ;
int head = 400;

void setup(){
  size(900,900);
  background(bgrd);
  
  sc =  color( red(bgrd) * 0.25, green(bgrd) * 0.25, blue(bgrd) * 0.25);
  sh =  color( red(bgrd) * 0.6, green(bgrd) * 0.6, blue(bgrd) * 0.6);
  sh1 =  color( red(bgrd) * 0.4, green(bgrd) * random(0.01,0.3), blue(bgrd) * random(0.05,0.2));
  nc = color( red(bgrd) * 0.1, green(bgrd) * 0.1, blue(bgrd) * 0.1);
  pc = color(red(bgrd) * random(0.1, 0.4), green(bgrd) * random(0.3,0.5), blue(bgrd) * random(0.2,0.9));
  
  lh = 1;
  hh = 1.2;
  lm = ((head * lh) / 4);
  hm = 30;
  le = 1.3 ;
  he = 0.9;
  ee = 1.5;
  
  person();
}

void draw(){
  
}

void person(){
  
  //background
  pushStyle();
  noFill();
  color bgrd1 = color( red(bgrd) - 60, green(bgrd) - 60, blue(bgrd) - 60);
  stroke(bgrd1);
  strokeWeight(60);
  rect(0,0,width,height);
  popStyle();
  
  //corpse
  pushStyle();
  noStroke();
  fill(sc);
  ellipse(width/2, height, shoulders * 600, 600);
  popStyle();
  
  
  //head
  pushStyle();
  noStroke();
  for (int i = head ; i > 0 ; i --){
   float k = map (i, head, 0, 0, 1);
   color g = lerpColor(sh, sh1, k);
   fill(g);
   ellipse(height/2,width/2, i * lh, i * hh);
  }
  popStyle();

  //noise
  pushStyle();
  noStroke();
  fill(nc);
  ellipse(width/2 - 20 * lh, height/2 + 50 * hh, noise, noise);
  ellipse(width/2 + 20 * lh, height/2 + 50 * hh, noise, noise);
  popStyle();
  
  //mouth
    pushStyle();
  noStroke();
  fill(nc);
  arc(width/2, height/2 + 100 * hh, lm, hm, 0, PI);
  popStyle();
  
  eyes();
  hairs();
  
}

void eyes(){
  
  //eyes
  pushStyle();
  noStroke();
  fill(230);
  
  float a = random(0,PI/5);
  
  //iris
  pushMatrix();
  translate(width/2 - 40 * lh * ee, height/2 - 50 * hh);
  pushMatrix();
  rotate(-a);
  ellipse(0,0, eye * le, eye * he);
  popMatrix();
  
  float e = le <  he ?  le : he ;
  
  //pupille
  pushStyle();
  fill(pc);
  ellipse(0,0, eye * e - 5, eye * e - 5);
  fill(nc);
  ellipse(0,0, eye * e - ( 20 * e ), eye * e - (20 * e));
  popStyle();
  
  //relfet
  pushStyle();
  fill(230);
  ellipse(0 + (eye * e - 5) / 3.5, 0 - (eye * e - 5) / 3.5, 13, 13);
  popStyle();
  
  popMatrix();
  
  //iris
  pushMatrix();
  translate(width/2 + 40 * lh * ee, height/2 - 50 * hh);
  pushMatrix();
  rotate(a);
  ellipse(0,0, eye * le, eye * he);
  popMatrix();
  
  //pupille
  pushStyle();
  fill(pc);
  ellipse(0,0, eye * e - 5, eye * e - 5);
  fill(nc);
  ellipse(0,0, eye * e - ( 20 * e ), eye * e - (20 * e));
  popStyle();
  
  //reflet
  pushStyle();
  fill(230);
  ellipse(0 + (eye * e - 5) / 3.5, 0 - (eye * e - 5) / 3.5, 13, 13);
  popStyle();
  
  popMatrix();
  
  popStyle();
}


void hairs(){

  pushStyle();
  noFill();
  strokeWeight(1);
  stroke(pc);
  
  for (int i = 0 ; i < 360 ; i ++){
    float xmin = (width/2 * cos(i) ) - (head/2 * lh);
    float xmax = (width/2 * cos(i) ) + (head/2 * lh);
    float ymin = (height/2 * sin(i) ) - (head/2 * hh);
    float ymax = (height/2 * sin(i) ) + (head/2 * hh);
    
    PVector b1 = new PVector (random(xmin , xmax), random( ymin , ymax));
    PVector b2 = new PVector (random(xmin , xmax), random( ymin , ymax));
    PVector b3 = new PVector (random(xmin , xmax), random( ymin , ymax));
    PVector b4 = new PVector (random(xmin , xmax), random( ymin , ymax));
                             ellipse((width/2 + head/2 * lh) * cos(i) , (height/2 + head/2 * hh) * sin(i), 10,10);
    stroke(random(255));
    println(b1.x,"  ", b1.y,"  ", b2.x,"  ", b2.y,"  ", b3.x,"  ", b3.y,"  ", b4.x,"  ", b4.y);
   bezier(b1.x, b1.y, b2.x, b2.y, b3.x, b3.y, b4.x, b4.y);
                             
  }
  /*
  for (int y = int(ymin_); y < ymax_ * 0.7; y ++){
  //  float xmin = map(y, ymin_, ymax_, width/2, xmin_);
 //   float xmax = map(y, ymin_, ymax_ * 0.7, width/2, xmax_);
    println(xmin, "  ", xmax);
    
    for (int x = int(xmin) ; x < xmax ; x++){
      stroke(random(255));
      bezier(x, y,
              x + random(5,10), y + 10,
              x + random(40,60), y + 90,
              x + random(8,15), ymax_);
    }
  }
    */
  popStyle();
}

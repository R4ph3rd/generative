import controlP5.*;

ControlP5 cp5;
GUI gui;
ArrayList<Colors> col;
color cc1, cc2, cc3, cc4, cc5;

//buffers for corpse, head, mouse + noise, eyes, hairs
PGraphics pg1, pg2, pg3, pg4, pg5 ;

color bgrd = color(240,191,233);
color sc, sh, sh1, nc, pc;

//coefs
float shoulders = 1.2;

//sizes
float noise = 15;
int eyeSize = 50;

//eyes
float le,he, ecart, angle, eyeProportion;

//mouth
float lm, hm, mouthLength, mouthHole, pm;

//head
float lh, hh, headProportion, headSize, headY;

void setup(){
  size(900,900);
  background(bgrd);
  pg1 = createGraphics(width,height);
  pg2 = createGraphics(width,height);
  pg3 = createGraphics(width,height);
  pg4 = createGraphics(width,height);
  pg5 = createGraphics(width,height);
  
  col = new ArrayList();
  gui = new GUI(this);
  
  setColors();
  
  sc =  color( red(bgrd) * 0.25, green(bgrd) * 0.25, blue(bgrd) * 0.25);
  sh =  color( red(bgrd) * 0.6, green(bgrd) * 0.6, blue(bgrd) * 0.6);
  sh1 =  color( red(bgrd) * 0.4, green(bgrd) * random(0.01,0.3), blue(bgrd) * random(0.05,0.2));
  nc = color( red(bgrd) * 0.1, green(bgrd) * 0.1, blue(bgrd) * 0.1);
  pc = color(red(bgrd) * random(0.1, 0.4), green(bgrd) * random(0.3,0.5), blue(bgrd) * random(0.2,0.9));
  
  Reset();
}

void draw(){
  pg1.beginDraw();
  pg1.clear();
  pg1.endDraw();
  
  pg2.beginDraw();
  pg2.clear();
  pg2.endDraw();
  
  pg3.beginDraw();
  pg3.clear();
  pg3.endDraw();
  
  pg4.beginDraw();
  pg4.clear();
  pg4.endDraw();
  
  proportions();
  
  personas();
 // pg5.clear();
  image(pg1,0,0);
  image(pg2,0,0);
  image(pg3,0,0);
  image(pg4,0,0);
  //image(pg5,0,0);
  

}

void personas(){
  backgroundPatern(cc5);
  corpse(cc3);
  head(cc1, cc2);
  noise_(cc3);
  mouth(cc4);
  eyes(cc2,cc3);
}

void proportions(){
  //eye
  le = map(eyeProportion,0,10,0.5,1.3);
  he = map(eyeProportion,0,10,1.3,0.3);
  //head
  lh = map(headProportion,0,10,0.8,1.1);
  hh = map(headProportion,0,10,1.1,0.8);
  headY = height/2 + 10 * (headProportion * 300 / headSize);
  //mouse
  lm = headSize * lh * mouthLength;
  hm = headSize * hh * mouthHole;
  pm = map(mouthHole,0.1,0.4, - 1, headSize * hh / 8);
  
}

void Reset(){
  lh = 1;
  hh = 1.2;
  headProportion = random(0,10) > 5 ? random(0,3) : random(7,10);
  headSize = random(350,500);
  mouthHole = random(0.1,0.25);
  mouthLength = random(0.1,0.7);
  eyeSize = int(random(50,80));
  eyeProportion = random(2,10);
  ecart = random(0.5,2) + map(eyeProportion, 2, 10, 1, 0);
  angle = random(-PI/10, PI/6);
  
  Colors c = col.get(int(random(col.size())));
  cc1 = c.c1;
  cc2 = c.c2;
  cc3 = c.c3;
  cc4 = c.c4;
  cc5 = c.c5;
  
  personas();
}

void setColors(){
  col.add(new Colors(#f3a5d9,#dd7ca4,#e1a623,#182916, #036b7e)); // rose 
  col.add(new Colors(#024536,#1181ae,#f87f21,#4e7ac5, #1f2007)); //turquoise
}

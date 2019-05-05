import controlP5.*;

ControlP5 cp5;
GUI gui;
Slider[] sliders;

//buffers for corpse, head, mouse + noise, eyes, hairs
PGraphics pg1, pg2, pg3, pg4, pg5 ;


color bgrd = color(240,191,233);
color sc, sh, sh1, nc, pc;

//coefs
float shoulders = 1.2;

//sizes
float noise = 15;
int eye = 50;

//eyes
float le,he, ee, a;

//mouth
float lm, hm;

//head
float lh, hh ;
int head = 400;

void setup(){
  size(900,900);
  background(bgrd);
  pg1 = createGraphics(width,height);
  pg2 = createGraphics(width,height);
  pg3 = createGraphics(width,height);
  pg4 = createGraphics(width,height);
  pg5 = createGraphics(width,height);
  
  gui = new GUI(this);
  
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
  a = random(0,PI/5);
  
  backgroundPatern();
  corpse();
  head();
  noise_();
  mouth();
  eyes();
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
  
    backgroundPatern();
   corpse();
  head();
  noise_();
  mouth();
  eyes();
 // pg5.clear();
  image(pg1,0,0);
  image(pg2,0,0);
  image(pg3,0,0);
  image(pg4,0,0);
  //image(pg5,0,0);
}

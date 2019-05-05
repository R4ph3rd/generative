
void backgroundPatern(){
  pushStyle();
  noFill();
  background(bgrd);
  color bgrd1 = color( red(bgrd) - 60, green(bgrd) - 60, blue(bgrd) - 60);
  stroke(bgrd1);
  strokeWeight(60);
  rect(0,0,width,height);
  popStyle();
}

void corpse(){
  pg1.beginDraw();
  pg1.pushStyle();
  pg1.noStroke();
  pg1.fill(sc);
  pg1.ellipse(width/2, height, shoulders * 600, 600);
  pg1.popStyle();
  pg1.endDraw();
}

void head(){
  pg2.beginDraw();
  pg2.pushStyle();
  pg2.noStroke();
  for (int i = head ; i > 0 ; i --){
   float k = map (i, head, 0, 0, 1);
   color g = lerpColor(sh, sh1, k);
   pg2.fill(g);
   pg2.ellipse(height/2,width/2, i * lh, i * hh);
  }
  pg2.popStyle();
  pg2.endDraw();
}


void noise_(){
  pg3.beginDraw();
  pg3.pushStyle();
  pg3.noStroke();
  pg3.fill(nc);
  pg3.ellipse(width/2 - 20 * lh, height/2 + 50 * hh, noise, noise);
  pg3.ellipse(width/2 + 20 * lh, height/2 + 50 * hh, noise, noise);
  pg3.popStyle();
  pg3.endDraw();
}


void mouth(){
  pg3.beginDraw();
  pg3.pushStyle();
  pg3.noStroke();
  pg3.fill(nc);
  pg3.arc(width/2, height/2 + 100 * hh, lm, hm, 0, PI);
  pg3.popStyle();
  pg3.endDraw();
}

void eyes(){  
  pg4.beginDraw();
  pg4.pushStyle();
  pg4.noStroke();
  pg4.fill(230);
 
  //iris
  pg4.pushMatrix();
  pg4.translate(width/2 - 40 * lh * ee, height/2 - 50 * hh);
  pg4.pushMatrix();
  pg4.rotate(-a);
  pg4.ellipse(0,0, eye * le, eye * he);
  pg4.popMatrix();
  
  float e = le <  he ?  le : he ;
  
  //pupille
  pg4.pushStyle();
  pg4.fill(pc);
  pg4.ellipse(0,0, eye * e - 5, eye * e - 5);
  pg4.fill(nc);
  pg4.ellipse(0,0, eye * e - ( 20 * e ), eye * e - (20 * e));
  pg4.popStyle();
  
  //relfet
  pg4.pushStyle();
  pg4.fill(230);
  pg4.ellipse(0 + (eye * e - 5) / 3.5, 0 - (eye * e - 5) / 3.5, 13, 13);
  pg4.popStyle();
  
  pg4.popMatrix();
  
  //iris
  pg4.pushMatrix();
  pg4.translate(width/2 + 40 * lh * ee, height/2 - 50 * hh);
  pg4.pushMatrix();
  pg4.rotate(a);
  pg4.ellipse(0,0, eye * le, eye * he);
  pg4.popMatrix();
  
  //pupille
  pg4.pushStyle();
  pg4.fill(pc);
  pg4.ellipse(0,0, eye * e - 5, eye * e - 5);
  pg4.fill(nc);
  pg4.ellipse(0,0, eye * e - ( 20 * e ), eye * e - (20 * e));
  pg4.popStyle();
  
  //reflet
  pg4.pushStyle();
  pg4.fill(230);
  pg4.ellipse(0 + (eye * e - 5) / 3.5, 0 - (eye * e - 5) / 3.5, 13, 13);
  pg4.popStyle();
  
  pg4.popMatrix();
  
  pg4.popStyle();
  pg4.endDraw();
}


void hairs(){
  pg5.beginDraw();
  pg5.pushStyle();
  pg5.noFill();
  pg5.strokeWeight(1);
  pg5.stroke(pc);
  
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
    pg5.stroke(random(255));
    println(b1.x,"  ", b1.y,"  ", b2.x,"  ", b2.y,"  ", b3.x,"  ", b3.y,"  ", b4.x,"  ", b4.y);
   pg5.bezier(b1.x, b1.y, b2.x, b2.y, b3.x, b3.y, b4.x, b4.y);
                             
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
  pg5.popStyle();
  pg5.endDraw();
}

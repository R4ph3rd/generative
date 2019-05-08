
void backgroundPatern(color c){
  pushStyle();
  noFill();
  background(c);
  if (pattern == 0){
  color cbis = color( red(c) - 60, green(c) - 60, blue(c) - 60);
  stroke(cbis);
  strokeWeight(60);
  rect(0,0,width,height);
  } else if (pattern == 1)
  popStyle();
}

void corpse(color c){
  pg1.beginDraw();
  pg1.pushStyle();
  pg1.noStroke();
  pg1.fill(c);
  pg1.ellipse(width/2, height, shoulders * 600, 600);
  pg1.popStyle();
  pg1.endDraw();
}

void head(color cf, color cc_){
  pg2.beginDraw();
  pg2.pushStyle();
  pg2.noFill();
  pg2.strokeWeight(1);
    for (int i = int(headSize + (headSize/9)) ; i > 0 ; i --){
     float k = map (i, headSize + headSize/9, 0, 0, 1);
     float a = map(k,0,1,0,180);
     pg2.stroke(0,a);
     pg2.ellipse(width/2, headY, i * lh, i * hh);
  }
  pg2.noStroke();
  for (int i = int(headSize) ; i > 0 ; i --){
     float k = map (i, headSize, 0, 0, 1);
     color g = lerpColor(cc_, cf, k);
     pg2.fill(g);
     pg2.ellipse(width/2, headY, i * lh, i * hh);
  }
  pg2.popStyle();
  pg2.endDraw();
}


void noise_(color c){
  pg3.beginDraw();
  pg3.pushStyle();
  pg3.noStroke();
  pg3.fill(c);
  pg3.ellipse(width/2 - 20 * lh, headY + 50 * hh, noise, noise);
  pg3.ellipse(width/2 + 20 * lh, headY + 50 * hh, noise, noise);
  pg3.popStyle();
  pg3.endDraw();
}


void mouth(color c){
  pg3.beginDraw();
  pg3.pushStyle();
  pg3.noStroke();
  pg3.fill(c);
  pg3.arc(width/2, headY + 100 * hh + pm, lm, hm, PI, TWO_PI);
  pg3.popStyle();
  pg3.endDraw();
}

void eyes(color c, color c_){  
  pg4.beginDraw();
  pg4.pushStyle();
  pg4.noStroke();
  pg4.fill(230);
 
  pg4.pushMatrix();
  pg4.translate(width/2 - 40 * lh * ecart, headY - 50 * hh);
    //blanc
  pg4.pushMatrix();
  pg4.rotate(-angle);
  pg4.ellipse(0,0, eyeSize * le, eyeSize * he);
  pg4.popMatrix();
  
  float e = le <  he ?  le : he ;
  
  //pupille & iris
  pg4.pushStyle();
  pg4.fill(c_);
  pg4.ellipse(0,0, eyeSize * e - 5, eyeSize * e - 5);
  pg4.fill(c);
  pg4.ellipse(0,0, eyeSize * e - ( 20 * e ), eyeSize * e - (20 * e));
  pg4.popStyle();
  
  //relfet
  pg4.pushStyle();
  pg4.fill(230);
  pg4.ellipse(0 + (eyeSize * e - 5) / 3.5, 0 - (eyeSize * e - 5) / 3.5, eyeSize /  eyeProportion, eyeSize / eyeProportion);
  pg4.popStyle();
  
  pg4.popMatrix();
  
  //////****//////////
  pg4.pushMatrix();
  pg4.translate(width/2 + 40 * lh * ecart, headY - 50 * hh);
    //blanc
  pg4.pushMatrix();
  pg4.rotate(angle);
  pg4.ellipse(0,0, eyeSize * le, eyeSize * he);
  pg4.popMatrix();
  
  //iris & pupille
  pg4.pushStyle();
  pg4.fill(c_);
  pg4.ellipse(0,0, eyeSize * e - 5, eyeSize * e - 5);
  pg4.fill(c);
  pg4.ellipse(0,0, eyeSize * e - ( 20 * e ), eyeSize * e - (20 * e));
  pg4.popStyle();
  
  //reflet
  pg4.pushStyle();
  pg4.fill(230);
  pg4.ellipse(0 + (eyeSize * e - 5) / 3.5, 0 - (eyeSize * e - 5) / 3.5, eyeSize /  eyeProportion, eyeSize / eyeProportion);
  pg4.popStyle();
  
  pg4.popMatrix();
  
  pg4.popStyle();
  pg4.endDraw();
}


void hairs(color cf_, color cc_){
  pg5.beginDraw();
  pg5.pushStyle();
  pg5.noFill();
  pg5.strokeWeight(1);
  pg5.stroke(cf_);
  
  for (int i = 0 ; i < 360 ; i ++){
    float xmin = (width/2 ) - (headSize/3 * lh)  * cos(i) ;
    float xmax = (width/2 ) + (headSize/3 * lh)  * cos(i);
    float ymin = (height/2 ) - (headSize/4 * hh)* sin(i) - headSize/3;
    float ymax = (height/2 ) + (headSize/4 * hh) * sin(i) - headSize/3;
    
    PVector b1 = new PVector (random(xmin , xmax), random( ymin , ymax));
    PVector b2 = new PVector (random(xmin , xmax), random( ymin , ymax));
    PVector b3 = new PVector (random(xmin , xmax), random( ymin , ymax));
    PVector b4 = new PVector (random(xmin , xmax), random( ymin , ymax));
    //ellipse((width/2 + headSize/2 * lh) * cos(i) , (height/2 + headSize/2 * hh) * sin(i), 10,10);
    float r = random(1) < 0.5 ? 0 : 1;
    if (r == 0 ) pg5.stroke(cf_);
    else pg5.stroke(cc_);   
   // println(b1.x,"  ", b1.y,"  ", b2.x,"  ", b2.y,"  ", b3.x,"  ", b3.y,"  ", b4.x,"  ", b4.y);
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

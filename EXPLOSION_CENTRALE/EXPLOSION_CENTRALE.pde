float x=20;
float y=20;
float z = 20;
float w =20;
void setup(){
  size(1900,850);

  
}

void draw(){
  
   fill(0);
  noStroke();
  rect(0,0,width,height,5);
 
 // for ( x=0; x<width; x=x+random(0,width)){
      //for ( y=0; y<width; y=y+random(0,height)){   
        pushMatrix();
          translate(width*0.5,height*0.5);
          for ( z=0; z<width; z=z+random(0,width)){
            for ( w=0; w<width; w=w+random(0,height)){
              for ( x=0; x<width; x=x+random(0,width)){
            for ( y=0; y<width; y=y+random(0,height)){
              rotate(random(0,2*PI));
                float a=random(0,255);
                float b=random(0,255);
                float c=random(0,255);
                float g=random(20,height*0.7);
                strokeWeight(3);
                stroke(b,a,c);
                line(0,0,z,w);
                stroke(a,b,c);
                line(0,0,x,y);
                ellipse(0,0,g,g);
                }
          }
      }
 }
          popMatrix();

  
}

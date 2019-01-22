int n=10000;
float[] x = new float[n]; 
float[] y = new float[n]; 
float xoff,yoff;
float posx,posy;

void setup(){
  size(500, 500);
  background(255);
  smooth();
  stroke(0, 64);
  xoff = yoff =  0;
}

void draw(){
  xoff += 0.005;
  yoff += 0.006;
  pushMatrix();
  fill(255,20);
  rect(0,0,width,height);
  popMatrix();
  
  for(int i = y.length-1 ; i > 0 ; i-- ){
    x[i] = x[i-1];
    y[i] = y[i-1];
  }
  x[0]= noise(xoff) * width;
  y[0]= noise(yoff) * height;
  
  fill(0);
  ellipse(x[0],y[0],1,1);
  
  for(int i=1; i<1000; i++){
    //Distance 
    float d = dist(x[0],y[0], x[i], y[i]);
    //Probabilité de rencontre
    float p = random(20);
    if(d <= 20 && p<1){
      line(x[0], y[0],x[i - 1], y[i - 1]);
    }
  }
}

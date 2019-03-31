int cases = 100 ;
int nlines = cases ;
int n = 0;
boolean truemode = true ; 

void setup() {
  size(900, 900);
  background(10);
  noCursor();

  strokeWeight(0.2);
  stroke(255);
}

void draw() {
  pushStyle();
  noStroke();
  fill(0);
  rect(0, 0, width, height);
  popStyle();


  for (int y = 0; y < height; y += cases) {
    for (int x = 0; x < width; x += cases) {

      float centerX = x + map(mouseX, 0, width, 0, cases);
      float centerY = y + map(mouseY, 0, height, 0, cases);

      if (truemode) {
        for (int i = 0; i < nlines; i ++) {
          line(x + i, y, centerX, centerY);
          line(x + cases, y + i, centerX, centerY);
          line(x + i, y + cases, centerX, centerY);
          line(x, y + i, centerX, centerY);
        }
      } else {
         for (int i = 0; i < nlines; i ++) {
           
           float xpos = map (i, 0, nlines, x, x + cases);
           float ypos = map (i, 0, nlines, y, y + cases);
          line(xpos, y, centerX, centerY);
          line(x + cases, ypos, centerX, centerY);
          line(xpos, y + cases, centerX, centerY);
          line(x, ypos, centerX, centerY);
        }
      }
    }
  }
}

void keyPressed() {
  if (key == 's' || key == 'S') {
    saveFrame("line_pattern-" + n + ".png"); 
  n++;
  }
  
  if ( key == 1) truemode = true ; println("truemode 1");
  if (key == 2) truemode = false ; println(" truemode 2");
  
}

void mousePressed() {
  nlines = int( map (mouseX, 0, width, 10, cases));
}

///////////////* OLD VERSIONS OF DRAWING *//////////////// 
/*
for (int i = 0 ; i < 80 ; i ++){
 //  float xpos = (x + (cases / 2) ) + cos(i) * (cases / 2) ;
 // float ypos = (y + (cases / 2) ) + sin(i) * (cases / 2) ;
 
 line(x + i, y, centerX, centerY);
 line(x + cases, y + i, centerX, centerY);
 line(x + i, y + cases, centerX, centerY);
 line(x, y + i, centerX, centerY);
 }
 */

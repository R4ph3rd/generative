import processing.video.*;
import gab.opencv.*;
import java.awt.Rectangle;


OpenCV opencv;
Rectangle[] faces;
Capture cam;

void setup() {
  size(640, 480);
  String[] cameras = Capture.list();
  printArray(cameras);
  cam = new Capture(this, 640, 480, cameras[1]);
  cam.start();

  opencv = new OpenCV (this, cam);
  opencv.loadCascade(OpenCV.CASCADE_FRONTALFACE);
  
  noFill();
  stroke(0,255,0);
  strokeWeight(3);
  
  for (int i = 0; i < faces.length ; i ++){
   float x = faces[i].x;
   float y = faces[i].y;
   float largeur = faces[i].width;
   float hauteur = faces[i].height;
   rect(x,y,largeur,hauteur);
   stroke(255,0,0);
   ellipse(x,y,largeur,hauteur);
  }
}

void draw() {
  if (cam.available()==true) {
    cam.read();
    opencv.loadImage(cam);
    image(cam, 0, 0);
    faces = opencv.detect();
  }
}

/*
1- Install drivers : https://www.picocricket.com/picoboardsetupUSB.html
2- run processing as administrator : 
  * on mac : 
    - open a terminal
    - type 'sudo /Applications/Processing.app/Contents/MacOS/Processing'
  * on windows :
    - navigate to the installation location
    - right click on 'processing.exe" and select 'run as administrator
*/

import processing.serial.*;

PicoSensors pico;
Serial port;  // Create object from Serial class

void setup() {
  size(1035, 245);

  println(Serial.list() );
  String picoPort = Serial.list()[7];
  port = new Serial(this, picoPort, 38400); 
  pico = new PicoSensors(port);


}

void draw(){

 pico.update();
// plot bars to represent values 
  background(0);
  fill(255,0,0);     rect(5,5,pico.getD(),25);        //  D
  fill(235,30,0);    rect(5,35,pico.getC(),25);       //  C
  fill(215,60,0);    rect(5,65,pico.getB(),25);       //  B
  fill(195,90,0);    rect(5,95,pico.getButton(),25);       //  Button
  fill(175,120,0);    rect(5,125,pico.getA(),25);      //  A
  fill(1555,150,0);  rect(5,155,pico.getLight(),25);      //  Light
  fill(135,180,0);   rect(5,185,pico.getSound(),25);      //  Sound
  fill(115,210,0);   rect(5,215,pico.getSlider(),25);      // Slider

}

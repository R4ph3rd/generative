import oscP5.*;
import netP5.*;

OscP5 osc;
NetAddress port;

// store incoming/outgoing value
float value;
// to display sending or receiving
String activity = ""; 

void setup() {
  size(400, 400);
  osc = new OscP5(this, 8000); //start listening port at 8000
  port = new NetAddress("127.0.0.1", 9000); // target the port for sending messages at 9000

}

void draw() {
    background(2,3,60);  

  // display the value
  text(activity + value, 10, 20);
  
  if (mousePressed) {
    pushMatrix();
    noStroke();
    fill(140, 3, 2,80);
    ellipse(mouseX, mouseY, 60, 60);
    popMatrix();
  }
}

void mousePressed() {
  sendMessage();
}

void mouseDragged() {
  sendMessage();
}

void sendMessage() {
  activity = "sending: ";
  value = mouseX;

  OscMessage myMessage = new OscMessage("/1/fader3");
  myMessage.add(value); 
  osc.send(myMessage, port);
}

/* incoming osc message are forwarded to the oscEvent method. */
void oscEvent(OscMessage theOscMessage) {
  // only react on this addresspattern
  if (theOscMessage.checkAddrPattern("/1/fader3")==true) {
    // check if the value is a float
    if (theOscMessage.checkTypetag("f")) {
      activity = "receiving: "; 
      value = theOscMessage.get(0).floatValue();
    }
  }
}

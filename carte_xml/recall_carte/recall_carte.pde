XML xml;
XML[] trackpoints;
double lat;
double lon;
float latitude;
float longitude;
String[] tstamp;

void setup() {
  size(1200, 800);
  xml = loadXML("../data/2816774.xml");
  // println(xml);

  trackpoints  = xml.getChildren("trk")[0].getChildren("trkseg")[0].getChildren("trkpt");

 beginShape();
  for (int i = 0; i < trackpoints.length; i++) {

    lat = trackpoints[i].getDouble("lat");
    lon = trackpoints[i].getDouble("lon");
    String t = trackpoints[i].getChildren("time")[0].getContent();
    println(trackpoints[i]);
    tstamp = t.split("T")[1].split("\\.")[0].split(":");


    println(lat, lon);
  //  printArray(tstamp);
    //println(time);
  //  pushMatrix();
   //  translate(width*0.5, height*0.5);
    strokeWeight(10); 
    stroke(120,20,0);//épaisseur en fonction du temps passé 
    //noFill(taille);
     latitude = (float)lat*10; 
    longitude = -1*(float)lon*25;
   
    vertex(latitude, longitude);
   println(latitude, longitude);
   // popMatrix();
  }
   endShape(CLOSE);
  
  
  
}

void draw() {
  /*
  translate(width*0.5, height*0.5);
    strokeWeight(10); 
    stroke(120,20,0);//épaisseur en fonction du temps passé 
    //noFill(taille);
     latitude = (float)lat*10; 
    longitude = (float)lon*10;
    beginShape();
    vertex(latitude, longitude);
    endShape(CLOSE);
    //println("done",n);*/
   
  }

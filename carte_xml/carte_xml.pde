import peasy.*;
PeasyCam cam;
CameraState state;

XML xml;
PGraphics pg;
XML[] trackpoints;
double[] everyLat = {};
double[] everyLon = new double[0] ;
int indexTrackpoints;

double lat, lon ;
float latitude1, longitude1, latitude, longitude, taille, taille1 ;
int Time, time2 ;
int[] time_spent ={};

String[] tstamp;
int minTime_spent, maxTime_spent; 
double longMin, longMax, latMin, latMax;

String xml1 = "2823479.xml";
String xml2 = "2823480.xml";
String xml3 = "2823481.xml";
String xml4 = "2823482.xml";
String xml5 = "2823483.xml";
String xml6 = "2823484.xml";
String xml7 = "2823485.xml";
String xml8 = "2823486.xml";
String xml9 = "2817909.xml";
String xml10= "2816774.xml";

// un arrayList qui stocke toutes nos données
ArrayList <Data> datas = new ArrayList();

void setup() {
  size(1350, 850, P3D);
  background(0);
//    cam = new PeasyCam(this, 400);
  //state = cam.getState();  
  colorMode(HSB, 360, 100, 100);
  pg = createGraphics(width, height);
  pg.beginDraw();
  pg.colorMode(HSB, 360, 100, 100);
  pg.endDraw();


  // xml = loadXML("2823479.xml");//loadXML("2823482.xml");//,loadXML("2823483.xml");,loadXML("2823484.xml"),loadXML("2823485.xml"),loadXML("2823486.xml");
  //loadXML("2823480.xml");//
  // trackpoints  = xml.getChildren("trk")[0].getChildren("trkseg")[0].getChildren("trkpt");
  longMax =-1.5069965332258757   ;  // trackpoints[0].getDouble("lon");
  longMin= -1.5762523603616678;  //trackpoints[0].getDouble("lon");
  latMax = 47.2834665;  //trackpoints[0].getDouble("lat");
  latMin = 47.17566217418081 ;  // trackpoints[0].getDouble("lat");
  minTime_spent = -48248;
  maxTime_spent = 79288;
  indexTrackpoints = 0;

  //  time_spent = new float[trackpoints.length];
  /* Time = float(tstamp[0])*3600 +  float(tstamp[1])*60 + float(tstamp[2]);
   time2 = float(tstamp[0])*3600 +  float(tstamp[1])*60 + float(tstamp[2]);*/


  // to know gps data & time_spent 
  load_file(xml1);
  load_file(xml2);
  load_file(xml3);
  load_file(xml4);
  load_file(xml5);
  load_file(xml6);
  load_file(xml7);
  load_file(xml8);
  load_file(xml9);
  load_file(xml10);


  // verify data size
  println(datas.size());
  drawBackground();
  drawGraph();
}//setup


//store all gps from xml(s) in an array & time_spent in another
void load_file(String file) {
  xml = loadXML(file);
  trackpoints  = xml.getChildren("trk")[0].getChildren("trkseg")[0].getChildren("trkpt");

  for (int i = 0; i < trackpoints.length; i++) {
    //gps storage
    lat = trackpoints[i].getDouble("lat");
    lon = trackpoints[i].getDouble("lon");


    //time storage
    String t = trackpoints[0].getChildren("time")[0].getContent();
    tstamp = t.split("T")[1].split("\\.")[0].split(":");
    Time = int(tstamp[0])*3600 +  int(tstamp[1])*60 + int(tstamp[2]); // valeur de time unique, unique value of time in sec
    //append(time_spent, Time-time2); // time spent between 2 points
    Data d = new Data(lat, lon, Time-time2);
    datas.add(d); 

    time2 = Time; // value n-1 of Time
  }
}

void draw() {}


void drawBackground(){
   pushStyle();
 /* fill(253, 40, 97); // background points color
  noStroke();
  int n = 60 ;
  for (int y = 15; y < height; y += n) {
    for (int x = 15; x < width; x += n) {
      int siz = 5;
      if ( x % (n * 5) - 15 == 0 && y % (n * 5) - 15 == 0) siz = 15;
      ellipse(x, y, siz, siz);
    }
  }*/
  
  stroke(253, 40, 97);
  strokeWeight(0.5);
  for (int xi = 0 ; xi < width ; xi += 100){
  for (int x = 0 ; x < 25 ; x += 5) line (x + xi,0,x + xi,height);
  }
  for (int yi = 0 ; yi < height ; yi += 100){
  for (int y = 0 ; y < 25 ; y += 5) line (0,y + yi,width,y + yi);
  }
  popStyle();
 
}


void drawGraph() {
  pushMatrix();

  for (int i = 0; i < datas.size(); i++) { 
    Data d = datas.get(i); 
    // lat = d.lat;
    // lon = d.lon;
    taille = map(d.time_spent, minTime_spent, maxTime_spent, 1, 20);

    latitude = map((float)d.lat, (float)latMin, (float)latMax, 50, width-50);  //convert into the scale of the window
    longitude = map((float)d.lon, (float)longMin, (float)longMax, 30, height-30);

  //  PVector pos1 = new PVector(longitude1, latitude1); //oldpos
    //PVector pos2 = new PVector(longitude, latitude); // newpos
    PVector l = new PVector(longitude1 - longitude, latitude1 - latitude);

    //get together points that they're near 
    if ((abs(latitude1-latitude)<15) && (abs(longitude1-longitude)<15)) {
      latitude = latitude1;
      longitude =longitude1;
    }

    //draw
    pg.beginDraw();
    pg.noStroke();
    for (int j = 0; j < l.mag(); j ++) {
      float xpos = lerp(latitude1, latitude, map(j, 0, l.mag(), 0, 1));
      float ypos = lerp(longitude1, longitude, map(j, 0, l.mag(), 0, 1));
      float siz = lerp (taille1, taille, map(j, 0, l.mag(), 0, 1));
      float c = lerp (253, 343, map(j, 0, l.mag(), 0, 1));
      
     for (int g = int(siz * 1.7); g > siz; g --) {
        float a = map(g, siz * 1.7, siz, 0, 90);
        fill(c, a);
        noStroke();
        ellipse(xpos, ypos, g, g);
      }
      pg.fill(c, 230, 97);
      pg.ellipse(xpos, ypos, siz, siz);
    }
    //println("***************** PROUT ***************************");
    // pg.stroke(232, 19, 197);
    // pg.strokeWeight(taille); //weight depends on time past
    // pg.line(latitude1, longitude1, latitude, longitude);
    //pg.ellipse(latitude, longitude, taille, taille);
    latitude1 = latitude ;
    longitude1 = longitude;
    taille1 = taille ;
    pg.endDraw();
    image(pg, 0, 0);
  }

  popMatrix();
}


void keyPressed() {
  if (key == ENTER) {
    pg.clear();
    background(0);
    drawGraph();
  }

  if (key== 's'|| key =='S')   save("life_persona-##.png");
}

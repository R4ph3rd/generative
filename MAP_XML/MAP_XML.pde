/*
This program will allow you to draw in a defined window a journey. You just have to get yours XML files wich indicate your jouney.
I used the app "GPSLogger" to save my positions and others info ; so I make this program depending on banneers that I found in my 
XML files. Maybe if you use an other app it won't works, I didn't try with others.
It should give you an idea at least on what you have to do.
I make a separate program to find all min/max ; for now, I haven't yet finish this program, so you will see updates in weeks coming.


*/

XML xml;
XML[] trackpoints;
double[] everyLat ={};
double[] everyLon = new double[0] ;
int indexTrackpoints;
double lat; 
double lon;
float latitude1; 
float longitude1;
float latitude; 
float longitude;
float taille;
int Time;
int time2;
int[] time_spent ={};
String[] tstamp;
int minTime_spent; 
int maxTime_spent;
double longMax; 
double longMin;
double latMin;
double latMax;
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

//XML Persona 1
/*Longmin=  -1.5762523603616678 
 Longmax=-1.51827744  
 Latmin=  47.17566217418081 
 Latmax= 47.28254926 */

void setup() {
  size(1350, 850);
  // xml = loadXML("2823479.xml");//loadXML("2823482.xml");//,loadXML("2823483.xml");,loadXML("2823484.xml"),loadXML("2823485.xml"),loadXML("2823486.xml");
  //loadXML("2823480.xml");//
  // trackpoints  = xml.getChildren("trk")[0].getChildren("trkseg")[0].getChildren("trkpt");
  longMax =-1.5182774066925049  ;  // trackpoints[0].getDouble("lon");
  longMin= -1.5762523603616678;  //trackpoints[0].getDouble("lon");
  latMax = 47.28255081176758 ;  //trackpoints[0].getDouble("lat");
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

  // on vérifie la taille de nos données 
  println(datas.size());

  /*  for (int i = 0; i < trackpoints.length; i++) {
   
   lat = trackpoints[i].getDouble("lat");
   lon = trackpoints[i].getDouble("lon");
   String t = trackpoints[i].getChildren("time")[0].getContent();
   // println(trackpoints[i]);
   tstamp = t.split("T")[1].split("\\.")[0].split(":"); //get only the time
   
   Time = float(tstamp[0])*3600 +  float(tstamp[1])*60 + float(tstamp[2]); // valeur de time unique, unique value of time in sec
   time_spent[i] = Time-time2; // time spent between 2 points
   time2 = Time; // value n-1 of Time
   // println("time_spent=",time_spent[i])
   }*/

  /*  longitude =  (float)trackpoints[0].getDouble("lon");
   latitude = (float)trackpoints[0].getDouble("lat");*/
  // printArray(tstamp);
  // } //for trackpoints.length
}//setup


//store all gps from xml(s) in an array & time_spent in another
void load_file(String file) {
  xml = loadXML(file);
  trackpoints  = xml.getChildren("trk")[0].getChildren("trkseg")[0].getChildren("trkpt");

  for (int i = 0; i < trackpoints.length; i++) {
    //gps storage


    lat = trackpoints[i].getDouble("lat");
    lon = trackpoints[i].getDouble("lon");
    //everyLat[indexTrackpoints + i] = lat;
    //append(everyLat, lat);
    //append(everyLon, lon);
    // everyLon[indexTrackpoints + i] = lon ;
    //println(lat);
    
    //time storage
    String t = trackpoints[0].getChildren("time")[0].getContent();
    tstamp = t.split("T")[1].split("\\.")[0].split(":");
    Time = int(tstamp[0])*3600 +  int(tstamp[1])*60 + int(tstamp[2]); // valeur de time unique, unique value of time in sec
    //append(time_spent, Time-time2); // time spent between 2 points
    
    //create data object w/ data collected in xml files
    // Je créée un objet data avec les données récoltées dans les fichiers xml
    Data d = new Data(lat, lon, Time-time2);
    datas.add(d); // je l'ajoute à mon arrayList
   
    
    
    
    time2 = Time; // value n-1 of Time
    // println("time_spent=",time_spent[i])
  }

  // println("load "+file+" all lat points =", everyLat, " all lon points=", everyLon);
}


void draw() {
  pushMatrix();

  for (int i = 0; i < datas.size(); i++) { // on itère sur l'arraylist
  
    Data d = datas.get(i); // on récupère l'objet stocké à l'index i de l'arraylist
    
    // on récupère les données stockées dans l'objet "d"
    lat = d.lat;
    lon = d.lon;
    taille = map(d.time_spent, minTime_spent, maxTime_spent, 1, 13);


    latitude = map((float)lat, (float)latMin, (float)latMax, 50, width-50);  //convert into the scale of the window
    longitude = map((float)lon, (float)longMin, (float)longMax, 30, height-30);
    //  println("latitude", i, "=", latitude, "//longitude", i, " =", longitude);
    /*  println("latitude1-latitude=",abs(latitude1-latitude));
     println("longitude1-longitude",abs(longitude1-longitude));
     */

    //get together points that they're near 
    if ((abs(latitude1-latitude)<15) && (abs(longitude1-longitude)<15)) {
      latitude = latitude1;
      longitude =longitude1;
      // taille = map(time_spent[i-1], minTime_spent, maxTime_spent, 0.5, 10) + map(time_spent[i], minTime_spent, maxTime_spent, 0.5, 10);
      // println("point à ressembler");
    }

    //draw
    stroke(120, 20, 0);
    strokeWeight(taille); //weight depends on time past
    if (i > 0) line(latitude1, longitude1, latitude, longitude);
    ellipse(latitude, longitude, taille, taille);
    latitude1 = latitude ;
    longitude1 = longitude;
  }

  popMatrix();
  saveFrame("TESTxml.png");
}


//  un classe qui stocke juste des valeurs
class Data {
  double lat;
  double lon;
  int time_spent;

  Data(double lat, double lon, int time_spent) {
    this.lat = lat;
    this.lon = lon;
    this.time_spent = time_spent;
  }
}

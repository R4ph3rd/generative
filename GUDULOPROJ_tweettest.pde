import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;


Minim minim;
AudioPlayer Pop;
AudioPlayer pophard;
AudioPlayer pophard1;
AudioPlayer pophard2;
AudioPlayer pophard3;
AudioPlayer pophard4;
AudioPlayer pophard5;
AudioPlayer pophard6;
AudioPlayer pophard7;
AudioPlayer pophard8;
AudioPlayer pophard9;
AudioPlayer Ambiance;
AudioPlayer soundPop ;


float timePop ;
float soundDuration;
PGraphics pgPop;
PVector initPos;

/////// DEBUG SLIDERS ////////

import controlP5.*;

ControlP5 cp5;
float radiusG;
float sliderValue = 0.79;
float sliderValueY = 1.07;
float sliderMinX = 1.06;
float sliderMinY = 1.39;

float bestcodec = 0 ;
//////////// particules ///////////
int nb =10000;
ArrayList<Particle> particules ;
ArrayList<Hamburger> hamburger ;
//Particle[] particules = new Particle[10];
PVector target;
float xoff, yoff;
float[] x = new float[nb]; 
float[] y = new float[nb]; 
boolean openDoor = false;
float timer, t_stamp, t_life; //timer = excitation et décompte de la jauge de vie des particules : t_agglo = pour agglomérer la taille des codecs / sec 
int Agents ; //nb d'agents


///////////////////// BACKGROUND :///////////////
ArrayList<back> Back;
ArrayList<backvoid> Backvoid; // à choisir entre les trois
ArrayList<backvoidreverse> Backvoidrev;
circlezone Circlezone = new circlezone(); 
boolean trounoir = false;
boolean troureverse = false ;

/////////////////////// REQUEST POP //////////////////////
float noisoff=0;
float val=0;
popper Popper1 = new popper(); 
int formResolution = 6;
boolean isactive = false;
float distortionFactor = 1;
float Radius = 30;
float centerX, centerY;
float[] xstart = new float[formResolution];
float[] ystart = new float[formResolution];
float[] xbeg = new float[formResolution];
float[] ybeg = new float[formResolution];
float energie ;


///// TWEETOSPHERE /////
//Build an ArrayList to hold all of the words that we get from the imported tweets
ArrayList<Tweetos> tweets = new ArrayList();
Twitter twitter ;
Query query;
int frameCounter = 0 ; 
int newTweet = 0;

int tweetCounter = 0;
int oldTweet = 0 ;
int diffTweets = 0;

void setup() {
  fullScreen(P2D);
  pgPop = createGraphics(1600, 900);
  minim = new Minim(this);
  background(255);
  smooth();
  stroke(0, 64);
  Back = new ArrayList<back>(1000);
  Backvoid = new ArrayList<backvoid>();
  Backvoidrev = new ArrayList<backvoidreverse>();
  particules = new ArrayList();
  hamburger = new ArrayList();

  //// TWEETOS ///
  ConfigurationBuilder cb = new ConfigurationBuilder();
  cb.setOAuthConsumerKey("v27gI8P2Sg29MfgIE6FLPSVUb");
  cb.setOAuthConsumerSecret("KK7uuIzZl5aIl13LOrxKJUhtPEXg9MROJQIl6xvMTgkY52G2fG");
  cb.setOAuthAccessToken("1087299040302284806-KpRNrswnQzfYl1zkMROgRonxydTSJY");
  cb.setOAuthAccessTokenSecret("DZBd0Hvzk2hR67ev6oInsvithGMXFxgzERyQsYmwjMcBe");
  twitter = new TwitterFactory(cb.build()).getInstance();
  query = new Query("lecolededesign");


  ///////////SLIDER///////////
  /* cp5 = new ControlP5(this);
   
   // add a horizontal sliders, the value of this slider will be linked
   // to variable 'sliderValue' 
   cp5.addSlider("sliderValue")
   .setPosition(100, 50)
   .setRange(-0.7878, 0.79)
   ;
   cp5.addSlider("sliderValueY")
   .setPosition(100, 100)
   .setRange(1, 1.07)
   ;
   cp5.addSlider("sliderMinX")
   .setPosition(100, 150)
   .setRange(0.5, 1.06)
   ;
   cp5.addSlider("sliderMinY")
   .setPosition(100, 200)
   .setRange(0.5, 1.39)
   ;
   */

  /////// INIT AGENTS //////
  for (int i = 0; i < 20; i++) {
    newPos(140, 200);
    particules.add(new Particle(initPos.x, initPos.y, 255));
  }

  for (int i = 0; i < 1000; i++) {
    Back.add(new back());
  }

  pophard = minim.loadFile("pophard.wav");
  pophard2 = minim.loadFile("pophard2.wav");
  pophard3 = minim.loadFile("pophard3.wav");
  pophard4 = minim.loadFile("pophard4.wav");
  pophard5 = minim.loadFile("pophard5.wav");
  pophard6 = minim.loadFile("pophard6.wav");
  pophard7 = minim.loadFile("pophard7.wav");
  pophard8 = minim.loadFile("pophard8.wav");
  pophard9 = minim.loadFile("pophard9.wav");
  Ambiance = minim.loadFile("AMBIANCEVOID.wav");
  Ambiance.loop();


  pixelDensity(1);
}


void draw() {

  thread("queryThread"); //execution en parallèle
  frameCounter ++ ;

  pushMatrix();
  fill(0, 10);
  rect(0, 0, width, height);
  popMatrix();

  maj();
  if (trounoir) majvoid();
  if (troureverse) majvoidrev();

  for (int i = 0; i < particules.size(); i++) {
    Particle particucule = particules.get(i);
    particucule.update();
    particucule.display(i);
  }
  println(tweetCounter);
  println("new = ", newTweet, "    old = ", oldTweet);
  ///// SECOND STEP : DISPLAY DATAS ///////
  if (frameCounter % 20 == 0 ) {
    if (tweetCounter < tweets.size() - 1) { // result : 0 < -1 lorsqu'aucun tweet n'a encore été chargé
      if (tweetCounter != 0) {
        tweetCounter ++;
        if (frameCounter > 950) {
          Tweetos t = tweets.get(tweetCounter);
          String username = t.name;
          String content = t.msg;
          float energie = t.kcal;
          newPos(0, 100);
          hamburger.add(new Hamburger(initPos.x, initPos.y, energie, username, content)); //nouveau truc à manger
          t.update(tweetCounter);
          t.display();
          playSound(pophard);
          openDoor = true;
          timer = millis() + 800; // timer pour l'excitation des particles
        }
      }
    } else tweetCounter = 0;
  }
  //si un objet apparait (et donc que le centre est accessible), je lance un timer pour les exciter avant qu'ils se lancent dans l'agrerssion du pauvre petit paquet qui a pop
  if (openDoor == true ) t_stamp = millis();

  for (int i = 0; i < hamburger.size(); i++) {
    Hamburger frites = hamburger.get(i);
    frites.hambStyle();
  }




  if ( pophard.position() < pophard.length() * random(0.5) && pophard.isPlaying()) {
    Circlezone.updater();
  } else Circlezone.reset();

  //verify if there is at least one hamburger on screen
  if (hamburger.size() == 0) { //if there isn't, so close access to center
    openDoor = false;
    timer = t_stamp + 1;
  }
}


void queryThread() {
  if (frameCounter % 900 == 0) {
    ArrayList<Tweetos> tweets = new ArrayList();
    ///// FIRST STEP  : SEARCH //////
    try {
      QueryResult result = twitter.search(query);
      //  println(result);
      for (Status status : result.getTweets()) {
        println("@", status.getUser().getScreenName());
        //ranger les id et les tweets dans l'arrayList
        println("Tweet : ", status.getText());
        String user = (String) status.getUser().getScreenName();
        String tweet = (String) status.getText();
        energie = map (user.length(), 0, 40, 5, 30) ;  //8000 plus grande valeur observée sur plsueirus longueds observations
        if (energie > 25) energie = 25 ;
        Tweetos tw = new Tweetos(user, tweet, energie, width/2);
        tweets.add(tw);
      }
      newTweet = tweets.size();
    }
    catch (TwitterException te) {
      println("Couldn't connect: " + te);
    };
    if (oldTweet < newTweet) {
      diffTweets = newTweet - oldTweet;
      tweetCounter = tweets.size() - (diffTweets + 1); //sale mais fonctionne : si de nouveaeux tweets sont postés, je calcule la diff (qui sera utilisée pour déterminer l'index d'affichage)
      oldTweet = newTweet ; //et je mets à jour oldTweet simplement
    }
  }
}


///////// BACKGROUND FUNCTIONS ///////////
void maj() {
  for (int u = 0; u < Back.size(); u++) {
    back maj = Back.get(u);
    maj.update();
    maj.display();
  }
}

void majvoid() {
  println("lajvoid");
  float chancevoid=random(0, 1);
  if (chancevoid > 0.8) {
    Backvoid.add(new backvoid());
  }
  for (int j = 0; j < Backvoid.size(); j++) {
    backvoid majvoid = Backvoid.get(j);
    majvoid.update(j);
    majvoid.display();
  }
}

void majvoidrev() {
  float chancevoidrev=random(0, 1);
  if (chancevoidrev>0.8) {
    Backvoidrev.add(new backvoidreverse());
  }
  for (int k=0; k<Backvoidrev.size(); k++) {
    backvoidreverse majvoidrev = Backvoidrev.get(k);
    majvoidrev.update(k);
    majvoidrev.display();
  }
}

//////////// USEFULL FUNCTIONS /////////

AudioPlayer choosePopSound() { 
  int lotterie = int(random(9));
  if ( lotterie == 9) lotterie = 8; //à ne pas refaire à la maison !

  if (lotterie == 0) soundPop = pophard;
  if (lotterie == 1) soundPop = pophard8;
  if (lotterie == 2) soundPop = pophard2;
  if (lotterie == 3) soundPop = pophard3;
  if (lotterie == 4) soundPop = pophard4;
  if (lotterie == 5) soundPop = pophard5;
  if (lotterie == 6) soundPop = pophard6;
  if (lotterie == 7) soundPop = pophard7;
  if (lotterie == 8) soundPop = pophard9;

  return soundPop ;
}


void playSound(AudioPlayer sound) {
  if (sound.isPlaying() == true) {
    sound.pause();
    sound.rewind();
    sound.play();
  } else {
    sound.rewind();
    sound.play();
  }
}


void slider(float thevalue) {
  radiusG = thevalue ;
}

PVector newPos(int r1, int r2) {
  float angle = random(TWO_PI);
  float r = random(r1, r2);
  float x = width/2 + r * cos(angle);
  float y = height/2 + r * sin(angle);
  initPos = new PVector(x, y);

  return initPos;
}



/////////// DEBOGUAGE & TESTS ////////////////////
void keyPressed() {
  if (keyCode == SHIFT) {
    newPos(140, 200);
    particules.add(new Particle(initPos.x, initPos.y, 255));
    println("add new particule");
  }

  if (keyCode == TAB && particules.size() > 3) particules.remove(random(particules.size()));

  if (keyCode == CONTROL) {
    trounoir = true;
    troureverse = false;
  }
  if (keyCode == 66) {
    troureverse =true ; 
    trounoir = false ;
  }
  if (keyCode == 67) {
    troureverse = false ;
    trounoir = false ;
  }
}

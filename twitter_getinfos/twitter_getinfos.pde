import java.text.SimpleDateFormat;
import java.util.Date;

float bestcodec = 0 ;

///// TWEETOSPHERE /////
//Build an ArrayList to hold all of the words that we get from the imported tweets
ArrayList<Tweetos> tweets = new ArrayList();
Twitter twitter ;
Query query;


void setup() {
size(800,800);
  background(255);
  smooth();

  //// TWEETOS ///
  ConfigurationBuilder cb = new ConfigurationBuilder();
  cb.setOAuthConsumerKey("MoHS3l2n4PAGKgxfERGWgxmqg");
  cb.setOAuthConsumerSecret("yl785UmkLZl4qZSekKjixlPhd7VwszWp4vCOFLH43DPWavdc4F");
  cb.setOAuthAccessToken("1087299040302284806-ujcHAclmUBWR9ErcmNLfitcieUMtnX");
  cb.setOAuthAccessTokenSecret("JVGM4W0VneC148Vp2QNGvaBQ775GOO1g9lerLgannVEU4");
  twitter = new TwitterFactory(cb.build()).getInstance();
  query = new Query("café");
  //hashtag de l'ecole : #portesouvertes2019
  queryThread();
  pixelDensity(1);
}


void draw() {
   //thread("queryThread"); //execution en parallèle
}


void queryThread() {
  if ( frameCount % 100 == 0 ){

    tweets = new ArrayList();
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
        
        Tweetos tw = new Tweetos(user, tweet);
        tweets.add(tw);
      }
  }
  catch (TwitterException te) {
    println("Couldn't connect: " + te);
  };
}
}

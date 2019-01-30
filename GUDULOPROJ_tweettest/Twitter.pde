class Tweetos {
  String name, msg;
  float kcal, postxt;

  Tweetos(String _name, String _msg, float energie, float posy) {
    this.name = _name;
    this.msg = _msg;
    this.kcal = energie;
    this.postxt = posy ;
  }

  void update(int i) {
    postxt -= 50;
    if (postxt < height/4 + 20) tweets.remove(i);
  }

  void display() {
    pushStyle();
    fill(0);
    rect(40, height/4, 480, ( height / 2 )) ;
    popStyle();
    pushStyle();
    textSize(14);
    text(name, 50, postxt);
    popStyle();
    text(msg, 50, postxt + 10, 470, height/4); 
    // println("texte affiché");
  }
}

class Hamburger {
  float posX, posY, kcal, postxt ;
  String msg, username;

  Hamburger(float xpos, float ypos, float calories, String _user, String _msg) {
    this.posX = xpos;
    this.posY = ypos;
    this.kcal = calories;
    this.username = _user;
    this.msg = _msg ;
  }

  void hambStyle() {
    pushStyle();
    fill(255);
    noStroke();
    //float x = random(width / 2 - 50, width / 2 + 50);
    //float y = random(height / 2 - 50, height / 2 + 50);
    Radius = kcal;
    Popper1.initPop(Radius);
    Popper1.display(posX, posY);
    Popper1.resizer();
    popStyle();
    pushStyle();
    //Put it somewhere random on the stage, with a random size and colour
    fill(255, random(50, 150));
    textSize(kcal + 5);
    text(username, posX + 20, posY);
    popStyle();
  }
} 

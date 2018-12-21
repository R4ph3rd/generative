// 20161121. processing 3.2.1, Win XP

import controlP5.*;

ControlP5 cp5;
RadioButton r1;

float translation_x, translation_y, rotation, scaling;

int[] transformation_order = {0, 1, 2};

void setup() {
  size(1000, 800);
  frameRate(10);
  
  cp5 = new ControlP5(this);
  cp5.addSlider("translation_x").setPosition(800,50).setSize(120,12)
     .setRange(-100, 400).setValue(130).setDecimalPrecision(0).setColorCaptionLabel(#000000);
  cp5.addSlider("translation_y").setPosition(800,80).setSize(120,12)
     .setRange(-100, 400).setValue(130).setDecimalPrecision(0).setColorCaptionLabel(#000000);
  cp5.addSlider("rotation").setPosition(800,110).setSize(120,12)
     .setRange(0, TWO_PI).setValue(0).setDecimalPrecision(2).setColorCaptionLabel(#000000);
  cp5.addSlider("scaling").setPosition(800,140).setSize(120,12)
     .setRange(0.5, 2).setValue(1).setDecimalPrecision(2).setColorCaptionLabel(#000000);
     
  cp5.getController("translation_x").getCaptionLabel().align(ControlP5.LEFT, ControlP5.TOP_OUTSIDE).setPaddingX(0);  
  cp5.getController("translation_y").getCaptionLabel().align(ControlP5.LEFT, ControlP5.TOP_OUTSIDE).setPaddingX(0); 
  cp5.getController("rotation").getCaptionLabel().align(ControlP5.LEFT, ControlP5.TOP_OUTSIDE).setPaddingX(0); 
  cp5.getController("scaling").getCaptionLabel().align(ControlP5.LEFT, ControlP5.TOP_OUTSIDE).setPaddingX(0); 
  
 
  r1 = cp5.addRadioButton("radioButton")
          .setPosition(800,170)
          .setSize(12, 12)
          .setItemsPerRow(1)
          .setColorLabel(color(0))
          .addItem("Translate, Scale, Rotate",1)
          .addItem("Translate, Rotate, Scale",2)
          .addItem("Rotate, Translate, Scale",3)
          .addItem("Rotate, Scale, Translate",4)
          .addItem("Scale, Rotate, Translate",5)
          .addItem("Scale, Translate, Rotate",6);
         
  cp5.addButton("reset")
     .setValue(0)
     .setPosition(800,270)
     .setSize(40,12);
}

void draw() {
  background(255);
  drawGrid(color(#DDDDDD), 50, 10, 0, 0, false);
  String code = "pushMatrix();\n";
  pushMatrix();
  for (int i = 0; i < transformation_order.length; i++) {
    switch(transformation_order[i]) {
      case 0:
        translate(translation_x, translation_y);
        code += "translate(" + int(translation_x) + ", " +int(translation_y) + "); \n";
        break;
      case 1:
        scale(scaling);
        code += "scale(" + (float)int(scaling * 100) / 100 + ");\n";
        break;
     case 2:
        rotate(rotation);
        code += "rotate(" + (float)int(rotation * 100) / 100 + ");\n";
        break;
    }
  }

  drawGrid(color(#000000), 50, 10, 0, 0, true);
  popMatrix(); 
  code += "popMatrix();\n";
  
  // code 
  fill(237, 255, 126);
  stroke(0);
  rect(790, 330, 140, 110, 12);
  fill(0);            
  textSize(12);
  text(code, 800, 350);
}


void radioButton(int a) {
  switch(a) {
    case 1:
      transformation_order = new int[] {0, 1, 2};
      break;
    case 2:
      transformation_order = new int[] {0, 2, 1};
      break;
    case 3:
      transformation_order = new int[] {2, 0, 1};
      break;  
    case 4:
      transformation_order = new int[] {2, 1, 0};
      break;
    case 5:
      transformation_order = new int[] {1, 2, 0};
      break;
    case 6:
      transformation_order = new int[] {1, 0, 2};
      break;
  }
}

public void reset(int v) {
  transformation_order = new int[] {0, 1, 2};
  translation_x = 130;
  translation_y = 130;
  rotation = 0;
  scaling = 1;
  
  cp5.getController("translation_x").setValue(130);
  cp5.getController("translation_y").setValue(130);
  cp5.getController("rotation").setValue(0);
  cp5.getController("scaling").setValue(1);
}

void drawGrid(color c, float cell_width, int cell_number, float start_x, float start_y, boolean visible_captions) {

  stroke(c);
  fill(c);
  
  // draw orthogonal grid
  for (int n=0; n <= cell_number; n ++) {
    float x = start_x + (n * cell_width);
    line(x, start_y, x, start_y + (cell_number * cell_width));
    float y = start_y + (n * cell_width);
    line(start_x, y, start_x + (cell_number * cell_width), y);
  }
  
  // axis & arrows
  float end_x = start_x + cell_width * (cell_number + 1);
  float end_y = start_y + cell_width * (cell_number + 1);
  
  // x axis
  line(start_x, start_y, end_x, start_y);
  line(end_x - (cell_width / 6), start_y - (cell_width / 6), end_x, start_y);
  line(end_x - (cell_width / 6), start_y + (cell_width / 6), end_x, start_y);
  
  // y axis
  line(start_x, start_y, start_x, end_y);
  line(start_x - (cell_width / 6), end_y - (cell_width / 6), start_x, end_y);
  line(start_x + (cell_width / 6), end_y - (cell_width / 6), start_x, end_y);
  
  // axis captions
  if (visible_captions) {
    textSize(12);
    text("X", end_x + 20, start_y + 5);
    text("Y", start_x - 5, end_y + 20);
  }
  
  // graduations
  if (visible_captions) {
    textSize(10);
    for (int n=0; n <= cell_number; n ++) {
      float x = start_x + (n * cell_width);
      float y = start_y + (n * cell_width);
      if (n%2 == 0) {
        text( int(n * cell_width) + ", 0", x - cell_width / 4, start_y - cell_width / 8);
        if (n > 0) text("0, " + int(n * cell_width), start_x - cell_width / 4, y - cell_width / 8);
      }
    }
  }

}

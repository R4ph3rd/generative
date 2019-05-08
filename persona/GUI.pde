class GUI{
   ControlP5 cp5;
   
   GUI(PApplet papplet) {
      cp5 = new ControlP5(papplet);
      color label = color(255);
      
        ControlGroup ctrl = cp5.addGroup("menu",20,25,35);
        ctrl.activateEvent(true);
        ctrl.setColorLabel(label);
        ctrl.close();
        
        ControlGroup ctrlCol = cp5.addGroup("COLOR",20,80);
        ctrlCol.activateEvent(true);
        ctrlCol.setColorLabel(label);
        ctrlCol.setGroup(ctrl);
        ctrlCol.close();
        
        ControlGroup ctrlE = cp5.addGroup("EYES",20,20);
        ctrlE.activateEvent(true);
        ctrlE.setColorLabel(label);
        ctrlE.setGroup(ctrl);
        ctrlE.close();
        
        ControlGroup ctrlH = cp5.addGroup("HEAD",20,40);
        ctrlH.activateEvent(true);
        ctrlH.setColorLabel(label);
        ctrlH.setGroup(ctrl);
        ctrlH.close();
        
        ControlGroup ctrlNM = cp5.addGroup("NOISE & MOUTH",20,60);
        ctrlNM.activateEvent(true);
        ctrlNM.setColorLabel(label);
        ctrlNM.setGroup(ctrl);
        ctrlNM.close();
        
        ControlGroup ctrlHair = cp5.addGroup("HAIR",20,80);
        ctrlHair.activateEvent(true);
        ctrlHair.setColorLabel(label);
        ctrlHair.setGroup(ctrl);
        ctrlHair.close();
        
        ControlGroup ctrlColor = cp5.addGroup("COLORS",20,100);
        ctrlColor.activateEvent(true);
        ctrlColor.setColorLabel(label);
        ctrlColor.setGroup(ctrl);
        ctrlColor.close();
        
         cp5.addButton("Reset").setPosition(20,120).setSize(100,30).setGroup(ctrl);
        
        //eyes GUI
      cp5.addSlider("eyeSize").setPosition(110,0).setSize(200,15)
                           .setRange(50,200)
                           .setValue(200)
                           .setColorCaptionLabel(label)
                           .setGroup(ctrlE);
      cp5.addSlider("angle").setPosition(110,20).setSize(200,15)
                           .setRange(-PI/10,PI/6)
                           .setValue(1.94)
                           .setColorCaptionLabel(label)
                           .setGroup(ctrlE);
     cp5.addSlider("eyeProportion").setPosition(110,40).setSize(200,15)
                           .setRange(0,10)
                           .setValue(2)
                           .setColorCaptionLabel(label)
                           .setGroup(ctrlE);
     cp5.addSlider("ecart").setPosition(110,60).setSize(200,15)
                           .setRange(0.1,3)
                           .setValue(200)
                           .setColorCaptionLabel(label)
                           .setGroup(ctrlE);    
                           
                           
        //head GUI
     cp5.addSlider("headSize").setPosition(110,0).setSize(200,15)
                           .setRange(350,550)
                           .setValue(200)
                           .setColorCaptionLabel(label)
                           .setGroup(ctrlH);
     cp5.addSlider("headProportion").setPosition(110,20).setSize(200,15)
                           .setRange(0,10)
                           .setValue(2)
                           .setColorCaptionLabel(label)
                           .setGroup(ctrlH);
                           
      //mouth & noise GUI
     cp5.addSlider("mouthLength").setPosition(110,0).setSize(200,15)
                           .setRange(0.1,0.7)
                           .setValue(0.5)
                           .setColorCaptionLabel(label)
                           .setGroup(ctrlNM);
     cp5.addSlider("mouthHole").setPosition(110,20).setSize(200,15)
                           .setRange(0.1,0.4)
                           .setValue(0.5)
                           .setColorCaptionLabel(label)
                           .setGroup(ctrlNM);
     
      
      //colors
     cp5.addButton("SET_1").setPosition(120,0).setSize(80,30).setGroup(ctrlColor);
     cp5.addButton("SET_2").setPosition(120,40).setSize(80,30).setGroup(ctrlColor);
     cp5.addButton("SET_3").setPosition(120,80).setSize(80,30).setGroup(ctrlColor);
     cp5.addButton("SET_4").setPosition(120,120).setSize(80,30).setGroup(ctrlColor);
  }
  
}
/*
cp5 = new ControlP5(this);
  cp5.addSlider("eyes")
       .setPosition(40, 40)
       .setSize(200, 20)
       .setRange(100, 300)
       .setValue(250)
       .setColorCaptionLabel(color(20,20,20));*/

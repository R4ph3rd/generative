class GUI{
   ControlP5 cp5;
   
   GUI(PApplet papplet) {
      cp5 = new ControlP5(papplet);
      
        ControlGroup ctrl = cp5.addGroup("menu",20,25,35);
        ctrl.activateEvent(true);
        ctrl.setColorLabel(color(255));
        ctrl.close();
        
        ControlGroup ctrlE = cp5.addGroup("EYES",20,20);
        ctrlE.activateEvent(true);
        ctrlE.setColorLabel(color(255));
        ctrlE.setGroup(ctrl);
        ctrlE.close();
        
        ControlGroup ctrlH = cp5.addGroup("HEAD",20,40);
        ctrlH.activateEvent(true);
        ctrlH.setColorLabel(color(255));
        ctrlH.setGroup(ctrl);
        ctrlH.close();
        
        ControlGroup ctrlNM = cp5.addGroup("NOISE & MOUTH",20,60);
        ctrlNM.activateEvent(true);
        ctrlNM.setColorLabel(color(255));
        ctrlNM.setGroup(ctrl);
        ctrlNM.close();
        
        ControlGroup ctrlHair = cp5.addGroup("HAIR",20,80);
        ctrlHair.activateEvent(true);
        ctrlHair.setColorLabel(color(255));
        ctrlHair.setGroup(ctrl);
        ctrlHair.close();
        
        //eyes GUI
      cp5.addSlider("eye").setPosition(20,20).setSize(200,15)
                           .setRange(100,300)
                           .setValue(200)
                           .setColorCaptionLabel(color(20,20,20))
                           .setGroup(ctrlE);
      cp5.addSlider("ee").setPosition(20,40).setSize(200,15)
                           .setRange(1,3)
                           .setValue(200)
                           .setColorCaptionLabel(color(20,20,20))
                           .setGroup(ctrlE);
     cp5.addSlider("lh").setPosition(20,60).setSize(200,15)
                           .setRange(100,300)
                           .setValue(200)
                           .setColorCaptionLabel(color(20,20,20))
                           .setGroup(ctrlE);
     cp5.addSlider("hh").setPosition(20,80).setSize(200,15)
                           .setRange(100,300)
                           .setValue(200)
                           .setColorCaptionLabel(color(20,20,20))
                           .setGroup(ctrlE);                      
      cp5.addButton("backgroundPatern").setPosition(20,120).setSize(100,30).setGroup(ctrl);
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

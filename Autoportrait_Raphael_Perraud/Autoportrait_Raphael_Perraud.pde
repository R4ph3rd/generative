
size(800,800);


//cheveux noirs
fill (35,35,35);
strokeWeight(4);
beginShape();
vertex(190.667,87.333);
vertex(229.5,44.333);
vertex(272,56.667);
vertex(290,33.667);
vertex(342,52);
vertex(361.566,34.333);
vertex(440.667,66.333);
vertex(500,166.667);
vertex(496.433,230.333);
vertex(482,253);
vertex(406.5,267.577);
vertex(211.133,180.567);
endShape(CLOSE);


//visage bleu clair
noStroke();
fill(128,189,255);
beginShape();
vertex(217.333,128.333);
vertex(306.333,102.667);
vertex(428.667,212);
vertex(420.667,250.333); //angle avec l'ombrage marron
vertex(445.5,337.75);
vertex(333.75,443.75);
vertex(283,456.75);
vertex(227.5,381.577);
vertex(222.75,349.25);
vertex(200.75,287.75); //creux yeux
vertex(220.75,238);
vertex(208.25,207);
endShape(CLOSE);


translate(50,30);


//oreille marron
strokeWeight(4);
stroke(0);
fill(94,29,0);
beginShape();
vertex(372.477,229.647);
vertex(439.477,171.933);
vertex(454.477,171.933);
vertex(454.477,226.933);
vertex(415.477,306.933);
vertex(397.31,309.433);
vertex(372.477,229.647);
endShape(CLOSE);

//lobe d'oreille
noFill();
stroke(0);
strokeWeight(3);
beginShape();
vertex(401.477,222.933);
vertex(386.477,236.933);
vertex(401.477,236.933);
vertex(407.477,248.933);
vertex(401.477,269.933);
vertex(401.477, 280.933);
vertex(413.477,276.933);
vertex(424.477,264.933);
endShape();


//buste
fill(132, 132, 132);
strokeWeight(4);
beginShape();
vertex(1.977,699.433);
vertex(13.977,621.433);
vertex(54.977,566.433);
vertex(142.977,542.433);
vertex(197.977,519.433);
vertex(222.477,487.933);
vertex(228.977,454.433);
vertex(227.477,418.933);//angle haut droit du cou
vertex(395.977,306.433);
vertex(446.977,474.433);//base droite cou
vertex(465.977,487.433);
vertex(510.977,505.433);
vertex(601.977,533.433);
vertex(640.977,574.433);
vertex(652.977,637.433);
vertex(652.977,703.433);
vertex(1.977,703.433);//coin bas droite
endShape(CLOSE);



//cou bleu clair
noStroke();
fill(128,189,255);
beginShape();
vertex(227.477,418.933); //coin haut droit du cou
vertex(300.667,360.883);
vertex(337.333,526.667);//coin bas bleu foncé/clair
vertex(306.667,534.667);
vertex(254.667,528.667);
vertex(222.667,505.333);
vertex(222.477,489.933);
vertex(228.977,455.433);
endShape(CLOSE);


translate(-90,-30);

//lumière jaune
fill(221,256,168);
noStroke();
beginShape();
vertex(342.333,391.5);
vertex(317.625,396.625);
vertex(297.625,388.625);
vertex(282.625,399.376); //joue
vertex(270.375,381.533);
vertex(262.625,348.533);
vertex(239.753,288.375); //pomettes
vertex(263.625,236.755);
vertex(250.625,213.625);
vertex(271.533,202.125);
vertex(304.755,225.533);
vertex(277.755,334.375);
vertex(310.533,344.625);
vertex(328.375,370.755);
endShape(CLOSE);


//ombrage bleu foncé
fill(94,141,256);
noStroke();
beginShape();
vertex(345.25,103.533); //haut du crane
vertex(468.667,212);
vertex(460.667,250.333);//ombrage marron
vertex(528.333,490.667);
vertex(489.667,530.333);
vertex(426.333,556.667); //coin bas bleu foncé/clair
vertex(375.5,440.75);
vertex(322.333,457);
vertex(310.333,426);
vertex(328.667,408.667);
vertex(320.333,398.333);
vertex(335.333,392.333);
vertex(365.667,379.667);
vertex(367.667,325.333);
vertex(378.333,284);
vertex(366.667,278.667);
vertex(354.667,265.667);
vertex(350.667,300.333);
vertex(330.333,300.333);
vertex(330.333,213.333);
vertex(360.333,193.667);
vertex(343.667,161.667);
endShape(CLOSE);


//ombrage marron rouge
fill(142,48,23);
noStroke();
beginShape();
vertex(459.667,248);
vertex(537,505.667);
vertex(552.333,517.667);
vertex(588.667,532.667);
vertex(495.333,530.667);
vertex(427.333,394.333);
vertex(375,440.333);
endShape(CLOSE);


//contour cou
noFill();
stroke(0);
strokeWeight(4);
beginShape();
vertex(484.333,337.333); //base oreille
vertex(537,505.667);
vertex(550.333,515);
vertex(490.333,530.667);
vertex(427.333,556); //bleu clair/foncé
vertex(397.333,564.167);
vertex(344.833,558.167);
vertex(313.333,535.333);
vertex(309.167,521);
vertex(317.167,485.5);
vertex(316.333,448.667);
vertex(322.167,457.333);
vertex(375.167,442.167);
endShape(CLOSE);
translate(90,30);


//oeil gauche
strokeWeight(3);
line(203.4767,210.933,188.4767,195.933);
line(205.9767,228.433,176.9767,223.433);
line(178.4767,202.933,199.4767,186.933);
line(197.9767,205.433,196.9767,220.433);
fill(0);
ellipse(187.4767,206.433,5,14);



//bouche
stroke(0);
noFill();
strokeWeight(3);
beginShape();
vertex(202.477,345.933);
vertex(219.477,338.933);
vertex(227.477, 342.933);
vertex(237.477, 341.933);
vertex(254.477, 360.933);
vertex(229.477, 365.933);
vertex(209.477, 357.933);
vertex(209.477, 347.933);
vertex(202.477, 345.933);
endShape(CLOSE);
line(253.4767,359.933,202.4767,345.933);


//nez partie gauche
noFill();
strokeWeight(3);
beginShape();
vertex(230.477,316.933);
vertex(189.477,303.933);
vertex(216.477,194.933);
vertex(183.423,171.268 );
vertex(174.477,175.933);
endShape();


//nez droite
noFill();
stroke(3);
strokeWeight(3);
beginShape();
vertex(240.477,269.433);
vertex(240.477, 182.433);
vertex(272.477, 163.433);
vertex(353.477, 185.433);
endShape();


translate(252,286);
rotate(4*PI/3);
arc(0,0, 37, 30, 0, PI);
rotate(-4*PI/3);
translate(-252,-286);


//oeil droit
noFill();
stroke(0);
strokeWeight(3);
beginShape();//contour oeil haut
vertex(329.4767,219.933);
vertex(284.4767,191.933);
vertex(259.4767,205.933);
vertex(284.4767,191.933);
endShape();
beginShape();//contour oeil bas
vertex(319.9767,223.433);
vertex(286.9767,238.433);
vertex(265.9767,214.433);
vertex(288.9767,238.433);
endShape();
strokeWeight(4);
line(293.9767,205.433,290.9767,217.433); //rétine
beginShape(); //pupille
vertex(280.042,212.042);
vertex(288.042,197.083);
vertex(298.042,203.083);
vertex(305,211.042);
vertex(290,226.083);
endShape(CLOSE);


translate(-50,-30);
//contour visage
stroke(0);
strokeWeight(4);
noFill();
beginShape();
vertex(217.333,128.333);
vertex(306.333,102.667);
vertex(428.667,212);
vertex(420.667,250.333); //angle avec l'ombrage marron
vertex(445.5,337.75);
vertex(333.75,443.75);
vertex(283,456.75);
vertex(227.5,381.577);
vertex(222.75,349.25);
vertex(200.75,287.75); //creux yeux
vertex(220.75,238);
vertex(208.25,207);
endShape(CLOSE);




translate(50,30);


//trou de nez
noStroke();
translate(-191.9822,131.5561);
fill(0);
float D=-24;
float Rad=radians(D);
rotate(Rad);
ellipse(330,322,17.5,9);
rotate(-Rad);


saveFrame("autoportrait_perraud_raphael.png");
  

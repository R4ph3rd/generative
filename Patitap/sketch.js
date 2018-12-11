var amplitudeA;
var amplitudeB;
var amplitudeD;
var amplitudeK

var levelA
var levelB

//b
var biscottes = []
var pg
var transparence

//l
var cerclesConfiance = []


var timeStart
var timeAnim
var rouge = 0
var vert = 0
var bleu = 0
var xpos
var ypos
var xtarget
var ytarget
var NUMSINES
var fund
var sines = new Array(NUMSINES); // an array to hold all the current angles
var rad; // an initial radius value for the central sine

var j = 0
var i = 0
var n = 0
var seed = 1234;

var angleL = 20
var speedL = 0.25
var radiusL = 90
var sx = 30
var sy = 30

function preload() {
    soundA = loadSound("assets/Animaux_sounds/BADOUM_ELEPHANT.wav")
    soundB = loadSound("assets/Animaux_sounds/BISCOTTE.wav")
    soundC = loadSound("assets/Animaux_sounds/CAPUCHE.wav")
    soundD = loadSound("assets/Animaux_sounds/EHOH_LA_FOURMI.wav")
    soundE = loadSound("assets/Animaux_sounds/EXTRATERE.wav")
    soundF = loadSound("assets/Animaux_sounds/KARL.wav")
    soundG = loadSound("assets/Animaux_sounds/LAMA.wav")
    soundH = loadSound("assets/Animaux_sounds/MAYA.wav")
    soundI = loadSound("assets/Animaux_sounds/NASIQUE.wav")
    soundJ = loadSound("assets/Animaux_sounds/PEROQUET.wav")
    soundK = loadSound("assets/Animaux_sounds/PULUPULU.wav")
    soundL = loadSound("assets/Animaux_sounds/SERPENT.wav")
    soundM = loadSound("assets/Animaux_sounds/TATOU.wav")
    soundN = loadSound("assets/Animaux_sounds/WHOOMLONG.wav")
    soundO = loadSound("assets/Animaux_sounds/ROGNEUGNEU.wav")
    soundP = loadSound("assets/Animaux_sounds/AREVOIR-TOISINGE.wav")
    soundQ = loadSound("assets/Animaux_sounds/PICPIC.wav")
    soundR = loadSound("assets/Superbes_enregistrements/TASCAM_0476.wav")
    soundS = loadSound("assets/Superbes_enregistrements/TASCAM_0477.wav")
    soundT = loadSound("assets/Superbes_enregistrements/TASCAM_0478.wav")
    soundU = loadSound("assets/Superbes_enregistrements/TASCAM_0480.wav")
    soundV = loadSound("assets/Superbes_enregistrements/TASCAM_0484.wav")
    soundW = loadSound("assets/Superbes_enregistrements/En_passant_pecho.mp3")
    soundX = loadSound("assets/Superbes_enregistrements/TASCAM_0491.wav")
    soundY = loadSound("assets/Superbes_enregistrements/TASCAM_0449.wav")
    soundZ = loadSound("assets/Superbes_enregistrements/TASCAM_0448.wav")






}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    background(0, 40);
    pixelDensity(1)


    //tous les analysers de son
    amplitudeA = new p5.Amplitude()
    amplitudeB = new p5.Amplitude()
    amplitudeD = new p5.Amplitude()
    amplitudeK = new p5.Amplitude()





    xpos = 200
    ypos = 7 * height / 8


    /* a = 150 / height
     b = 70 / width
     console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA=" + a)
     console.log("BBBBBBBBBBBBBBBBBBBBBBBBB=" + b)*/
    //pour anim2
    Xrect = 0.043 * width
    Yrect = 0.203804 * height //reponsive !
    pg = createGraphics(width, height)


    //pour animI
    position1 = createVector(0, 0)
    position2 = createVector(0, 150)
    velocity = p5.Vector.random2D()
    velocity.mult(4)

    //anim 3 pour faire pivoter plusieurs objets en même temps
    NUMSINES = 20; // how many of these things can we do at once?
    fund = 0.005; // the speed of the central sine    
    rad = height / 4; // compute radius for central circle
    for (var i = 0; i < sines.length; i++) {
        sines[i] = PI; // start EVERYBODY facing NORTH
    }

}


function draw() {
    randomSeed(seed);
    background(rouge, vert, bleu, transparence)
    let t = frameCount / 60;

    musicPlay(soundA, 65) //a
    musicPlay(soundB, 66) //b
    musicPlay(soundC, 67) //c
    musicPlay(soundD, 68) //d
    musicPlay(soundE, 69) //e
    musicPlay(soundF, 70) //f
    musicPlay(soundG, 71) //g
    musicPlay(soundH, 72) ////h
    musicPlay(soundI, 73) //i
    musicPlay(soundJ, 74) //j

    musicPlay(soundK, 75) //k
    musicPlay(soundL, 76) //l
    musicPlay(soundM, 77) //m

    musicPlay(soundN, 78) //n
    musicPlay(soundO, 79) //o
    musicPlay(soundP, 80) //p
    musicPlay(soundQ, 81) //q
    musicPlay(soundR, 82) //r
    musicPlay(soundS, 83) //s
    musicPlay(soundT, 84) //t
    musicPlay(soundU, 85) //u
    musicPlay(soundV, 86) //v
    musicPlay(soundW, 87) //w 
    musicPlay(soundX, 88) //x
    musicPlay(soundY, 89) //y
    musicPlay(soundZ, 90) //z


    if (soundA.currentTime() < soundA.duration() - 0.1 && soundA.currentTime() > 0) {

        animA()
    }

    if (soundB.currentTime() < soundB.duration() - 0.1 && soundB.currentTime() > 0) {
        animB()
    } else {
        pg.clear()
        biscottes = []
        transparence = 100

    }

    if (soundC.currentTime() < soundC.duration() - 0.1 && soundC.currentTime() > 0) {
        animC()
    } else if (soundC.currentTime() > soundC.duration() - 0.1) {
        background(0)
    }

    if (soundD.currentTime() < soundD.duration() - 0.1 && soundD.currentTime() > 0) {
        animD()
    }

    if (soundE.currentTime() < soundE.duration() - 0.1 && soundE.currentTime() > 0) {
        animE()
    }

    if (soundF.currentTime() < soundF.duration() - 0.1 && soundF.currentTime() > 0) {
        animF()
    }
    if (soundG.currentTime() < soundG.duration() - 0.1 && soundG.currentTime() > 0) {
        animG()
    }
    if (soundH.currentTime() < soundH.duration() - 0.1 && soundH.currentTime() > 0) { //h
        animH()
    }
    if (soundI.currentTime() < soundI.duration() - 0.1 && soundI.currentTime() > 0) { //i
        animI()
    } else {
        rouge = 0
        vert = 0
        bleu = 0
    }

    if (soundJ.currentTime() < soundJ.duration() - 0.1 && soundJ.currentTime() > 0) {
        animJ()
    }

    if (soundK.currentTime() < soundK.duration() - 0.1 && soundK.currentTime() > 0) {
        animK()
    } else {
        transparence = 40
    }
    if (soundL.currentTime() < soundL.duration() - 0.1 && soundL.currentTime() > 0) {
        animL()
    } else {
        transparence = 40
    }
    if (soundM.currentTime() < soundM.duration() - 0.1 && soundM.currentTime() > 0) {
        animM()
    } else {
        transparence = 40
    }
    if (soundN.currentTime() < soundN.duration() - 0.1 && soundN.currentTime() > 0) {
        animN()
    } else {
        transparence = 40
    }
    if (soundO.currentTime() < soundO.duration() - 0.1 && soundO.currentTime() > 0) {
        animO()
    } else {
        transparence = 40
    }
    if (soundP.currentTime() < soundP.duration() - 0.1 && soundP.currentTime() > 0) {
        animP()
    } else {
        transparence = 40
    }
    if (soundQ.currentTime() < soundQ.duration() - 0.1 && soundQ.currentTime() > 0) {
        animQ()
    } else {
        transparence = 40
    }
    if (soundR.currentTime() < soundR.duration() - 0.1 && soundR.currentTime() > 0) {
        animR()
    } else {
        transparence = 40
    }
    if (soundS.currentTime() < soundS.duration() - 0.1 && soundS.currentTime() > 0) {
        animS()
    } else {
        transparence = 40
    }
    if (soundT.currentTime() < soundT.duration() - 0.1 && soundT.currentTime() > 0) {
        animT()
    } else {
        transparence = 40
    }
    if (soundU.currentTime() < soundU.duration() - 0.1 && soundU.currentTime() > 0) {
        animU()
    } else {
        transparence = 40
    }
    if (soundV.currentTime() < soundV.duration() - 0.1 && soundV.currentTime() > 0) {
        animV()
    } else {
        transparence = 40
    }
    if (soundW.currentTime() < soundW.duration() - 0.1 && soundW.currentTime() > 0) { //u
        animW()
    } else {
        transparence = 40
    }

    if (soundX.currentTime() < soundX.duration() - 0.1 && soundX.currentTime() > 0) {
        animX()
    } else {
        transparence = 40
    }

    if (soundY.currentTime() < soundY.duration() - 0.1 && soundY.currentTime() > 0) {
        animY()
    } else {
        transparence = 40
    }
    if (soundZ.currentTime() < soundZ.duration() - 0.1 && soundZ.currentTime() > 0) {
        animZ()
    } else {
        transparence = 40
    }


} //loop



function musicPlay(sound, keyID) {

    if (keyIsDown(keyID) == true) {
        seed = random(9999)
        if (sound.isPlaying() == true) {
            sound.stop()
            sound.play()
        } else {
            sound.play()
        }
    } //ifkeydown
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    background(0)
}

function animA() {
    amplitudeA.setInput(soundA)
    var levelA = amplitudeA.getLevel()
    var seuil = map(levelA, 0, 0.025757474504161826, 0, 100)
    var pasCurrent = map(soundA.currentTime(), 0, soundA.duration(), 0, 30)

    for (var i = 0; i < pasCurrent; i++) {
        push()
        translate(width / 2, 0)
        noStroke()
        fill(150, 0, 20)

        var angle = map(i, 0, 29, 0, -TWO_PI);
        var x = height * -0.45 * cos(angle);
        var y = height * 0.5 + height * -0.45 * sin(angle);

        ellipse(x, y, 50, 50)
        pop()
    }

}


function animB() {

    amplitudeB.setInput(soundB)
    var levelB = amplitudeB.getLevel()
    // console.log(levelB)

    var displayy = map(levelB, 0, 0.0025, 0, 100)
    pg.clear()

    if (displayy > 70) { //conditon d'affichage : si amplitude sonore > 85 %
        biscottes.push(new biscotte())
    }
    for (var i = 0; i < biscottes.length; i++) {
        biscottes[i].update(); // update biscotte transparency
        biscottes[i].display(pg); // draw new biscotte
        if (biscottes[i].transparence < 5) {
            biscottes = biscottes.splice(i)
        }
    }
    image(pg, 0, 0, width, height)


}

function animC() {
    //rectangles qui tournent sur eux même sur fond jaune
    background(255, 255, 20)
    push()
    rectMode(CENTER)
    for (var i = 0; i < 25; i++) {
        push()
        noStroke()
        fill(random(80), random(250), random(255))
        translate(random(width), random(height))
        rotate(frameCount / 10 + i)
        rect(0, 0, 200, 50, 10)
        pop()

    }
    pop()
}

function animD() {

}

function animE() { //sono depuis le coté gauche
    /* amplitude.setInput(sound5);
     var sonoLevel = amplitude.getLevel()
     print("level=" + sonoLevel)
     var sono = map(sonoLevel, 0, 0.1, 0, 255);
     print("couleursono" + sono)
     for (var x = 0; x < height; x++) {
         var noiseVal = noise(x * 0.05, height * 0.08);
         var couleur = noiseVal * sono
         stroke(couleur, couleur * random(0, 1), couleur * random(0, 5))
         line(0, x, noiseVal * 700, x);
     }*/
}

function animF() {
    /* amplitude.setInput(sound6)
    var sonAmp = amplitude.getLevel()
    print("sonAMp=" + sonAmp)
    var positionX = map(sonAmp, 0, 0.1, 0, width)
    var positionY = map(sonAmp, 0, 0.1, 0, height)
    for (i = 0; i < width; i++) { //height<width donc width condition de la boucle
        push()
        colorMode(HSB, 420, 120, 120)
        stroke(20)
        strokeWeight(2)
        fill(random(0, 420), 120, 120)
        ellipse(positionX, positionY, 30, 30)
        ellipse(positionX * random(0.5, 1.3), positionY * random(0.5, 1.3), 20, 20) // pourquoi ça crée un gros paquet de points ?
        pop()
    }
*/
    /*   transparence = 10
       push()
       noStroke()
       fill(255)
       arc(0, 0, i * 10, i * 10, 0 + PI, CHORD)
       for (i = 1; i < 18; i++) {

           push()
           // var angle = height / sqrt(pow(width, 2) + pow(height, 2))
           arc(0, 0, i * 10, i * 10, 0 + PI, CHORD)
           pop()
           translate(i * width / 60, i * height / 60)
           arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD)
       }

       pop()*/
}

function animG() {
    /*for (posX = width / 12; posX < width; posX = posX + width / 12) { //comment faire un delay pour apparition progressive des barres ?
        // delai = millis()
        strokeWeight(10)
        stroke(255)
        line(posX, height * 0.8, posX, height * 0.2)
    }*/
}

function animH() {
    background(255, 255, 20)
    stroke(0)
    strokeWeight(100)

    for (i = 0; i < 8; i++) {
        push()
        line(width / 6 * i, height, (width / 6 * i) + 150, 0)
        pop()
    }

}

function animI() { //i
    transparence = 100
    background(220, 10, 2)
}

function animJ() { //j
    //jet de cocobilles
    var t = map(sound10.currentTime(), 0, sound10.duration() * 0.60, 0, 1)
    t = constrain(t, 0, 1)
    noStroke()
    var xtarget = []
    var ytarget = []
    fill(0, 20, 230)
    push()
    //placer le point d'origine dans un cercle de 50 autour du centre de l'écran
    translate(random((width / 2) - 50, (width / 2) + 50), random((height / 2) + 50, (height / 2) - 50))
    //angle de lancé alétoire
    rotate(random(TWO_PI))
    for (i = 0; i < 15; i++) {
        xtarget = random(50, 400)
        ytarget = random(-100, 100)
        var x = lerp(0, xtarget, t)
        var y = lerp(0, ytarget, t)
        ellipse(x, y, 20, 20)
    }
    pop()
}

function animK() {
    //pulupulu un escargot qui enappelle un autre
    amplitudeK.setInput(soundK)
    var levelK = amplitudeK.getLevel()
    transparence = 10
    var radius = map(levelK, 0, 0.1, 30, 150) //pour changer le radius des points
    var point = 12
    var currentPoint = map(soundK.currentTime(), 0, soundK.duration(), 0, point + 1)

    push()
    translate(0, height / 2)
    for (i = 1; i < currentPoint + 1; i++) {
        noStroke()
        fill(5, 120, 0)
        ellipse(i * width / 14, 0, radius, radius)
    }
    pop()
}

function animL() { //l



}

function animM() {
    t = map(soundM.currentTime(), 0, soundM.duration(), 0, 20)
    angleL += speedL * t
    var sinval = sin(angleL)
    var cosval = cos(angleL)
    var x = (width / 2) + (cosval * radiusL)
    var y = (height / 2) + (sinval * radiusL)
    var x2 = x + cos(angleL * sx) * radiusL / 2
    var y2 = y + sin(angleL * sy) * radiusL / 2
    fill(255)
    noStroke()
    rect(x, y, 25, 25, 2)
    fill(225, 0, 0)
    rect(x2, y2, 25, 25, 2)
}

function animN() {
    //pas en accord avec l'anim mais carrément stylé
    // randomSeed(455)
    push()
    translate(width / 2, height / 2)
    for (var i = 0; i <= 10000; i++) {
        // var angle = i * 24.0 * PI / 10000;
        var angle = map(soundN.currentTime(), 0, soundN.duration(), 2, TWO_PI * 2) * i / 4000
        var x = cos(angle) * ((cos(angle)) - 10 * cos(4 * angle) - pow(sin(angle / 4), 15)) * 40
        var y = sin(angle) * ((cos(angle)) - 10 * cos(4 * angle) - pow(sin(angle / 4), 15)) * 40
        stroke(255, 15)
        push()
        rotate(i / 210)
        line(x, y, x + 100, y + 100)
        pop()
    }
    pop()

}

function animO() {
    for (var i = 0; i <= 500; i++) {
        // var angle = i * 24.0 * PI / 10000;
        var angle = map(soundN.currentTime(), 0, soundN.duration(), 2, TWO_PI) * i / 8000
        var x = cos(angle) * ((cos(angle)) - 20 * cos(4 * angle) - pow(sin(angle / 4), 15)) * 40
        var y = sin(angle) * ((cos(angle)) - 20 * cos(4 * angle) - pow(sin(angle / 4), 15)) * 40
        var a = cos(angle) * ((cos(angle)) - 60 * cos(4 * angle) - pow(sin(angle / 4), 15)) * 40
        var b = sin(angle) * ((cos(angle)) - 60 * cos(4 * angle) - pow(sin(angle / 4), 15)) * 40
        var w = cos(angle) * ((cos(angle)) - 10 * cos(4 * angle) - pow(sin(angle / 4), 15)) * 40
        var z = sin(angle) * ((cos(angle)) - 10 * cos(4 * angle) - pow(sin(angle / 4), 15)) * 40
        stroke(255, 15)
        push()
        rotate(i / 210)
        triangle(x, y, a, b, w, z)
        pop()
    }
    pop()

}

function animP() {

}

function animQ() {

}

function animR() {

}

function animS() {

}

function animT() {


}

function animU() { //s
    transparence = 10

    var totems = 6
    var currentTotem = (map(soundK.currentTime(), 0, soundK.duration(), 0, totems + 1))
    var posXgauche = 0
    var posYgauche = 0
    var posYdroite = 0
    var posXdroite = 0

    push()
    translate(width / 2, height / 2)
    for (i = 0; i < currentTotem; i++) {
        console.log("je suis dans le for K")

        posXdroite = (height / 4 * -cos(i * PI / 6 + PI / 2))
        posYdroite = (height / 4 * -sin(i * PI / 6 + PI / 2))
        posXgauche = height / 4 * cos(i * PI / 6 + PI / 2)
        posYgauche = height / 4 * -sin(i * PI / 6 + PI / 2)

        noStroke()
        fill(255, 38 * i, 0)
        rect(posXdroite, posYdroite, 50, 180, 10)
        rect(posXgauche, posYgauche, 50, 180, 10)
    }
    pop()
}


function animV() {

}

function animW() { //u
    push()
    var t = map(soundM.currentTime(), 0, soundM.duration() * 0.75, 0, 1)
    var size = 150 * random(0.6, 1.5)
    xtarget = random(width / 2, width + 150)
    ytarget = random(-200, height / 2)
    t = constrain(t, 0, 1)
    noStroke()
    fill(220, 220, 3)
    var x = lerp(xpos, xtarget, t)
    var y = lerp(ypos, ytarget, t)
    ellipse(x, y, 150, size)

    pop()

}

function animX() {

}

function animY() {

}


function animZ() {


}

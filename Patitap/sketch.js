var amplitudeA;
var amplitudeB;
var amplitudeD;
var amplitudeK
var amplitudeF
var amplitudeE
var amplitudeZ

var soundAFFT

var levelA
var levelB

//b
var biscottes = []
var pg
var transparence

//h
var cordes = []
//l
var cerclesConfiance = []

//e
var pgE

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

//o
var amppX = 50
var amppY = 100

//l
var angleL = 20
var speedL = 0.25
var radiusL = 90
var sx = 30
var sy = 30

//q
var angleQ = 20
var speedQ = 0.25
var radiusQ = 50

//x
var sizeX = 0
var sizeY = 0

var palette = []




function preload() {
    soundA = loadSound("assets/mannishboy_riff.wav")
    soundB = loadSound("assets/blueslick1.wav")
    soundC = loadSound("assets/merlin.wav")
    soundD = loadSound("assets/blues_lick_3.wav")
    soundE = loadSound("assets/bbking_loop_jazzy.wav")
    soundF = loadSound("assets/feutre.wav")
    soundG = loadSound("assets/blues_double.wav")
    soundH = loadSound("assets/disco.wav")
    soundI = loadSound("assets/echo_micro.wav")
    soundJ = loadSound("assets/funky.wav")
    soundK = loadSound("assets/gratte_cuillere.wav")
    soundL = loadSound("assets/harmonique.wav")
    soundM = loadSound("assets/jimi.wav")
    soundN = loadSound("assets/j.bonamassa_lick.wav")
    soundO = loadSound("assets/jump_wah_wah.wav")
    soundP = loadSound("assets/rythm_wahwah.wav")
    soundQ = loadSound("assets/rebond_basse.wav")
    soundR = loadSound("assets/retour_lick.wav")
    soundS = loadSound("assets/slide_317.wav")
    soundT = loadSound("assets/harmonique.wav")
    soundU = loadSound("assets/watchtower_lick.wav")
    soundV = loadSound("assets/western.wav")
    soundW = loadSound("assets/fin.wav")
    soundX = loadSound("assets/saute_de_veau.wav")
    soundY = loadSound("assets/western.wav")
    soundZ = loadSound("assets/stevieRAY.wav")
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    background(0, 40);
    pixelDensity(1)


    //tous les analysers de son
    amplitudeA = new p5.Amplitude()
    amplitudeB = new p5.Amplitude()
    amplitudeD = new p5.Amplitude()
    amplitudeF = new p5.Amplitude()
    amplitudeO = new p5.Amplitude()
    amplitudeI = new p5.Amplitude()
    amplitudeE = new p5.Amplitude()
    amplitudeZ = new p5.Amplitude()

    soundAFFT = new p5.FFT(0.8, 16)
    soundAFFT.setInput(soundA)


    palette[0] = color(154, 202, 62)
    palette[1] = color(151, 71, 140)
    palette[2] = color(212, 42, 41)
    palette[3] = color(252, 217, 76)
    palette[4] = color(74, 184, 219)
    palette[5] = color(255, 140, 231)
    palette[6] = color(193, 115, 15)

    /* for (var i = 0; i < 4000; i++) {
      agents[i] = new Agent();
    }*/

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

    pgE = createGraphics(width, height)


    //pour animI
    position1 = createVector(0, 0)
    position2 = createVector(0, 150)
    velocity = p5.Vector.random2D()
    velocity.mult(4)

    //anim pour faire pivoter plusieurs objets en même temps
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

//for color palette, inspired by @GotoLoop, sketch online at https://forum.processing.org/two/discussion/17621/array-of-colors#Item_1
function animA() {
    push()

    soundAFFT.analyze()
    let basses = soundAFFT.getEnergy("bass")
    // console.log(basses)
    translate(width / 2, height / 2)

    let angle = TWO_PI / 80


    for (let j = 0; j < height / 2; j = j + 40) {
        push()
        rotate(random(j))
        noFill()
        strokeWeight(40)
        strokeCap(SQUARE)
        stroke(palette[random(6)])
        console.log(palette[random(6)])

        let direction = int(random(0, 2) < 1) ? 1 : -1

        push()
        if (basses > 225) rotate(map(basses, 0, 255, PI / 8, TWO_PI) * direction)
        beginShape()
        for (let i = 0; i < 72; i++) {
            let x = (cos(angle * i) * ((height / 2) - j))
            let y = (sin(angle * i) * ((height / 2) - j))
            vertex(x, y)
        }
        endShape()
        pop()
    }
    pop()
}



function animB() {

    amplitudeB.setInput(soundB)
    var levelB = amplitudeB.getLevel()
    var seuil = map(levelB, 0, 0.025757474504161826, 0, 100)
    var pasCurrent = map(soundB.currentTime(), 0, soundB.duration(), 0, 30)

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

function animC() {

}

function animD() {
    t = map(soundD.currentTime(), 0, soundD.duration(), 0, 20)
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

//inspirée d'un sketch Pde tiré du bouquin "DEsign Generatif" de H. Bohnacker, B. Grob, J. Laub, et C. Lazzeroni publié par Pyramid
function animE() {
    push()
    amplitudeE.setInput(soundE)
    var levelE = amplitudeE.getLevel()
    // console.log(levelE)

    translate(width / 2, height / 2)
    let vertices = map(levelE, 0, 0.19, 2, 60)
    let nbcircles = 80 // map (soundE.currentTime(),0,soundE.duration(),0,200)
    let angle = TWO_PI / vertices


    noFill()
    strokeWeight(1)
    stroke(156, 120, 10, 255)


    for (let j = 0; j < nbcircles; j++) {
        let radius
        if (j > 40) radius = j / 35
        else radius = j / 40

        stroke(156, 120, 10, nbcircles)
        beginShape()
        for (let i = 0; i < vertices; i++) {
            let x = (cos(angle * i) * ((height / 2) - 100)) / radius
            let y = (sin(angle * i) * ((height / 2) - 100)) / radius
            vertex(x, y)
        }
        endShape(CLOSE)
    }
    pop()
}

function animF() {
    //pulupulu un escargot qui enappelle un autre
    amplitudeF.setInput(soundF)
    var levelF = amplitudeF.getLevel()
    transparence = 10
    var radius = map(levelF, 0, 0.1, 30, 150) //pour changer le radius des points
    var point = 12
    var currentPoint = map(soundF.currentTime(), 0, soundF.duration(), 0, point + 1)

    push()
    translate(0, height / 2)
    for (i = 1; i < currentPoint + 1; i++) {
        noStroke()
        fill(5, 120, 0)
        ellipse(i * width / 14, 0, radius, radius)
    }
    pop()
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


}

function animI() { //i
    amplitudeI.setInput(soundI)
    let levelI = amplitudeI.getLevel()
    console.log(levelI)
    var length = map(levelI, 0, 0.042, 0, width / 10)

    noStroke()
    fill(255)
    push()
    translate(width / 2, 0)
    //cacher la fin du son qui n'est plus audible
    if (soundI.currentTime() < soundI.duration()) {
        for (i = 0; i < height; i++) {
            ellipse(length, i, 10, 10)
            ellipse(-length, i, 10, 10)
        }
        pop()
    }

}

function animJ() { //j
    //jet de cocobilles
    var t = map(soundJ.currentTime(), 0, soundJ.duration() * 0.60, 0, 1)
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
    let t = map(soundK.currentTime(), 0, soundK.duration() * 0.75, 0, 1)
    let before = lerp(width / 6, 5 * width / 6, t)
    let after = map(soundK.currentTime(), 0, soundK.duration(), width / 6, 5 * (width / 6))
    stroke(30, 120, 60)
    strokeWeight(height / 8)
    line(before, height / 2, after, height / 2)
}

function animL() { //l
    let transp = map(soundL.currentTime(), 0, soundL.duration() - 0.2, 100, 0)
    background(96, 5, 180, transp)
}

function animM() {

    push()
    let radius;
    if (width < height) radius = width / 3
    else radius = height / 3

    stroke(255)
    strokeWeight(5)
    noFill()
    strokeJoin(ROUND)
    let mod = map(soundM.currentTime(), 0, soundM.duration(), TWO_PI, 0.001)

    translate(width / 2, height / 2)
    beginShape();
    for (i = 0; i < TWO_PI; i += mod) {
        let x = radius * cos(i);
        let y = radius * sin(i);
        vertex(x, y);
    }
    endShape(CLOSE);
    pop()

}

function animN() {
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
    //circle morph

    fill(220, 0, 30)
    noStroke()
    //   strokeWeight(2)

    let haut = amplitudeO.setInput(soundO)
    var levelO = amplitudeO.getLevel()
    amppY += 0.05
    amppX += 0.03
    let radiusX = map(levelO, 0, 0.1, 30, 350) * cos(amppX)
    let radiusY = map(levelO, 0, 0.1, 30, 350) * cos(amppY)

    ellipse(width / 2, height / 2, radiusX, radiusY)

}

function animP() {
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

function animQ() {
    /*  t = map(soundQ.currentTime(), 0, soundQ.duration(), 0, 20)
      angleQ += speedQ * t
      var sinval = sin(angleQ)
      var cosval = cos(angleQ)
      var positions = {
         posQx :(width / 5) ,
         posQy :(5*height/6 ) 
      }
      fill(220, 220, 30)
      noStroke()


      var elasticity = anime.timeline();
      elasticity.add({
          targets: positions,
          posQx:5*width/6,
          posQy:width/6,
          offset: 0,
          duration: 3000,
          elasticity: 300,
      })
          ellipse(positions.posQx, positions.posQy, 50, 50)*/
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

function animW() {
    var distX = 6 * width / 8
    var distY = 6 * height / 7
    let progress = map(soundW.currentTime(), 0, soundW.duration() - 1.5, 0, 1)

    fill(25, 50, 206);
    noStroke()
    if (progress < 1) {
        var x = (width / 8) + progress * distX;
        var y = (height / 7) + pow(progress, 8) * distY;
    }
    ellipse(x, y, 50, 50);
}





function animX() {
    sizeX += 0.05
    sizeY += 0.07

    //pour garder une animation smooth même sur écran grand
    let taillemax
    if (taillemax < 250) tailemax = (width / 2)
    else taillemax = 250

    noFill()
    stroke(220, 0, 30)
    strokeWeight(2)
    ellipse(width / 2, height / 2, cos(sizeX) * taillemax, cos(sizeY) * taillemax)
}

function animY() {

}


function animZ() {
    amplitudeZ.setInput(soundZ)
    var levelZ = amplitudeZ.getLevel()
    //console.log(levelZ)


    var displayy = map(levelZ, 0, 0.072, 0, 100)
    pg.clear()

    if (displayy > 25) { //conditon d'affichage : si amplitude sonore > 85 %
        biscottes.push(new biscotte())
        console.log("neew")
    }
    console.log(biscottes.length)
    for (let i = 0; i < biscottes.length; i++) {

        biscottes[i].update(); // update biscotte transparency
        biscottes[i].display(pg); // draw new biscotte
        if (biscottes[i].transparence < 5) {
            biscottes = biscottes.splice(i)
        }
    }
    image(pg, 0, 0, width, height)

}

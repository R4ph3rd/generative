var amplitudeA;
var amplitudeB;
var amplitudeD;
var amplitudeK
var amplitudeF
var amplitudeE
var amplitudeZ
var amplitudeG
var amplitudeT
var amplitudeV

var soundAFFT
var soundSFFT
var soundCFFT
var soundTFFT
var soundQFFT
var soundHFFT

var levelA
var levelB

//b
var biscottes = []
var pg

//h
var cordes = []
//l
var cerclesConfiance = []


var pgE
var pgC

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

//palette de couleur
var palette = []
var randomColor
var colorsCircles = []

//c
var springs = []

//q
var springQ = []




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
    soundT = loadSound("assets/dumiel.wav")
    soundU = loadSound("assets/watchtower_lick.wav")
    soundV = loadSound("assets/western.wav")
    soundW = loadSound("assets/fin.wav")
    soundX = loadSound("assets/saute_de_veau.wav")
    soundY = loadSound("assets/tap_slide.wav")
    soundZ = loadSound("assets/stevieRAY.wav")
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    background(0, 40);
    pixelDensity(1)


    //tous les analysers de son
    amplitudeA = new p5.Amplitude()
    amplitudeA.setInput(soundA)
    amplitudeB = new p5.Amplitude()
    amplitudeB.setInput(soundB)
    amplitudeD = new p5.Amplitude()
    amplitudeD.setInput(soundD)
    amplitudeF = new p5.Amplitude()
    amplitudeF.setInput(soundF)
    amplitudeO = new p5.Amplitude()
    amplitudeO.setInput(soundO)
    amplitudeI = new p5.Amplitude()
    amplitudeI.setInput(soundI)
    amplitudeE = new p5.Amplitude()
    amplitudeE.setInput(soundE)
    amplitudeZ = new p5.Amplitude()
    amplitudeZ.setInput(soundZ)
    amplitudeG = new p5.Amplitude()
    amplitudeG.setInput(soundG)
    amplitudeT = new p5.Amplitude()
    amplitudeT.setInput(soundT)
    amplitudeV = new p5.Amplitude()
    amplitudeV.setInput(soundV)

    soundAFFT = new p5.FFT(0.8, 16)
    soundAFFT.setInput(soundA)
    soundCFFT = new p5.FFT(0.8, 16)
    soundCFFT.setInput(soundC)
    soundSFFT = new p5.FFT(0.8, 16)
    soundSFFT.setInput(soundS)
    soundTFFT = new p5.FFT(0.8, 16)
    soundTFFT.setInput(soundT)
    soundQFFT = new p5.FFT(0.8, 16)
    soundQFFT.setInput(soundQ)
    soundHFFT = new p5.FFT(0.8, 16)
    soundHFFT.setInput(soundH)

    //for color palette, helped by a sketch of @GotoLoop, sketch online at https://forum.processing.org/two/discussion/17621/array-of-colors#Item_1
    palette[0] = color(154, 202, 62)
    palette[1] = color(151, 71, 140)
    palette[2] = color(212, 42, 41)
    palette[3] = color(252, 217, 76)
    palette[4] = color(74, 184, 219)
    palette[5] = color(255, 140, 231)
    palette[6] = color(30, 25, 106)
    palette[7] = color(241, 101, 39)



    xpos = 200
    ypos = 7 * height / 8


    /* a = 150 / height
     b = 70 / width
*/
    //pour anim2
    Xrect = 0.043 * width
    Yrect = 0.203804 * height //reponsive !
    pg = createGraphics(width, height)

    pgE = createGraphics(width, height)
    pgC = createGraphics(width, height)


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
    background(rouge, vert, bleu, 40)

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
    } else {
        springs = []
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
        springQ = []
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
    push()

    soundAFFT.analyze()
    let basses = soundAFFT.getEnergy("bass")
    // console.log(basses)
    translate(width / 2, height / 2)

    //select only 4 colors in the palette available
    let angle = TWO_PI / 80
    for (let i = 0; i < 4; i++) {
        colorsCircles[i] = random(palette)
    }

    //define one color + angle per circle, sometimes many side by side can be of the same color
    for (let j = 0; j < height / 2; j = j + 40) {
        randomColor = random(colorsCircles)

        push()
        rotate(random(j))
        noFill()
        strokeWeight(40)
        strokeCap(SQUARE)
        stroke(randomColor)

        //change their position proportionally to the bass freq with randomly direction
        let direction = int(random(0, 2) < 1) ? 1 : -1

        push()
        if (basses > 225) rotate(map(basses, 0, 255, PI / 8, TWO_PI) * direction)
        //display circles
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
    pop()
}


//cercles de totem rectangulaires filaires, avec "vibrations" sur les notes appuyées
function animB() {
    push()
    rectMode(CENTER)
    let levelB = amplitudeB.getLevel()
    // console.log(levelB)
    let seuil = map(levelB, 0, 0.04188412655659618, 0, 100)
    //retrecissement du rect interne par rapport à l'amp
    let miniX = map(levelB, 0, 0.04188412655659618, 50, 5)
    let miniY = map(levelB, 0, 0.04188412655659618, 180, 18)
    //grossissement du rect exterieur par rapport à l'amplitude
    let maxX = map(levelB, 0, 0.04188412655659618, 0, 50)
    let maxY = map(levelB, 0, 0.04188412655659618, 0, 180)
    let minicoin = map(levelB, 0, 0.04188412655659618, 0, 10)


    let totems = 6
    let currentTotem = (map(soundB.currentTime(), 0, soundB.duration(), 0, totems + 1))
    let posXgauche = 0
    let posYgauche = 0
    let posYdroite = 0
    let posXdroite = 0

    push()
    translate(width / 2, height / 2)
    for (i = 0; i < currentTotem; i++) {

        posXdroite = (height / 4 * -cos(i * PI / 6 + PI / 2))
        posYdroite = (height / 4 * -sin(i * PI / 6 + PI / 2))
        posXgauche = height / 4 * cos(i * PI / 6 + PI / 2)
        posYgauche = height / 4 * -sin(i * PI / 6 + PI / 2)

        noFill()
        strokeWeight(2)
        stroke(255, 38 * i, 0)
        rect(posXdroite, posYdroite, 50 + maxX, 180 + maxY, 10)
        rect(posXgauche, posYgauche, 50 + maxX, 180 + maxY, 10)

        //display vibrating rectangles only f the sound exceed 60 %
        if (seuil > 50) {
            for (let i = 0; i < minicoin; i++) {
                rect(posXdroite, posYdroite, miniX, miniY, minicoin)
                rect(posXgauche, posYgauche, miniX, miniY, minicoin)
            }
        }
    }
    pop()
    pop()
}

//suite de boules tirées par un effet elastique proportionnel au son
//try to launch it several times before the sound ends !
function animC() {
    push()
    soundCFFT.analyze()
    let middle = soundCFFT.getEnergy("mid")
    console.log(middle)
    let middleSpring = map(middle, 105, 249, -(height / 4), height / 4)
    let timeline = map(soundC.currentTime(), 0, soundC.duration() * 0.65, 50, width - 50)
    //add new spring for each excess of the energy of the range of freq
    if (middle > 105) springs.push(new Spring(timeline, middle, middleSpring))

    for (var i = 0; i < springs.length; i++) {
        springs[i].update();
        springs[i].display();
    }
    pop()
}

function animD() {
    push()
    t = map(soundD.currentTime(), 0, soundD.duration(), 0, 20)
    angleL += speedL * t
    let sinval = sin(angleL)
    let cosval = cos(angleL)
    let x = (width / 2) + (cosval * radiusL)
    let y = (height / 2) + (sinval * radiusL)
    let x2 = x + cos(angleL * sx) * radiusL / 2
    let y2 = y + sin(angleL * sy) * radiusL / 2
    fill(255)
    noStroke()
    rect(x, y, 25, 25, 2)
    fill(225, 0, 0)
    rect(x2, y2, 25, 25, 2)
    pop()
}

//inspirée d'un sketch Pde tiré du bouquin "DEsign Generatif" de H. Bohnacker, B. Grob, J. Laub, et C. Lazzeroni publié par Pyramid
function animE() {
    push()
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
    var levelF = amplitudeF.getLevel()
    transparence = 10
    var radius = map(levelF, 0, 0.1, 20, 150) //pour changer le radius des points
    var point = 12
    var currentPoint = map(soundF.currentTime(), 0, soundF.duration(), 0, point + 1)

    push()
    noFill()
    strokeWeight(2)
    stroke(random(palette))
    translate(0, height / 2)
    for (i = 1; i < currentPoint + 1; i++) {

        ellipse(i * width / 14, 0, radius, radius)
        ellipse(i * width / 14, 0, radius + 15, radius + 15)
        ellipse(i * width / 14, 0, radius + 30, radius + 30)
    }
    pop()
}

function animG() {
    push()
    var levelG = map(amplitudeG.getLevel(), 0, 0.08772784950665151, 0, 100)
    let posX = map(soundG.currentTime(), 0, soundG.duration(), 0, width)
    stroke(256, 30, 45)
    strokeWeight(30)
    if (levelG > 60) line(posX, 0, posX, height)
    pop()
}

function animH() {
    push()
    noFill()
    strokeWeight(5)
    stroke(random(palette))
    soundHFFT.analyze()
    let middle = soundHFFT.getEnergy("highMid")
    //  console.log(middle)
    let varX = map(middle, 0, 123.5, -100, 100)
    let posX = map(soundH.currentTime(), 0, soundH.duration(), 0, width)

    for (let w = 0; w < width; w = w = w + 200) {
        //change their position proportionally to the bass freq with randomly direction
        let direction = int(random(0, 2) < 1) ? 1 : -1
        line(random(width) + (varX * direction), 0, random(width) + (varX * direction), height)
    }
    pop()
}

function animI() { //i
    let levelI = amplitudeI.getLevel()
    // console.log(levelI)
    var length = map(levelI, 0, 0.042, 0, width / 10)
    push()
    noStroke()
    fill(random(palette))
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

    var xtarget = []
    var ytarget = []

    push()
    noStroke()
    fill(random(palette))
    //placer le point d'origine dans un cercle de 50 autour du centre de l'écran
    translate(random((width / 2) - 50, (width / 2) + 50), random((height / 2) + 50, (height / 2) - 50))
    //angle de lancé alétoire
    rotate(random(TWO_PI))
    for (i = 0; i < 15; i++) {
        xtarget = random(100, 500)
        ytarget = random(-100, 100)
        var x = lerp(0, xtarget, t)
        var y = lerp(0, ytarget, t)
        ellipse(x, y, 20, 20)
    }
    pop()


}

//la course des pôles d'une ligne !
function animK() {
    push()
    let t = map(soundK.currentTime(), 0, soundK.duration() * 0.75, 0, 1) * 1.4
    t = constrain(t, 0, 1)
    let before = lerp(width / 6, 5 * width / 6, t)
    let after = map(soundK.currentTime(), 0, soundK.duration(), width / 8, 5 * (width / 6)) // départ plus proche du bord pour éviter l'impression de décentrage
    stroke(12, 171, 181)
    strokeWeight(height / 8)
    strokeCap(SQUARE)
    noFill()
    line(before, height / 2, after, height / 2)
    pop()
}

function animL() { //l
    let transp = map(soundL.currentTime(), 0, soundL.duration() - 0.2, 100, 0)
    background(93, 79, 89, transp)
}

function animM() {

    push()
    let radius;
    if (width < height) radius = width / 3
    else radius = height / 3

    stroke(random(palette))
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
    for (var i = 0; i <= 6000; i++) {
        // var angle = i * 24.0 * PI / 10000;
        var angle = map(soundN.currentTime(), 0, soundN.duration(), 2, TWO_PI * 2) * i / 4000
        var x = cos(angle) * ((cos(angle)) - 10 * cos(4 * angle) - pow(sin(angle / 4), 15)) * 40
        var y = sin(angle) * ((cos(angle)) - 10 * cos(4 * angle) - pow(sin(angle / 4), 15)) * 40
        stroke(255, 15)
        strokeWeight(1)
        noFill()
        push()
        rotate(i / 210)
        line(x, y, x + 100, y + 100)
        pop()
    }
    pop()

}

function animO() {
    //circle morph
    push()
    fill(220, 0, 30)
    noStroke()
    //   strokeWeight(2)
    var levelO = amplitudeO.getLevel()
    amppY += 0.05
    amppX += 0.03
    let radiusX = map(levelO, 0, 0.1, 30, 350) * cos(amppX)
    let radiusY = map(levelO, 0, 0.1, 30, 350) * cos(amppY)

    ellipse(width / 2, height / 2, radiusX, radiusY)
    pop()
}

function animP() {
    //rectangles qui tournent sur eux mêmeS
    push()

    rectMode(CENTER)
    for (var i = 0; i < 25; i++) {
        push()
        noFill()
        strokeWeight(2)
        stroke(random(80), random(250), random(255))
        translate(random(width), random(height))
        rotate(frameCount / 10 + i)
        rect(0, 0, 200, 50, 10)
        pop()

    }
    pop()
}

function animQ() {
    push()
    var timeline = map(soundQ.currentTime(), 0, soundQ.duration(), 0, 1)
    timeline = constrain(0, 1)

    springQ.push(new Spring(100, width - 200))

    springQ[i].update();
    springQ[i].displayQ();
    pop()
}

function animR() {
    push()
    let x = map(soundR.currentTime(), 0, soundR.duration(), 0, width)
    noStroke()
    fill(random(palette), 30)
    for (let i = height / 4; i < height; i = i + (height / 4)) {
        let y = i + (sin(x) * 20)
        ellipse(x, y, 20, 20)
    }
    pop()
}


function animS() {
    push()
    soundSFFT.analyze()
    let aigu = soundSFFT.getEnergy("treble")
    // console.log(aigu)
    let g = map(soundS.currentTime(), 0, soundS.duration(), 0, 1)
    let x = lerp(0, width, g)
    //pour conserver plus ou moins la même vitesse de déplacement selon la taille de la fenetre
    let inconnue = width / 7
    let y = -(((x * x) / inconnue) + x / inconnue)

    rectMode(CENTER)
    noFill()
    strokeWeight(2)
    stroke(176, 17, 65)
    push()
    translate(width / 4 + x, height + y)
    rotate(frameCount / 10 + i)
    rect(0, 0, 50, 50)
    pop()
    pop()
}

function animT() {
    push()
    let x = width / 2
    let y = height / 2
    let size = 80 + map(soundT.currentTime(), 0, soundT.duration(), 0, 80)

    soundTFFT.analyze()
    let aigu = soundTFFT.getEnergy("highMid")
    // console.log(aigu)
    let levelT = amplitudeT.getLevel()
    // console.log(levelT)

    if (soundT.currentTime() > soundT.duration() / 2.2) {
        size = 116 // console.log(size)
        x = map(aigu, 0, 250, 80, width - 200)
        y = map(levelT, 0, 0.2, 50, height)
    }
    noStroke()
    fill(random(palette))
    ellipse(x, y, size, size)

    pop()
}

//inspired by a sketch Pde from  "DEsign Generatif" (p.357), written by H. Bohnacker, B. Grob, J. Laub, et C. Lazzeroni, published by Pyramid
function animU() { //u
    push()
    translate(width / 2, height / 2)
    let couleur = random(palette)
    let nombrePoints = 1500
    let apparition = map(soundU.currentTime(), 0, soundU.duration() * 0.76, 0, nombrePoints)
    stroke(couleur)
    strokeWeight(1)
    noFill()

    for (var i = 0; i <= nombrePoints && apparition > i; i++) {
        push()
        let angle = map(i, 0, nombrePoints, 0, TWO_PI);
        // play w/ value of the Lissajous curve
        let x = (sin(angle * 2 + radians(30)) * cos(angle)) * (width / 2 - 25) 
        let y = (sin(angle * 5) * cos(angle)) * (height / 2 - 25)
        translate(x,y)
        rotate(i)
        rect(0,0, 15,15)
        pop()
    }
    pop()
}

function animV() {
    //circle morph
    push()
    fill(random(palette))
    noStroke()
    var levelV = amplitudeV.getLevel()
    amppY += 0.05
    amppX += 0.03
    let radiusY = 120
    let radiusX = 120

    let posY = map(soundV.currentTime(), 0, soundV.duration() * 0.08, height, height / 2)
    let posYhaut = map(soundV.currentTime(), 0, soundV.duration() * 0.08, 0, height / 2)
    let diminue = 1

    if (soundV.currentTime() > soundV.duration() * 0.08) {
        diminue = map(soundV.currentTime(), soundV.duration() * 0.08, soundV.duration(), 1, 10)
        posY = height / 2
        posYhaut = height / 2
        radiusX = map(levelV, 0, 0.1, 30, 180) * cos(amppX)
        radiusY = map(levelV, 0, 0.1, 30, 180) * cos(amppY)
    }

    ellipse(width / 4, posYhaut, radiusX / diminue, radiusY / diminue)
    ellipse(width / 2, posY, radiusX / diminue, radiusY / diminue)
    ellipse(3 * width / 4, posYhaut, radiusX / diminue, radiusY / diminue)
    pop()
}

function animW() {
    var distX = 6 * width / 8
    var distY = 6 * height / 7
    let progress = map(soundW.currentTime(), 0, soundW.duration() - 1.5, 0, 1)

    fill(90, 100, 187);
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
    push()
    t = map(soundY.currentTime(), 0, 3.05, 4 * TWO_PI, 0)
    let couleur = random(palette)

    radiusY = map(soundY.currentTime(), 0, 3.05, (height / 2) - 50, 0)
    let sinval = +sin(t)
    let cosval = +cos(t)
    let x = (width / 2) + (cosval * radiusY)
    let y = (height / 2) + (sinval * radiusY)
    let taille = 15
    if (soundY.currentTime() > 3.1) {
        taille = map(soundY.currentTime(), 3.05, soundY.duration(), 15, 200)
        //h += 0.001 noise foireux à corriger
        x = (width / 2)
        y = (height / 2)
        stroke(couleur)
        strokeWeight(map(soundY.currentTime(), 3.05, soundY.duration(), 2, 5))
        noFill()
    } else {
        noStroke()
        fill(couleur)
    }
    ellipse(x, y, taille, taille)
    pop()
}


function animZ() {
    var levelZ = amplitudeZ.getLevel()
    //console.log(levelZ)


    var displayy = map(levelZ, 0, 0.072, 0, 100)
    pg.clear()

    if (displayy > 25) { //conditon d'affichage : si amplitude sonore > 85 %
        biscottes.push(new biscotte())
        // console.log("neew")
    }
    // console.log(biscottes.length)
    for (let i = 0; i < biscottes.length; i++) {

        biscottes[i].update(); // update biscotte transparency
        biscottes[i].display(pg); // draw new biscotte
        if (biscottes[i].transparence < 5) {
            biscottes = biscottes.splice(i)
        }
    }
    image(pg, 0, 0, width, height)

}

var amplitude;
var coverbackground
var Xpast = new Array()
var Ypast = new Array()
var transparence
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
var xpos0 = [176.40837, 173.92575, 168.41733, 162.31177, 155.66982, 148.5523, 141.01996, 133.13358, 124.95393, 116.54178, 107.957924, 99.26312, 90.51815, 81.78378, 73.12079, 64.58995, 56.252052, 52.18628, 47.562023, 38.776184, 30.600468, 23.095888, 19.646118, 17.009853, 12.239412, 8.105795, 4.6471334, 3.2133331, 1.8812199, -0.10168648, -0.77282715, -1.2202587, -1.9829273, -2.0744476, -5.57251, -8.907867, -11.744965, -17.144602, -19.727478, -22.267134, -26.77064, -30.507673, -33.39435, -34.451904, -35.208843, -36.065407, -36.151207, -35.48626, -34.0906, -31.984226, -29.187172, -25.719452, -23.713654, -22.185635, -18.961784, -13.813533, -6.4252625, 1.355301, 13.360525, 25.172703, 32.644386, 36.160248, 38.43171, 42.643974, 46.436302, 49.78295, 52.658176, 55.036247, 56.89142, 58.19795, 58.61296, 58.89769, 58.966805, 58.450104, 57.363792, 55.724068, 53.54715, 50.849236, 47.646538, 45.840942, 43.567894, 38.66381, 33.377865, 27.763077, 21.872482, 15.759106, 9.475977, 3.076125, -3.387421, -9.861631, -16.29348, -22.629936, -28.81797, -34.804554, -40.53666, -45.961258, -48.525543, -52.265594, -59.235535, -65.58158, -71.29075, -76.350044, -80.746475, -84.46707, -87.49882, -89.82876, -91.44387, -92.33118, -92.47769, -91.87042, -90.49638, -88.342575, -85.39603, -83.58758, -81.342804, -76.08808, -69.9563, -62.993214, -59.18245, -56.030125, -49.345413, -42.252674, -34.805294, -30.953857, -27.079546, -19.086872, -15.009171, -9.924774, -4.514984, -5.7352295, -7.03685, -8.246935, -11.175547, -12.8940735, -14.701574, -18.953403, -23.880192, -29.382786, -32.336823, -35.061424, -40.567833, -46.074234, -51.504375, -56.781986, -61.830795, -66.57453, -70.93694, -72.93067, -74.29552, -76.73782, -79.86865, -83.15953, -85.80501, -89.269394, -93.20567, -96.606186, -98.71875, -100.252335, -103.687645, -107.52954, -111.73895, -116.27678, -121.10393, -126.181335, -131.46991, -134.18753, -136.91849, -142.36389, -147.74826, -153.02588, -158.15094, -163.07773, -167.76047, -172.15338, -174.21193, -176.56696, -180.66638, -184.0607, -186.78067, -188.857, -190.32047, -191.20184, -191.5318, -191.34113, -190.66057, -189.52087, -187.95276, -185.98701, -183.65434, -180.98552, -178.01126, -176.4084, -173.92578, -168.41736, -162.31177, -155.66985, -148.5523, -141.01997, -133.1336, -124.95395, -116.541794, -107.95794, -99.26314, -90.518166, -81.7838, -73.12082, -64.58998, -56.252083, -52.18631, -47.56205, -38.776207, -30.600494, -23.095919, -19.646149, -17.009884, -12.239443, -8.105825, -4.647164, -3.2133636, -1.8812504, 0.10165596, 0.77279663, 1.2202282, 1.9828968, 2.074417, 5.287758, 8.338394, 11.175491, 16.575123, 19.15799, 21.697645, 26.20115, 29.938185, 32.824856, 33.882416, 34.639355, 35.49592, 35.58171, 34.91677, 33.521103, 31.414726, 28.617672, 25.149948, 23.14415, 21.61613, 18.39228, 13.24403, 5.8557615, -1.9248011, -13.930026, -25.742207, -33.2139, -36.729767, -39.00122, -43.213486, -47.005814, -50.35246, -53.227684, -55.60575, -57.46093, -58.767464, -59.18248, -59.467205, -59.53632, -59.019615, -57.933304, -56.29358, -54.11666, -51.418755, -48.216057, -46.41046, -44.137413, -39.23333, -33.947388, -28.3326, -22.442005, -16.328629, -10.045502, -3.6456509, 2.8178935, 9.292103, 15.723949, 22.060406, 28.248436, 34.23502, 39.967125, 45.391724, 47.95601, 51.69606, 58.666, 65.01205, 70.721214, 75.78051, 80.176956, 83.89755, 86.9293, 89.259224, 90.87434, 91.76165, 91.90817, 91.3009, 89.926865, 87.773056, 84.82651, 83.01805, 80.773285, 75.51855, 69.38676, 62.423668, 58.612915, 55.46058, 48.775864, 41.68312, 34.235744, 30.384308, 26.510002, 18.517317, 14.439621, 9.599266, 4.5148773, 5.7351303, 7.036743, 8.246828, 11.17544, 12.893967, 14.701477, 18.953312, 23.880093, 29.38268, 32.336716, 35.061317, 40.567726, 46.074127, 51.50427, 56.78188, 61.83069, 66.57443, 70.936844, 72.93056, 74.295395, 76.7377, 79.86853, 83.15941, 85.804886, 89.26929, 93.20557, 96.60608, 98.71864, 100.25223, 103.68754, 107.52944, 111.738846, 116.27669, 121.10385, 126.181274, 131.46985, 134.18745, 136.9184, 142.3638, 147.74817, 153.02579, 158.15085, 163.07764, 167.76038, 172.1533, 174.21187, 176.56693, 180.66635, 184.06067, 186.78064, 188.85696, 190.32047, 191.20181, 191.53177, 191.34111, 190.66055, 189.52084, 187.95276, 185.98701, 183.65434, 180.9855, 178.01125, 176.40837, 176.40837];
var ypos0 = [-49.745773, -53.485825, -60.455765, -66.80181, -72.51098, -77.570274, -81.96672, -85.68732, -88.71906, -91.04899, -92.6641, -93.55141, -93.69792, -93.09065, -91.71661, -89.562805, -86.61626, -84.80781, -82.56305, -77.30831, -71.17653, -64.21344, -60.40268, -57.250355, -50.565643, -43.472904, -36.025524, -32.174088, -28.299776, -20.307102, -16.2294, -13.229607, -6.853771, -3.7014465, -4.881035, -6.060608, -7.270693, -10.199305, -11.917831, -13.725338, -17.977169, -22.903954, -28.406546, -31.36058, -34.085182, -39.59159, -45.097992, -50.528133, -55.805744, -60.854553, -65.59829, -69.9607, -71.95443, -73.319275, -75.76158, -78.89241, -82.18329, -84.828766, -88.29315, -92.22943, -95.629944, -97.74251, -99.27609, -102.7114, -106.5533, -110.76271, -115.30054, -120.1277, -125.20511, -130.49368, -133.21129, -135.94223, -141.38763, -146.77203, -152.04962, -157.17471, -162.1015, -166.78424, -171.17715, -173.23569, -175.59073, -179.69016, -183.08447, -185.80441, -187.88074, -189.34424, -190.22559, -190.55554, -190.36488, -189.68433, -188.54462, -186.97653, -185.01077, -182.6781, -180.00928, -177.03502, -175.43216, -172.94955, -167.4411, -161.33554, -154.6936, -147.57608, -140.04373, -132.15735, -123.97771, -115.56555, -106.9817, -98.286896, -89.54192, -80.807556, -72.14458, -63.613743, -55.27584, -51.210068, -46.585808, -37.799965, -29.624252, -22.119677, -18.669907, -16.033642, -11.263201, -7.129584, -3.6709218, -2.2371216, -0.9050083, 1.077898, 1.7490387, 2.5218735, 2.9692993, 6.630066, 10.128128, 12.965225, 18.364857, 20.947723, 23.487385, 27.990894, 31.727934, 34.61461, 35.672165, 36.4291, 37.28566, 37.37146, 36.706512, 35.310844, 33.204468, 30.407413, 26.939693, 24.933899, 23.405876, 20.182026, 15.033773, 7.6455016, -0.13506329, -12.140287, -23.952465, -31.424152, -34.940018, -37.21148, -41.423744, -45.216072, -48.56272, -51.437946, -53.816017, -55.67119, -56.97772, -57.39273, -57.677456, -57.74657, -57.229866, -56.143555, -54.503838, -52.32692, -49.629013, -46.426323, -44.620728, -42.34768, -37.443596, -32.157646, -26.542858, -20.65226, -14.538883, -8.255756, -1.8559054, 4.607639, 11.081848, 17.513695, 23.850147, 30.038177, 36.024765, 41.756863, 47.181458, 49.745743, 53.485798, 60.45574, 66.801796, 72.51096, 77.57026, 81.966705, 85.6873, 88.71905, 91.04897, 92.664085, 93.55139, 93.69791, 93.09064, 91.7166, 89.56279, 86.61624, 84.807785, 82.56302, 77.3083, 71.17651, 64.213425, 60.402664, 57.250328, 50.565613, 43.47287, 36.025494, 32.174057, 28.299744, 20.307064, 16.22937, 13.290585, 7.006262, 3.8641052, 4.9216537, 6.060562, 7.270649, 10.199266, 11.917786, 13.725292, 17.977123, 22.903912, 28.40651, 31.36055, 34.08515, 39.59156, 45.09796, 50.528103, 55.805714, 60.854523, 65.59827, 69.96068, 71.95439, 73.31923, 75.761536, 78.892365, 82.18324, 84.82872, 88.29312, 92.229416, 95.62993, 97.74251, 99.276085, 102.711395, 106.55328, 110.762695, 115.30052, 120.127686, 125.20511, 130.49368, 133.21129, 135.94223, 141.38763, 146.772, 152.04962, 157.17468, 162.10147, 166.78421, 171.17714, 173.2357, 175.59073, 179.69016, 183.08447, 185.80441, 187.88077, 189.34424, 190.22559, 190.55554, 190.36488, 189.68433, 188.54462, 186.97653, 185.01077, 182.6781, 180.00928, 177.03502, 175.43217, 172.94955, 167.44113, 161.33554, 154.69362, 147.57608, 140.04375, 132.15736, 123.97771, 115.56557, 106.98171, 98.28692, 89.541954, 80.80759, 72.14461, 63.613773, 55.27587, 51.2101, 46.58584, 37.799995, 29.624271, 22.119692, 18.669922, 16.033663, 11.263227, 7.129614, 3.6709523, 2.237152, 0.9050369, -1.0778809, -1.7490234, -2.4811707, -2.9692688, -6.630043, -10.128113, -12.96521, -18.364847, -20.947723, -23.48738, -27.990885, -31.727919, -34.614594, -35.67215, -36.42909, -37.285652, -37.371445, -36.706505, -35.310837, -33.204468, -30.407412, -26.939693, -24.933899, -23.405876, -20.182026, -15.033773, -7.6455016, 0.13506329, 12.140287, 23.952465, 31.424152, 34.940018, 37.21147, 41.423737, 45.216064, 48.562714, 51.437943, 53.81601, 55.67118, 56.97772, 57.39273, 57.67746, 57.746574, 57.229874, 56.143562, 54.503838, 52.32692, 49.629005, 46.426308, 44.620712, 42.347664, 37.44358, 32.157623, 26.542835, 20.65224, 14.538862, 8.2557335, 1.8558825, -4.6076617, -11.081871, -17.513718, -23.85017, -30.0382, -36.024788, -41.75689, -47.181488, -49.745773, -49.745773];

var seed = 1234;

function preload() {
    masterVolume(7)

    sound1 = loadSound("assets/Superbes_enregistrements/TASCAM_0450.wav")
    sound2 = loadSound("assets/Superbes_enregistrements/TASCAM_0451.wav")
    sound3 = loadSound("assets/Superbes_enregistrements/TASCAM_0452.mp3")
    sound4 = loadSound("assets/Superbes_enregistrements/TASCAM_0453.wav")
    sound5 = loadSound("assets/Superbes_enregistrements/TASCAM_0455.wav")
    sound6 = loadSound("assets/Superbes_enregistrements/TASCAM_0456.wav")
    sound7 = loadSound("assets/Superbes_enregistrements/TASCAM_0459.wav")
    sound8 = loadSound("assets/Superbes_enregistrements/TASCAM_0460.wav")
    sound9 = loadSound("assets/Superbes_enregistrements/la_fessee.mp3")
    sound10 = loadSound("assets/Superbes_enregistrements/TASCAM_0463.wav")

    sound11 = loadSound("assets/Superbes_enregistrements/TASCAM_0464.wav")

    soundA = loadSound("assets/Superbes_enregistrements/lasexualite_del_amour.mp3")
    soundB = loadSound("assets/Superbes_enregistrements/TASCAM_0482.wav")
    soundC = loadSound("assets/Superbes_enregistrements/TASCAM_0469.wav")
    soundD = loadSound("assets/Superbes_enregistrements/TASCAM_0470.wav")
    soundE = loadSound("assets/Superbes_enregistrements/TASCAM_0471.wav")
    soundF = loadSound("assets/Superbes_enregistrements/TASCAM_0474.wav")
    soundG = loadSound("assets/Superbes_enregistrements/TASCAM_0475.wav")
    soundH = loadSound("assets/Superbes_enregistrements/TASCAM_0476.wav")
    soundI = loadSound("assets/Superbes_enregistrements/TASCAM_0477.wav")
    soundJ = loadSound("assets/Superbes_enregistrements/TASCAM_0478.wav")
    soundK = loadSound("assets/Superbes_enregistrements/TASCAM_0480.wav")
    soundL = loadSound("assets/Superbes_enregistrements/TASCAM_0484.wav")
    soundM = loadSound("assets/Superbes_enregistrements/En_passant_pecho.mp3")
    soundN = loadSound("assets/Superbes_enregistrements/TASCAM_0491.wav")
    soundO = loadSound("assets/Superbes_enregistrements/TASCAM_0449.wav")
    soundP = loadSound("assets/Superbes_enregistrements/TASCAM_0448.wav")






}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    background(0, 40);
    console.log(sound1.duration())
    amplitude = new p5.Amplitude()
    xpos = 200
    ypos = 7 * height / 8

    /* a = 150 / height
     b = 70 / width
     console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA=" + a)
     console.log("BBBBBBBBBBBBBBBBBBBBBBBBB=" + b)*/
    //pour anim1
    Xrect = 0.04375 * width
    Yrect = 0.20380434782608695 * height //reponsive !
    Xpast[0] = (Xrect / 2 + 5) //initialiser en dehors de l'écran sans perdre de plance dans le canvas
    Ypast[0] = (Yrect / 2 + 5)
    transparence = 40

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

    musicPlay(sound1, 65) //a
    musicPlay(sound2, 66) //b
    musicPlay(sound3, 67) //c
    musicPlay(sound4, 68) //d
    musicPlay(sound5, 69) //e
    musicPlay(sound6, 70) //f
    musicPlay(sound7, 71) //g
    musicPlay(sound8, 72) ////h
    musicPlay(sound9, 73) //i
    musicPlay(sound10, 74) //j

    musicPlay(soundA, 75) //k
    musicPlay(soundB, 76) //l
    musicPlay(soundC, 77) //m

    musicPlay(soundF, 78) //n
    musicPlay(soundG, 79) //o
    musicPlay(soundH, 80) //p
    musicPlay(soundI, 81) //q
    musicPlay(soundJ, 82) //r
    musicPlay(soundK, 83) //s
    musicPlay(soundL, 84) //t
    musicPlay(soundM, 85) //u
    musicPlay(soundN, 86) //v
    musicPlay(soundD, 87) //w 
    musicPlay(soundE, 88) //x
    musicPlay(soundO, 89) //y
    musicPlay(soundP, 90) //z


    if (sound1.currentTime() < sound1.duration() - 0.1 && sound1.currentTime() > 0) {
        transparence = 1
        anim1()
    } else if (sound1.currentTime() > sound1.duration() - 0.1) {
        transparence = 40
    }

    if (sound2.currentTime() < sound2.duration() - 0.1 && sound2.currentTime() > 0) {
        anim2()
    }


    if (sound3.currentTime() < sound3.duration() - 0.1 && sound3.currentTime() > 0) {
        anim3()

    }

    if (sound4.currentTime() < sound4.duration() - 0.1 && sound4.currentTime() > 0) {
        anim4()
    }

    if (sound5.currentTime() < sound5.duration() - 0.1 && sound5.currentTime() > 0) {
        anim5()
    }

    if (sound6.currentTime() < sound6.duration() - 0.1 && sound6.currentTime() > 0) {
        anim6()
    }
    if (sound7.currentTime() < sound7.duration() - 0.1 && sound7.currentTime() > 0) {
        anim7()
    }
    if (sound8.currentTime() < sound8.duration() - 0.1 && sound8.currentTime() > 0) {
        anim8()
    }
    if (sound9.currentTime() < sound9.duration() - 0.1 && sound9.currentTime() > 0) { //i
        anim9()
    } else {
        rouge = 0
        vert = 0
        bleu = 0
    }

    if (sound10.currentTime() < sound10.duration() - 0.1 && sound10.currentTime() > 0) {
        anim10()
    }

    if (sound11.currentTime() < sound11.duration() - 0.1 && sound11.currentTime() > 0) {
        anim11()
    }

    if (soundA.currentTime() < soundA.duration() - 0.1 && soundA.currentTime() > 0) {
        animA()
    } else if (soundA.currentTime() > soundA.duration() - 0.1) {
        transparence = 40
    }
    if (soundB.currentTime() < soundB.duration() - 0.1 && soundB.currentTime() > 0) {
        animB()
    } else if (soundB.currentTime() > soundB.duration() - 0.1) {
        transparence = 40
    }
    if (soundC.currentTime() < soundC.duration() - 0.1 && soundC.currentTime() > 0) {
        animC()
    } else if (soundC.currentTime() > soundC.duration() - 0.1) {
        transparence = 40
    }
    if (soundD.currentTime() < soundD.duration() - 0.1 && soundD.currentTime() > 0) {
        animD()
    } else if (soundD.currentTime() > soundD.duration() - 0.1) {
        transparence = 40
    }
    if (soundE.currentTime() < soundE.duration() - 0.1 && soundE.currentTime() > 0) {
        animE()
    } else if (soundE.currentTime() > soundE.duration() - 0.1) {
        transparence = 40
    }
    if (soundF.currentTime() < soundF.duration() - 0.1 && soundF.currentTime() > 0) {
        animF()
    } else if (soundF.currentTime() > soundF.duration() - 0.1) {
        transparence = 40
    }
    if (soundG.currentTime() < soundG.duration() - 0.1 && soundG.currentTime() > 0) {
        animG()
    } else if (soundG.currentTime() > soundG.duration() - 0.1) {
        transparence = 40
    }
    if (soundH.currentTime() < soundH.duration() - 0.1 && soundH.currentTime() > 0) {
        animH()
    } else if (soundH.currentTime() > soundH.duration() - 0.1) {
        transparence = 40
    }
    if (soundI.currentTime() < soundI.duration() - 0.1 && soundI.currentTime() > 0) {
        animI()
    } else if (soundJ.currentTime() > soundJ.duration() - 0.1) {
        transparence = 40
    }
    if (soundJ.currentTime() < soundJ.duration() - 0.1 && soundJ.currentTime() > 0) {
        animJ()
    } else if (soundJ.currentTime() > soundJ.duration() - 0.1) {
        transparence = 40
    }
    if (soundK.currentTime() < soundK.duration() - 0.1 && soundK.currentTime() > 0) {
        animK()
    } else if (soundK.currentTime() > soundK.duration() - 0.1) {
        transparence = 40
    }
    if (soundL.currentTime() < soundL.duration() - 0.1 && soundL.currentTime() > 0) {
        animL()
    } else if (soundL.currentTime() > soundL.duration() - 0.1) {
        transparence = 40
    }
    if (soundM.currentTime() < soundM.duration() - 0.1 && soundM.currentTime() > 0) { //u
        animM()

    } else if (soundM.currentTime() > soundM.duration() - 0.1) {
        transparence = 40
    }
    if (soundN.currentTime() < soundN.duration() - 0.1 && soundN.currentTime() > 0) {
        animN()
    } else if (soundN.currentTime() > soundN.duration() - 0.1) {
        transparence = 40
    }

    if (soundO.currentTime() < soundO.duration() - 0.1 && soundO.currentTime() > 0) {
        animO()
    } else if (soundO.currentTime() > soundO.duration() - 0.1) {
        transparence = 40
    }
    if (soundP.currentTime() < soundP.duration() - 0.1 && soundP.currentTime() > 0) {
        animP()
    } else if (soundP.currentTime() > soundP.duration() - 0.1) {
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

function anim1() {
    /* if (sound1.isPlaying) {
         transparence = 1
     } else { //ne fonctionne pas 
         transparence = 40
     }*/

    amplitude.setInput(sound1)
    var level = amplitude.getLevel()
    console.log(level)
    var displayy = map(level, 0, 0.0025, 0, 100)

    if (displayy > 85) { // conditon d'affichage : si % sonore>90
        x = random((Xrect / 2 + 5), width - (Xrect / 2 + 5)) //premiere pos aléatoire
        y = random(80, height - 80)


        // POUR EVITER UNE SUPERPOSITION DES FORMES :
        Xpast[j] = x //mémoire des positions des rectangles précédents
        Ypast[j] = y
        // console.log("boucle1 if=" + Xpast + "//" + Ypast + "    //" + j)


        var coule = 0

        while (coule == 0) {
            console.log("old x &y =" + x + "___" + y)
            g = 0
            while ((g < Xpast.length) && ((Math.abs(Xpast[g] - x) > (Xrect + 3)) || (Math.abs(Ypast[g] - y) > (Yrect + 3)))) { //s'arrête si il a parcouru tout le 
                g++ //tableau ou si touche en X ou Y
                /*console.log("XpastG" + Xpast[g])
                console.log("YpastG" + Ypast[g])
                console.log("absX=" + (Math.abs(Xpast[g] - x)))
                console.log("absY=" + (Math.abs(Ypast[g] - y)))3
                console.log("G DANS WHILE DE WHILE, g=" + g + "// x=" + x + "//y =" + y)*/
            }

            // console.log(" BETWEEN while and if g" + g + " et Xpast=" + Xpast.length)
            if (g == Xpast.length) { //sortie de la boucle si vérification faite avec toutes les valeurs
                coule = 1
                //console.log(" IF Xpast.length=" + Xpast.length + "//g=" + g)
            } else { // si la lecture s'est arrêtée en cours de route ; alors position non valide : relance de valeurs aléatoires
                x = random((Xrect / 2 + 5), width - (Xrect / 2 + 5))
                y = random((Yrect / 2 + 5), height - (Yrect / 2 + 5))
                //console.log(" ELSE new x =" + x + " // y=" + y)
            }

        }
        Xpast[j] = x //ajout des nouvelles valeurs x, y dans la mémoire
        Ypast[j] = y
        console.log("final x & y =" + x + "," + y)
        console.log(Xpast)
        console.log("**********************************************************NOUVEAU BLOC n°" + j + "********************************")
        noStroke()
        fill(220)
        rectMode(CENTER)
        rect(x, y, Xrect, Yrect, 15)
        j += 1



        /*  for (i = 0; i < Xpast.length; i++) { // pour ne pas surperposer les formes
              // console.log("je suis dans la boucle for")

              if ((Math.abs(Xpast[i] - x) < 35)) /* && (Math.abs(Ypast[i] - y < 75))) { //si ils se touchent
                  x = random(40, width - 40)
                  console.log("x=" + x)

                  for (i = 0; i < Ypast.length; i++) {
                      if ((Math.abs(Ypast[i] - y) < 75)) {
                          y = random(80, height - 80)
                      }
                  }

                  Xpast[i] = x
                  Ypast[i] = y
              }

          }*/

    }
} //anim1


function anim2() { //pas fonctionnel 



    for (i = 0; i < ypos0.length; i++) {
        fill(254, 1, 0)
        noStroke()
        beginShape()
        vertex(xpos0[i], ypos0[i])
        endShape()
    }

}

function anim3() {
    push()
    rectMode(CENTER)
    for(var i = 0 ; i < 25 ; i++){
        push()
        translate(random(width), random(height))
        rotate(frameCount/10 +i)
        rect(0,0,50,50)
        pop()
        
    }
    pop()
    /*
    var x = []
    var y = []

    for (i = 0; i < 30; i++) {
        x[i] = random(width)
        y[i] = random(height)
    }

    for (i = 0; i < 360; i++) {
        background(255, 255, 20);
        push()
        translate(random(x[i]), random([i]))
        rotate(frameCount / 100)
        rectMode(CENTER)
        noStroke()
        fill(random(80), random(250), random(255))
        rect(x, y, 200, 50, 10)
        pop()


    } //pourquoi cette boucle ne se répète aussi longtemps que dure la chanson?
    transparence = 15*/
/*
    push(); // start a transformation matrix
    translate(width / 2, height / 2); // move to middle of screen

    for (var i = 0; i < sines.length; i++) {
        /*var erad = 0; // radius for small "point" within circle... this is the 'pen' when tracing
        // setup for tracing
        if (trace) {
            stroke(0, 0, 255 * (float(i) / sines.length), alpha); // blue
            fill(0, 0, 255, alpha / 2); // also, um, blue
            erad = 5.0 * (1.0 - float(i) / sines.length); // pen width will be related to which sine
        }
        var radius = rad / (i + 1); // radius for circle itself
        rotate(sines[i]); // rotate circle
        if (!trace) rect(x, y, 200, 50, 10) // if we're simulating, draw the sine
        /*  push(); // go up one level
          translate(0, radius); // move to sine edge
          if (!trace) ellipse(0, 0, 5, 5); // draw a little circle
          if (trace) ellipse(0, 0, erad, erad); // draw with erad if tracing
          pop(); // go down one level
        translate(0, radius); // move into position for next sine
        sines[i] = (sines[i] + (fund + (fund * i * ratio))) % TWO_PI; // update angle based on fundamental
    }

    pop();
*/
}

function anim4() {

}

function anim5() { //sono depuis le coté gauche
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

function anim6() {
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

function anim7() {
    /*for (posX = width / 12; posX < width; posX = posX + width / 12) { //comment faire un delay pour apparition progressive des barres ?
        // delai = millis()
        strokeWeight(10)
        stroke(255)
        line(posX, height * 0.8, posX, height * 0.2)
    }*/
}

function anim8() {
    /*
        push()
        for (x = 0; x < width; x++) {
            for (var i = 0; i < 200; i += 20) {

                noFill();
                stroke(255)
                strokeWeight(2);
                bezier(0, 60 + i, 430, 40, 460, 320, 260 - (i / 16), 320 + (i / 8));

            }
            translate(400, 200)
            rotate(PI / 4)
        }
        pop()*/
}

function anim9() { //i
    transparence = 100
    background(220, 10, 2)
}

function anim10() { //j
    /*
        var xpos, ypos;
        var xspeed = 5.6;
        yspeed = 4.4;
        var xdirection = 1;
        ydirection = 1;
        ellipseMode(RADIUS);

        xpos = width / 2;
        ypos = height / 2;
        xpos = xpos + xspeed * xdirection;
        ypos = ypos + yspeed * ydirection;
        if (xpos > width - 100 && xpos < 100) {
            xdirection *= -1;
        }
        if (ypos > height - 100 && ypos < 100) {
            ydirection *= -1;
            fill(255)
            ellipse(xpos, ypos, 100, 100);

        }*/
}

function anim11() {

}

function animA() {
    /* var x = 200;
     var it = 0;
     for (i = x; i < width - x; i + x) { //test uselless
         it++
         /*for (it + i < width) {
             it++
         }

         if (it % 2 == 0) {
             var XPOS = height / 2 + x
         } else {
             XPOS = height / 2 - x
         }
         noFill()
         strokeWeight(5)
         stroke(255)
         beginShape()
         vertex(i, XPOS)
         endShape()
     }*/
}

function animB() {
    /* // move to the first point
    ctx.moveTo(points[0].x, points[0].y);


    for (i = 1; i < points.length - 2; i++) {
        var xc = (points[i].x + points[i + 1].x) / 2;
        var yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        fill(255)
        stroke(120, 20, 10)
    }
    // curve through the last two points
    ctx.quadraticCurveTo(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
*/ //mesurer amplitude max de sound2
    amplitude.setInput(sound2)
    var level2 = amplitude.getLevel();
    var sound2max = 0
    if (level2 > sound2max) {
        sound2max = level2
    }
    posiX = width / 12

    for (i = posiX; i < 11 * posiX; i++) { //6 pour rester entre les deux points extremes de la curve

        amplitude.setInput(sound2)
        smooth(sound2)
        var level2 = amplitude.getLevel();
        console.log("level anim2 =" + level2)
        var levelY = map(level2, 0, 0.001, 0, 130) //val changeantes, n'importe quoi
        var variationX = map(sound4.duration(), 0, 2.352, 0, 130)
        var variationY =
            console.log("sound4=" + sound4.duration())
        noFill()
        stroke(255)
        line(i, height / 2 + levelY, i, height / 2 - levelY)

        //,chrono(40)
        // console.log("soundmax="+sound2max)
    }

}

function animC() {

}

function animD() {

}

function animE() {

}

function animF() {

}

function animG() {

}

function animH() {

}

function animI() {

}

function animJ() {


}

function animK() { //s
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


function animL() {

}

function animM() { //u
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

function animN() {

}

function animO() {

}


function animP() { // son pulupulup à changer 
    transparence = 10
    amplitude.setInput(soundP)
    var levelP = amplitude.getLevel();
    var radius = map(levelP, 0, 0.1, 30, 150) //pour changer diam de l'actuel poiint seulement ...

    var point = 12
    var currentPoint = map(soundP.currentTime(), 0, soundP.duration(), 0, point + 1)


    push()
    translate(0, height / 2)
    for (i = 1; i < currentPoint + 1; i++) {

        noStroke()
        fill(5, 120, 0)
        ellipse(i * width / 14, 0, radius, radius)
    }
    pop()

}

function chrono(delai) {
    tstamp = frameCount
    timeToAnim = tstamp + delai * 60
}

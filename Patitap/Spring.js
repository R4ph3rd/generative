///////////////////////////////////////////////
//inspired by @Chloe, sketch at https://discourse.processing.org/t/change-processing-code-to-p5-js/1709
// Spring class
function Spring(_x, middle, middleSpring) {

    this.y_pos = middleSpring;
    this.x_pos = width / 2;

    // Spring simulation constants 
    this.resistance = 0.2
    this.damp = 0.9416 // Damping 
    this.rest_posy = height / 2 // Rest position Y 
    this.rest_posx = width / 2 // Rest position Y 

    //pour interpoler couleurs animQ
    this.red = 187
    this.green = 218
    this.blue = 92
    this.timeline = 0
    this.timeline = constrain(0, 1)

    // Spring simulation variables 
    this.velx = 0.0; // X Velocity 
    this.vely = 0.0; // Y Velocity 
    this.accel = 0; // Acceleration 
    this.force = 0; // Force 
    this.accelQ = 0; // Acceleration 
    this.forceQ = 0; // Force 
    this.tire = 0 // force de traction avant le lacher de l'élastique



    this.update = function (first_partQ) {
        //    this.rest_posy = middleSpring
        this.force = -this.resistance * (this.y_pos - this.rest_posy); // f=-ky 
        this.accel = this.force / 10; // Set the acceleration, f=ma == a=f/m 
        this.vely = this.damp * (this.vely + this.accel); // Set the velocity 
        this.y_pos = this.y_pos + this.vely; // Updated position 

        //pour animQ
        this.forceQ = -this.resistance * (this.x_pos - this.rest_posx); // f=-ky 
        this.accelQ = this.forceQ / 10; // Set the acceleration, f=ma == a=f/m 
        this.velx = 0.92 * (this.velx + this.accelQ); // Set the velocity 
        this.tire = map(this.x_pos - 100, (width / 2) - 115, 0, 10, 2) //easing effect
        //interpolation des couleurs
        this.timeline = map(soundQ.currentTime(), 0, soundQ.duration() * 0.75, 0, 1)
        this.red = lerp(187, 80, this.timeline)
        this.green = lerp(218, 86, this.timeline)
        this.blue = lerp(92, 224, this.timeline)

        if ((soundQ.currentTime() < 1.01)) this.x_pos = this.x_pos - this.tire //traction vers l'arriere avant le 2nd rebond sonore
        else this.x_pos = this.x_pos + this.velx; // elastic effect




    }


    this.display = function () {
        stroke(232, 199, 97);
        noFill()
        ellipse(_x, this.y_pos, 15, 15);
    }

    this.displayQ = function () {
        // stroke(this.red, this.green, this.blue);
        // noFill()
        noStroke()
        fill(this.red, this.green, this.blue)
        ellipse(this.x_pos, height / 2, 30, 30);
    }
}

///////////////////////////////////////////////
//inspired by @Chloe, sketch at https://discourse.processing.org/t/change-processing-code-to-p5-js/1709
// Spring class
function Spring(_x, _y, _s, _d, _m, _k_in) {
    // Screen values 
    // this.xpos = _x;
    // this.ypos = _y;

    this.x_pos = _x;
    this.y_pos = _y;

    this.size = 20;
    this.size = _s;

    // Spring simulation constants 
    this.mass = _m; // Mass 
    this.k = 0.2; // Spring constant 
    this.k = _k_in;
    this.damp = _d; // Damping 
    this.rest_posx = _x; // Rest position X 
    this.rest_posy = _y; // Rest position Y 

    // Spring simulation variables 
    //float pos = 20.0; // Position 
    this.velx = 0.0; // X Velocity 
    this.vely = 0.0; // Y Velocity 
    this.accel = 0; // Acceleration 
    this.force = 0; // Force 


    this.update = function () {
        soundCFFT.analyze()
        let middle = soundCFFT.getEnergy("highMid")
        let middleSpring = map(middle, 0, 200, 100, height - 100)
        if (middleSpring < 50) this.move = false;
        else this.move = true

        if (this.move) {
            this.rest_posy = middleSpring
            this.rest_posx = width / 2;
        }

        this.force = -this.k * (this.y_pos - this.rest_posy); // f=-ky 
        this.accel = this.force / this.mass; // Set the acceleration, f=ma == a=f/m 
        this.vely = this.damp * (this.vely + this.accel); // Set the velocity 
        this.y_pos = this.y_pos + this.vely; // Updated position 


        this.force = -this.k * (this.x_pos - this.rest_posx); // f=-ky 
        this.accel = this.force / this.mass; // Set the acceleration, f=ma == a=f/m 
        this.velx = this.damp * (this.velx + this.accel); // Set the velocity 
        this.x_pos = this.x_pos + this.velx; // Updated position 


    }

    // Test to see if mouse is over this spring
    this.overEvent = function () {
        var disX = this.x_pos - mouseX;
        var disY = this.y_pos - mouseY;
        var dis = createVector(disX, disY);
        if (dis.mag() < this.size / 2) {
            return true;
        } else {
            return false;
        }
    }


    this.display = function () {
        stroke(255);
        ellipse(this.x_pos, this.y_pos, this.size, this.size);
    }

    this.pressed = function () {
        if (this.over) {
            this.move = true;
        } else {
            this.move = false;
        }
    }

    this.released = function () {
        this.move = false;
        this.rest_posx = this.xpos;
        this.rest_posy = this.ypos;
    }
}

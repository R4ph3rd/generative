///////////////////////////////////////////////
//inspired by @Chloe, sketch at https://discourse.processing.org/t/change-processing-code-to-p5-js/1709
// Spring class
function Spring(_x, middle,middleSpring) {

    this.y_pos = middleSpring;

    // Spring simulation constants 
    this.resistance = 0.2
    this.damp = 0.9416 // Damping 
    this.rest_posy = height / 2 // Rest position Y 

    // Spring simulation variables 
    this.velx = 0.0; // X Velocity 
    this.vely = 0.0; // Y Velocity 
    this.accel = 0; // Acceleration 
    this.force = 0; // Force 


    this.update = function () {
    //    this.rest_posy = middleSpring
        this.force = -this.resistance * (this.y_pos - this.rest_posy); // f=-ky 
        this.accel = this.force / 10; // Set the acceleration, f=ma == a=f/m 
        this.vely = this.damp * (this.vely + this.accel); // Set the velocity 
        this.y_pos = this.y_pos + this.vely; // Updated position 
    }

    this.display = function () {
        stroke(232, 199, 97);
        noFill()
        ellipse(_x, this.y_pos, 15, 15);
    }
}

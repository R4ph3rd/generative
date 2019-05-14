function Agent() {

    let stepSize, angle
    let  noisySpeed = 0.4
    this.siz = random(2,7)
    this.xoff = random(0.005), this.yoff = random(0.005)

    this.pos = createVector(random(width), random(height));
    this.stepSize = random(-1,1);
    this.angle = random(PI)
    this.posI = createVector(this.pos.x, this.pos.y)

    this.update = function() {
    /*  angle = map(noise(this.pos.x/noiseStep, this.pos.y/noiseStep), 0, 1, 0, TWO_PI) ;// * noiseForce;
      angle = (angle - angle * 0.8) * noiseForce;
      this.pos.x += sin( pow(random(noisySpeed) + cos(angle), 2) * stepSize * dir)
      this.pos.y += cos( pow(random(noisySpeed) + sin(angle), 2) * stepSize * dir)*/


      this.xoff += random(0.001)
      this.yoff += random(0.001)
      this.angle += this.angle * sqrt(noise(this.xoff * this.yoff))
      
      this.pos.x += this.stepSize * noise(this.xoff) * cos(this.angle) * this.siz
      this.pos.y += this.stepSize * noise(this.yoff) * sin(this.angle) * this.siz
      

          //in case that it goes out 
          if ( this.pos.x > width + 5 || this.pos.x < -5 || this.pos.y > height + 5 || this.pos.y < -5) {
            this.pos.x = random(width);
            this.pos.y = random(height);
          }
    }

      this.checkLines = function(){
          for (let i = 0 ; i < agent.length ; i ++){
            if(dist(this.pos.x, this.pos.y, agent[i].pos.x, agent[i].pos.y) < 100){
              let p = map(dist(this.posI.x, this.posI.y, agent[i].pos.x, agent[i].pos.y), 100, 0, 0, 1)
              this.posI.set(lerp(this.pos.x, agent[i].pos.x, p), lerp(this.pos.y, agent[i].pos.y, p))

              push()
              stroke(mainColor)
              strokeWeight(1)
              line(this.pos.x, this.pos.y, this.posI.x, this.posI.y)
              pop()
            }
          }
      } 
      
    this.display = function(){
      fill(mainColor)
      noStroke()
      ellipse(this.pos.x, this.pos.y, this.siz, this.siz)
    }
}    


    

      //mouse attraction
    /*  if (mouseIsPressed == true){
          if (dist(this.pos.x,this.pos.y, mouse.x, mouse.y) < 350 ) {
            
            let gravity = p5.Vector.sub(mouse, this.pos); //make vector pointing towards centralPoint
            gravity.normalize();
            gravity.mult(4.81);
            this.pos.add(p5.Vector.div(gravity))
          }*/
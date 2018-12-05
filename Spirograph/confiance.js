class confiance() {
    constructor() {
        this.xL = width / 2
        this.yL = height / 2
        this.noStroke()
        this.radius = 2
        this.radiustarget = 200
        var t = map(soundL.currentTime(), 0, soundL.duration() * 0.75, 0, 1)
        this.t = constrain(t, 0, 1)

    }


    this.update = function () {
        this.radius = lerp(radius, radiustarget, t)

    }


    this.display = function () {
        ellipse(xL, yL, radiusL, radiusL)
    }
}


fill(69, 38, 127)
ellipse(xL, yL, radiusL + 30, radiusL + 30)
fill(199, 213, 64)
ellipse(xL, yL, radiusL - 40, radiusL - 40)
fill(0)
ellipse(xL, yL, radiusL - 130, radiusL - 130)
fill(110, 180, 45)
ellipse(xL, yL, radiusL - 250, radiusL - 250)
fill(54, 80, 159)
ellipse(xL, yL, radiusL - 320, radiusL - 320)

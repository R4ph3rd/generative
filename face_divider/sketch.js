let video;
let poseNet;
let poses = [];
let skeletons = [];

function setup(){
createCanvas(windowWidth, windowHeight)
smooth()
background(0)

video = createCapture(VIDEO);
video.size(width, height);
video.hide();
}

function windowResized(){
resizeCanvas(windowWidth, windowHeight)
}

function draw(){
    background(0)


    for ( let y = 0; y < height ; y += 30){
        for ( let x = 0 ; x < width ; x += 30){
            let c = video.get(x,y)
            let median = (c[0] + c[1] + c[2]) / 3
            let siz = map(median, 0, 255, 10, 150)
            //console.log("alpha = " + c)

            /*for (let i = 0 ; i < c.length ; i ++){
                c[0].r = (abs(c[0].r - c[i].r)/2)
                c[0].g = (abs(c[0].g - c[i].g)/2)
                c[0].b = (abs(c[0].b - c[i].b)/2)
            }*/

            noStroke()
            fill(c)
            ellipse(x,y,siz,siz)
        }
    }
    //image(video, 0, 0, 800, 600);

}
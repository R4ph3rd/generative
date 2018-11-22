var rectangles = new Array(4); // an array to hold all the current angles

var speed = 0.008; // the speed of the central rect
var slider;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //   rectMode(CENTER)
slider = createSlider(0, height/6, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
   
    background(15); // clear the screen

    for (var i = 0; i < rectangles.length; i++) {
        rectangles[i] = PI; // initialser l'angle de départ
    }
}

function draw() {
    background(0, 10)
    fill(255,255,255,20);
    strokeWeight(2)
    stroke(255)

    //spirographe
    push(); 
    translate(width / 2, height / 2); 
    if (mouseIsPressed) {
        for (var i = 0; i < rectangles.length; i++) {
            // setup for tracing
            var radius = height / 6 / (i + 1.5);
            rotate(rectangles[i]);
            rect(slider.value(),slider.value(), radius * 2, radius * 2); 
            
            push(); 
            translate(0, radius); 
            fill(156, 13, 6,90)
            noStroke()
            ellipse(0, 0, 10, 10); 
            pop();
            
            translate(0, radius); //  prochain rect
            rectangles[i] = (rectangles[i] + (speed + (speed * i))) % TWO_PI; 
        }

        pop(); 
    } else {
        background(0, 18)
    }
}

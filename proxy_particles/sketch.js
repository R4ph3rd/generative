let maxag = 8000  
let threshold
let blue, violet, pink, yellow, orange

let mainColor

let agent = [];
let noiseStep, noiseForce ;
let mouse

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight)
  smooth()
  strokeWeight(1)
  background(0)
  rectMode(CENTER)

  // adapt number of agents and threshold of attraction according to screen size
  let diag = sqrt(pow(windowWidth,2) + pow(windowHeight,2))
  threshold =  ( 350 / 1600 ) * diag
  maxag = ( 300 / 1600 ) * diag

  noiseStep = random(150, 600);
  noiseForce = random(20);

  mainColor = color(211, 30, 74)

  for (let i = 0; i < maxag; i ++) agent[i] = new Agent();

  mouse = createVector(mouseX, mouseY)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background(0,20) 

  for (let i = 0; i < maxag; i ++) {
    agent[i].update();
    agent[i].checkLines()
    agent[i].display();

  }
}

function mousePressed(){
  mouse.set(mouseX, mouseY)
}

function mouseDragged(){ 
  mouse.set(mouseX, mouseY)
}

function keyPressed(){
  if (keyCode == ENTER ) {
    noiseStep = random(150, 600);
    noiseForce = random(20);
    for (let i = 0; i < maxag; i ++) agent[i] = new Agent();
  }
}
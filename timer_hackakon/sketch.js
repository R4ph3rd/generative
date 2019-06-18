/* settings */
let yellow = '#fefe08'
let font = 'Oswald'
let fontSize = 54

let timer


////////// TEAMS POINTS //////////////
let teams = ['prout', 'blanquette', 'michel', 'hubert']
let plus, moins, wichTeam
let points = [0,0,0,0]

function setup(){
  let cnv = createCanvas(windowWidth, windowHeight)

  textStyle(BOLD)
  textFont(font)
  textSize(fontSize)

  strokeCap(SQUARE)

  plus = createButton('plus')
  moins = createButton('moins')

  plus.mousePressed(gainPoints)
  moins.mousePressed(loosePoints)

}

function draw(){
 background(0)


 textSize(fontSize)
 let s = second() < 10 ? '0' + second() : second()
 let m = minute() < 10 ? '0' + minute() : minute()
 let h = hour() < 10 ? '0' + hour() : hour()
 timer = h + ' : ' + m + ' : ' + s

 let xcenter = ( width / 2 )  - (textWidth(timer) / 2)
 let ycenter = ( height / 2 ) + (fontSize / 2)


 let intern = map(s, 0, 60, 0, TWO_PI)
 let middle = map(m, 0, 60, 0, TWO_PI)
 let extern = map(h, 0, 24, 0, TWO_PI)


 push()

 fill(yellow)
 text(timer, xcenter, ycenter)

 pop()




 push()

 translate(width / 2, height / 2)
 rotate(- PI / 2)

 noFill()
 ellipseMode(CENTER)
 stroke(yellow)
 strokeWeight(12)
 arc(0, 0, 350, 350, 0, intern)
 strokeWeight(12)
 arc(0, 0, 400, 400, 0, middle)
 strokeWeight(12)
 arc(0, 0, 450, 450, 0, extern)

 pop()


 //////////////TEAMS////////////
 for (let i = 1 ; i - 1 < teams.length ; i++){

  push()
  fill(yellow)
  textSize(24)
  let y = (height / (teams.length + 1)) * i
  let x = width - 300

  
  text ('TEAM ' + i, x, y)
  text(points[i - 1], x, y + 30)

  if(mouseX > x - 50 && mouseX < width){
    if(mouseY > y - 50 && mouseY < y + 50){

      wichTeam = i - 1

      plus.position( x + 100, y - 24)
      moins.position(x + 170, y - 24)
    }
  }
 }

pop()
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function gainPoints(){
    points[wichTeam] = points[wichTeam] + 10
}

function loosePoints(){
  points = points[wichTeam] - 10
}
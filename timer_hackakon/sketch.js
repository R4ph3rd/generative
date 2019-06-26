/* settings */
let yellow = '#ffff00'
let green = '#27FFC1'
let pink = '#FF00FF'
let font = 'Oswald'
let fontSize = 54
let color = [green, yellow, pink]
let pancarte = yellow

let timer


////////// TEAMS POINTS //////////////
let teams = [
  {}
]
let plus, moins, teamName, addTeam, wichTeam

function setup(){
  let cnv = createCanvas(windowWidth, windowHeight)

  textStyle(BOLD)
  textFont(font)
  textSize(fontSize)

  strokeCap(SQUARE)

  plus = createButton('plus')
  moins = createButton('moins')
  addTeam = createButton('NEW TEAM')
  teamName = createInput()

  plus.mousePressed(gainPoints)
  moins.mousePressed(loosePoints)
  addTeam.mousePressed(Yeah)

  teamName.position((width / 2) - 200, height + 100)
  addTeam.position((width / 2) + 50, height + 100)
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

 if (m == 59 && s == 59) pancarte = color[random(color.length)]


 let intern = map(s, 0, 60, 0, TWO_PI)
 let middle = map(m, 0, 60, 0, TWO_PI)
 let extern = map(h, 0, 24, 0, TWO_PI)


 push()

 fill(pancarte)
 rect(xcenter - 20, ycenter - (fontSize / 2) - 37, textWidth(timer) + 50, fontSize + 30)
 fill(0)
 text(timer, xcenter, ycenter)

 pop()




 push()

 translate(width / 2, height / 2)
 rotate(- PI / 2)

 noFill()
 ellipseMode(CENTER)
 stroke(green)
 strokeWeight(12)
 arc(0, 0, 350, 350, 0, intern)
 stroke(yellow)
 arc(0, 0, 400, 400, 0, middle)
 stroke(pink)
 arc(0, 0, 450, 450, 0, extern)

 pop()





 let notUsed = true
 //////////////TEAMS////////////
 for (let i = 1 ; i - 1 < teams.length ; i++){

  j = i - 1

  teams.sort(function(j, i) {
    return parseFloat(i.points) - parseFloat(j.points);
  })


  push()
  fill(yellow)
  textSize(24)
  let y = (height / (teams.length + 1)) * i
  let x = 100

  if (teams.length > 5){
    y = (height / 7) * i    
  }

  if ( i - 1 > 5 ){
    x = width - 300
    y = (height / (teams.length - 5)) * ( i - 6)
  }


  fill(color[i % 3])
  
  text (teams[i - 1].name, x, y)
  text(teams[i - 1].points, x, y + 30)

  if(mouseX > x - 50 && mouseX < x + 500 && mouseY > y - 50 && mouseY < y + 50){

      notUsed = false

      wichTeam = i - 1

      plus.position(x + 100, y - 24)
      moins.position(x + 170, y - 24)

  }

  if (i == teams.length && notUsed == true){
    plus.position(width / 2 , height + 50)
    moins.position(width / 2 , height + 10)
  }

 }

pop()
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
  teamName.position((width / 2) - 200, height + 100)
  addTeam.position((width / 2) + 50, height + 100)
}

function gainPoints(){
    teams[wichTeam].points += 10
}

function loosePoints(){
  teams[wichTeam].points -= 10
}


function Yeah(){
  teams.push({'name':teamName.value().toUpperCase(),
              'points': 0})
}




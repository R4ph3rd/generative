    //biscottes class
     function biscotte() {
         this.x = random(Xrect / 2 + 5, width - (Xrect / 2 + 5))
         this.y = random(Yrect / 2 + 5, height - (Yrect / 2 + 5))
         this.foundAspot = true
         this.tranparence = 100
       
         
         if(biscottes.length>0) this.foundAspot =false
         
         while (this.foundAspot == false) {
             for (let b of biscottes) {
                 if (abs(this.x - b.x) < Xrect + 5 || abs(this.y - b.y) < Yrect + 5) {
                     this.x = random(Xrect / 2 + 5, width - (Xrect / 2 + 5))
                     this.y = random(Yrect / 2 + 5, height - (Yrect / 2 + 5))
                     
                     
                 }
                 if(b = biscottes.length) this.foundASpot = true
             } 
         }


         this.update = function () {
             //console.log("-----------"+ n +"-------------")
             this.transparence = this.transparence - 5
//             console.log(this.transparence)
//             n += 1
             pg.clear

         }


         this.display = function () {
             pg.noStroke()
             pg.fill(220,this.transparence)
             pg.rectMode(CENTER)
             pg.rect(this.x, this.y, Xrect, Yrect, 15)
         }
     }

/*
    //biscottes class
     class biscotte {
         
         constructor(){
         this.x = random(Xrect / 2 + 5, width - (Xrect / 2 + 5))
         this.y = random(Yrect / 2 + 5, height - (Yrect / 2 + 5))
         this.foundAspot = true

         
         if(biscottes.length>0) this.foundAspot =false
         
         while (this.foundAspot == false) {
             for (let b of biscottes) {
                 if (abs(this.x - b.x) < Xrect + 3 || abs(this.y - b.y) < Yrect + 3) {
                     this.x = random(Xrect / 2 + 5, width - (Xrect / 2 + 5))
                     this.y = random(Yrect / 2 + 5, height - (Yrect / 2 + 5))
                     this.foundAspot = true
                 }
                 if(b = biscottes.length) this.foundASpot = true
             }
         }
         }


         update() {
             console.log("-----------"+ n +"-------------")
             transparence = transparence - 5
             console.log(transparence)
             n += 1

         }


         display() {
             pg.noStroke()
             pg.fill(220, transparence)
             pg.rectMode(CENTER)
             pg.rect(this.x, this.y, Xrect, Yrect, 15)
         }
     }
*/

//function 2
/*
   //premiere position aléatoire
   x = random((Xrect / 2 + 5), width - (Xrect / 2 + 5))
   y = random(80, height - 80)


   // POUR EVITER UNE SUPERPOSITION DES FORMES :
   Xpast[j] = x //mémoire des positions des rectangles précédents
   Ypast[j] = y

   // vérifier que les rectangles ne se superposent
   var coule = 0
   while (coule == 0) {
       console.log("old x &y =" + x + "___" + y)
       g = 0
       while ((g < Xpast.length) && ((Math.abs(Xpast[g] - x) > (Xrect + 3)) || (Math.abs(Ypast[g] - y) > (Yrect + 3)))) { //s'arrête si il a parcouru tout le tableau ou si touche en X ou Y
           g++
       }

       if (g == Xpast.length) { //sortie de la boucle si vérification faite avec toutes les valeurs
           coule = 1
       } else { // si la lecture s'est arrêtée en cours de route ; alors position non valide : relance de valeurs aléatoires
           x = random((Xrect / 2 + 5), width - (Xrect / 2 + 5))
           y = random((Yrect / 2 + 5), height - (Yrect / 2 + 5))
       }*/



/*
            Xpast[j] = x //ajout des nouvelles valeurs x, y dans la mémoire
            Ypast[j] = y
            console.log("final x & y =" + x + "," + y)
            console.log(Xpast)
            console.log("**********************************************************NOUVEAU BLOC n°" + j + "********************************")
            pg.noStroke()
            pg.fill(220)
            pg.rectMode(CENTER)
            pg.rect(x, y, Xrect, Yrect, 15)
            j += 1*/

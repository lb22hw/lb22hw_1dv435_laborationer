
//Bildspel

var Bild = new Array()

Bild[0] = "../css/pics/ylva.png"   
Bild[1] = "../css/pics/ylva2.png"
Bild[2] = "../css/pics/ylva3.png"
Bild[3] = "../css/pics/ylva4.png"


var f
var a = 0
var b = Bild.length

var laddaBild = new Array()
for (i = 0; i < b; i++){
   laddaBild[i] = new Image()
   laddaBild[i].src = Bild[i]
}

function bildspel(){
   document.images.bildspel.src = laddaBild[a].src
   a = a + 1
   if (a > (b-1)) a=0
   f = setTimeout("bildspel()", 5000)
}


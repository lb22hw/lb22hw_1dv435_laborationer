
var counter = 0;//Bildspel

var Bild = new Array();

Bild[0] = "../css/pics/ylva.png" ;  
Bild[1] = "../css/pics/ylva2.png";
Bild[2] = "../css/pics/ylva3.png";
Bild[3] = "../css/pics/ylva4.png";

window.onload=function(){
	window.setInterval (function(){
		bildspel();
	}, 5000);
}




function bildspel(){
   document.querySelector("#bildspel").src = Bild[counter];
   counter = counter + 1;
   if (counter > (Bild.length-1)) {
   	counter=0;
   }
   
}


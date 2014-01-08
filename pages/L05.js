alert("hej");

//Hide and show
var link = document.getElementById("button");
link.onclick = hideorshow;

var hide = document.querySelector=(".hide");
function hideoreshow(){
	if(hide.style.display==="none"){
		hide.style.display = "block";
}
	else{
		hide.style.display = "none";
	}
}

//Valutakonverterare
var count = 0
var sek = document.querySelector=("#sek");
function validateInput(){
if(sek.value.length > 0){
		sek.className = "correct";
	} 
	else {
		sek.className = "empty";
	}
	if (document.querySelector("empty")) {
		
		alert("Var vänlig fyll i antal kronor i siffror");
	} 
	else {
		function convert(sek){
			var euro = (sek * 9,84);
			var dollar = (sek * 6,54);
			addMoney(euro.value, dollar.value);
		}
	}
		function addMoney(sek, euro, dollar) {
			var table = document.querySelector("#tbody");
			var tr = document.createElement("tr");
			var sekTd = document.createElement("td");
			var euroTd = document.createElement("td");
			var dollarTd = document.createElement("td");
			
			
			var sekTextNode = document.createTextNode(sek);
			var euroTextNode = document.createTextNode(euro);
			var dollarTextNode = document.createTextNode(dollar);
			sekTd.appendChild(sekTextNode);
			tr.appendChild(sekTd);
			euroTd.appendChild(euroTextNode);
			tr.appendChild(euroTd);
			dollarTd.appendChild(dollarTextNode);
			tr.appendChild(dollarTd);
			
			table.insertBefore(tr, table.firstChild);
			count++;
	}


window.onload = function() {
	
	var button = document.querySelector(".button");
	button.addEventListener("click", validateInput);
}

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



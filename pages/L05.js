alert("hej");


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





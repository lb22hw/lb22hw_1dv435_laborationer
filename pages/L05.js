


//Valutakonverterare
var count = 0
var sek = document.querySelector("#sek");
function validateInput(){
	if(sek.value.length > 0){
		sek.className = "correct";
	} 
	else {
		sek.className = "empty";
	}
	if (document.querySelector(".empty")) {
		
		alert("Var vänlig fyll i antal kronor i siffror");
	} 
	else {
			var euro = (sek.value / 9.84);
			var dollar = (sek.value / 6.54);
			addMoney(sek.value, euro, dollar);
	}
}
		function addMoney(sek, euro, dollar) {
			var table = document.querySelector("#tbody");
			var tr = document.createElement("tr");
			var sekTd = document.createElement("td");
			var euroTd = document.createElement("td");
			var dollarTd = document.createElement("td");
			
			
			var sekTextNode = document.createTextNode(sek);
			var euroTextNode = document.createTextNode(euro.toFixed(2));
			var dollarTextNode = document.createTextNode(dollar.toFixed(2));
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






//var link = document.querySelector("#table .hide a");
//link.onclick = function(){

	//if(hidden.display === "block"){

	//}
	//else{

	//}
//}


//Valutakonverterare
var count = 0
var sek = document.querySelector=("#sek");
function validateInput(){
if(sek.value.length > 0)
		sek.className = 'correct';
	} 
	else {
		sek.className = 'empty';
	}
	if (document.querySelector('.empty')) {
		
		alert("Var vänlig fyll i antal kronor i siffror");
	} 
	else {
		function convert(sek){
			var euro = sek * 9,84;
			var dollar = sek * 6,54;
			addMoney(euro.value, dollar.value);
		}
		function addMoney(sek, euro, dollar) {
	var table = document.querySelector('#tbody');
	var tr = document.createElement('tr');
	var sekTd = document.createElement('td');
	var euroTd = document.createElement('td');
	var dollarTd = document.createElement('td');
	
	
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
	//Jag letar upp a-taggen som jag har gett klassen
	//"submitButton" och sparar undan i en variabel.
	//Jag har då ett paket i den variabeln som är själva knappen.
	//Det är inte en textsträng av html, utan det är ett paket
	//med massor av funktionalitet på.
	var button = document.querySelector(".button");
	
	//Jag lägger till en såkallad even listener på knappen
	//ett event är något som händer. Tillexempel ett klick,
	//eller att man för muspekaren över något, trycker på
	//en tangent etc. Här väljer jag att använda eventet
	//click. Det vill säga när någon klickar på den.
	//När någon klickar på min länk så säger jag att funktionen
	//'validateInput' ska köras.
	button.addEventListener('click', validateInput);
};



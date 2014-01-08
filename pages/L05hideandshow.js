//Hide and show
var link = document.getElementById("subbutton");
var hide = document.querySelector(".hide");
//var table = document.querySelector("#table");
link.onclick = function (){ 


	if(hide.style.display==="none"){
		hide.style.display = "block";
}
	else{
		hide.style.display = "none";
	}
}


//var click = document.getElementById("clicker");
//var xtra = document.getElementById("hidden");
//click.onclick = function() {
//if(xtra.style.display == "none") {
 //   xtra.style.display = "inline";
//}
//else{
   // xtra.style.display = 'none';
//}
//};
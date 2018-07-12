function mail(x) {
	document.getElementById("mail").innerHTML = "contact" + "@" + "salio.me";
	copy(x)
}
function copy(that){
	var inp =document.createElement('input');
	document.body.appendChild(inp)
	inp.value =that.textContent
	inp.select();
	document.execCommand('copy',false);
	inp.remove();
}
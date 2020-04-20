function init(){
	var button = document.getElementById('entrybutton');
	button.addEventListener('click',fuction (event){
		var message = document.getElementById('entryinput').value;
		alert("Cheryl Gardner: " + message);
		document.getElementById('textoutput').innerHTML = message;
		console.log(message);
	})
}
var window = document.getElementById('entrybutton');
window.addEventListener('load', init);
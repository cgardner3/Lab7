function init(){
	var button = document.getElementById('entrybutton');
	var message = document.getElementById('entryinput').value;
	button.addEventListener('click',fuction() {
		alert("Cheryl Gardner: " + message);
		document.getElementById('textoutput').innerHTML = message.value;
		console.log(message);
	});
}
var window = document.getElementById('entrybutton');
window.addEventListener('load', init);
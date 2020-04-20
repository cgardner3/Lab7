function init(){

var button = document.getElementById('entrybutton');
var message = document.getElementById('entryinput')
var display = document.getElementById('textoutput')
var name = document.getElementsByClassName('center')[1];

function alertFunction(){
	alert(name.textContent + ': ' + message.value);
}

function outputFunction(){
	display.innerHTML = message.value;
}

button.addEventListener('click', alertFunction);
button.addEventListener('click', outputFunction);
}

window.addEventListener('load', init);
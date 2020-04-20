function init(){
	var button = document.getElementById('entrybutton');
	var message = document.getElementById('entryinput').value;
	var display = document.getElementById('textoutput')
	button.addEventListener('click',fuction() {
		alert("Cheryl Gardner: " + message);
		display.innerHTML = message.value;
	});
}
window.addEventListener('load', init);
function init(){
	
	var response=document.getElementById('entrybutton');
	button.addEventListener('click',fuction (event){
		var userInput=document.getElementId('entryinput').value;
		alert("Cheryl Gardner: " + userInput);
		document.getElementById('textoutput').innerHTML = userInput;
		console.log(message)
	})
}

var window = document.getElementById('entrybutton')
window.addEventListener('load', init);
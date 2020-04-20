function init(){
	
	var press = document.getElementById("entrybutton");
	press.addEventListener('click',function(){
		var userInput = document.getElementById("entryinput").value;
		alert("Cheryl Gardner: " + userInput);
		console.log(message);
		document.getElementById("textoutput").innerHTML = userInput;
	});
}
window.addEventListener('load', init);
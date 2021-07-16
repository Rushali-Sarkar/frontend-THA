let click = 0;
let hover = 0;
let upkey = 0;
let downkey = 0;


function clickme() {
	click++;
	document.getElementById("click").innerHTML = "Number of times button clicked: " + click;
	return;
}

function mousehover() {
	hover++;
	document.getElementById("hovering").style.display = "block";
	document.getElementById("release").style.display = "none";
	document.getElementById("hover").innerHTML = "Number of times button hovered: " + hover;
	return;
}

function mouseout() {
	document.getElementById("hovering").style.display = "none";
	document.getElementById("release").style.display = "block";
}

function focused() {
	console.log("The key is on focus");
	return;
}

function blur() {
	console.log("The keys are blurred");
	return;
}

function keyup() {
	upkey++;
	document.getElementById("up").value = "Keys Pressed: " + upkey + " times";
	return; 

}

function keydown() {
	downkey++;
	document.getElementById("down").value = "Keys Released: " + downkey + " times";
	return; 
}
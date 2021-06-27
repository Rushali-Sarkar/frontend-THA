let cards = document.querySelectorAll(".card-input");

cards.forEach(function(cards) {
  cards.addEventListener("click", main);
});

let clojure = "./Images/clojure.png";
let cpp = "./Images/cpp.png";
let css3 = "./Images/css3.png";
let elixir = "./Images/elixir.png";
let flutter = "./Images/flutter.png";
let golang = "./Images/golang.png";
let haskell = "./Images/haskell.png";
let html5 = "./Images/html5.png";
let java = "./Images/java.png";
let javascript = "./Images/javascript.png";
let julia = "./Images/julia.png";
let kotlin = "./Images/kotlin.png";
let latex = "./Images/latex.png";
let linux = "./Images/linux.png";
let python = "./Images/python.png";
let rust = "./Images/rust.png";
let scala = "./Images/scala.png";
let swift = "./Images/swift.png";

let icons = [clojure, clojure, cpp, cpp, css3, css3, elixir, elixir, flutter, flutter, golang, golang, haskell, haskell, html5, html5, java, java, javascript, javascript, julia, julia, kotlin, kotlin, latex, latex, linux, linux, python, python, rust, rust, scala, scala, swift, swift];
let total_items = 36;
let random_icons = [];

for (var i = 0; i < total_items; i++) {
	random_index = Math.floor(Math.random() * icons.length);
	let current_icon = icons[random_index];
	random_icons.push(current_icon);
	icons.splice(random_index, 1);
}

var labels = document.getElementsByTagName('label');
let question = "./Images/question.png";

for (var i = 0; i < total_items; i++) {
	var img = new Image();
	img.src = question;
	labels[i].appendChild(img);
}

function getLabel(input) {
	for (var i = 0; i < total_items; i++) {
		if (input.id === labels[i].attributes[0].value) {
			return labels[i];
		}
	}
	return null;
}

function getIndex(label) {
	for (i = 0; i < total_items; i++) {
		if (label === labels[i]) {
			return i;
		}
	}
	return -1;
}

let open_label = null;
let open_input = null;
let open_index = null;
let open_image = null;
let matched = 0;
let moves = 0;
let score = 0;
let remaining = 18;

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}


function main(event) {

	var input = event.srcElement;
	var label = getLabel(input);
	var index = getIndex(label);
	var imagesrc = random_icons[index];
	var store_open_label = open_label;
	label.children[0].src = imagesrc;
	label.children[0].class = "open";

	if (open_image !== null && open_index !== index) {

		if (open_image === imagesrc) {
			input.checked = true;
			input.disabled = true;
			open_input.checked = true;
			open_input.disabled = true;
			matched += 1;
			moves += 1;
			remaining -= 1;
			score += 10;
		}

		else {
			setTimeout(function(){
				store_open_label.children[0].src = question;
				label.children[0].src = question;}, 1000);
				score -= 1;
				moves += 1;
		}
		open_image = null;
		open_input = null;
		open_index = null;
		open_label = null;
	}

	else if (open_index !== index) {
		moves += 1;
		open_input = input;
		open_label = label;
		open_index = index;
		open_image = imagesrc;
	}

	document.getElementById('match').innerHTML = matched;
	document.getElementById('moves').innerHTML = moves;
	document.getElementById('score').innerHTML = score;
	document.getElementById('remaining').innerHTML = remainining;
	return;
}
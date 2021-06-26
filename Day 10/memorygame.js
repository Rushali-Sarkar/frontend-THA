let cards = document.querySelectorAll(".card-input");

cards.forEach(function(cards) {
  cards.addEventListener("click", main);
});

let clojure = "./images/clojure.png";
let cpp = "./images/cpp.png";
let css3 = "./images/css3.png";
let elixir = "./images/elixir.png";
let flutter = "./images/flutter.png";
let golang = "./images/golang.png";
let haskell = "./images/haskell.png";
let html5 = "./images/html5.png";
let java = "./images/java.png";
let javascript = "./images/javascript.png";
let julia = "./images/julia.png";
let kotlin = "./images/kotlin.png";
let latex = "./images/latex.png";
let linux = "./images/linux.png";
let python = "./images/python.png";
let rust = "./images/rust.png";
let scala = "./images/scala.png";
let swift = "./images/swift.png";

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
let question = "./images/question.png";

for (var i = 0; i < total_items; i++) {
	var img = new Image();
	img.src = question;
	img.class = "closed";
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

	if (open_image !== null) {

		if (open_image === imagesrc) {
			input.checked = true;
			input.disabled = true;
			open_input.checked = true;
			open_input.disabled = true;
			open_image.class = "matched";
			imagesrc.class = "matched";
			matched += 1;
			moves += 1;
			remaining -= 1;
			score += 10;
		}

		else {
			setTimeout(function(){
				store_open_label.children[0].src = question;
				label.children[0].src = question;}, 1000);
			open_image.class = "closed";
			imagesrc.class = "closed";
			score -= 1;
			moves += 1;
		}
		open_image = null;
		open_input = null;
		open_index = null;
		open_label = null;
	}

	else {
		moves += 1;
		open_input = input;
		open_label = label;
		open_index = index;
		open_image = imagesrc;
	}

	document.getElementById('match').innerHTML = matched;
	document.getElementById('moves').innerHTML = moves;
	document.getElementById('score').innerHTML = score;
	document.getElementById('remaining').innerHTML = remaining;
	return;
}


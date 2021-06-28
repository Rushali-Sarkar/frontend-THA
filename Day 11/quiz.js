let selection = document.querySelectorAll(".option");

selection.forEach(function(selection) {
  selection.addEventListener("click", selectoption);
});

let selected_options = [-1 , -1, -1, -1, -1];
let selected_answers = [null, null, null, null, null];
let actual_answers 	 = ["Linus Torvalds", "Formula Translator", "Lady Ada Lovelace", "Global Organization of Oriented Group Language of Earth", "Guido Van Rossum"];
let questions 		 = ["Who created Linux ?", "What is the full form of FORTRAN ?", "Who was world's first programmer?", "What is the full form of Google?", "Who created Python?"];
let option1 		 = ["Steve Jobs", "Formulator Transfer", "Lady Ada Lovelace", "Global Organization of Orientation of Group Language of Earth", "Gayle Laakman Mcdowell"];
let option2          = ["Bill Gates", "Formula Translator", "Charles Babbage", "Global Organization of Oriented Group Language of Earth", "Brian W. Kernighan"];
let option3          = ["Linus Torvalds", "Formula Transfer", "Grace Hoper", "Global Orientation of Oganizaing Group Language of Earth", "Dennis Ritchie"];
let option4          = ["Elon Musk", "Formulator Translator", "Donald Knuth", "Globally Organizing Orientation Group Language of Earth", "Guido Van Rossum"];

let previous_page = -1;
let current_page  = 0;
let next_page     = 1;

function selectoption(event) {
	let divId = event.target.id;
	if (divId === "first" || divId === "option1" || divId === "option-1") {
		divId = "first";
	}
	else if (divId === "second" || divId === "option2" || divId === "option-2") {
		divId = "second";
	}
	else if (divId === "third" || divId === "option3" || divId === "option-3") {
		divId = "third";
	}
	else if (divId === "third" || divId === "option4" || divId === "option-4") {
		divId = "fourth";
	}
	let children = document.getElementById(divId).children;
	children[0].checked = true;
	let optionselected = children[1].id;
	if (optionselected === "option1") {
		selected_answers[current_page] = option1[current_page]; 
		selected_options[current_page] = 1;
	}
	else if (optionselected === "option2") {
		selected_answers[current_page] = option2[current_page]; 
		selected_options[current_page] = 2;
	}
	else if (optionselected === "option3") {
		selected_answers[current_page] = option3[current_page]; 
		selected_options[current_page] = 3;
	}
	else if (optionselected === "option4") {
		selected_answers[current_page] = option4[current_page]; 
		selected_options[current_page] = 4;
	}
	return;
}

function clearselection() {
	selected_answers[current_page] = null;
	selected_options[current_page] = -1;
	document.getElementById('option-1').checked = false;
	document.getElementById('option-2').checked = false;
	document.getElementById('option-3').checked = false;
	document.getElementById('option-4').checked = false;
	return;
}

function getpreviousquestion() {
	if (previous_page === -1) 
		return;
	current_page = previous_page;
	next_page = current_page + 1;
	previous_page = current_page - 1;

	if (selected_options[current_page] === -1) {
		document.getElementById('option-1').checked = false;
		document.getElementById('option-2').checked = false;
		document.getElementById('option-3').checked = false;
		document.getElementById('option-4').checked = false;
	}

	else if (selected_options[current_page] === 1) {
		document.getElementById('option-1').checked = true;
	}

	else if (selected_options[current_page] === 2) {
		document.getElementById('option-2').checked = true;
	}

	else if (selected_options[current_page] === 3) {
		document.getElementById('option-3').checked = true;
	}

	else if (selected_options[current_page] === 4) {
		document.getElementById('option-4').checked = true;
	}

	document.getElementById('question-text').innerHTML = String(current_page + 1) + ". " + questions[current_page];
	document.getElementById('option1').innerHTML = option1[current_page];
	document.getElementById('option2').innerHTML = option2[current_page];
	document.getElementById('option3').innerHTML = option3[current_page];
	document.getElementById('option4').innerHTML = option4[current_page];
	return;
}

function getnextquestion() {
	if (next_page === 5)
		return;
	current_page = next_page;
	next_page = current_page + 1;
	previous_page = current_page - 1;

	if (selected_options[current_page] === -1) {
		document.getElementById('option-1').checked = false;
		document.getElementById('option-2').checked = false;
		document.getElementById('option-3').checked = false;
		document.getElementById('option-4').checked = false;
	}

	else if (selected_options[current_page] === 1) {
		document.getElementById('option-1').checked = true;
	}

	else if (selected_options[current_page] === 2) {
		document.getElementById('option-2').checked = true;
	}

	else if (selected_options[current_page] === 3) {
		document.getElementById('option-3').checked = true;
	}

	else if (selected_options[current_page] === 4) {
		document.getElementById('option-4').checked = true;
	}

	document.getElementById('question-text').innerHTML = String(current_page + 1) + ". " + questions[current_page];
	document.getElementById('option1').innerHTML = option1[current_page];
	document.getElementById('option2').innerHTML = option2[current_page];
	document.getElementById('option3').innerHTML = option3[current_page];
	document.getElementById('option4').innerHTML = option4[current_page];
	return;
}

function getscore() {
	let score = 0;
	for (var i = 0; i < 5; i++) {
		if (selected_answers[i] === actual_answers[i])
			score += 1;
	}

	var thankyou = "Thank you, for taking the Quiz.<br>";
	var answers = "You have given " + String(score) + "/5 correct answers.<br>";
	var yourscore = "Your Score is: " + String((score * 10) - ((5 - score) * 5)) + ".<br>";
	var correctanswers = "The answer key is: <br>";
	var question1 = "1. " + actual_answers[0] + "<br>"; 
	var question2 = "2. " + actual_answers[1] + "<br>";
	var question3 = "3. " + actual_answers[2] + "<br>";
	var question4 = "4. " + actual_answers[3] + "<br>";
	var question5 = "5. " + actual_answers[4] + "<br>";
	var string = thankyou + answers + yourscore + correctanswers + question1 + question2 + question3 + question4 + question5; 

	document.getElementById('question').innerHTML = string;
	document.getElementById('options').style.display = "none";
	document.getElementById('navigation').style.display = "none";
	document.getElementById('submit-button').style.display = "none";
	return;
}
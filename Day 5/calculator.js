console.clear();
const buttons = document.querySelectorAll("button");
const display = document.querySelector("#input-display");
buttons.forEach(function(button) {
  button.addEventListener("click", calculateExpression);
});
function calculateExpression(event) {
  const button_value = event.target.value;
  if (button_value === "clear_one") {
  	var expression = display.value;
  	var length = expression.length;
  	if (length !== 0) {
  		display.value = expression.substr(0, length - 1);
  	}
  }
  else if (button_value === "=") {
    if (display.value !== "") {
    	var expression = display.value;
    	if (expression.includes("√")) {
    	   var number = expression.substr(1, (expression.length));
    	   display.value = Math.sqrt(number);
    	}
    	else if (expression.includes("%")) {
    		var operator_index = expression.indexOf("%");
    		length = expression.length;
    		var number1 = expression.substr(0, operator_index);
    		var number2 = expression.substr(operator_index + 1, length);
    		display.value = number1 % number2;
    	}
    	else if (expression.includes("^")) {
    		var operator_index = expression.indexOf("^");
    		length = expression. length;
    		var number1 = expression.substr(0, operator_index);
    		var number2 = expression.substr(operator_index + 1, length);
    		display.value = Math.pow(number1, number2);
    	}
    	else {
    		display.value = eval(display.value);
    	}
    }
  } 
  else if (button_value === "AC") {
    display.value = "";
  } 
  else {
    display.value += button_value;
    }
}
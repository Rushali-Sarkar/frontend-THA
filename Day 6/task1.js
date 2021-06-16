function is_array(input_data) {
	return Array.isArray(input_data);
}

var first_input = 'w3resource';
var second_input = [1, 2, 4, 0];

document.write(first_input + "<br>");
document.write(is_array(first_input) + "<br>");
document.write(second_input + "<br>");
document.write(is_array(second_input) + "<br>");
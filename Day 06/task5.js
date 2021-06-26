var frequency = 0;
var element = "";
var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

for (var i = 0; i < array.length; i++) {

	var current_element = array[i];
	var current_frequency = 0;

	for (var j = 0; j < array.length; j++) {
		
		if (array[j] === current_element) {
			current_frequency++;
		}

	}
		
	if (current_frequency > frequency) {
		frequency = current_frequency;
		element = current_element;
	}

}



document.write(array + "<br>");
document.write(element + " ( " + frequency + " times ) <br>");

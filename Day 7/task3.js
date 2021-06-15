var student = { name : "David Rayy", class : "VI", rollno : 12 };

function length(student) {
	var size = 0;
	for (var key in student) {
		size++;
	}
	return size;
}

let size = length(student);
document.write("The length of the object student is " + size);
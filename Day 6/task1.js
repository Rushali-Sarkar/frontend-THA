var student =  { name : "David Rayy", class : "VI", rollno : 12  };
let keys = [];
let values = [];
for (var key in student) {
	keys.push(key);
	values.push(student[key]);
}
document.write(keys + "<br>");
document.write(values);


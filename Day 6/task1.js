var person = {firstname: "Geeta", lastname: "Roy", class: "XII", roll: "36"};
let keys = [];
let values = [];
for (var key in person) {
	keys.push(key);
	values.push(person[key]);
}
document.write(keys + "<br>");
document.write(values);


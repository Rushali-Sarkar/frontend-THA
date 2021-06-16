function first(array, size) {
	if (size < 0)
		return [];
	if (array === null)
		return [];
	return array.slice(0, size);
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


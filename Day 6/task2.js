function array_clone(array) {
	return array.slice(0);
}

var first = [1, 2, 4, 0];
var second = [1, 2, [4, 0]];


console.log(first);
console.log(second);
console.log(array_clone(first));
console.log(array_clone(second));

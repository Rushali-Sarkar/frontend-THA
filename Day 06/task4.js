function joinarr(array, joinwith) {
	return array.join(joinwith);
}

var myColor = ["Red", "Green", "White", "Black"];
document.write(joinarr(myColor) + "<br>");
document.write(joinarr(myColor, " ") + "<br>");
document.write(joinarr(myColor, ", ") + "<br>");
document.write(joinarr(myColor, " + ") + "<br>");

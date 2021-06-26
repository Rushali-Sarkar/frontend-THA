let seats = document.querySelectorAll(".seats-input");

seats.forEach(function(seats) {
  seats.addEventListener("click", updatebooked);
});

function updatebooked(event) {
	var inputElements = document.getElementsByTagName("input");
	var labelElements = document.getElementsByTagName("label");
    var count = 0;
    for (var i = 0; i < inputElements.length; i++) {
    	if (inputElements[i].checked === false) {
    		var id = inputElements[i].id;
    		id = id[0].toUpperCase() + id.substring(1, 4) + " " + id.substring(5);
    		labelElements[i].innerHTML = id;
    	}
    	if (inputElements[i].checked === true){
    		labelElements[i].innerHTML = 'Booked';
        	count++;
    	}
	}
	document.getElementById("remaining-number").innerHTML = inputElements.length - count;
    document.getElementById("booked-number").innerHTML = count;
    return;
}
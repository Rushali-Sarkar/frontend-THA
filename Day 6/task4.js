var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 
function printReadingStatus(library) {
	for (i = 0; i < library.length; i++) {
		var book = library[i].book;
		var author = library[i].author;
		var isReading = library[i].readingStatus;
		document.write("Book Name: " + book + "<br>");
		document.write("Author Name: " + author + "<br>");
		if (isReading) {
			document.write("The books is currently been read by someone" + "<br>");
		}
		else {
			document.write("The book is free and can be issued" + "<br>");
		}
	}
}
printReadingStatus(library);
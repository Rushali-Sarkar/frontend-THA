var library = [
{ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

function printLibrary(library) {
	for (i = 0; i < library.length; i++) {
		var title = library[i].title;
		var author = library[i].author;
		var id = library[i].libraryID;
		document.write("Book Name: " + title + "<br>");
		document.write("Author Name: " + author + "<br>");
		document.write("Unique Code: " + id + "<br>");
	}
	document.write("<br>");
	return;
}

document.write("Library Before Sorting: " + "<br>")
printLibrary(library);
library.sort((book1, book2) => {
    return book2.libraryID - book1.libraryID;
});
document.write("Library After Sorting: " + "<br>");
printLibrary(library);
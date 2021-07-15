function getmeme() {
	var image = document.getElementById("meme");
	fetch("https://meme-api.herokuapp.com/gimme")
	.then(meme => meme.json())
	.then(data => image.src = data.url)	
	return;
}
getmeme();



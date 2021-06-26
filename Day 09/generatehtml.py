HTML_FILE = open("./movieseats.html", "r+")

firstline = '\t\t\t\t\t<div class = "column">\n'
fourthline = '\t\t\t\t\t</div>\n'

for counter in range(91,  101):

	secondline = '\t\t\t\t\t\t<input type = "checkbox" id = "seat-' + str(counter) + '"/>\n'
	thirdline =  '\t\t\t\t\t\t<label class = "seats" for = "seat-' + str(counter) + '">Seat ' + str(counter) + ' </label>\n'
	
	HTML_FILE.write(firstline)
	HTML_FILE.write(secondline)
	HTML_FILE.write(thirdline)
	HTML_FILE.write(fourthline)
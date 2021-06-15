HTML_FILE = open("./box.html", "r+")

doctypeline = '<!DOCTYPE html>\n'
htmlopen = '<html lang = "en">\n'
headopen = '\t<head>\n'
meta = '\t\t<meta charset = "UTF-8">\n'
title = '\t\t<title>Box</title>\n'
style = '\t\t<link rel = "stylesheet" href = "./box.css">\n'
headclose = '\t</head>\n'
bodyopen = '\t<body>\n'		
boxwrap = '\t\t<div class = "outer-box">\n'
 
endboxwrap = '\t\t</div>\n'
endbody = '\t</body>\n'
endhtml = '<html>\n'

upline = '\t\t\t<div class = "row">\n'
downline = '\t\t\t</div>\n'


checked = [150, 151, 169, 170, 171, 172, 188, 189, 190, 191, 192, 193, 207, 208, 210, 211, 213, 214, 227, 228, 229, 230, 231, 232, 233, 234, 249, 252, 268, 270, 271, 273, 287, 289, 292, 294]


HTML_FILE.write(doctypeline)
HTML_FILE.write(htmlopen)
HTML_FILE.write(headopen)
HTML_FILE.write(meta)
HTML_FILE.write(title)
HTML_FILE.write(style)
HTML_FILE.write(headclose)
HTML_FILE.write(bodyopen)
HTML_FILE.write(boxwrap)

for counter in range(1,  401):

	if counter == 1:
		HTML_FILE.write(upline)

	firstline = '\t\t\t\t<div class = "box" >\n'
	checkedline = '\t\t\t\t\t<input type = "checkbox" id = "box-' + str(counter) + '" checked/>\n'
	secondline = '\t\t\t\t\t<input type = "checkbox" id = "box-' + str(counter) + '"/>\n'
	thirdline =  '\t\t\t\t\t<label class = "box-label" for = "box-' + str(counter) + '"></label>\n'
	fourthline = '\t\t\t\t</div>\n'
	
	HTML_FILE.write(firstline)
	if counter in checked:
		HTML_FILE.write(checkedline)
	else:
		HTML_FILE.write(secondline)
	HTML_FILE.write(thirdline)
	HTML_FILE.write(fourthline)
	if counter == 400:
		HTML_FILE.write(downline)
	elif counter % 20 == 0:
		HTML_FILE.write(downline)
		HTML_FILE.write(upline)

HTML_FILE.write(endboxwrap)
HTML_FILE.write(endbody)
HTML_FILE.write(endhtml)
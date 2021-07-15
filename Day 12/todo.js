let notes = 0;
function addevent() {
	var text = document.getElementById('input-todo').value;
	if (text === "") {
		return;
	}
	notes += 1;
	var parentelement = document.getElementById('todo-lists');
	var childdiv = document.createElement("div");
	childdiv.className = "each";
	childdiv.id = "note-" + String(notes);
	var childp = document.createElement("p");
	childp.className = "check-item";
	var element = document.createElement("button");
	element.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
	element.className = "delete";
	element.setAttribute("type", "button");
	element.setAttribute("onclick", "deletenote(this.id);")
	element.id = "delete-" + String(notes);
	childp.innerHTML = text;
	var checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	checkbox.className = "checkbox";
	childdiv.appendChild(childp);
	childdiv.append(checkbox);
	childdiv.append(element);
	parentelement.insertBefore(childdiv, parentelement.firstChild);
	document.getElementById('input-todo').value = "";
	return;
}

function deletenote(buttonid) {
	var divId = "note-" + buttonid[7];
	var div = document.getElementById(divId);
	div.parentNode.removeChild(div);
	return;
}
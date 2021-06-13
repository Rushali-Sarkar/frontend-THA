var student =  { name : "David Rayy", class : "VI", rollno : 12  };

function printValues(student) {
  for (var key in student) {
    var value = student[key];
    document.write(key + ": " + value + "<br>");
  }
  return;
}

document.write("The values before deleting Roll no." + "<br>");
printValues(student);
document.write("The values after deleting Roll no." + "<br>");
delete student.rollno;
printValues(student);
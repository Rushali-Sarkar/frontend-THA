const PI = Math.PI;
function Cylinder(height, radius) {
  this.height = height;
  this.radius = radius;
}

Cylinder.prototype.Volume = function () {
  var radius = this.radius;
  var height = this.height;
  return height * PI * radius * radius;
};

var new_cylinder = new Cylinder(8.94560, 3.67549);
document.write("The radius of the Cylinder is: " + new_cylinder.radius.toFixed(4) + "<br>");
document.write("The height of the Cylinder is: " + new_cylinder.height.toFixed(4) + "<br>");
document.write("The Volume of the Cylinder is: ", new_cylinder.Volume().toFixed(4));
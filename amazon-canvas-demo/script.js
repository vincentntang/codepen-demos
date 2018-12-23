var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// Constructor Function (object blueprint)
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "green";
    c.stroke();
    c.fillStyle = "lightgrey";
    c.fill();
  };

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

// var circle = new Circle(200,200, 3,3, 30);
var circleArray = [];

for (var i = 0; i < 100; i++) {
  var radius = 30;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius; // + radius prevents circles spawning on edge
  var dx = (Math.random() - 0.5) * 8;
  var dy = (Math.random() - 0.5) * 8;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate); // recurisvely run
  c.clearRect(0, 0, innerWidth, innerHeight); // erases previously drawn content

  for (var i = 0; i < circleArray.length; i++) {
    // circleArray[i].draw();
    circleArray[i].update();
  }
}
animate();

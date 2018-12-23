var canvas = document.querySelector("canvas");

canvas.width = 1000;
canvas.height = 100;
var c = canvas.getContext("2d");

// Constructor Function (object blueprint)
function Circle(x, y, dx, dy, radius, counter) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.counter = counter;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "white";
    c.stroke();
    c.fillStyle = "white";
    c.fill();
  };

  this.update = function() {
    // If it hits side, change position
    // if (counter == 50) {
    //   this.dx = -this.dx;
    //   counter = 0;
    // }

    // if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
    //   this.dx = -this.dx;
    // }
    // if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
    //   this.dy = -this.dy;
    // }
    if (this.y + this.radius > canvas.height) {
      this.y = 0;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
    // counter++;
  };
}

// var circle = new Circle(200,200, 3,3, 30);
var circleArray = [];

for (var i = 0; i < 50; i++) {
  var radius = 1 + Math.random() * 5;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = 0 - Math.random() * 50; // start at top
  // var y = Math.random() * (innerHeight - radius * 2) + radius; // + radius prevents circles spawning on edge
  var dx = (Math.random() - 0.5) * 2;
  var dy = 0.5 + Math.random() * 0.5; // use gravity
  circleArray.push(new Circle(x, y, dx, dy, radius, 0));
}

function animate() {
  requestAnimationFrame(animate); // recurisvely run
  c.clearRect(0, 0, innerWidth, innerHeight); // erases previously drawn content

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();

var canvas = document.querySelector("canvas");

var canvasWidth = 1000;
canvas.width = canvasWidth;
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
    if (this.y + this.radius > canvas.height) {
      this.y = 0;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
    if (window.innerwidth > canvasWidth) {
      canvasWidth = window.innerWidth;
    } else {
      canvasWidth = 1000;
    }
  };
}

// Initialize array to store snow objects
var circleArray = [];

// Initialize objects with constructor
for (var i = 0; i < 50; i++) {
  var radius = 1 + Math.random() * 5;
  var x = Math.random() * canvasWidth;
  var y = 0 - Math.random() * 50; // start at top, render some circles off screen
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

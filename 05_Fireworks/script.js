const max_fireworks = 5;
const max_sparks = 50;

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let fireworks = [];

canvas.width = 800;
canvas.height = 800;

// Create Fireworks!
for (let i = 0; i < max_fireworks; i++) {
  let spark = {
    x: Math.random() * 800
  };
  fireworks.push(spark);
}

// Explode!
function explode() {
  fireworks.forEach((firework, index) => {
    ctx.beginPath();
    ctx.rect(firework.x, 20, 10, 100);
    ctx.fillStyle = "red";
    ctx.fill();
  });
  requestAnimationFrame(explode);
}

requestAnimationFrame(explode);
// Reset Fireworks

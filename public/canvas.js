const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

// PARTICLE CONSTRUCTOR FUNCTION
function Particle(x, y, directionX, directionY, size, color) {
  this.x = x;
  this.y = y;
  this.directionX = directionX,
    this.directionY = directionY,
    this.size = size,
    this.color = color;
}
Particle.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
  ctx.fillStyle = this.color;
  ctx.fill();
}

console.log('test');
// UPDATE FUNCTION
Particle.prototype.update = function () {
  if (this.x + this.size > canvas.width || this.x - this.size < 0) {
    this.directionX = -this.directionX;
  }
  if (this.y + this.size > canvas.height || this.y - this.size < 0) {
    this.directionY = -this.directionY;
  }
  this.x += this.directionX;
  this.y += this.directionY;

  this.draw();
}
// CREATE PARTICLE
function init() {
  particleArray = [];
  // CREATE 100 PARTICLES
  for (let i = 0; i < 400; i++) {
    // GENERATE RANDOM VALUES FOR NEW PARTICLE
    let size = Math.random() * 2;
    let x = Math.random() * (innerWidth - size * 2);
    let y = Math.random() * (innerHeight - size * 2);
    let directionX = (Math.random() * .4) - .2;
    let directionY = (Math.random() * .4) - .2;
    let color = 'white';

    // CONSTRUCT NEW PARTICLE BASED ON GENERATED VALUES AND PUSH INTO PARTICLE ARRAY
    particleArray.push(new Particle(x, y, directionX, directionY, size, color));
  }
}

// ANIMATION LOOP
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
  }
}
init();
animate();

window.addEventListener('resize', function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  // init();
})
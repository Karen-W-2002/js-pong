import Ball from './Ball.js'
import Paddle from './Paddle.js'
import Gameloop from './Gameloop.js'

const gameloop = new Gameloop(document.getElementById("game"));


const ball = new Ball(document.getElementById("ball"));
const playerPaddle = new Paddle(document.getElementById("player-paddle"));
const computerPaddle = new Paddle(document.getElementById("computer-paddle"));
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

let lastTime = 0
 
// Game is going to run inside an update loop
// Every single frame will call the update loop
function update(time) {
  const delta = time - lastTime;

  ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()]);
  computerPaddle.update(delta, ball.y);

  const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"));
  document.documentElement.style.setProperty("--hue", hue + delta * 0.01)

  if(isScore()) handleScore();

  lastTime = time;
  window.requestAnimationFrame(update); 
}

function isScore() {
  const rect = ball.rect();
  return rect.right >= window.innerWidth || rect.left <= 0;
}

function handleScore() {
  const rect = ball.rect();
  if(rect.right > window.innerWidth) {
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
  } else if(rect.left < window.innerWidth) {
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
  }
  ball.reset();
  computerPaddle.reset();
}

function resetScore() {
  playerScore.textContent = 0;
  computerScore.textContent = 0;
}

function resetAll() {
  computerPaddle.reset();
  ball.reset();
}

document.addEventListener("mousemove", e=> {
  // Pixel value --> percentage value
  playerPaddle.position = (e.y / innerHeight) * 100;
})

document.getElementById("single-btn").addEventListener('click', function() {
  gameloop.start();
  resetAll();
  window.requestAnimationFrame(update);
})
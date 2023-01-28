import StartMenu from './StartMenu.js'
import PauseMenu from './PauseMenu.js'

export default class Gameloop {
  constructor(game) {
    this.startMenu = new StartMenu(document.getElementById("start-screen"))
    this.game = game;
    this.isPaused = true;
    this.lastTime = 0;
  }

  reset() {
  }

  start() {
    // Displays the game
    this.game.style.display = "initial";

    this.startMenu.hide();
    this.unpause();
  }

  end() {

  }

  pause() {
    this.isPaused = true;
  }

  unpause() {
    this.isPaused = false;
  }

  get isPause() {
    return this.isPaused;
  }
}
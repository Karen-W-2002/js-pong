export default class StartMenu {
  constructor(startMenu) {
    this.startMenu = startMenu;
  }

  hide() {
    this.startMenu.style.display = "none";
  }

  show() {
    this.startMenu.style.display = "initial";
  }
}
import GUI from 'lil-gui';

/**
 * Instantiates our debug UI
 */
export default class Debug {
  constructor() {
    this.active = window.location.hash === '#debug';

    this.gui = this.active && new GUI();
  }
}

import EventEmmitter from './EventEmitter';

/**
 * Sets the initial canvas width and height.
 * If no parent element is passed in, it default to window.innderWidth and window.innerHeight
 */
export default class Sizes extends EventEmmitter {
  /**
   *
   * @param {Node} parent The parent element of the canvas. Defaults to null;
   */
  constructor(parent = null) {
    super();

    // Setup
    if (parent && parent instanceof Node) {
      this.parent = parent;
      this.width = parent.clientWidth;
      this.height = parent.clienthHeight;
    } else {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    }

    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    // Resize event
    this.#hanleResizeEvent();
  }

  /**
   * Triggered during instantiation. Handles resizing events
   */
  #hanleResizeEvent() {
    if (this.parent) {
      this.parent.addEventListener('resize', () => {
        this.width = this.parent.clientWidth;
        this.height = this.parent.clientHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);

        this.trigger('resize');
      });
      return;
    }

    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);

      // Emit resize event
      this.trigger('resize');
    });
  }
}

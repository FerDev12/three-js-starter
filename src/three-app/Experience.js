import { Scene } from 'three';
import Camera from './base/Camera';
import Renderer from './base/Renderer';
import Debug from './utils/Debug';
import Sizes from './utils/Sizes';
import Time from './utils/Time';
import World from './world/World';

let experience = null;

/**
 * Base class for our threejs experience. This class implements the singleton patter.
 */
export default class Experience {
  /**
   *
   * @param {Node} canvas The canvas that three.js will use to draw over
   * @returns The instance of the experience if one exists, if not it creates a new instance.
   */
  constructor(canvas) {
    if (experience) {
      return experience;
    }
    experience = this;

    // Parameters
    this.canvas = canvas;

    // Setup
    this.debug = new Debug();
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new Scene();
  }

  /**
   * Will appropriately resize all objects inside if a resize event is fired
   */
  #resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  /**
   * Will update all elements inside on every requested frame
   */
  #update() {
    this.camera.update();
    this.world.update();
    this.renderer.update();
  }

  /**
   * Call this method after instantiating to begin the experience
   */
  play() {
    this.world = new World();
    this.camera = new Camera();
    this.renderer = new Renderer();

    this.sizes.on('resize', () => this.#resize());
    this.time.on('tick', () => this.#update());
  }
}

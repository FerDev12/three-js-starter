import Environment from '../setup/Environment';
import Torus from './Torus';

/**
 * All of the objects that our scene will be made of
 */
export default class World {
  constructor() {
    // Instantiate world objects
    this.torus = new Torus();
    this.environment = new Environment();
  }

  update() {
    if (this.torus) this.torus.update();
  }
}

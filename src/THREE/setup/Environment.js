import { DirectionalLight } from 'three';
import Experience from '../Experience';

/**
 * Set environment objects such as lights
 */
export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.debug = this.experience.debug;

    this.#setLights();
  }

  #setLights() {
    this.directionalLight = new DirectionalLight(0xffffff, 1);
    this.directionalLight.position.set(1, 2, 3);
    this.scene.add(this.directionalLight);
  }
}

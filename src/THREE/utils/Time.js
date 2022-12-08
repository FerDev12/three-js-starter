import { Clock } from 'three';
import EventEmitter from './EventEmitter';

export default class Time extends EventEmitter {
  constructor() {
    super();

    // Setup;
    this._clock = new Clock();
    this.#tick();
  }

  #tick() {
    this.elapsedTime = this._clock.getElapsedTime();

    // Emit tick event to Experience
    this.trigger('tick');

    window.requestAnimationFrame(() => this.#tick());
  }
}

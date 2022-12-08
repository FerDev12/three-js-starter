import { PerspectiveCamera, Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Experience from '../Experience';

export default class Camera {
  fov = 75;
  aspect;
  near = 0.1;
  far = 100;

  constructor(enableControls = true) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.sizes = this.experience.sizes;
    this.debug = this.experience.debug;

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.addFolder('Camera');
    }

    // Setup
    this.aspect = this.sizes.width / this.sizes.height;

    this.#setInstance();
    this.#setOrbitControls();
  }

  #setInstance() {
    this.instance = new PerspectiveCamera(
      this.fov,
      this.aspect,
      this.near,
      this.far
    );
    this.instance.position.set(0, 0, 3);
    this.scene.add(this.instance);

    // Debug
    const position = {
      /**
       * Prints out camera position;
       * @returns Camera position with regards to origin (0, 0, 0)
       */
      print: () => console.log(this.instance.getWorldPosition(new Vector3())),
    };
    if (this.debug.active) this.debugFolder.add(position, 'print');
  }

  #setOrbitControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = true;
  }

  resize() {
    this.aspect = this.sizes.width / this.sizes.height;
    this.instance.aspect = this.aspect;
    this.instance.updateProjectionMatrix();
  }

  update() {
    this.controls.update();
  }
}

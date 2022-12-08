import { Mesh, MeshNormalMaterial, TorusGeometry } from 'three';
import Experience from '../Experience';

export default class Torus {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.time = this.experience.time;
    this.debug = this.experience.debug;

    if (this.debug.active) {
      this.debugFolder = this.debug.addFolder('Torus');
    }

    this.#setMesh();
  }

  #setMesh() {
    this.geometry = new TorusGeometry(1, 0.5, 32, 32);
    this.material = new MeshNormalMaterial({ wireframe: true });
    this.mesh = new Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

    // Debug
    if (this.debug.active) {
      this.debugFolder.add(this.mesh.position, 'x').min(-3).max(3).step(0.01);
      this.debugFolder.add(this.mesh.position, 'y').min(-3).max(3).step(0.01);
      this.debugFolder.add(this.mesh.position, 'z').min(-3).max(3).step(0.01);
    }
  }

  update() {
    this.mesh.rotation.y = this.time.elapsedTime * 0.3;
  }
}

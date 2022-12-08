import WebGL from './three-app/utils/WebGL';
import Experience from './three-app/Experience';

const canvas = document.querySelector('.three');

if (WebGL.isWebGLAvailable()) {
  const experience = new Experience(canvas);
  experience.play();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById('container').appendChild(warning);
}

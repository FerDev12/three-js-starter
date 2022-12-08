import WebGL from './THREE/utils/WebGL';
import Experience from './THREE/Experience';

const canvas = document.querySelector('.three');

if (WebGL.isWebGLAvailable()) {
  const experience = new Experience(canvas);
  experience.play();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  console.error(warning);
}

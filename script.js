let radius = 15;
let speed = 2;

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const textureGalaxy = new THREE.TextureLoader().load("./assets/galaxy.jpg");
const texturePlanet = new THREE.TextureLoader().load("./assets/planet.jpg");

let sphereGeometry = new THREE.SphereGeometry();
let circleGeometry = new THREE.CircleGeometry();
let materialPlanet = new THREE.MeshBasicMaterial({ map: texturePlanet, side: THREE.DoubleSide });
let materialSun = new THREE.MeshBasicMaterial({ color: 0xDECB3D });
let materialGalaxy = new THREE.MeshBasicMaterial({ map: textureGalaxy, side: THREE.BackSide });


let planet = new THREE.Mesh(sphereGeometry, materialPlanet);
let sun = new THREE.Mesh(sphereGeometry, materialSun);
let galaxy = new THREE.Mesh(sphereGeometry, materialGalaxy);

planet.scale.set(0.6, 0.6, 0.6);
scene.add(planet);

sun.scale.set(3, 3, 3);
scene.add(sun);

galaxy.scale.set(20, 20, 20);
galaxy.rotation.y = Math.PI / 2;
galaxy.rotation.x = Math.PI / 2;
scene.add(galaxy);

camera.position.z = 5;
camera.position.y = -20;
camera.lookAt(0, 0, 0);

function animate() {
    requestAnimationFrame(animate);

    sun.rotation.y += 0.04
    planet.position.x = Math.cos(Date.now() * (speed / 1000)) * radius
    planet.position.y = Math.sin(Date.now() * (speed / 1000)) * radius / 2
    planet.rotation.y += 0.04

    renderer.render(scene, camera);
}
animate();

//******************************************************************************* */

const cameraZSlider = document.getElementById("cameraZ");
const cameraZSpan = document.getElementById("spanCameraZ");
cameraZSlider.addEventListener("input", function () {
    cameraZSpan.textContent = this.value;
    camera.position.z = this.value;
    camera.lookAt(0, 0, 0);
});

const cameraYSlider = document.getElementById("cameraY");
const cameraYSpan = document.getElementById("spanCameraY");
cameraYSlider.addEventListener("input", function () {
    cameraYSpan.textContent = this.value;
    camera.position.y = this.value;
    camera.lookAt(0, 0, 0);
});

const radiusSlider = document.getElementById("radius");
const radiusSpan = document.getElementById("spanRadius");
radiusSlider.addEventListener("input", function () {
    radiusSpan.textContent = this.value;
    radius = this.value;
});

const speedSlider = document.getElementById("speed");
const speedSpan = document.getElementById("spanSpeed");
speedSlider.addEventListener("input", function () {
    speedSpan.textContent = this.value;
    speed = this.value;
});

const flatEarthCheckbox = document.getElementById("flatEarth");
flatEarthCheckbox.addEventListener("change", function () {
    if (this.checked) {
        planet.geometry = circleGeometry;
    } else {
        planet.geometry = sphereGeometry;
    }
});



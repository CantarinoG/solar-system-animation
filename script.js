let cameraZDistance = 5;
let cameraYDistance = -20;
let translationSpeed = 0.002;
let radius = 15;
let flatEarth = false;

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let sphereGeometry = new THREE.SphereGeometry(); //0.6 e 3
let materialPlanet = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
let materialSun = new THREE.MeshBasicMaterial({ color: 0xDECB3D });

let planet = new THREE.Mesh(sphereGeometry, materialPlanet);
let sun = new THREE.Mesh(sphereGeometry, materialSun)

planet.scale.set(0.6, 0.6, 0.6);
scene.add(planet);

sun.scale.set(3, 3, 3);
scene.add(sun);

camera.position.z = 5;
camera.position.y = -20;
camera.lookAt(scene.position);

function animate() {
    requestAnimationFrame(animate);

    sun.rotation.x += 0.1
    planet.position.x = Math.cos(Date.now() * translationSpeed) * radius
    planet.position.y = Math.sin(Date.now() * translationSpeed) * radius / 2
    planet.rotation.x += 0.1

    renderer.render(scene, camera);
}
animate();
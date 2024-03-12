let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const texture = new THREE.TextureLoader().load("./assets/galaxy.jpg");

let sphereGeometry = new THREE.SphereGeometry();
let materialPlanet = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
let materialSun = new THREE.MeshBasicMaterial({ color: 0xDECB3D });
let materialGalaxy = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });


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
camera.lookAt(scene.position);

function animate() {
    requestAnimationFrame(animate);

    sun.rotation.x += 0.1
    planet.position.x = Math.cos(Date.now() * 0.002) * 15
    planet.position.y = Math.sin(Date.now() * 0.002) * 15 / 2
    planet.rotation.x += 0.1

    renderer.render(scene, camera);
}
animate();
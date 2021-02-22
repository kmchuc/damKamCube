import * as THREE from "https://threejs.org/build/three.module.js"
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
//import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

let camera, controls, scene, renderer, mesh;

init();
animate();

function init(){
    //set up camera
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 10);
    camera.position.z = 2;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(devicePixelRatio);
    document.body.appendChild(renderer.domElement);

    //setup new OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', () => renderer.render.dispose());

    //OrbitControl Properties
    //controls.rotateSpeed = 1.0;
    //controls.zoomSpeed = 1.2;
    //controls.panSpeed = 0.8;

    //start scene
    scene = new THREE.Scene();

    //scene backround
    scene.background = new THREE.Color('white');

    //texture for side of cube
    const boxLoader = new THREE.TextureLoader();
    const cubeMaterials = [
        new THREE.MeshBasicMaterial({ map: boxLoader.load('../images/nnn.png'), transparent: true, side: THREE.FrontSide }),
        new THREE.MeshBasicMaterial({ map: boxLoader.load('../images/ddd.png'), transparent: true, side: THREE.FrontSide }),
        new THREE.MeshBasicMaterial({ map: boxLoader.load('../images/aaa1.png'), transparent: true, side: THREE.FrontSide }),
        new THREE.MeshBasicMaterial({ map: boxLoader.load('../images/aaa2.png'), transparent: true, side: THREE.FrontSide }),
        new THREE.MeshBasicMaterial({ map: boxLoader.load('../images/k.png'), transparent: true, side: THREE.FrontSide }),
        new THREE.MeshBasicMaterial({ map: boxLoader.load('../images/mmm.png'), transparent: true, side: THREE.FrontSide }),
    ];

    //geometry
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    
    //mesh
    mesh = new THREE.Mesh(geometry, cubeMaterials);
    scene.add(mesh);
}

function animate(){
    requestAnimationFrame(animate);
    
    mesh.rotation.x -= 0.017;
    mesh.rotation.y -= 0.0065;


    //controls.update();
    renderer.render(scene, camera);
}
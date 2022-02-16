console.log(THREE)
const renderer = new THREE.WebGLRenderer()

const options = {
    targetSelector: '#scene',
    width: 800,
    height: 800,
    backgroundColor: 0x222222
}

renderer.setSize(options.width, options.height)

document.querySelector(
    options.targetSelector
    ).appendChild(renderer.domElement)

const scene = new THREE.Scene()
scene.background = new THREE.Color(
    options.backgroundColor
)
const camera = new THREE.PerspectiveCamera(
    50, options.width / options.height
)

camera.position.z = 5

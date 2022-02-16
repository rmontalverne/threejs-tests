const geometry = new THREE.BoxBufferGeometry()
const material = new THREE.MeshBasicMaterial({color: 0xFFFFFF})
const cube = new THREE.Mesh(
    geometry, material
)

scene.add(cube)


cube.rotation.z = 90

renderer.setAnimationLoop(() => {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    cube.rotation.z += 0.01
    renderer.render(scene, camera)
})

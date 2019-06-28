
function addGLTF(path: string, corner?: string) {
	const base = new Entity()
  
	const baseGLTF = new GLTFShape(path)
	base.addComponent(baseGLTF)
	
	
	let baseTransform = new Transform()
	baseTransform.rotation = Quaternion.Euler(0, 180 , 0)


	baseTransform.position.x = SceneWidth * 16/2
	baseTransform.position.z = SceneWidth * 16/2


	// if (corner == "NE"){
	// 	// baseTransform.position.x = 0//SceneWidth * 16/2
	// 	// baseTransform.position.z = SeneHeight * 16/2
	// } else if (corner == "NO"){
	// 	baseTransform.position.x = SceneWidth * 16/2
	// 	//baseTransform.position.z = SeneHeight * 16/2
	// } else if (corner == "SE"){
	// 	//baseTransform.position.x = 0//SceneWidth * 16/2
	// 	baseTransform.position.z = SeneHeight * 16/2
	// } else if (corner == "SO"){
	// 	baseTransform.position.x = SceneWidth * 16/2
	// 	baseTransform.position.z = SeneHeight * 16/2
	// }

	base.addComponent(baseTransform)
  
	engine.addEntity(base)
  
	return baseGLTF
  }
  
  let SceneWidth = 20
  let SeneHeight = 20

  addGLTF("models/plazaasian-so.glb", "SO")
  addGLTF("models/plazaasian-se.glb", "SE")
  addGLTF("models/plazaasian-no.glb", "NO")
  addGLTF("models/plazaasian-ne.glb", "NE")


//   let refCube = new Entity()
//   refCube.addComponent(new BoxShape())
//   engine.addEntity(refCube)
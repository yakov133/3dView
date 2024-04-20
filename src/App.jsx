import { Canvas } from "@react-three/fiber"
import { useGLTF,Stage, PresentationControls } from "@react-three/drei"

function Modal(props){
  const  { scene } = useGLTF("/gaz_66_shishiga__free.glb") 
  return <primitive object={scene}{...props} />
}



function App() {

  return (
    <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute ",width:"500px",height:"500px"}}>  
      <color attach={"background"} args={["#101010"]} />
      <PresentationControls speed={1.5} global zoom={.5} polar={[-0.9,Math.PI / 4 ]}>
        <Stage environment={"sunset"}>
          <Modal scale={0.01} />
        </Stage>
      </PresentationControls>
    
    </Canvas>   
  )
}

export default App

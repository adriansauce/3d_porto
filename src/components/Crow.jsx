
import { Float, useGLTF } from '@react-three/drei'

const Crow = (props) => {
  const { nodes, materials } = useGLTF('/models/crow.glb')
  return (
    <Float  dispose={null}>
      <group scale={0.1} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0, 0]}
    
        
        // position={[-4, 3, 2]}
      /></group>
    </Float>
  )
}

useGLTF.preload('/models/crow.glb')
export default Crow
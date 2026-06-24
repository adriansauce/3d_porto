import  { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';

export const Target = (props) => {
    // const targetRef = useRef();
    // const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf');
    return <mesh scale={0.1}>
  <boxGeometry />
  <meshStandardMaterial color="white" />
    </mesh>
    useEffect(() => {
        // Set initial position
        if (targetRef.current) {
            targetRef.current.position.set(...props.position);
        }

        // Start GSAP animation
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        }); 
    }, [props.position]);

    // Detect if the device is mobile
    const isMobile = window.innerWidth <= 768;

    return (
        <mesh
            ref={targetRef}
            scale={[0.2, 0.2, 0.2]}
            rotation={isMobile ? [0, 0, Math.PI / 6] : [0, 0, 0]} // Rotate slightly to the left on mobile
        >
            <primitive object={scene} />
        </mesh>
    )
}

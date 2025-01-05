import { PerspectiveCamera, Ring } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import { CanvasLoader } from '../components/CanvasLoader'
// import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import { Target } from '../components/Target'
import Crow from '../components/Crow'
import Cube from '../components/Cube'
import Rings from '../components/Ring'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'

const Hero = () => {
    const ismobile = useMediaQuery({ query: '(max-width: 768px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 768px, max-width: 1024px)' })
    const isSmall = useMediaQuery({ query: '(max-width: 440px)' })
    
    const sizes = calculateSizes(ismobile, isTablet, isSmall)

    // const x = useControls('HackerRoom',
    //     {
    //         positionX: { value: 0, min: -10, max: 10 },
    //         positionY: { value: 0, min: -10, max: 10 },
    //         positionZ: { value: 0, min: -10, max: 10 },
    //         rotationX: { value: 0, min: -10, max: 10 },
    //         rotationY: { value: 0, min: -10, max: 10 },
    //         rotationZ: { value: 0, min: -10, max: 10 },
    //         scale: { value: 1, min: 0.010, max: 2 },
    //         },)
  return (
      <section className='min-h-screen w-full flex flex-col relative '>
          <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
              <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
                Hai, I am Ian <span className='waving-hand'>👋</span>
              </p>
              <p className='hero_tag text-gray_gradient'>
                  This My 3D Portfolio
              </p>
          </div>
          <div className='w-full h-full absolute inset-0'>
                  {/* <Leva /> */}
              <Canvas className='w-full h-full' id='hero_canvas'>
                  <Suspense fallback={<CanvasLoader />}>
                      <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                      <HeroCamera>
                          
                      <HackerRoom
                            scale={sizes.deskScale}
                            position={sizes.deskPosition}
                            rotation={[0, -Math.PI, 0]}
                        //   position={[2, -8, 2]}
                        //   rotation={[0, -Math.PI/2, 0]}
                        //   scale={[0.1]} 
                      />
                      </HeroCamera>
                      <group>
                          <Target position={sizes.targetPosition} />
                          <Crow position={sizes.CrowPosition} />
                          <Cube position={sizes.cubePosition} />
                          <Rings position={sizes.ringPosition} />
                      </group>
                      <ambientLight intensity={1} />
                      <directionalLight intensity={1} position={[10, 10, 10]} />
                  </Suspense>
              </Canvas>
          </div>

          <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
              <a href="#contact">
                  <Button name="Let's Work Together " isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
              </a>
          </div>
    </section>
  )
}

export default Hero
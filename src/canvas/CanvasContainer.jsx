import { Canvas } from '@react-three/fiber'
import React from 'react'
import Phone from './Phone'
import { OrbitControls } from '@react-three/drei'

function CanvasContainer() {
  return (
    <div className="w-full h-full"> 
      <Canvas className="">
        <ambientLight />
        <Phone />
      </Canvas>
    </div>
  )
}

export default CanvasContainer

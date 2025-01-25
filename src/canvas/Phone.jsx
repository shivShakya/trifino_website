import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

export default function Phone(props) {
  const { nodes, materials } = useGLTF('/smartphone.glb')
  const phoneGroupRef = useRef()  // Create a reference to the group

  useEffect(() => {
      gsap.to(phoneGroupRef.current.rotation, {
          scrollTrigger: {
            trigger: ".phone-group",
            start: "top top", 
            end: 'bottom top',
            scrub: true, 
            toggleActions: "restart reverse reverse pause"
          },
          z: degToRad(900), 
          duration: 2,
          ease: "power2.Out", 
          marker: true, 
        });

        gsap.to(phoneGroupRef.current.scale, {
          scrollTrigger: {
            trigger: ".phone-group",
            start: "top top", 
            end: 'bottom top',
            scrub: true, 
            toggleActions: "restart reverse reverse pause"
          },
          z: 1, 
          x: 1,
          y: 1,
          duration: 6,
          ease: "power2.Out", 
          marker: true, 
        });
  }, [])

  return (
    <group {...props} dispose={null}>
      <group ref={phoneGroupRef} className="phone-group" scale={[0.5,0.5,0.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.BlackSmooth} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.BlackSmooth} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.LensViolet} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.LensGreen} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Speaker} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Wallpaper} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Smartphone} />
      </group>
    </group>
  )
}

useGLTF.preload('/smartphone.glb')

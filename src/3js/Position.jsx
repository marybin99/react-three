import React, { useEffect, useRef } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
// import Sphere1 from "./Sphere1";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import planet from "../assets/img/planet.png";

function Position() {
  const ref = useRef(null);

  const texture = useTexture(planet);
  useEffect(() => {
    const count = 50;
    const positions = new Float32Array(count * 5);
    const colors = new Float32Array(count * 32);

    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
      colors[i] = Math.random();
    }
    ref.current.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    ref.current.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  }, []);
  return (
    <>
      <OrbitControls />
      <Stars />
      {/* <mesh ref={ref}>
        <sphereGeometry args={[1, 60, 30]}/>
        <meshStandardMaterial attach="material" map={texture} />
      </mesh> */}
      <points>
        <bufferGeometry ref={ref} />
        <pointsMaterial
          size={0.5}
          vertexColors
          color={"white"}
          map={texture}
          transparent
          alphaMap={texture}
          depthWrite={false}
        />
      </points>
    </>
  );
}

export default Position;

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Sphere1 from "./Sphere1";

function repeatSphere() {
  let arr = [];
  for (let i = 0; i < 50; i++) {
    arr.push(
      <Sphere1
        position={[
          (0.5 - Math.random()) * 50,
          20 + (0.5 - Math.random()) * 50,
          (0.5 - Math.random()) * 50,
        ]}
      />
    );
  }
  return arr;
}

function Layout() {
  return (
    <>
      <Canvas>
        <OrbitControls autoRotate={false} />
        <ambientLight intensity={1} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Stars />
        <Sphere1 position={[0, 0, 0]} />
        {repeatSphere()}
      </Canvas>
    </>
  );
}

export default Layout;

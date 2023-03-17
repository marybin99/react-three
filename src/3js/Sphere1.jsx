import React from "react";
import { useTexture } from "@react-three/drei";
import planet from "../assets/img/p.jpg";
import planet1 from "../assets/img/p1.jpg";
// import earth from "../assets/img/earth.png";

function Sphere1(props) {
  const img = [planet, planet1];
  const randomImg = img[parseInt(Math.random() * img.length)];
  const colors = new Float32Array(10);
  for (let i = 0; i < 10; i++) {
    colors[i] = Math.random();
  }

  const imgMap = useTexture(randomImg);
  return (
    <>
      <mesh {...props}>
        <sphereGeometry args={[1.3, 50, 25]}></sphereGeometry>
        <meshStandardMaterial attach="material" map={imgMap} />
      </mesh>
    </>
  );
}

export default Sphere1;

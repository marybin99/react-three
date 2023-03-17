import React from "react";
import { useTexture } from "@react-three/drei";
import planet from "../assets/img/p.jpg";
import planet1 from "../assets/img/ppp.png";
import planet2 from "../assets/img/planet_1.png";

function Sphere1(props) {
  // const landom = ["planet", "planet1", "planet2"];
  // const randomValue = landom(Math.random() * landom.length);
  // console.log(randomValue);
  // const imgMap = useTexture(randomValue);
  const imgMap = useTexture(planet);
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

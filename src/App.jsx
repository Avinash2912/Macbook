import React from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";

import MacContainer from "./MacContainer";
import { Environment, ScrollControls } from "@react-three/drei";
const App = () => {
  return (
    <div className="w-full h-screen font-['Helvetica_Now_Display']">
      <div className="navbar line pt-10 pb-3 flex justify-center  gap-10 absolute top-0 left-1/2 -translate-x-1/2 ">
        {[
          "iphone",
          "iPad",
          "macbook",
          "watch",
          "airpods",
          "tv&home",
          
          "accessories",
          "support",
        ].map((e) => (
          <a href="#" className=   "text-blue-400  cursor-pointer text-md font-[200] capitalize hover:text-green-900">{e}</a>
        ))}
      </div>
      <div className="absolute text-white flex flex-col items-center top-32 left-1/2 -translate-x-1/2 ">
        <h3 className="text-white masked  text-7xl tracking-tighter font-[700]">
          MacBook Pro .
        </h3>
        <h5 className="text-white text-2xl tracking-tighter font-[400]">
          The Future of Mac is Here
        </h5>
        <p className="text-center w-3/4 text-md">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsum
          illo nostrum ipsam.
        </p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }} >
        <Environment className
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;

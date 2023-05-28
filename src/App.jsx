/* eslint-disable react/no-unknown-property */
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Configuration from "./components/Configuration";
import { CustomizationProvider } from "./contexts/Customization";

function App() {
  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas>
          <color attach="background" args={["#213547"]} />
          <fog attach="fog" args={["#101010", 10, 20]} />
          <Experience />
        </Canvas>
        <Configuration />
      </div>
    </CustomizationProvider>
  );
}

export default App;

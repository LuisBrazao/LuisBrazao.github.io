import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SpaceRunner from "./components/SpaceRunner";
import LostIsland from "./components/LostIsland";
import PyramidScheme from "./components/PyramidScheme";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="body">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pyramid-scheme" element={<PyramidScheme />} />
        <Route path="/space-runner" element={<SpaceRunner />} />
        <Route path="/lost-island" element={<LostIsland />} />
      </Routes>
    </div>
  );
}

export default App;

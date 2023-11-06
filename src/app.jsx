import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Chichiro from "./pages/chichiro";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chichiro" element={<Chichiro />} />
    </Routes>
  );
}

export default App;

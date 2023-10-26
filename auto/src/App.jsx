import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./assets/pages/Landing";
import CarDetail from "./assets/pages/CarDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/:id" element={<CarDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

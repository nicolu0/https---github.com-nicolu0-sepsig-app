import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Login, VitalInput, PageNotFound } from "./pages";
import Visualization from "./pages/Visualization/Visualization";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="vital-input" element={<VitalInput />} />
        <Route path="visualize" element={<Visualization />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

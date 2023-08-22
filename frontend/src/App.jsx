import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Features } from "./pages/features";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { Result } from './pages/result';
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [DeviceData, setDeviceData] = useState({});
  useEffect(() => {
    setDeviceData(JsonData);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Features data={DeviceData.Device}/>}>
          <Route index element={<Features data={DeviceData.Device}/>} />
          <Route path="result" element={<Result />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

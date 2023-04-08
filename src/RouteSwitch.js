import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Credits from "./Credits";

const RouteSwitch = () => {
  const [gameData, setGameData] = useState({
    showInstructions: true,
    showInput: false,
    showLeaderBoard: false
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/credits" element={<Credits />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch
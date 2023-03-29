import React from "react";
import "./styles/_main.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import pages
import Home from "./pages/Home"
import MedicinesPage from "./pages/MedicinesPage"
//import components
import Navbar from "./components/Navbar"


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/medicines" element={<MedicinesPage />} />
      </Routes>
    </Router>
  )
}

export default App

import React from "react";
import "./styles/_main.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import pages
import Home from "./pages/Home"
//import components
import Navbar from "./components/Navbar"


function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

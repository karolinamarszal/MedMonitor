import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import pages
import Home from "./pages/Home"
//import components


function App() {


  return (
    <Router>
      <Home />
    </Router>
  )
}

export default App

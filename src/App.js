import React from "react";
import GlobalStyle from "./globalStyles";
import Navbar from "./Components/Navbar/Navbar";
import Home from './pages/HomePage/Home'
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router"

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
   
      <Routes>
        <Route path="/Products" component={Home} />
      </Routes>
    </Router>
  );
}

export default App;

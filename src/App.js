import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import useLocalStorage from 'use-local-storage';
import Navbar from "./components/navbar/Navbar";

function App() {

  const [theme,setTheme] = useLocalStorage('theme'?'dark':'white');

  const switchTheme = () =>{
    const newTheme = theme === 'light'?'dark':'light';
    setTheme(newTheme);
  }

  return (
    <Router>
      <div className="App" data-theme={theme}>
        <Navbar switchTheme={switchTheme} theme={theme}/>
        <Routes>
          <Route exact path="/" element={<Home theme={theme}/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/projects" element={<Projects/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/experience" element={<Experience/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

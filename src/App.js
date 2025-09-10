import { BrowserRouter, Route, Router, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Project } from "./Components/Project";
import { Contact } from "./Components/Contact";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        <Section/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/index" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Project/>} />
          <Route path="/contact" element={<Contact/>} />

        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;

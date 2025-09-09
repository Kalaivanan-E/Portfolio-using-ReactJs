import { BrowserRouter, Router } from "react-router";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        <Section/>
      </BrowserRouter>
    </div>
  );
}

export default App;

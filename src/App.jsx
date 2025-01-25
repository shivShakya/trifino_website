import './App.css'
import { Routes, Route } from "react-router";
import Home from './Home';
import Project from './util/Project';
import Contact from './util/Contact';

function App() {
  return (
    <>
       <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/project" element={<Project />} />
             <Route path="/contact" element={<Contact />} />
       </Routes>
    </>
  )
}

export default App

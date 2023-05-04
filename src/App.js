import Header from "./My Components/Header";
import Portfolio from "./My Components/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./My Components/Resume";
import Projects from "./My Components/Projects";
import Contact from "./My Components/Contact";
import Footer from "./My Components/Footer"


function App() {
  return (
    <BrowserRouter>
      <Header title={"Personal Portfolio"} />
      <Routes>

        <Route index element={<Portfolio />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );  
}

export default App;

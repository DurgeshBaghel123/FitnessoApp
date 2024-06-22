import "./css/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Blog from "./components/pages/Blog.jsx";
import FreeWorkshop from "./components/pages/FreeWorkshop.jsx"

function App() {
  return (
    <div className="container-fluid  ">
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/freeworkout" element={<FreeWorkshop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

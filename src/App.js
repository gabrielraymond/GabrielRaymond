import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
// import Resume from "./components/Resume";

function App() {
  return (
    <div className="text-center text-white bg-dark">
      <Router>
        <Navbar />
        <Hero />
        <About />
        {/* <Resume /> */}
        <Portfolio />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

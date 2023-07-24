import AboutMe from "./components/AboutMe";
import AbstractFooter from "./components/AbstractFooter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {

  return (
    <div className="bg-[#E5E5E5]">
      {/* <div className="bg-black w-[1400px] h-[1100px] left-[870px] absolute transform rotate-12 z-[1]"></div> */}
      <Navbar />
      <MainContent />
      <AbstractFooter />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

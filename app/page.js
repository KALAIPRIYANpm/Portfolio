import Header from "./components/header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>

    <div id="/" className="scroll-offset">
      <Navbar/>

    </div>

    <div id="home" className="scroll-offset">
<Header/>
    </div>
<div id="about" className="scroll-offset">
  <About />
</div>
<div id="services" className="scroll-offset">
  <Services />
</div>
<div id="work" className="scroll-offset">
  <Projects />
</div>
<div id="contact" className="scroll-offset">
  <Contact />
</div>

    </>
  );
}

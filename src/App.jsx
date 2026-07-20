import Loader from "./components/common/Loader";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Cursor from "./components/common/Cursor";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import Certificates from "./components/certificates/Certificates";
import Services from "./components/services/Services";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scroll3D from "./components/animations/Scroll3D";
function App() {
  return (
    <>

      <Loader />
      <Cursor />
      <Navbar />
      <Scroll3D>
        <Hero />
      </Scroll3D>

      <Scroll3D>
        <About />
      </Scroll3D>

      <Scroll3D>
        <Skills />
      </Scroll3D>

      <Scroll3D>
        <Experience />
      </Scroll3D>

      <Scroll3D>
        <Projects />
      </Scroll3D>

      <Scroll3D>
        <Education />
      </Scroll3D>

      <Scroll3D>
        <Certificates />
      </Scroll3D>

      <Scroll3D>
        <Services />
      </Scroll3D>

      <Scroll3D>
        <Gallery />
      </Scroll3D>

      <Scroll3D>
        <Contact />
      </Scroll3D>
      <Scroll3D>
        <Footer />
      </Scroll3D>
    </>
  );
}

export default App;
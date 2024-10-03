import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience"; // Import the Experience component
import Certifications from "./components/Certifications"; // Import the Certifications component

const App = () => {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Experience /> {/* Experience Section */}
      <Certifications /> {/* New Certifications Section */}
      <ContactForm />
      <Footer />
    </main>
  );
};

export default App;

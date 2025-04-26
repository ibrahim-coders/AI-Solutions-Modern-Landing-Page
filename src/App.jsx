import About from './components/About';
import AdAgencyPackges from './components/AdAgencyPackges';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectShowcase from './components/ProjectShowcase';
import Services from './components/Services';
import Teem from './components/Teem';
import Testmonials from './components/Testmonials';
import Faqs from './components/Faqs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="overflow-hidden ">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProjectShowcase />
      <AdAgencyPackges />
      <Teem />
      <Testmonials />
      <Faqs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;

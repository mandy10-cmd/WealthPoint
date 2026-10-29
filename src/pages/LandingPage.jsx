import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Calculators from '../components/Calculators';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactForm from '../components/ContactForm';
import FindUs from '../components/FindUs';
import LeadPopup from '../components/LeadPopup';
import ServicesMarquee from '../components/ServicesMarquee';
import Footer from '../components/Footer';

const LandingPage = () => {
  const [showCalculators, setShowCalculators] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#calculators') {
        setShowCalculators(true);

        setTimeout(() => {
          const element = document.getElementById('calculators');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    handleHashChange();

    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleCloseCalculators = () => {
    setShowCalculators(false);
    // Remove hash from URL
    window.history.pushState('', document.title, window.location.pathname);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="sticky top-20 z-40">  
  <ServicesMarquee />
</div>
  
      
      <Hero />
      <LeadPopup />
      <Services />
      {showCalculators && <Calculators onClose={handleCloseCalculators} />}
      <WhyChooseUs />
      <ContactForm />
      <About />
      <FindUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
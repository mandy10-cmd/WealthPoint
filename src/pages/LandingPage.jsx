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

  // Listen for hash changes to show/hide calculators
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#calculators') {
        setShowCalculators(true);
        // Scroll to calculators after a small delay to allow render
        setTimeout(() => {
          const element = document.getElementById('calculators');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    // Check on initial load
    handleHashChange();

    // Listen for hash changes
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
      <div className="sticky top-20 z-40">  {/* top = navbar height */}
  <ServicesMarquee />
</div>
  
      
      <Hero />
     
      <About />
      <LeadPopup />
      <Services />
      {showCalculators && <Calculators onClose={handleCloseCalculators} />}
      <WhyChooseUs />
      <ContactForm />
      <FindUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
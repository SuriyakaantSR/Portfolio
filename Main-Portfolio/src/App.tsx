import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showBars, setShowBars] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBars(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {showBars && (
        <div className="fixed inset-0 z-[200] flex pointer-events-none">
          {[6, 5, 4, 3, 2, 1].map((i) => (
            <div
              key={i}
              className="flex-1 h-full bg-[#1f242d]"
              style={{
                animation: `slideDown 0.5s ease-in-out forwards`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      )}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
}

export default App;

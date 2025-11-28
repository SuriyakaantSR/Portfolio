import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Portfolio', 'Services', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-[9%] py-6 flex justify-between items-center transition-all duration-500 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      style={{
        visibility: isVisible ? 'visible' : 'hidden',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1.5s linear, visibility 1.5s linear',
      }}
    >
      <div className="flex justify-between items-center w-full">
        <a
          href="#home"
          className="text-2xl md:text-3xl font-bold text-white hover:text-green-400 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
        >
          Portfolio
        </a>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`text-lg md:text-xl font-medium transition-all duration-500 ${
                  activeSection === item.toLowerCase()
                    ? 'text-[#7cf03d]'
                    : 'text-white hover:text-[#7cf03d]'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.toLowerCase());
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full md:hidden bg-gray-900/98 backdrop-blur-sm">
          <ul className="flex flex-col items-center space-y-4 py-6">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-[#7cf03d]'
                      : 'text-white hover:text-[#7cf03d]'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.toLowerCase());
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

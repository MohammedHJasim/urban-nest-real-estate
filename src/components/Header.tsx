import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/properties' },
    { name: 'Agents', href: '/agents' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/70 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-white/40 backdrop-blur-md'
    }`}
      style={{ WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)' }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-extrabold text-sm tracking-widest">UN</span>
            </div>
            <div>
              <h1 className="text-base font-bold text-navy-700 font-poppins group-hover:text-navy-600 transition-colors">UrbanNest</h1>
              <p className="text-[10px] text-navy-400 -mt-1 font-medium tracking-wide">Realty</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <span
                key={item.name}
                className={`relative px-3 py-1.5 rounded-md font-medium text-sm transition-all duration-200 cursor-pointer
                  ${location.pathname === item.href
                    ? 'text-gold-600'
                    : 'text-navy-600 hover:text-gold-600'}
                `}
                onClick={() => {
                  navigate(item.href);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>{item.name}</span>
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-6 rounded-full transition-all duration-300
                    ${location.pathname === item.href ? 'bg-gold-500 scale-x-100' : 'bg-gold-500 scale-x-0 group-hover:scale-x-100'}`}
                ></span>
              </span>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-1">
            <Button 
              variant="outline" 
              className="border border-navy-200 text-navy-700 hover:bg-navy-50 hover:border-navy-300 font-semibold px-4 py-1.5 rounded-md transition-all duration-200 text-sm"
            >
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold px-4 py-1.5 rounded-md shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-sm">
              List Property
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-1.5 rounded-md hover:bg-navy-50 transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-navy-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
              }`}></span>
              <span className={`bg-navy-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`bg-navy-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
          } bg-white/90 backdrop-blur-md rounded-2xl shadow-md`}
        >
          <nav className="flex flex-col space-y-1 py-2 px-1">
            {navItems.map((item) => (
              <span
                key={item.name}
                className={`px-4 py-3 rounded-lg font-medium text-base transition-all duration-200 cursor-pointer
                  ${location.pathname === item.href
                    ? 'text-gold-600 bg-gold-50'
                    : 'text-navy-700 hover:text-gold-600 hover:bg-navy-50'}
                `}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate(item.href);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {item.name}
              </span>
            ))}
            <div className="flex flex-col space-y-1 pt-1">
              <Button 
                variant="outline" 
                className="border border-navy-200 text-navy-700 hover:bg-navy-50 font-semibold rounded-md py-1 text-sm"
              >
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold rounded-md shadow-md py-1 text-sm">
                List Property
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

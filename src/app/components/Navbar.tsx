import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './common/Button';
import { Typography } from './common/Typography';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Curriculum', path: '/curriculum' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(255,107,157,0.1)] border-b border-white/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-[1320px]">
        <div className="flex items-center justify-between h-[88px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B9D] to-[#A855F7] text-white flex items-center justify-center font-heading text-xl rounded-xl shadow-[0_4px_15px_rgba(255,107,157,0.4)]">
              <Sparkles size={20} />
            </div>
            <Typography variant="h4" className="bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] bg-clip-text text-transparent font-bold text-base md:text-xl">
              Newton School
            </Typography>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#FF6B9D] font-semibold'
                    : 'text-[#6B7280] hover:text-[#A855F7]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="primary" size="sm">Inquire Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 text-[#1F1F1F] p-2 rounded-full hover:bg-[#FDF2F8] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-gradient-to-br from-[#FFFBFE] via-[#FDF2F8] to-[#E9D5FF] z-40 flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xl font-medium tracking-wide ${
                    location.pathname === link.path
                      ? 'bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] bg-clip-text text-transparent font-bold'
                      : 'text-[#1F1F1F]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="mt-4">
                <Button variant="primary" size="lg">Inquire Now</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

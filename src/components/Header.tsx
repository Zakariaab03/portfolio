import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'À Propos', href: '#about' },
    { name: 'Formation', href: '#education' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Projets', href: '#projects' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      // Clear active section when menu is opened
      setActiveSection('');
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      // Update active section when menu is closed
      updateActiveSection();
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMenuOpen]);

  const updateActiveSection = () => {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.id;
      }
    });
    
    setActiveSection(currentSection);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (!isMenuOpen) {
        updateActiveSection();
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const linkVariants = {
    hidden: { 
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    },
    hover: { 
      x: 10,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <header className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? 'bg-gray-900/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}
    `}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <motion.button
            onClick={() => handleLinkClick('#home')}
            className="relative text-2xl font-bold text-white flex items-center gap-1 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">ZA</span>
            <span className="relative z-10 text-blue-400">.</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 
              group-hover:opacity-20 transition-opacity duration-300" />
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.button 
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className={`
                  relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
                  ${activeSection === link.href.substring(1)
                    ? 'text-white bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 
                      bg-blue-400 rounded-full"
                    layoutId="activeSection"
                  />
                )}
              </motion.button>
            ))}
            
            <motion.button
              onClick={() => handleLinkClick('#contact')}
              className={`
                ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 
                text-white rounded-lg shadow-lg transition-all duration-300
                ${activeSection === 'contact'
                  ? 'shadow-blue-500/40'
                  : 'hover:shadow-blue-500/25'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 w-12 h-12 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={false}
              animate={isMenuOpen ? { rotate: 180, scale: 1 } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </motion.div>
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Menu Content */}
              <motion.div 
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-x-4 top-20 bg-gray-900/95 backdrop-blur-lg md:hidden rounded-2xl 
                  border border-white/10 shadow-xl overflow-hidden z-50"
              >
                <nav className="p-4">
                  <div className="space-y-1">
                    {[...navLinks, { name: 'Contact', href: '#contact' }].map((link, index) => (
                      <motion.button 
                        key={link.name}
                        onClick={() => handleLinkClick(link.href)}
                        className={`
                          relative block w-full px-4 py-3 text-lg font-medium rounded-xl 
                          text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300
                          ${link.name === 'Contact' ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 mt-4' : ''}
                        `}
                        variants={linkVariants}
                        whileHover="hover"
                        custom={index}
                      >
                        <span>{link.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
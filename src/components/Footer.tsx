import React from 'react';
import { Github as GitHub, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="text-2xl font-bold text-white flex items-center">
              ZA<span className="text-teal-400">.</span>
            </a>
            <p className="text-gray-400 mt-2">Étudiant en Bachelor DEVOPS FullStack</p>
          </div>
          
          <div className="flex justify-center md:justify-end items-center space-x-6">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abouelazzezakaria@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://gitlab.isima.fr/zaabouelaz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-teal-400 transition-colors"
              aria-label="GitLab"
            >
              <GitHub size={20} />
            </a>
            <a 
              href="#"
              onClick={scrollToTop}
              className="text-gray-400 hover:text-teal-400 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center border-t border-gray-800 pt-8">
          <div className="flex items-center justify-center">
            <Phone size={16} className="text-gray-400 mr-2" />
            <span className="text-gray-400">+33 6 19 52 58 04</span>
          </div>
          
          <div className="flex items-center justify-center">
            <Mail size={16} className="text-gray-400 mr-2" />
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abouelazzezakaria@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors"
            >
              abouelazzezakaria@gmail.com
            </a>
          </div>
          
          <div className="flex items-center justify-center">
            <MapPin size={16} className="text-gray-400 mr-2" />
            <span className="text-gray-400">Lyon, France</span>
          </div>
        </div>
        
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Zakaria Abou El Azze. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
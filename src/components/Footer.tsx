import React from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <img 
              src="/footer_logo.png" 
              alt="Paweł Bachta circular logo" 
              className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg"
            />
            <div>
              <a 
                href="#home" 
                className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text"
              >
                Paweł Bachta
              </a>
              <p className="mt-1 text-gray-400">
                Senior Software Developer
              </p>
              <p className="text-gray-400">
                Java and Spring Boot Specialized
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/pBachta" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-primary-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <GitHub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/paweł-bachta-9065ab125/" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-primary-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:bachta.pawel@gmail.com"
                className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-primary-600 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Paweł Bachta. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Designed and built with passion (and a little help from AI) by Paweł Bachta.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useEffect, useRef } from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowDown, FileDown, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const social = socialRef.current;

    if (title) title.classList.add('animate-fade-in');
    if (subtitle) {
      setTimeout(() => {
        subtitle.classList.add('animate-fade-in');
      }, 300);
    }
    if (social) {
      setTimeout(() => {
        social.classList.add('animate-fade-in');
      }, 600);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-300/20 dark:bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary-300/20 dark:bg-secondary-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 transition-opacity duration-1000 tracking-tight text-gray-900 dark:text-white"
        >
          <span className="inline-block">Hi, I'm</span>{' '}
          <span className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 text-transparent bg-clip-text">
        Paweł Bachta
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-0 transition-opacity duration-1000 text-gray-700 dark:text-gray-300"
        >
          Experienced software developer with expertise in Java and Spring Boot, passionate about building innovative software solutions and learning new technologies.
        </p>
        
        <div 
          ref={socialRef}
          className="flex flex-col items-center space-y-6 mb-12 opacity-0 transition-opacity duration-1000"
        >
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/pBachta" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
              aria-label="GitHub"
            >
              <GitHub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/paweł-bachta-9065ab125/" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex justify-center space-x-4">
            <a 
              href="/cv/Pawel_Bachta_CV_PL.pdf" 
              download
              className="flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FileDown size={20} className="mr-2" />
              Download CV [PL]
            </a>
            <a 
              href="/cv/Pawel_Bachta_CV_EN.pdf" 
              download
              className="flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FileDown size={20} className="mr-2" />
              Download CV [EN]
            </a>
            <a 
              // href="https://blog.pbachta.dev" 
              // target="_blank"
              // rel="noreferrer"
              className="flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <BookOpen size={20} className="mr-2" />
              Visit Blog
              <p className="ml-2 text-gray-400">coming soon</p>
            </a>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="inline-block animate-bounce mt-8 p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
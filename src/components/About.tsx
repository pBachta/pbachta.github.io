import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`transition-all duration-1000 transform ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 text-transparent bg-clip-text">
              About Me
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-lg transform rotate-3 scale-105"></div>
                <img 
                  src="pBachta_dev_profile.jpg" 
                  alt="Professional headshot" 
                  className="relative z-10 rounded-lg shadow-xl w-full object-cover aspect-square"
                />
              </div>
            </div>
            
            <div className="md:col-span-3 space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a <strong>Senior Software Developer</strong> with over 6 years of experience 
                in software development in <strong>Java and Spring Boot</strong>.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey with programming started with a hobbyist writing projects on Arduino, 
                then creating a desktop Java application, next I participated in the Patronage project where in a group 
                of people forming a full-fledged project team we explored working in a web development project, 
                and after that I received a full-time job proposal as a Java developer. I gained experience in 
                Java and Spring Boot application development and climbed the career ladder, and I am currently a 
                Senior Java Developer. I enjoy constantly learning new technologies and expanding my knowledge.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Lately, as a hobby - thanks to AI - I've started to enter new paths I probably wouldn't have had time for, 
                such as creating UIs and complete fullstack applications
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, I'm spending time with my family, and if there's any time left I'm exploring AI, 
                playing around with Home Assistant home automation and currently planning to blog from time to time.
              </p>
              
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="inline-block px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
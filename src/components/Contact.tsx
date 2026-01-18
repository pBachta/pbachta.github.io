import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setFormState({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'pBachtaDev@gmail.com',
      link: 'mailto:pBachtaDev@gmail.com',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'Szczecin, Poland',
      link: 'https://maps.google.com/?q=Szczecin,Poland',
    },
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`transition-all duration-1000 transform ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 text-transparent bg-clip-text">
              Get In Touch
            </span>
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center flex-wrap gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.title === 'Location' ? '_blank' : undefined}
                  rel={info.title === 'Location' ? 'noreferrer' : undefined}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:transform hover:-translate-y-1 hover:shadow-lg w-full md:w-auto flex-grow max-w-xs"
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{info.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{info.content}</p>
                </a>
              ))}
            </div>
            
            {/* // Lets work together section - disabled for now*/}
            {/* <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-8 text-white flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Let's work together</h3>
                  <p className="mb-6 opacity-90">
                    I'm interested in freelance opportunities, especially ambitious or large projects. 
                    However, if you have other requests or questions, don't hesitate to use the form.
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-white/20 rounded-full">
                        <Send size={20} />
                      </div>
                      <span>Ready to start your next project?</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send size={18} className="mr-2" />
                          Send Message
                        </span>
                      )}
                    </button>
                    
                    {submitMessage && (
                      <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg">
                        {submitMessage}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import TestimonialSection from '../components/TestimonialSection';
import { useTabNavigation, TabType } from '../hooks/useTabNavigation';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const { activeTab, handleTabChange } = useTabNavigation('about');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading to ensure all animations start properly
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-indigo-600"
        >
          <svg 
            className="animate-spin h-12 w-12" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            ></circle>
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] gap-6">
          <div>
            <Sidebar />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
              <nav className="bg-white border-b border-gray-100 sticky top-0 z-10">
                <motion.ul 
                  className="flex overflow-x-auto scrollbar-hide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {tabs.map(tab => (
                    <motion.li key={tab.id} className="relative">
                      <button 
                        className={`px-6 py-4 text-base ${
                          activeTab === tab.id 
                            ? 'font-medium text-indigo-600' 
                            : 'text-gray-600 hover:text-indigo-500'
                        } transition-colors duration-200`}
                        onClick={() => handleTabChange(tab.id as TabType)}
                      >
                        <span className="relative z-10">{tab.label}</span>
                        {activeTab === tab.id && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>
              
              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeTab === 'about' && <About />}
                    {activeTab === 'resume' && <Resume />}
                    {activeTab === 'portfolio' && <Portfolio />}
                    {activeTab === 'blog' && <Blog />}
                    {activeTab === 'contact' && <Contact />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;

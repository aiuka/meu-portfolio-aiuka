
import React from 'react';
import Sidebar from '../components/Sidebar';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import { useTabNavigation, TabType } from '../hooks/useTabNavigation';

const Index = () => {
  const { activeTab, handleTabChange } = useTabNavigation('about');

  const renderTabContent = () => {
    switch(activeTab) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] gap-6">
          <div className="animate-fade-in">
            <Sidebar />
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="bg-white shadow-md rounded-xl overflow-hidden">
              <nav className="bg-white border-b sticky top-0 z-10">
                <ul className="flex overflow-x-auto scrollbar-hide">
                  {[
                    { id: 'about', label: 'About' },
                    { id: 'resume', label: 'Resume' },
                    { id: 'portfolio', label: 'Portfolio' },
                    { id: 'blog', label: 'Blog' },
                    { id: 'contact', label: 'Contact' }
                  ].map((tab, index) => (
                    <li key={tab.id}>
                      <button 
                        className={`nav-item relative px-4 py-3 text-sm md:text-base font-medium transition-colors duration-300 ${activeTab === tab.id ? 'text-portfolio-primary-accent' : 'text-gray-700 hover:text-portfolio-primary-accent'}`}
                        onClick={() => handleTabChange(tab.id as TabType)}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {tab.label}
                        {activeTab === tab.id && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portfolio-primary-accent animate-slide-in-right" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <div className="p-6">
                <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
                  {renderTabContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

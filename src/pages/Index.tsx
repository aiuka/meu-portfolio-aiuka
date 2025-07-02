
import React from 'react';
import Sidebar from '../components/Sidebar';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
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
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-portfolio-neutral-50 via-white to-portfolio-accent/10 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] gap-6">
          <div className="animate-fade-in">
            <Sidebar />
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden border border-white/20">
              <nav className="bg-white/90 backdrop-blur-lg border-b border-portfolio-neutral-200/50 sticky top-0 z-10">
                <ul className="flex overflow-x-auto scrollbar-hide">
                  {[
                    { id: 'about', label: 'About' },
                    { id: 'resume', label: 'Resume' },
                    { id: 'portfolio', label: 'Portfolio' },
                    { id: 'contact', label: 'Contact' }
                  ].map((tab, index) => (
                    <li key={tab.id}>
                      <button 
                        className={`nav-item relative px-6 py-4 text-sm md:text-base font-semibold transition-all duration-300 ${activeTab === tab.id ? 'text-portfolio-primary' : 'text-portfolio-neutral-600 hover:text-portfolio-primary'}`}
                        onClick={() => handleTabChange(tab.id as TabType)}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {tab.label}
                        {activeTab === tab.id && (
                          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-primary-light rounded-full animate-slide-in-right" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <div className="p-8">
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

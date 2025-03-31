
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

type TabType = 'about' | 'resume' | 'portfolio' | 'blog' | 'contact';

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>('about');

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] gap-6">
          <div>
            <Sidebar />
          </div>
          
          <div>
            <div className="bg-white shadow-md rounded-xl overflow-hidden">
              <nav className="bg-white border-b">
                <ul className="flex overflow-x-auto scrollbar-hide">
                  <li>
                    <button 
                      className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}
                      onClick={() => handleTabChange('about')}
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button 
                      className={`nav-item ${activeTab === 'resume' ? 'active' : ''}`}
                      onClick={() => handleTabChange('resume')}
                    >
                      Resume
                    </button>
                  </li>
                  <li>
                    <button 
                      className={`nav-item ${activeTab === 'portfolio' ? 'active' : ''}`}
                      onClick={() => handleTabChange('portfolio')}
                    >
                      Portfolio
                    </button>
                  </li>
                  <li>
                    <button 
                      className={`nav-item ${activeTab === 'blog' ? 'active' : ''}`}
                      onClick={() => handleTabChange('blog')}
                    >
                      Blog
                    </button>
                  </li>
                  <li>
                    <button 
                      className={`nav-item ${activeTab === 'contact' ? 'active' : ''}`}
                      onClick={() => handleTabChange('contact')}
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </nav>
              
              <div className="p-6">
                {activeTab === 'about' && <About />}
                {activeTab === 'resume' && <Resume />}
                {activeTab === 'portfolio' && <Portfolio />}
                {activeTab === 'blog' && <Blog />}
                {activeTab === 'contact' && <Contact />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

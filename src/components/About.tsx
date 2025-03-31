
import React from 'react';
import TestimonialSection from './TestimonialSection';

const About = () => {
  return (
    <div className="space-y-12">
      <header>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">About Me</h2>
      </header>

      <section>
        <div className="text-gray-600 space-y-4">
          <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
          <p>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-6">What I'm Doing</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="service-item">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Web Design</h4>
              <p className="text-gray-600">The most modern and high-quality design made at a professional level.</p>
            </div>
          </div>
          
          <div className="service-item">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                <path d="M12 11v6"></path>
                <path d="M8 11v1"></path>
                <path d="M16 11v1"></path>
                <path d="M8 15v2"></path>
                <path d="M16 15v2"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Web Development</h4>
              <p className="text-gray-600">High-quality development of sites at the professional level.</p>
            </div>
          </div>
          
          <div className="service-item">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Mobile Apps</h4>
              <p className="text-gray-600">Professional development of applications for iOS and Android.</p>
            </div>
          </div>
          
          <div className="service-item">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Photography</h4>
              <p className="text-gray-600">I make high-quality photos of any category at a professional level.</p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Clients</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="grayscale hover:grayscale-0 transition-all">
            <img src="https://i.postimg.cc/YqfKyG66/logo-1-color.png" alt="Client logo" className="h-12 object-contain mx-auto" />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all">
            <img src="https://i.postimg.cc/fWm6JtgG/logo-2-color.png" alt="Client logo" className="h-12 object-contain mx-auto" />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all">
            <img src="https://i.postimg.cc/Bb07xpwd/logo-3-color.png" alt="Client logo" className="h-12 object-contain mx-auto" />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all">
            <img src="https://i.postimg.cc/hv1yMmkh/logo-4-color.png" alt="Client logo" className="h-12 object-contain mx-auto" />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all">
            <img src="https://i.postimg.cc/ry1P86Dc/logo-5-color.png" alt="Client logo" className="h-12 object-contain mx-auto" />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all">
            <img src="https://i.postimg.cc/SsWDN8NV/logo-6-color.png" alt="Client logo" className="h-12 object-contain mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

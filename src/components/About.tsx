
import React from 'react';
import { Network, Radio, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="space-y-12">
      <header>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-portfolio-primary to-portfolio-primary-light bg-clip-text text-transparent mb-8">About Me</h2>
      </header>

      <section>
        <div className="text-portfolio-neutral-600 space-y-6 text-lg leading-relaxed">
          <p>I am an experienced Telecommunications and Information Technology engineer with over 15 years of experience in leading companies such as Movicel Telecommunications and Angola Telecom. My expertise lies in the implementation, operation, and maintenance of advanced network infrastructures, working with technologies such as BGP, MPLS, VLANs, and firewalls.</p>
          <p>I have a strong background in leading technical teams, managing SLAs, monitoring service performance, and escalating critical incidents. My approach is driven by operational efficiency and continuous innovation, ensuring secure, stable, and high-performance networks.</p>
          <p>Committed to ongoing development, I continuously expand my skills through certifications and specialized courses in networking, cybersecurity, and project management. My mission is to combine technical expertise with strategic vision to drive technological solutions that add value and transform businesses.</p>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-portfolio-primary to-portfolio-primary-light bg-clip-text text-transparent mb-8">What I'm Doing</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group service-item">
            <div className="service-icon">
              <Network size={24} strokeWidth={2} />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-portfolio-neutral-800 mb-3">Network Engineering</h4>
              <p className="text-portfolio-neutral-600 leading-relaxed">Design, implementation, and optimization of advanced network infrastructures using cutting-edge technologies like BGP, MPLS, VLANs, and firewalls.</p>
            </div>
          </div>
          
          <div className="group service-item">
            <div className="service-icon">
              <Radio size={24} strokeWidth={2} />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-portfolio-neutral-800 mb-3">Telecommunications Solutions</h4>
              <p className="text-portfolio-neutral-600 leading-relaxed">Expert in deploying and maintaining robust telecom networks, ensuring high availability, security, and top-tier performance.</p>
            </div>
          </div>
          
          <div className="group service-item">
            <div className="service-icon">
              <ShieldCheck size={24} strokeWidth={2} />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-portfolio-neutral-800 mb-3">Cybersecurity & Network Security</h4>
              <p className="text-portfolio-neutral-600 leading-relaxed">Protecting networks with advanced security solutions, proactive threat management, and compliance with industry best practices.</p>
            </div>
          </div>
          
          <div className="group service-item">
            <div className="service-icon">
              <Users size={24} strokeWidth={2} />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-portfolio-neutral-800 mb-3">Technical Leadership & Project Management</h4>
              <p className="text-portfolio-neutral-600 leading-relaxed">Leading technical teams, managing SLAs, and delivering high-quality projects with a strategic and results-driven approach.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


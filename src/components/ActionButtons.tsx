
import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="/cv_aiuka_machado.pdf"
        download
        className="inline-flex items-center gap-2 px-6 py-3 bg-portfolio-primary-accent text-white rounded-lg font-medium hover:bg-portfolio-primary-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-primary-accent/25 group"
      >
        <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
        Download CV
      </a>
      
      <a
        href="https://linkedin.com/in/aiukamachado77"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-portfolio-primary-accent border-2 border-portfolio-primary-accent rounded-lg font-medium hover:bg-portfolio-primary-accent hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-primary-accent/25 group"
      >
        Ver LinkedIn
        <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};

export default ActionButtons;

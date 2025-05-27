
import React from 'react';
import { Calendar, Award } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  institution: string;
  date: string;
  description: string;
  icon?: React.ReactNode;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  institution,
  date,
  description,
  icon
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group hover:border-portfolio-primary-accent/30">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-portfolio-primary-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-portfolio-primary-accent/20 transition-colors">
          {icon || <Award className="w-6 h-6 text-portfolio-primary-accent" />}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-portfolio-primary-accent transition-colors">
            {title}
          </h3>
          
          <p className="text-portfolio-primary-accent font-medium mb-2">
            {institution}
          </p>
          
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mb-3">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;

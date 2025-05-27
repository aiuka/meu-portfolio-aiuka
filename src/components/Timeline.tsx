
import React from 'react';
import { Calendar, MapPin, Star, Zap } from 'lucide-react';

interface TimelineItemData {
  position: string;
  company: string;
  period: string;
  location: string;
  skills: string[];
  achievements: string[];
}

interface TimelineProps {
  items: TimelineItemData[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-primary-accent via-blue-400 to-portfolio-primary-accent shadow-lg shadow-blue-500/30"></div>
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex items-start group">
            {/* Timeline Dot */}
            <div className="absolute left-6 w-4 h-4 bg-portfolio-primary-accent rounded-full border-4 border-white shadow-lg shadow-blue-500/50 group-hover:scale-125 transition-transform duration-300 z-10"></div>
            
            {/* Content Card */}
            <div className="ml-16 flex-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group-hover:border-portfolio-primary-accent/30">
                
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    {item.position}
                  </h3>
                  <p className="text-portfolio-primary-accent font-medium mb-2">
                    {item.company}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
                
                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                    <Zap size={14} className="text-portfolio-primary-accent" />
                    Tecnologias Utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-portfolio-primary-accent/10 text-portfolio-primary-accent text-xs rounded-full border border-portfolio-primary-accent/20 hover:bg-portfolio-primary-accent/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                    <Star size={14} className="text-yellow-500" />
                    Principais Conquistas
                  </h4>
                  <ul className="space-y-1">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-portfolio-primary-accent rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

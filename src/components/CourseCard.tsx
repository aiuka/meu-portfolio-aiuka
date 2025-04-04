
import React from 'react';
import { Book } from 'lucide-react';

interface CourseCardProps {
  title: string;
  institution: string;
  year: string;
  description?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  institution, 
  year, 
  description 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
          <Book className="w-5 h-5 text-portfolio-primary-accent" />
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">{institution}</p>
          <p className="text-xs text-gray-500 mb-3">{year}</p>
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

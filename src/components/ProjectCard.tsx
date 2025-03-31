
import React from 'react';
import { Eye } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, category }) => {
  return (
    <div className="portfolio-item">
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg" />
      
      <div className="portfolio-overlay">
        <div className="flex flex-col items-center text-white">
          <div className="bg-white bg-opacity-20 p-3 rounded-full mb-4">
            <Eye size={24} className="text-white" />
          </div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm opacity-80">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

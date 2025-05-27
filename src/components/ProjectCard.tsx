
import React from 'react';
import { Eye } from 'lucide-react';
import { ProjectDetails } from '../hooks/useProjectModal';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  projectDetails: ProjectDetails;
  onClick: (project: ProjectDetails) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  image, 
  title, 
  category, 
  projectDetails, 
  onClick 
}) => {
  const handleClick = () => {
    onClick(projectDetails);
  };

  return (
    <div 
      className="portfolio-item group cursor-pointer transition-transform hover:scale-105"
      onClick={handleClick}
    >
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg" />
      
      <div className="portfolio-overlay group-hover:bg-opacity-70 group-hover:opacity-100">
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


import React from 'react';
import { X } from 'lucide-react';

interface ProjectDetails {
  title: string;
  stack: string;
  duration: string;
  contribution: string;
  impact: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  project: ProjectDetails | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, project, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div className="relative bg-gray-900 rounded-lg max-w-2xl w-full shadow-xl overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800 transition-colors text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6">{project.title}</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-2">Stack Usada</h3>
              <p className="text-gray-100">{project.stack}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-2">Duração</h3>
              <p className="text-gray-100">{project.duration}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-2">Contribuição</h3>
              <p className="text-gray-100">{project.contribution}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-2">Impacto</h3>
              <p className="text-gray-100">{project.impact}</p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

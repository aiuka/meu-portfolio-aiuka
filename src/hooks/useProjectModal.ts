
import { useState } from 'react';

interface ProjectDetails {
  title: string;
  stack: string;
  duration: string;
  contribution: string;
  impact: string;
}

export const useProjectModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  const openModal = (project: ProjectDetails) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return {
    isModalOpen,
    selectedProject,
    openModal,
    closeModal
  };
};

export type { ProjectDetails };

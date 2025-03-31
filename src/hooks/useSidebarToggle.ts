
import { useState } from 'react';

export const useSidebarToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggleSidebar };
};

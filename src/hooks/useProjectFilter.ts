
import { useState } from 'react';

export const useProjectFilter = (initialCategory = 'All') => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const handleFilterChange = (category: string) => {
    setActiveCategory(category);
    setShowMobileFilter(false);
  };

  const toggleMobileFilter = () => {
    setShowMobileFilter(!showMobileFilter);
  };

  return { 
    activeCategory, 
    showMobileFilter, 
    handleFilterChange, 
    toggleMobileFilter 
  };
};


import { useState } from 'react';

export type TabType = 'about' | 'resume' | 'portfolio' | 'blog' | 'contact';

export const useTabNavigation = (initialTab: TabType = 'about') => {
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo(0, 0);
  };

  return { activeTab, handleTabChange };
};

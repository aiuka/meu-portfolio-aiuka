
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const categories = ["All", "Web Design", "Applications", "Web Development"];

const projects = [
  {
    image: 'https://i.postimg.cc/qRHpHMyd/project-1.jpg',
    title: 'Finance',
    category: 'Web Development'
  },
  {
    image: 'https://i.postimg.cc/bNrcM2Wt/project-2.png',
    title: 'Orizon',
    category: 'Web Development'
  },
  {
    image: 'https://i.postimg.cc/jSJVqYsq/project-3.jpg',
    title: 'Fundo',
    category: 'Web Design'
  },
  {
    image: 'https://i.postimg.cc/dtpXxNGb/project-4.png',
    title: 'Brawlhalla',
    category: 'Applications'
  },
  {
    image: 'https://i.postimg.cc/43T0JKLw/project-5.png',
    title: 'DSM.',
    category: 'Web Design'
  },
  {
    image: 'https://i.postimg.cc/qR1DX1kZ/project-6.png',
    title: 'Metaspark',
    category: 'Web Design'
  },
  {
    image: 'https://i.postimg.cc/Kj4q9tjc/project-7.png',
    title: 'Summary',
    category: 'Web Development'
  },
  {
    image: 'https://i.postimg.cc/rw2j4B1w/project-8.jpg',
    title: 'Task Manager',
    category: 'Applications'
  },
  {
    image: 'https://i.postimg.cc/7LxNsSQv/project-9.png',
    title: 'Arrival',
    category: 'Web Development'
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="space-y-12">
      <header>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Portfolio</h2>
      </header>

      <section>
        {/* Desktop filter */}
        <div className="hidden md:flex mb-8 gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeCategory === category 
                  ? 'bg-portfolio-primary-accent text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile filter */}
        <div className="md:hidden mb-6">
          <button
            className="w-full flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
            onClick={() => setShowMobileFilter(!showMobileFilter)}
          >
            <span className="font-medium text-gray-700">
              {activeCategory === "All" ? "Select Category" : activeCategory}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {showMobileFilter && (
            <div className="mt-2 bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-3 text-sm ${
                    activeCategory === category
                      ? 'bg-indigo-50 text-portfolio-primary-accent font-medium'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                  onClick={() => {
                    setActiveCategory(category);
                    setShowMobileFilter(false);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              category={project.category}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

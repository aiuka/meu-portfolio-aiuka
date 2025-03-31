
import React from 'react';

interface BlogCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, category, date, title, excerpt }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <span className="text-portfolio-primary-accent">{category}</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>
        
        <h3 className="text-lg font-medium text-gray-800 mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{excerpt}</p>
      </div>
    </div>
  );
};

export default BlogCard;


import React from 'react';

interface TestimonialCardProps {
  avatar: string;
  name: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatar, name, text }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <h4 className="text-md font-medium text-gray-800">{name}</h4>
      </div>
      <p className="text-sm text-gray-600 line-clamp-4">{text}</p>
    </div>
  );
};

export default TestimonialCard;

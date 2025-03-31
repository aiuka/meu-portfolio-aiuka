
import React from 'react';
import { Testimonial } from '../hooks/useTestimonialModal';

interface TestimonialCardProps {
  testimonial: Testimonial;
  onClick: (testimonial: Testimonial) => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-sm p-6 pt-12 relative cursor-pointer transition-shadow hover:shadow-md"
      onClick={() => onClick(testimonial)}
    >
      <div className="absolute top-0 left-6 transform -translate-y-1/2">
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-sm">
          <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
      </div>
      
      <h4 className="text-lg font-medium text-gray-800 mb-3">{testimonial.name}</h4>
      
      <p className="text-gray-600 line-clamp-4">{testimonial.text}</p>
    </div>
  );
};

export default TestimonialCard;

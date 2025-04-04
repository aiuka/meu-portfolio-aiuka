
import React from 'react';
import { X } from 'lucide-react';
import { Testimonial } from '../hooks/useTestimonialModal';

interface TestimonialModalProps {
  isOpen: boolean;
  testimonial: Testimonial | null;
  onClose: () => void;
}

const TestimonialModal: React.FC<TestimonialModalProps> = ({ isOpen, testimonial, onClose }) => {
  if (!isOpen || !testimonial) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div className="relative bg-white rounded-lg max-w-lg w-full shadow-lg overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="flex flex-col md:flex-row p-6">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <div className="w-20 h-20 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-gray-100">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{testimonial.name}</h3>
            {testimonial.title && (
              <p className="text-sm text-gray-600 mb-2">{testimonial.title}</p>
            )}
            <p className="text-gray-600 text-sm mb-4">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <div className="text-gray-700">
              <p>{testimonial.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialModal;

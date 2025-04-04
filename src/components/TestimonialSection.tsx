
import React from 'react';
import { useTestimonialModal } from '../hooks/useTestimonialModal';
import TestimonialCard from './TestimonialCard';
import TestimonialModal from './TestimonialModal';

const testimonials = [
  {
    avatar: 'https://i.postimg.cc/zGDHfn3G/avatar-1.png',
    name: 'Arlindo Alves',
    title: 'Former CTO of Movicel, Ltda',
    text: 'Richard was hired to create a corporate identity. It\'s modern, clean and with a beautiful design that got a lot of praises from colleagues and visitors. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.'
  },
  {
    avatar: 'https://i.postimg.cc/DwY0yHtx/avatar-2.png',
    name: 'Jessica Miller',
    title: '',
    text: 'Working with Richard has been an absolute pleasure. I was impressed with his attention to detail, his web design skills and his professional approach to our timelines and processes.'
  },
  {
    avatar: 'https://i.postimg.cc/fRFWhX9F/avatar-3.png',
    name: 'Emily Evans',
    title: '',
    text: 'I couldn\'t be happier with the website that Richard created for us. His attention to detail and creativity is unmatched. Our clients frequently compliment the design, and it has significantly improved our brand image.'
  },
  {
    avatar: 'https://i.postimg.cc/zXv1Xv81/avatar-4.png',
    name: 'Henry Williams',
    title: '',
    text: 'I was overwhelmed with the thought of redesigning my online store, but Richard made the process seamless. The site is not only visually appealing but also optimized for conversions. I\'ve seen a 50% increase in traffic since the launch!'
  }
];

const TestimonialSection = () => {
  const { isModalOpen, activeTestimonial, openModal, closeModal } = useTestimonialModal();

  return (
    <section className="my-12">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Testimonials</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index}
            testimonial={testimonial}
            onClick={openModal}
          />
        ))}
      </div>
      
      <TestimonialModal 
        isOpen={isModalOpen}
        testimonial={activeTestimonial}
        onClose={closeModal}
      />
    </section>
  );
};

export default TestimonialSection;

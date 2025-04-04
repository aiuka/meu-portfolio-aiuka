
import { useState } from 'react';

export interface Testimonial {
  avatar: string;
  name: string;
  title?: string;
  text: string;
}

export const useTestimonialModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null);

  const openModal = (testimonial: Testimonial) => {
    setActiveTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, activeTestimonial, openModal, closeModal };
};

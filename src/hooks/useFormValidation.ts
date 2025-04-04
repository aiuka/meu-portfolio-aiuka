
import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'sonner';

interface FormData {
  [key: string]: string;
}

export const useFormValidation = (initialState: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Check if all form fields are valid
    const form = e.target.form;
    if (form) {
      setIsValid(form.checkValidity());
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isValid) {
      setIsSubmitting(true);
      
      // Create mailto URL with form data
      const subject = `Contact from ${formData.fullname}`;
      const body = `Name: ${formData.fullname}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      
      // Log form submission for debugging
      console.log('Form submitted:', formData);
      
      // Open default email client with pre-filled form data
      const mailtoLink = `mailto:aiuka.machado@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, '_blank');
      
      // Show success notification
      toast.success('Message sent successfully! We will get back to you soon.');
      
      // Reset form after submission
      setFormData(initialState);
      setIsValid(false);
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isValid,
    isSubmitting,
    handleInputChange,
    handleSubmit
  };
};

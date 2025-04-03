
import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'sonner';

interface FormData {
  [key: string]: string;
}

export const useFormValidation = (initialState: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [isValid, setIsValid] = useState<boolean>(false);

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
      // Handle the form submission here
      console.log('Form submitted:', formData);
      
      // Show success notification
      toast.success('Message sent successfully! We will get back to you soon.');
      
      // Reset form after submission
      setFormData(initialState);
      setIsValid(false);
    }
  };

  return {
    formData,
    isValid,
    handleInputChange,
    handleSubmit
  };
};

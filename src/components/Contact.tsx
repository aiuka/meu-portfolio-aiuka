
import React from 'react';
import { useFormValidation } from '../hooks/useFormValidation';
import { Send } from 'lucide-react';

const Contact = () => {
  const {
    formData,
    isValid,
    handleInputChange,
    handleSubmit
  } = useFormValidation({
    fullname: '',
    email: '',
    message: ''
  });

  return (
    <div className="space-y-12">
      <header>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact</h2>
      </header>

      <section className="mb-8">
        <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126088.53637624854!2d13.184728972796884!3d-8.838432695000537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d2c7d%3A0x850c1c5c5ecc5a92!2sLuanda%2C%20Angola!5e0!3m2!1sen!2s!4v1712170559270!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            title="Google Map of Luanda, Angola"
          ></iframe>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Form</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!isValid}
              className={`flex items-center gap-2 px-6 py-3 rounded-md text-white ${
                isValid 
                  ? 'bg-portfolio-primary-accent hover:bg-indigo-600' 
                  : 'bg-gray-400 cursor-not-allowed'
              } transition-colors`}
            >
              <Send size={18} />
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;

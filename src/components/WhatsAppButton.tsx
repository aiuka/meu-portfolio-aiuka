
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '+244923676121';
  const message = 'Boa tarde, encontrei o seu portfólio profissional e gostaria de discutir uma possível colaboração.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1ea952] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Contactar via WhatsApp"
    >
      <MessageCircle size={20} className="flex-shrink-0" />
      <span className="font-medium text-sm hidden sm:inline whitespace-nowrap">
        Contactar via WhatsApp
      </span>
    </button>
  );
};

export default WhatsAppButton;

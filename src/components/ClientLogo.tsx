
import React from 'react';

interface ClientLogoProps {
  logo: string;
  alt: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ logo, alt }) => {
  return (
    <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <img src={logo} alt={alt} className="max-h-12 max-w-full" />
    </div>
  );
};

export default ClientLogo;

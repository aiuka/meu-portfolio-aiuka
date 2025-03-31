
import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="service-item">
      <div className="service-icon">
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <div>
        <h4 className="text-lg font-medium text-gray-800 mb-2">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;


import React from 'react';

interface TimelineItemProps {
  title: string;
  period: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, period, description }) => {
  return (
    <div className="timeline-item">
      <h4 className="text-lg font-medium text-gray-800">{title}</h4>
      <p className="text-sm text-portfolio-primary-accent font-medium mb-2">{period}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default TimelineItem;

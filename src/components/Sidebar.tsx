
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp,
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';

const Sidebar = () => {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <aside className="lg:w-80 md:w-72 w-full bg-white shadow-md rounded-xl overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-100 mb-4">
            <img 
              src="https://i.postimg.cc/JzBWVhW4/my-avatar.png" 
              alt="Richard Hanrick" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-xl font-semibold text-gray-800">Richard Hanrick</h1>
          <p className="text-gray-500 mb-4">Web Developer</p>
          
          <button 
            onClick={() => setShowContacts(!showContacts)}
            className="flex items-center gap-2 text-sm font-medium text-portfolio-primary-accent hover:text-indigo-700 transition-colors"
          >
            <span>{showContacts ? 'Hide Contacts' : 'Show Contacts'}</span>
            {showContacts ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>

      {showContacts && (
        <div className="px-6 pb-6">
          <div className="h-px bg-gray-200 my-4"></div>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-portfolio-primary-accent mt-1">
                <Mail size={14} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <a href="mailto:richard@example.com" className="text-sm text-gray-700 hover:text-portfolio-primary-accent">
                  richard@example.com
                </a>
              </div>
            </li>
            
            <li className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-portfolio-primary-accent mt-1">
                <Phone size={14} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <a href="tel:+12133522795" className="text-sm text-gray-700 hover:text-portfolio-primary-accent">
                  +1 (213) 352-2795
                </a>
              </div>
            </li>
            
            <li className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-portfolio-primary-accent mt-1">
                <Calendar size={14} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Birthday</p>
                <p className="text-sm text-gray-700">June 23, 1982</p>
              </div>
            </li>
            
            <li className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-portfolio-primary-accent mt-1">
                <MapPin size={14} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="text-sm text-gray-700">Sacramento, California, USA</p>
              </div>
            </li>
          </ul>
          
          <div className="h-px bg-gray-200 my-4"></div>
          
          <ul className="flex justify-center gap-3">
            <li>
              <a href="#" className="social-link">
                <Facebook size={18} />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <Twitter size={18} />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <Instagram size={18} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;

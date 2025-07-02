
import React from 'react';
import { 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp,
  Linkedin,
  Twitter,
  Instagram
} from 'lucide-react';
import { useSidebarToggle } from '../hooks/useSidebarToggle';
import AnimatedAvatar from './AnimatedAvatar';

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarToggle();

  return (
    <aside className="lg:w-80 md:w-72 w-full bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden transition-all duration-300 border border-white/20">
      <div className="p-6">
        <div className="flex flex-col items-center text-center">
          <AnimatedAvatar 
            src="https://i.postimg.cc/JzBWVhW4/my-avatar.png" 
            alt="Aiuka Machado"
            size="lg"
            className="mb-2"
          />
          
          <p className="text-sm font-semibold text-portfolio-primary mb-3 animate-fade-in">
            Técnico de Redes de Pacotes/Seg Infor
          </p>
          
          <button 
            onClick={toggleSidebar}
            className="flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-2xl bg-gradient-to-r from-portfolio-primary/10 to-portfolio-accent/10 text-portfolio-primary hover:from-portfolio-primary/20 hover:to-portfolio-accent/20 transition-all duration-300 transform hover:scale-105"
            aria-expanded={isOpen}
          >
            <span>{isOpen ? 'Hide Contacts' : 'Show Contacts'}</span>
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>

      <div 
        className={`px-6 pb-6 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-portfolio-neutral-200 to-transparent my-6"></div>
        
        <ul className="space-y-4">
          <li className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-portfolio-primary/20 to-portfolio-accent/20 text-portfolio-primary mt-1">
              <Mail size={14} />
            </div>
            <div>
              <p className="text-xs font-medium text-portfolio-neutral-500">Email</p>
              <a href="mailto:aiuka.machado@gmail.com" className="text-sm font-medium text-portfolio-neutral-700 hover:text-portfolio-primary transition-colors">
                aiuka.machado@gmail.com
              </a>
            </div>
          </li>
          
          <li className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-portfolio-primary/20 to-portfolio-accent/20 text-portfolio-primary mt-1">
              <Phone size={14} />
            </div>
            <div>
              <p className="text-xs font-medium text-portfolio-neutral-500">Phone</p>
              <a href="tel:+244923676121" className="text-sm font-medium text-portfolio-neutral-700 hover:text-portfolio-primary transition-colors">
                +244 923676121
              </a>
            </div>
          </li>
          
          <li className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-portfolio-primary/20 to-portfolio-accent/20 text-portfolio-primary mt-1">
              <Calendar size={14} />
            </div>
            <div>
              <p className="text-xs font-medium text-portfolio-neutral-500">Birthday</p>
              <p className="text-sm font-medium text-portfolio-neutral-700">August 17, 1977</p>
            </div>
          </li>
          
          <li className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-portfolio-primary/20 to-portfolio-accent/20 text-portfolio-primary mt-1">
              <MapPin size={14} />
            </div>
            <div>
              <p className="text-xs font-medium text-portfolio-neutral-500">Location</p>
              <p className="text-sm font-medium text-portfolio-neutral-700">Avenida Fidel De Castro, Belas, Urbanização Boa Vida, Condomínio 3, Casa 3C4, Luanda, Angola</p>
            </div>
          </li>
        </ul>
        
        <div className="h-px bg-gradient-to-r from-transparent via-portfolio-neutral-200 to-transparent my-6"></div>
        
        <ul className="flex justify-center gap-3">
          <li className="animate-fade-in" style={{ animationDelay: '500ms' }}>
            <a href="#" className="social-link hover:scale-110 transition-transform">
              <Linkedin size={18} />
            </a>
          </li>
          <li className="animate-fade-in" style={{ animationDelay: '600ms' }}>
            <a href="#" className="social-link hover:scale-110 transition-transform">
              <Twitter size={18} />
            </a>
          </li>
          <li className="animate-fade-in" style={{ animationDelay: '700ms' }}>
            <a href="#" className="social-link hover:scale-110 transition-transform">
              <Instagram size={18} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

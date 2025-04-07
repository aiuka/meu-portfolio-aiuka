
import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp,
  Facebook,
  Twitter,
  Instagram,
  LinkedinIcon
} from 'lucide-react';
import { useSidebarToggle } from '../hooks/useSidebarToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarToggle();
  const [isHovered, setIsHovered] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  // Trigger animation after initial render to ensure smooth loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.aside 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:w-80 md:w-72 w-full bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100"
    >
      <div className="p-7">
        <div className="flex flex-col items-center text-center">
          {/* Enhanced profile image with circle animation */}
          <div 
            className="relative w-36 h-36 rounded-full overflow-hidden mb-6 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {showAnimation && (
              <motion.div 
                className="absolute inset-0 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
                      rotate: 360
                    }}
                    transition={{ 
                      duration: 2.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a78bfa" />
                      <stop offset="50%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            )}
            
            <motion.div 
              className="absolute inset-0 bg-indigo-100 z-0 rounded-full"
              animate={{ 
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ duration: 0.5 }}
            />
            
            <motion.div
              className="relative z-0 w-full h-full p-1.5"
              animate={isHovered ? { 
                scale: 1.05, 
                y: -3
              } : { 
                scale: 1,
                y: 0
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Avatar className="w-full h-full border-4 border-white shadow-md">
                <AvatarImage 
                  src="/lovable-uploads/d35aee27-2030-428b-a64f-03703a6c90a6.png" 
                  alt="Aiuka Machado"
                  className="w-full h-full object-cover"
                />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
            </motion.div>
          </div>
          
          {/* Improved name display with animation */}
          <motion.h1 
            className="text-2xl font-bold text-gray-800 mb-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Aiuka Machado
          </motion.h1>
          
          {/* Improved role display with gradient and animation */}
          <motion.div
            className="relative mb-5"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text font-medium text-lg">
              IT Tech + Network Admin
            </span>
          </motion.div>
          
          {/* Enhanced button with better animation */}
          <motion.button 
            onClick={toggleSidebar}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <span>{isOpen ? 'Hide Contacts' : 'Show Contacts'}</span>
            {isOpen ? (
              <motion.div
                initial={{ rotate: 0 }} 
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronUp size={18} />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 180 }} 
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={18} />
              </motion.div>
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-7">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="h-px bg-gray-200 my-4"
              />
              
              <motion.ul className="space-y-5">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 mt-1 group-hover:bg-indigo-200 transition-colors">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <a href="mailto:aiuka.machado@gmail.com" className="text-sm text-gray-700 hover:text-indigo-600 transition-colors">
                      aiuka.machado@gmail.com
                    </a>
                  </div>
                </motion.li>
                
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 mt-1 group-hover:bg-indigo-200 transition-colors">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <a href="tel:+244923676121" className="text-sm text-gray-700 hover:text-indigo-600 transition-colors">
                      +244 923676121
                    </a>
                  </div>
                </motion.li>
                
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 mt-1 group-hover:bg-indigo-200 transition-colors">
                    <Calendar size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Birthday</p>
                    <p className="text-sm text-gray-700">August 17, 1977</p>
                  </div>
                </motion.li>
                
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 mt-1 group-hover:bg-indigo-200 transition-colors">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm text-gray-700">Rua Comandante Gika, Edifício Garden Towers, Torre B, 18º andar, Luanda, Angola</p>
                  </div>
                </motion.li>
              </motion.ul>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="h-px bg-gray-200 my-5"
              />
              
              <motion.ul 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="flex justify-center gap-3"
              >
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                    <Facebook size={18} />
                  </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                    <Twitter size={18} />
                  </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                    <Instagram size={18} />
                  </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                    <LinkedinIcon size={18} />
                  </a>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  );
};

export default Sidebar;


import React, { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AnimatedAvatarProps {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  pulseEffect?: boolean;
}

const AnimatedAvatar = ({ 
  src, 
  alt, 
  className,
  size = "lg",
  pulseEffect = true
}: AnimatedAvatarProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-24 w-24",
    xl: "h-32 w-32"
  };

  return (
    <div className={cn(
      "relative flex items-center justify-center transition-all duration-500",
      isLoaded ? "scale-100 opacity-100" : "scale-90 opacity-0",
      className
    )}>
      <div className={cn(
        "rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg",
        pulseEffect && "animate-avatar-pulse",
        sizeClasses[size]
      )}>
        <Avatar className={cn(
          "h-full w-full",
          pulseEffect && isLoaded && "animate-slide-up"
        )}>
          <AvatarImage
            src={src}
            alt={alt}
            className="object-cover"
            onLoad={() => setIsLoaded(true)}
          />
          <AvatarFallback 
            className="bg-indigo-100 text-portfolio-primary-accent"
          >
            {alt.split(' ').map(name => name[0]).join('')}
          </AvatarFallback>
        </Avatar>
      </div>
      
      {pulseEffect && (
        <div className={cn(
          "absolute inset-0 rounded-full border-4 border-indigo-100/50 dark:border-indigo-900/30",
          sizeClasses[size],
          isLoaded ? "animate-ping-slow opacity-100" : "opacity-0"
        )} />
      )}
    </div>
  );
};

export default AnimatedAvatar;


import React, { useEffect, useState } from 'react';
import { Shield, Award, GraduationCap, Code } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useBreakpoint } from '@/hooks/use-mobile';

interface Certification {
  title: string;
  institution: string;
  year: string;
  category: 'security' | 'infrastructure' | 'cloud' | 'development';
}

const certifications: Certification[] = [
  {
    title: 'MCSE',
    institution: 'Damelin, África do Sul',
    year: '1999-2000',
    category: 'infrastructure'
  },
  {
    title: 'Formação em Sistemas e Redes',
    institution: 'TOBE Angola',
    year: '2001-2002',
    category: 'infrastructure'
  },
  {
    title: 'Segurança da Informação',
    institution: 'Synel Industries, Haia, Israel',
    year: '2006',
    category: 'security'
  },
  {
    title: 'Formação ICND',
    institution: 'Multiredes, Luanda',
    year: '2007',
    category: 'infrastructure'
  },
  {
    title: 'Microsoft SQL Server 2005',
    institution: 'NSI Training Technology, Rio de Janeiro',
    year: '2009',
    category: 'development'
  },
  {
    title: 'Certified Ethical Hacker v12',
    institution: 'Koenig',
    year: '2023',
    category: 'security'
  },
  {
    title: 'AWS Cloud Technical Essentials',
    institution: 'AWS',
    year: '2023',
    category: 'cloud'
  },
  {
    title: 'Architecting Solutions on AWS',
    institution: 'AWS',
    year: '2024',
    category: 'cloud'
  },
  {
    title: 'Cybersecurity for Everyone',
    institution: 'University of Maryland',
    year: '2023',
    category: 'security'
  },
  {
    title: 'IBM Cybersecurity Analyst Professional Certificate',
    institution: 'IBM',
    year: '2024',
    category: 'security'
  }
];

const CertificationsCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const breakpoint = useBreakpoint();
  
  // Determine slides per view based on screen size
  const getSlidesPerView = () => {
    switch(breakpoint) {
      case 'mobile':
        return 1;
      case 'tablet':
        return 2;
      case 'laptop':
      case 'desktop':
        return 3;
      default:
        return 1; // Fallback
    }
  };
  
  // Auto-advance the carousel every 2 seconds
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000);

    // Listen for carousel changes
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    return () => {
      clearInterval(interval);
      api?.off("select", onSelect);
    };
  }, [api]);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'security':
        return <Shield className="h-6 w-6" />;
      case 'cloud':
        return <Award className="h-6 w-6" />;
      case 'development':
        return <Code className="h-6 w-6" />;
      default:
        return <GraduationCap className="h-6 w-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'security':
        return 'from-red-50 to-orange-50 border-l-red-400';
      case 'infrastructure':
        return 'from-blue-50 to-indigo-50 border-l-blue-400';
      case 'cloud':
        return 'from-violet-50 to-purple-50 border-l-violet-400';
      case 'development':
        return 'from-green-50 to-emerald-50 border-l-green-400';
      default:
        return 'from-gray-50 to-slate-50 border-l-gray-400';
    }
  };
  
  return (
    <div className="space-y-6 animate-fade-in px-2 sm:px-0">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <GraduationCap className="w-5 h-5 text-portfolio-primary-accent" />
        Certificações e Treinamentos
      </h3>
      
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          slidesToScroll: 1,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {certifications.map((cert, index) => (
            <CarouselItem 
              key={index} 
              className={cn(
                "pl-2 md:pl-4",
                breakpoint === 'mobile' ? 'basis-full' : 
                breakpoint === 'tablet' ? 'basis-1/2' : 
                'basis-1/3'
              )}
            >
              <div className="h-full">
                <Card className={cn(
                  "h-full border-l-4 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300",
                  getCategoryColor(cert.category)
                )}>
                  <CardContent className="p-4 sm:p-6 bg-gradient-to-br h-full flex flex-col">
                    <div className="flex items-start gap-2 sm:gap-3 mb-2">
                      <div className={cn(
                        "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0",
                        cert.category === 'security' ? 'bg-red-100 text-red-600' :
                        cert.category === 'infrastructure' ? 'bg-blue-100 text-blue-600' :
                        cert.category === 'cloud' ? 'bg-violet-100 text-violet-600' : 
                        'bg-green-100 text-green-600'
                      )}>
                        {getCategoryIcon(cert.category)}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-medium text-gray-800">{cert.title}</h3>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <p className="text-xs sm:text-sm text-gray-600">{cert.institution}</p>
                      <p className="text-xs font-medium text-gray-500 mt-1">{cert.year}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex items-center justify-center mt-4 gap-1">
          {certifications.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                current === index 
                  ? "bg-portfolio-primary-accent w-4" 
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="hidden md:flex">
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </div>
      </Carousel>
    </div>
  );
};

export default CertificationsCarousel;

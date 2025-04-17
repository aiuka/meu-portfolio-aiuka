import React from 'react';
import { Shield, Award, GraduationCap, Code } from 'lucide-react';
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
  const breakpoint = useBreakpoint();
  
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'security':
        return <Shield className="h-5 w-5 sm:h-6 sm:w-6" />;
      case 'cloud':
        return <Award className="h-5 w-5 sm:h-6 sm:w-6" />;
      case 'development':
        return <Code className="h-5 w-5 sm:h-6 sm:w-6" />;
      default:
        return <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />;
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
    <div className="space-y-4 animate-fade-in">
      <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
        <GraduationCap className="w-5 h-5 text-portfolio-primary-accent" />
        Certificações e Treinamentos
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {certifications.map((cert, index) => (
          <div key={index} className="h-full">
            <Card className={cn(
              "h-full border-l-4 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300",
              getCategoryColor(cert.category)
            )}>
              <CardContent className="p-3 sm:p-4 bg-gradient-to-br h-full flex flex-col">
                <div className="flex items-start gap-2 mb-2">
                  <div className={cn(
                    "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0",
                    cert.category === 'security' ? 'bg-red-100 text-red-600' :
                    cert.category === 'infrastructure' ? 'bg-blue-100 text-blue-600' :
                    cert.category === 'cloud' ? 'bg-violet-100 text-violet-600' : 
                    'bg-green-100 text-green-600'
                  )}>
                    {getCategoryIcon(cert.category)}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-medium text-gray-800">{cert.title}</h3>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{cert.institution}</p>
                  <p className="text-xs font-medium text-gray-500 mt-1">{cert.year}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsCarousel;

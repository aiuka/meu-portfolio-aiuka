
import React from 'react';
import CourseCard from './CourseCard';
import { GraduationCap } from 'lucide-react';

const courses = [
  {
    title: 'MCSE',
    institution: 'Damelin, África do Sul',
    year: '1999-2000',
    description: 'Microsoft Certified Systems Engineer'
  },
  {
    title: 'Formação em Sistemas e Redes',
    institution: 'TOBE Angola',
    year: '2001-2002',
    description: 'Windows 2000'
  },
  {
    title: 'Certified Ethical Hacker v12',
    institution: 'Koenig',
    year: '2023',
    description: 'Certificação em hacking ético e segurança'
  },
  {
    title: 'AWS Cloud Technical Essentials',
    institution: 'AWS',
    year: '2023',
    description: 'Fundamentos de computação em nuvem AWS'
  },
  {
    title: 'Cybersecurity for Everyone',
    institution: 'University of Maryland',
    year: '2023',
    description: 'Princípios fundamentais de cibersegurança'
  },
  {
    title: 'IBM Cybersecurity Analyst',
    institution: 'IBM',
    year: '2024',
    description: 'Professional Certificate em análise de cibersegurança'
  }
];

const CoursesSection = () => {
  return (
    <section className="my-12">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="w-5 h-5 text-portfolio-primary-accent" />
        <h3 className="text-xl font-semibold text-gray-800">Cursos</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard 
            key={index}
            title={course.title}
            institution={course.institution}
            year={course.year}
            description={course.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;

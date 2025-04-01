
import React from 'react';
import TimelineItem from './TimelineItem';
import SkillBar from './SkillBar';

const education = [
  {
    title: 'Universidade Jean Piaget de Angola',
    period: '2002 - 2007',
    description: 'There I learnt a wide range of topics that are essential to understanding both the theory and practical aspects of computing. This involves programming fundamentals, computer architecture, operating systems, databases, software engineering, problem solving, collaboration and communication soft skills.'
  },
  {
    title: 'New York Academy of Art',
    period: '2006 - 2007',
    description: 'I chose my master degree in technology. There I deepened my knowledge, enhanced my skills in the area and learnt how to increase my career prospects in a competitive job market.'
  },
  {
    title: 'Forest High School (Johannesburg, South Africa)',
    period: '1997 - 1999',
    description: 'There I learnt foundational courses and computer sciences fundamentals. In the institution, I chose my specialization in web-development that involves front-end and back-end technologies, user interface designs and content management systems.'
  }
];

const experience = [
  {
    title: 'Creative director',
    period: '2015 - Present',
    description: 'I can develop and oversee creative concepts for projects and campaigns managing a team of designers, writers, and other creative professionals.'
  },
  {
    title: 'Art director',
    period: '2013 - 2015',
    description: 'I create and develop visual concepts that align with the project\'s goals and objectives, supervising the design process and managing timelines and budgets for design projects.'
  },
  {
    title: 'Web designer',
    period: '2010 - 2013',
    description: 'I create logos, color schemes and typography for a brand\'s identity. Also I develop graphics for websites, social media and digital ads with applications that enhance user experience.'
  }
];

const skills = [
  { name: 'Web Design', percentage: 80 },
  { name: 'Graphic Design', percentage: 70 },
  { name: 'Branding', percentage: 90 },
  { name: 'WordPress', percentage: 50 }
];

const Resume = () => {
  return (
    <div className="space-y-12">
      <header>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Resume</h2>
      </header>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Education</h3>
        </div>
        <div className="space-y-6">
          {education.map((item, index) => (
            <TimelineItem 
              key={index}
              title={item.title}
              period={item.period}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Experience</h3>
        </div>
        <div className="space-y-6">
          {experience.map((item, index) => (
            <TimelineItem 
              key={index}
              title={item.title}
              period={item.period}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-6">My Skills</h3>
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
          {skills.map((skill, index) => (
            <SkillBar 
              key={index}
              name={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;

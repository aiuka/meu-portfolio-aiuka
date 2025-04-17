
import React from 'react';
import TimelineItem from './TimelineItem';
import SkillBar from './SkillBar';
import CertificationsCarousel from './CertificationsCarousel';
import { Globe, Book, HeartPulse, Award } from 'lucide-react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const education = [
  {
    title: 'Universidade Jean Piaget de Angola',
    period: '2001 - 2007',
    description: 'Estudos na área de Tecnologia de Informação, adquirindo conhecimentos teóricos e práticos essenciais em computação, incluindo fundamentos de programação, arquitetura de computadores, sistemas operacionais, bancos de dados, engenharia de software e habilidades de comunicação.'
  },
  {
    title: 'Forest High School (Johannesburg, África do Sul)',
    period: '1997 - 1999',
    description: 'Ensino Médio com foco em ciência da computação e tecnologia. Participou da equipe principal de rugby e basquete. Desenvolveu habilidades fundamentais em tecnologia da informação e sistemas computacionais.'
  }
];

const experience = [
  {
    title: 'Técnico de Planeamento de Pacotes de Redes',
    period: '2017 - Presente',
    description: 'Angola Telecom: Implementação de rede IPMPLS em toda a região norte de Angola. Desenvolvimento de estratégias de interligação e criação de redundância nas redes. Planejamento e dimensionamento dos pacotes de rede para garantir escalabilidade. Configuração e gerenciamento de tecnologias como BGP, FreeRADIUS, VMware ESXi, Zabbix, Grafana e Cacti.'
  },
  {
    title: 'Administrador de Redes Windows / Segurança de Informação',
    period: '2010 - 2014',
    description: 'SOF (Serviços e consultoria de TI): Gerenciamento do parque informático da empresa, assegurando disponibilidade e segurança dos sistemas. Prestação de consultoria em segurança da informação. Administração de servidores Windows. Implementação e gestão do firewall Blue Coat e antivírus McAfee.'
  },
  {
    title: 'Técnico de segurança informática / Chefe adjunto do Dept de Gestão de Risco',
    period: '2005 - 2009',
    description: 'Movicel: Implementação de políticas de segurança corporativas. Administração de sistemas de informação. Identificação de vulnerabilidades em servidores, sistemas e redes. Monitoramento contínuo da segurança. Implementação e gestão de firewalls Checkpoint. Monitoramento físico e gestão de sistemas de CCTV.'
  },
  {
    title: 'Técnico de TIC',
    period: '2001 - 2007',
    description: 'Universidade Piaget de Angola: Suporte técnico aos usuários por meio do helpdesk. Treinamento de colaboradores e técnicos. Manutenção de impressoras. Apoio na estruturação da rede da universidade. Colaboração com a equipe de TI na resolução de problemas.'
  }
];

const skills = [
  { name: 'Administração de Sistemas Windows', percentage: 90 },
  { name: 'Segurança da Informação', percentage: 85 },
  { name: 'Redes IPMPLS', percentage: 90 }, // Changed from 80% to 90%
  { name: 'Ferramentas de Monitoramento (Zabbix, Grafana)', percentage: 75 },
  { name: 'Implementação de Firewalls', percentage: 85 },
  { name: 'Virtualização (VMware)', percentage: 70 }
];

const languages = [
  { 
    name: 'Português',
    type: 'Nativo',
    color: 'bg-emerald-500',
    proficiencies: { 
      listening: 100, 
      reading: 100, 
      writing: 100, 
      speaking: 100,
      interaction: 100
    }
  },
  { 
    name: 'Inglês',
    type: 'Fluente',
    color: 'bg-portfolio-primary-accent',
    proficiencies: { 
      listening: 90, 
      reading: 90, 
      writing: 80, 
      speaking: 90,
      interaction: 90
    }
  }
];

const interests = [
  {
    title: 'Corrida e Observação da Natureza',
    description: 'Tenho paixão por correr ao ar livre e aproveitar a natureza ao meu redor. A corrida me proporciona não apenas bem-estar físico, mas também uma sensação de conexão com o ambiente natural que contribui para meu equilíbrio e tranquilidade.',
    icon: 'running'
  },
  {
    title: 'Leitura de Literatura Medieval',
    description: 'Sou um entusiasta da literatura medieval Russa e Britânica. Através dessas obras, mergulho em mundos fascinantes, cheios de mitos, lendas e personagens marcantes, que me transportam para épocas passadas e despertam minha imaginação.',
    icon: 'books'
  },
  {
    title: 'Prática de Jiu Jitsu Brasileiro e MMA',
    description: 'Apaixonado por artes marciais, pratico Jiu Jitsu Brasileiro e Mixed Martial Arts (MMA). Além de me desafiar fisicamente, essas disciplinas me ensinaram valores como respeito, disciplina e perseverança. Conquistei o título de terceiro lugar no campeonato nacional de BJJ.',
    icon: 'martial-arts'
  },
  {
    title: 'Voluntariado',
    description: 'Dedico parte do meu tempo ao voluntariado na instituição Mizangalas, que apoia crianças de rua com habitação, educação e incentivo à prática de esportes.',
    icon: 'volunteer'
  }
];

const Resume = () => {
  return (
    <div className="space-y-12">
      <header>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Resume</h2>
      </header>

      <section>
        <div className="text-gray-600 space-y-4">
          <p>Profissional com mais de duas décadas na área de Tecnologia de Informação, com habilidades valiosas em TI, segurança de sistemas e gestão de projetos. Possuo conhecimento aprofundado em redes de computadores, configuração de roteadores e switches (Huawei), protocolos de rede e solução de problemas em ambientes de rede complexos.</p>
          <p>Desempenhei papéis como Técnico de Informática, Administrador de Redes, e co-liderei um departamento de Gestão de Risco. Possuo treinamento em HCNA (Huawei Certified Network Associate) e HCNP (Huawei Certified Network Professional), além de diversos cursos em segurança da informação, sistemas Windows, AWS e cibersegurança.</p>
        </div>
      </section>

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

      <section className="animate-fade-in">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-5 h-5 text-portfolio-primary-accent" />
          <h3 className="text-xl font-semibold text-gray-800">Idiomas</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((language, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
              <CardHeader className={`bg-gradient-to-r ${language.name === 'Português' ? 'from-emerald-50 to-teal-50' : 'from-indigo-50 to-blue-50'} pb-3`}>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-medium">{language.name}</CardTitle>
                  <CardDescription className={`${language.name === 'Português' ? 'text-emerald-600' : 'text-portfolio-primary-accent'} font-medium`}>
                    {language.type}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <div className="grid grid-cols-5 gap-2">
                    {Object.entries(language.proficiencies).map(([skill, level], idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div className="w-full h-24 bg-gray-100 rounded-md relative mb-1">
                          <div 
                            className={`absolute bottom-0 w-full ${language.color} rounded-md transition-all duration-500`}
                            style={{ height: `${level}%`, opacity: 0.7 + (level / 300) }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-600 capitalize">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="animate-fade-in">
        <div className="flex items-center gap-3 mb-6">
          <HeartPulse className="w-5 h-5 text-portfolio-primary-accent" />
          <h3 className="text-xl font-semibold text-gray-800">Interesses</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((interest, index) => (
            <Collapsible 
              key={index} 
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <CollapsibleTrigger className="w-full text-left p-4 flex items-center gap-3 focus:outline-none">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  {interest.icon === 'running' && <HeartPulse className="w-5 h-5 text-portfolio-primary-accent" />}
                  {interest.icon === 'books' && <Book className="w-5 h-5 text-portfolio-primary-accent" />}
                  {interest.icon === 'martial-arts' && <Award className="w-5 h-5 text-portfolio-primary-accent" />}
                  {interest.icon === 'volunteer' && <Globe className="w-5 h-5 text-portfolio-primary-accent" />}
                </div>
                <h4 className="font-medium text-gray-800">{interest.title}</h4>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-4 pb-4 pt-1 pl-[3.25rem]">
                  <p className="text-gray-600 text-sm">{interest.description}</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </section>

      <CertificationsCarousel />
    </div>
  );
};

export default Resume;

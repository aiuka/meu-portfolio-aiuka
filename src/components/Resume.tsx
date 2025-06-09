import React from 'react';
import TimelineItem from './TimelineItem';
import SkillBar from './SkillBar';
import Timeline from './Timeline';
import CertificationCard from './CertificationCard';
import CertificationsCarousel from './CertificationsCarousel';
import { Globe, Book, HeartPulse, Award, Briefcase, Shield, Database, Network } from 'lucide-react';
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
    title: 'Bacharelado em Informática de Gestão',
    period: '2001 - Atual',
    description: 'UniPiaget de Angola - Formação completa em gestão de sistemas de informação, incluindo desenvolvimento de software, administração de bancos de dados, gestão de projetos de TI e arquitetura de sistemas empresariais.'
  },
  {
    title: 'Forest High School (Johannesburg, África do Sul)',
    period: '1997 - 1999',
    description: 'Ensino Médio com foco em ciência da computação e tecnologia. Participou da equipe principal de rugby e basquete. Desenvolveu habilidades fundamentais em tecnologia da informação e sistemas computacionais.'
  }
];

const timelineExperience = [
  {
    position: 'Information Technology Specialist / analista de segurança',
    company: 'Angola Telecom E.P.',
    period: '2017 - Presente',
    location: 'Luanda, Angola',
    skills: ['IP/MPLS', 'BGP', 'OSPF', 'Huawei NE40E', 'VLANs', 'IPv6', 'Segurança de Rede'],
    achievements: [
      'Implementação e migração da rede nacional para arquitetura IP/MPLS e DWDM',
      'Redução de 25% nos custos operacionais através da otimização de rotas BGP',
      'Mitigação de mais de 1500 ataques DDoS em larga escala',
      'Gestão de conectividade para mais de 7 milhões de utilizadores'
    ]
  },
  {
    position: 'Consultor Técnico de Redes e Segurança',
    company: 'SOF',
    period: '2013 - 2017',
    location: 'Luanda, Angola',
    skills: ['Firewalls', 'IDS/IPS', 'VLANs', 'Segurança da Informação', 'Administração de Servidores'],
    achievements: [
      'Implementação de políticas de segurança da informação',
      'Configuração e manutenção de dispositivos de segurança',
      'Desenvolvimento de relatórios técnicos para documentação de processos',
      'Redução de incidentes de segurança em 40%'
    ]
  },
  {
    position: 'Técnico de Suporte de Informática / Segurança da Informação',
    company: 'Movicel Telecommunications',
    period: '2005 - 2009',
    location: 'Luanda, Angola',
    skills: ['Firewall', 'Antivírus', 'VPN', 'Controle de Acesso', 'Monitoramento de Rede'],
    achievements: [
      'Responsável adjunto da área de Segurança de Informação',
      'Gestão e controlo das aplicações de monitoramento da rede',
      'Implementação de controle de acesso à internet e wireless',
      'Balanceamento de links para otimização de conectividade'
    ]
  }
];

const certifications = [
  {
    title: 'Cybersecurity for Everyone',
    institution: 'University of Maryland',
    date: '2023',
    description: 'Fundamentos abrangentes de defesa contra ataques cibernéticos, incluindo identificação de ameaças, implementação de medidas de segurança e resposta a incidentes.',
    icon: <Shield className="w-6 h-6 text-portfolio-primary-accent" />
  },
  {
    title: 'Big Data with Spark and Hadoop',
    institution: 'IBM',
    date: '2022',
    description: 'Processamento e análise de grandes volumes de dados utilizando Apache Spark e Hadoop, incluindo técnicas de machine learning e visualização de dados.',
    icon: <Database className="w-6 h-6 text-portfolio-primary-accent" />
  },
  {
    title: 'Advanced Network Security',
    institution: 'Cisco',
    date: '2021',
    description: 'Implementação avançada de segurança em redes corporativas, configuração de firewalls, IDS/IPS e técnicas de prevenção contra ataques.',
    icon: <Network className="w-6 h-6 text-portfolio-primary-accent" />
  },
  {
    title: 'Linux System Administration',
    institution: 'Red Hat',
    date: '2020',
    description: 'Administração completa de sistemas Linux, incluindo gerenciamento de usuários, configuração de serviços e automação de tarefas.',
    icon: <Award className="w-6 h-6 text-portfolio-primary-accent" />
  }
];

const experience = [
  {
    title: 'Information Technology Specialist / analista de segurança',
    period: '2017 - Presente',
    description: 'Angola Telecom E.P.: Configuração e manutenção de redes MPLS para garantir alta disponibilidade e desempenho. Implementação e monitoramento de protocolos de roteamento dinâmico BGP e OSPF. Gerenciamento de redes LAN e WAN, incluindo segmentação de VLANs e suporte a IPv6. Administração de equipamentos Huawei para otimização da infraestrutura de rede. Desenvolvimento e implementação de políticas de segurança da informação para ambientes IP/MPLS.'
  },
  {
    title: 'Consultor Técnico de Redes e Segurança',
    period: '2013 - 2017',
    description: 'SOF: Administração de servidores e redes, com foco em infraestrutura e segurança. Implementação de redes LAN, VLANs, firewalls e controle de acesso. Configuração e manutenção de dispositivos de segurança, como firewalls, sistemas IDS/IPS. Desenvolvimento e implementação de políticas de segurança da informação. Elaboração de relatórios técnicos detalhados para documentação de processos.'
  },
  {
    title: 'Técnico de Suporte de Informática / Segurança da Informação',
    period: '2005 - 2009',
    description: 'Movicel Telecommunications: Responsável adjunto da área de Segurança de Informação. Gestão e controlo das aplicações de monitoramento da rede e segurança da empresa. Administração de Firewall, Antivírus, Controle de acesso à internet, Prevenção de intrusões de rede, Balanceamento de links, VPN, Filtro de conteúdo e Controle de acesso wireless.'
  },
  {
    title: 'Técnico de Manutenção',
    period: '1994 - 1996',
    description: 'Fina Petróleos de Angola (Refinaria de Luanda): Manutenção preventiva e corretiva em equipamentos industriais da refinaria. Monitoramento e diagnóstico de falhas nos sistemas de automação e controle. Colaboração com equipe de engenharia para otimização dos processos de manutenção.'
  }
];

const projects = [
  {
    title: 'Conectividade por Satélite para Comunidades Remotas (Conecta Angola)',
    period: '2025 - Atual',
    description: 'Implementação de conectividade via satélite para inclusão digital em áreas remotas das províncias do Bié e Moxico. O projeto permitiu o funcionamento de serviços de tele-medicina e educação remota em áreas sem cobertura tradicional, contribuindo para o desenvolvimento regional.'
  },
  {
    title: 'Migração e Otimização de Rede IP/MPLS',
    period: '2025 - Atual',
    description: 'Migração da rede nacional para uma arquitetura IP/MPLS e DWDM, aumentando a confiabilidade dos serviços e reduzindo os custos operacionais em 25%.'
  },
  {
    title: 'Iniciativa de Roaming Nacional (Projeto Iluminar Angola)',
    period: '2024 - Atual',
    description: 'Integração inédita entre redes terrestres e satelitais, utilizando o ANGOSAT-2, para garantir roaming nacional contínuo. O projeto impactou diretamente mais de 7 milhões de utilizadores, promovendo acessibilidade e conectividade nas zonas mais remotas do país.'
  },
  {
    title: 'Expansão Nacional da Banda Larga (Projeto NBN)',
    period: '2024 - Atual',
    description: 'Modernização da infraestrutura de banda larga de Angola em parceria com a Huawei, estendendo a conectividade estável para 60% do país. Configuração dos routers Huawei NE40E/NE5000E, reduzindo os custos de trânsito IP em 25% através da otimização de rotas BGP. Mitigação de mais de 1500 ataques DDoS em larga escala.'
  },
  {
    title: 'Otimização da Rede IP/MPLS',
    period: '2017',
    description: 'Otimização da rede com objetivos relacionados a menor atraso, alta taxa de transmissão, diminuição da perda de pacotes e expansão Nacional. Gerenciamento de QoS (Quality of Service) em redes IP.'
  }
];

const skills = [
  { name: 'Redes IP/MPLS', percentage: 95 },
  { name: 'Segurança da Informação', percentage: 90 },
  { name: 'Administração de Sistemas', percentage: 88 },
  { name: 'Protocolos BGP/OSPF', percentage: 92 },
  { name: 'Equipamentos Huawei', percentage: 90 },
  { name: 'Firewalls e IDS/IPS', percentage: 85 },
  { name: 'VMware e Virtualização', percentage: 75 },
  { name: 'Gestão de Projetos', percentage: 80 }
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
  },
  { 
    name: 'Espanhol',
    type: 'Intermediário',
    color: 'bg-orange-500',
    proficiencies: { 
      listening: 70, 
      reading: 75, 
      writing: 65, 
      speaking: 70,
      interaction: 70
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
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Resume</h2>
      </header>

      <section>
        <div className="text-gray-600 dark:text-gray-300 space-y-4">
          <p>Especialista em Tecnologia da Informação com mais de duas décadas de experiência, possuindo habilidades valiosas em TI, segurança de sistemas e gestão de projetos. Conhecimento aprofundado em redes IP/MPLS, configuração de equipamentos Huawei, protocolos de roteamento BGP/OSPF e solução de problemas em ambientes de rede complexos.</p>
          <p>Liderou projetos de grande escala como a Expansão Nacional da Banda Larga e integração de redes terrestres e satelitais (ANGOSAT-2), impactando mais de 7 milhões de utilizadores. Possui certificações em cibersegurança, Big Data com Spark e Hadoop, e especialização em administração de sistemas Linux e Windows.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Educação</h3>
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
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="w-5 h-5 text-portfolio-primary-accent" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Experiência Profissional</h3>
        </div>
        <Timeline items={timelineExperience} />
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-5 h-5 text-portfolio-primary-accent" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Certificações</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              institution={cert.institution}
              date={cert.date}
              description={cert.description}
              icon={cert.icon}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-5 h-5 text-portfolio-primary-accent" />
          <h3 className="text-xl font-semibold text-gray-800">Projetos Principais</h3>
        </div>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <TimelineItem 
              key={index}
              title={project.title}
              period={project.period}
              description={project.description}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Competências Técnicas</h3>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((language, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
              <CardHeader className={`bg-gradient-to-r ${
                language.name === 'Português' ? 'from-emerald-50 to-teal-50' : 
                language.name === 'Inglês' ? 'from-indigo-50 to-blue-50' : 
                'from-orange-50 to-red-50'
              } pb-3`}>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-medium">{language.name}</CardTitle>
                  <CardDescription className={`${
                    language.name === 'Português' ? 'text-emerald-600' : 
                    language.name === 'Inglês' ? 'text-portfolio-primary-accent' : 
                    'text-orange-600'
                  } font-medium`}>
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

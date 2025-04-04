
import React from 'react';
import TimelineItem from './TimelineItem';
import SkillBar from './SkillBar';

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
  { name: 'Redes IPMPLS', percentage: 80 },
  { name: 'Ferramentas de Monitoramento (Zabbix, Grafana)', percentage: 75 },
  { name: 'Implementação de Firewalls', percentage: 85 },
  { name: 'Virtualização (VMware)', percentage: 70 }
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

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Certificações e Treinamentos</h3>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>MCSE - Damelin, África do Sul (1999-2000)</li>
            <li>Formação em Sistemas e Redes (Windows 2000) - TOBE Angola (2001-2002)</li>
            <li>Segurança da Informação - Synel Industries, Haia, Israel (2006)</li>
            <li>Formação ICND (Interconnection Cisco Network Devices) - Multiredes, Luanda (2007)</li>
            <li>Microsoft SQL Server 2005 - NSI Training Technology, Rio de Janeiro (2009)</li>
            <li>Certified Ethical Hacker v12 - Koenig (2023)</li>
            <li>AWS Cloud Technical Essentials (2023)</li>
            <li>Architecting Solutions on AWS (2024)</li>
            <li>Cybersecurity for Everyone - University of Maryland (2023)</li>
            <li>IBM Cybersecurity Analyst Professional Certificate (2024)</li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Idiomas e Interesses</h3>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-4">
            <h4 className="font-medium text-gray-800 mb-2">Idiomas</h4>
            <p className="text-gray-600">Português (nativo), Inglês (fluente: compreensão, leitura, escrita e conversação)</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Interesses</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Corrida e observação da natureza</li>
              <li>Leitura de literatura medieval Russa e Britânica</li>
              <li>Prática de Jiu Jitsu Brasileiro e MMA (título de terceiro lugar no campeonato nacional de BJJ)</li>
              <li>Voluntariado na instituição Mizangalas de apoio a crianças de rua</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;

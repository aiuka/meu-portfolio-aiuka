
import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { useProjectFilter } from '../hooks/useProjectFilter';
import { useProjectModal, ProjectDetails } from '../hooks/useProjectModal';

const categories = ["All", "Development", "Management", "Infrastructure"];

const projects = [
  {
    image: '/assets/projects/system-integration.jpg',
    title: 'System Integration Project',
    category: 'Development',
    details: {
      title: 'Projeto Iluminar Angola',
      stack: 'Huawei NE40E, DWDM, IP/MPLS, BGP, Firewalls',
      duration: 'Janeiro 2024 - atual',
      contribution: 'Implementação de conectividade satélite nacional com ANGOSAT-2',
      impact: 'Mais de 7 milhões de utilizadores conectados em zonas remotas'
    }
  },
  {
    image: '/assets/projects/enterprise-crm.jpg',
    title: 'Enterprise CRM Implementation',
    category: 'Management',
    details: {
      title: 'Implementação CRM Empresarial',
      stack: 'Salesforce, API REST, Microsoft Azure, PowerBI',
      duration: 'Março 2023 - Dezembro 2023',
      contribution: 'Liderança na migração de dados e integração de sistemas legados',
      impact: 'Aumento de 40% na eficiência de vendas e gestão de clientes'
    }
  },
  {
    image: '/assets/projects/network-infrastructure.jpg',
    title: 'Network Infrastructure Upgrade',
    category: 'Infrastructure',
    details: {
      title: 'Modernização de Infraestrutura de Rede',
      stack: 'Cisco Catalyst 9000, Fortinet FortiGate, VMware vSphere',
      duration: 'Junho 2023 - Outubro 2023',
      contribution: 'Arquitetura e implementação de rede de alta disponibilidade',
      impact: 'Redução de 60% no tempo de inatividade e aumento de segurança'
    }
  },
  {
    image: '/assets/projects/custom-erp.jpg',
    title: 'Custom ERP Solution',
    category: 'Development',
    details: {
      title: 'Solução ERP Personalizada',
      stack: 'React, Node.js, PostgreSQL, Docker, Kubernetes',
      duration: 'Setembro 2022 - Maio 2023',
      contribution: 'Desenvolvimento full-stack e arquitetura de microserviços',
      impact: 'Automação de 80% dos processos administrativos da empresa'
    }
  },
  {
    image: '/assets/projects/database-migration.jpg',
    title: 'Database Migration & Optimization',
    category: 'Infrastructure',
    details: {
      title: 'Migração e Otimização de Base de Dados',
      stack: 'Oracle 19c, MongoDB, Redis, Apache Spark',
      duration: 'Fevereiro 2023 - Julho 2023',
      contribution: 'Estratégia de migração zero-downtime e otimização de performance',
      impact: 'Melhoria de 300% na velocidade de consultas e redução de custos'
    }
  },
  {
    image: '/assets/projects/project-management.jpg',
    title: 'Project Management Office Setup',
    category: 'Management',
    details: {
      title: 'Criação do Project Management Office',
      stack: 'Jira, Confluence, MS Project, Agile/Scrum metodologias',
      duration: 'Janeiro 2022 - Dezembro 2022',
      contribution: 'Estruturação de processos PMO e formação de equipas',
      impact: 'Aumento de 50% na taxa de sucesso de projetos e entrega no prazo'
    }
  },
  {
    image: '/assets/projects/api-development.jpg',
    title: 'API Development',
    category: 'Development',
    details: {
      title: 'Desenvolvimento de APIs Corporativas',
      stack: 'Node.js, Express, GraphQL, AWS Lambda, API Gateway',
      duration: 'Abril 2023 - Setembro 2023',
      contribution: 'Arquitetura e desenvolvimento de APIs RESTful e GraphQL',
      impact: 'Integração de 15+ sistemas empresariais e redução de latência'
    }
  },
  {
    image: '/assets/projects/cloud-migration.jpg',
    title: 'Cloud Migration Strategy',
    category: 'Infrastructure',
    details: {
      title: 'Estratégia de Migração para Cloud',
      stack: 'AWS, Terraform, Jenkins, Docker, Monitoring tools',
      duration: 'Maio 2022 - Março 2023',
      contribution: 'Planeamento e execução de migração cloud híbrida',
      impact: 'Redução de 45% nos custos operacionais e maior escalabilidade'
    }
  },
  {
    image: '/assets/projects/agile-transformation.jpg',
    title: 'Agile Transformation',
    category: 'Management',
    details: {
      title: 'Transformação Ágil Organizacional',
      stack: 'Scrum, Kanban, DevOps practices, Azure DevOps',
      duration: 'Agosto 2021 - Junho 2022',
      contribution: 'Liderança na implementação de metodologias ágeis',
      impact: 'Redução de 35% no time-to-market e melhoria na satisfação da equipa'
    }
  }
];

const Portfolio = () => {
  const { 
    activeCategory, 
    showMobileFilter, 
    handleFilterChange, 
    toggleMobileFilter 
  } = useProjectFilter("All");

  const { isModalOpen, selectedProject, openModal, closeModal } = useProjectModal();

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="space-y-12">
      <header className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Portfolio</h2>
        <p className="text-gray-500 text-base leading-relaxed max-w-4xl mx-auto">
          Com mais de 20 anos de experiência em TI, lidero projetos de segurança de rede, infraestrutura e conectividade em larga escala. Este portfólio mostra como transformei tecnologia em impacto real em Angola — da mitigação de ataques DDoS à inclusão digital via satélite.
        </p>
      </header>

      <section>
        {/* Desktop filter */}
        <div className="hidden md:flex mb-8 gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeCategory === category 
                  ? 'bg-portfolio-primary-accent text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile filter */}
        <div className="md:hidden mb-6">
          <button
            className="w-full flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
            onClick={toggleMobileFilter}
          >
            <span className="font-medium text-gray-700">
              {activeCategory === "All" ? "Select Category" : activeCategory}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {showMobileFilter && (
            <div className="mt-2 bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-3 text-sm ${
                    activeCategory === category
                      ? 'bg-indigo-50 text-portfolio-primary-accent font-medium'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                  onClick={() => handleFilterChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              category={project.category}
              projectDetails={project.details}
              onClick={openModal}
            />
          ))}
        </div>
      </section>

      <ProjectModal 
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={closeModal}
      />
    </div>
  );
};

export default Portfolio;

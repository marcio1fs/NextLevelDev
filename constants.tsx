import React from 'react';
import type { Project, Service, Skill } from './types';

// Icons for skills and services
const CodeIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const MobileIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);

const ServerIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
);

export const PROJECTS: Project[] = [
  {
    image: 'https://picsum.photos/seed/project1/600/400',
    title: 'Sistema de E-commerce Moderno',
    description: 'Plataforma de e-commerce completa com carrinho de compras, pagamentos e painel administrativo para gerenciamento de produtos.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    image: 'https://picsum.photos/seed/project2/600/400',
    title: 'Aplicativo de Gerenciamento de Tarefas',
    description: 'App mobile multiplataforma para organizar tarefas diárias com sistema de notificações e colaboração em tempo real.',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    githubUrl: '#',
  },
  {
    image: 'https://picsum.photos/seed/project3/600/400',
    title: 'Dashboard de Análise de Dados',
    description: 'Dashboard interativo para visualização de dados de vendas, com gráficos e relatórios gerados dinamicamente.',
    tags: ['Vue.js', 'D3.js', 'Python', 'Flask'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    image: 'https://picsum.photos/seed/project4/600/400',
    title: 'API REST para Rede Social',
    description: 'Backend robusto para uma aplicação de rede social, com autenticação JWT, posts, comentários e sistema de amizades.',
    tags: ['Go', 'Gin', 'Docker', 'JWT'],
    githubUrl: '#',
  },
];

export const SKILLS: Skill[] = [
  { name: 'TypeScript', icon: <span className="devicon-typescript-plain text-3xl"></span> },
  { name: 'React', icon: <span className="devicon-react-original text-3xl"></span> },
  { name: 'Node.js', icon: <span className="devicon-nodejs-plain text-3xl"></span> },
  { name: 'Python', icon: <span className="devicon-python-plain text-3xl"></span> },
  { name: 'Go', icon: <span className="devicon-go-original-wordmark text-3xl"></span> },
  { name: 'PostgreSQL', icon: <span className="devicon-postgresql-plain text-3xl"></span> },
  { name: 'Docker', icon: <span className="devicon-docker-plain text-3xl"></span> },
  { name: 'Tailwind CSS', icon: <span className="devicon-tailwindcss-plain text-3xl"></span> },
];

export const SERVICES: Service[] = [
  {
    icon: <CodeIcon className="w-10 h-10 text-brand-primary" />,
    title: 'Desenvolvimento Web',
    description: 'Criação de sites e aplicações web responsivas, modernas e performáticas, utilizando as tecnologias mais recentes do mercado.',
  },
  {
    icon: <MobileIcon className="w-10 h-10 text-brand-primary" />,
    title: 'Desenvolvimento Mobile',
    description: 'Desenvolvimento de aplicativos móveis para iOS e Android com foco em experiência do usuário e interfaces intuitivas.',
  },
  {
    icon: <ServerIcon className="w-10 h-10 text-brand-primary" />,
    title: 'Desenvolvimento Backend',
    description: 'Construção de APIs robustas, escaláveis e seguras para dar suporte às suas aplicações, com integração a bancos de dados.',
  },
];

export const SOCIAL_LINKS = {
    github: '#',
    linkedin: '#',
    email: 'marciofs426@gmail.com',
    phone: '77988849278'
};
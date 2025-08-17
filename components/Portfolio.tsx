import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import Section from './Section';

const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" title="Portfólio">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
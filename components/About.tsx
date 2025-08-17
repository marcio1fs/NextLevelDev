import React from 'react';
import { SKILLS } from '../constants';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="Sobre Mim">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-lg text-dark-text-secondary leading-relaxed space-y-4">
          <p>
            Olá! Sou um desenvolvedor apaixonado por tecnologia e por criar soluções inovadoras que resolvem problemas reais. Com sólida experiência em desenvolvimento full-stack, busco sempre me manter atualizado com as melhores práticas e as tecnologias mais recentes do mercado.
          </p>
          <p>
            Minha jornada na programação começou com o objetivo de transformar ideias em produtos digitais funcionais e com ótima experiência de usuário. Adoro desafios e estou sempre pronto para aprender e colaborar em projetos que impactem positivamente a vida das pessoas.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6 text-center md:text-left">Habilidades & Tecnologias</h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="group bg-dark-card/50 border border-slate-800 p-3 rounded-lg flex items-center gap-3 shadow-lg hover:border-brand-primary/50 hover:shadow-brand-primary/20 transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-dark-text-secondary group-hover:text-brand-primary transition-colors duration-300">{skill.icon}</div>
                <span className="font-medium text-dark-text">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
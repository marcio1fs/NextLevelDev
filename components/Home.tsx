import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center">
      <div className="container mx-auto px-6 animate-fade-in-up">
        <div className="relative inline-block mb-6 animate-glow">
          <img
            src="https://picsum.photos/seed/profile/200/200"
            alt="Foto do Perfil de Marcio Santos"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto border-4 border-slate-800 shadow-lg transition-all duration-300"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">NextLevelDev</span>
        </h1>
        <p className="text-xl md:text-2xl text-dark-text-secondary font-semibold mb-4">
          O Portfólio de Marcio Santos
        </p>
        <p className="text-lg md:text-xl text-dark-text-secondary font-medium">
          Transformando Ideias em Realidade Digital
        </p>
        <a
          href="#portfolio"
          className="mt-8 inline-block bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-[0_0_25px_theme(colors.brand-primary/50%)]"
        >
          Ver Meus Projetos
        </a>
      </div>
    </section>
  );
};

export default Home;
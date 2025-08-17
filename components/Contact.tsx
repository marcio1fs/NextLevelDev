import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import Section from './Section';

const GitHubIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className || "w-6 h-6"}>
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
);

const LinkedInIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.3a3.1 3.1 0 012.8-1.5c2.3 0 4.1 1.9 4.1 4.4V19z" />
    </svg>
);

const PhoneIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.279-.087.431l4.108 7.293c.077.152.25.18.431.087l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C6.55 22.5 1.5 17.45 1.5 10.5V8.25V4.5z" clipRule="evenodd" />
    </svg>
);

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setFeedbackMessage('');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFeedbackMessage(data.message || 'Mensagem enviada com sucesso!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
                if (data.errors) {
                    const errorMsg = data.errors.map((err: { msg: string }) => err.msg).join(' ');
                    setFeedbackMessage(errorMsg);
                } else {
                    setFeedbackMessage(data.message || 'Ocorreu um erro ao enviar a mensagem.');
                }
            }
        } catch (error) {
            setStatus('error');
            setFeedbackMessage('Ocorreu um erro de rede. Tente novamente mais tarde.');
        }
    };

  return (
    <Section id="contact" title="Contato">
        <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-dark-text-secondary mb-8">
                Tem um projeto em mente ou quer trocar uma ideia? Entre em contato!
            </p>
            <div className="flex justify-center items-center gap-6 mb-12">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-dark-text-secondary hover:text-brand-primary transition-all duration-300 transform hover:scale-125">
                    <GitHubIcon className="w-7 h-7" />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-dark-text-secondary hover:text-brand-primary transition-all duration-300 transform hover:scale-125">
                    <LinkedInIcon className="w-7 h-7" />
                </a>
                <a href={`tel:${SOCIAL_LINKS.phone}`} className="text-dark-text-secondary hover:text-brand-primary transition-all duration-300 transform hover:scale-125">
                    <PhoneIcon className="w-7 h-7" />
                </a>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-lg font-medium text-dark-text-secondary hover:text-brand-primary transition-colors duration-300">
                    {SOCIAL_LINKS.email}
                </a>
            </div>

            <form onSubmit={handleSubmit} className="text-left space-y-6">
                <div>
                    <label htmlFor="name" className="sr-only">Nome</label>
                    <input type="text" name="name" id="name" placeholder="Seu Nome" value={formData.name} onChange={handleChange} required className="w-full bg-dark-card border border-slate-700 rounded-lg p-3 text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300" />
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" name="email" id="email" placeholder="Seu Email" value={formData.email} onChange={handleChange} required className="w-full bg-dark-card border border-slate-700 rounded-lg p-3 text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300" />
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">Mensagem</label>
                    <textarea name="message" id="message" rows={5} placeholder="Sua Mensagem" value={formData.message} onChange={handleChange} required className="w-full bg-dark-card border border-slate-700 rounded-lg p-3 text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-dark-bg shadow-lg transform hover:scale-105 hover:shadow-[0_0_25px_theme(colors.brand-primary/50%)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
                {feedbackMessage && (
                  <p className={`mt-4 text-center text-sm font-medium ${
                      status === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}>
                      {feedbackMessage}
                  </p>
                )}
            </form>
        </div>
    </Section>
  );
};

export default Contact;
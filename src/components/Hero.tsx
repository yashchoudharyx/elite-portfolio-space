import { ArrowDown, Github, Linkedin, Mail, Instagram, FileText } from 'lucide-react';
import MinecraftButton from '@/components/MinecraftButton';
import ScrollDilutionEffect from '@/components/ScrollDilutionEffect';
import { useScrollDilution } from '@/hooks/useScrollDilution';

const Hero = () => {
  const { isEffectActive, triggerEffect, completeEffect } = useScrollDilution();

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'about') {
      triggerEffect();
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated background elements with Minecraft-inspired colors */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-lg mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-lg mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-32 left-1/2 w-80 h-80 bg-red-500 rounded-lg mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-10 w-64 h-64 bg-yellow-500 rounded-lg mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
                Yash Choudhary
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Studying Math and Statistics at Waterloo. 🎮⚡
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <MinecraftButton onClick={() => scrollToSection('projects')}>
                🎯 View My Quests
              </MinecraftButton>
              <MinecraftButton 
                variant="secondary"
                onClick={() => scrollToSection('contact')}
              >
                📫 Send Message
              </MinecraftButton>
              <MinecraftButton 
                variant="secondary"
                onClick={() => window.open('#', '_blank')}
              >
                📄 Resume
              </MinecraftButton>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="https://github.com/yashchoudharyx" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/yash-choudhary-bb793a298" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/yc.mov/" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110">
                <Instagram size={24} />
              </a>
              <a href="mailto:yashchoudhary92a@gmail.com"
                 className="text-gray-400 hover:text-red-400 transition-colors duration-300 transform hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown 
              className="text-gray-400 cursor-pointer hover:text-green-400 transition-colors duration-300" 
              size={32}
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      <ScrollDilutionEffect isActive={isEffectActive} onComplete={completeEffect} />
    </>
  );
};

export default Hero;

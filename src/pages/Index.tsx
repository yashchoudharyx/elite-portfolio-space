
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import MovingBackground from '@/components/MovingBackground';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <CustomCursor />
      <MovingBackground />
      
      {/* Pokédex-style border overlay */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-cyan-400 rounded-tl-2xl"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-cyan-400 rounded-tr-2xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-cyan-400 rounded-bl-2xl"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-cyan-400 rounded-br-2xl"></div>
      </div>

      {/* Pokédex screen bezel */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full border-2 border-cyan-400 pointer-events-none z-40 shadow-lg">
        <div className="absolute top-1 left-4 w-6 h-6 bg-red-500 rounded-full border border-red-600 shadow-inner"></div>
        <div className="absolute top-2 left-12 w-4 h-4 bg-yellow-400 rounded-full border border-yellow-500 shadow-inner"></div>
        <div className="absolute top-2 left-18 w-4 h-4 bg-green-400 rounded-full border border-green-500 shadow-inner"></div>
      </div>

      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900/90 backdrop-blur-sm text-cyan-100 py-8 relative z-10 border-t-2 border-cyan-400/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-300">
            © 2025 yc.dev | Pokédex Portfolio | Built with React, TypeScript & Tailwind CSS ⚡
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

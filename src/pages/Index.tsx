
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
    <div className="min-h-screen relative">
      <MovingBackground />
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Alex Developer. Built with React, TypeScript, and Tailwind CSS. ⚡ Powered by Minecraft & Pokemon vibes! 🎮
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

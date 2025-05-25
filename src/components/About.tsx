
import PokemonCard from '@/components/PokemonCard';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and industry standards.",
      type: "electric" as const
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analyzing complex problems and creating innovative solutions with modern technologies.",
      type: "psychic" as const
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in cross-functional teams using agile methodologies.",
      type: "water" as const
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and exceptional user experience.",
      type: "fire" as const
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me 🎮
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating modern web applications. Like a skilled Pokemon trainer, I've mastered 
                React, Node.js, and cloud technologies, with a strong focus on user experience and performance.
              </p>
              <p className="text-lg">
                My journey in web development started with a curiosity about how things work 
                on the internet - much like exploring the digital world of Minecraft! Since then, 
                I've had the privilege of working with startups, agencies, and large corporations, 
                helping them craft their digital adventures.
              </p>
              <p className="text-lg">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community 
                through blog posts and mentoring. Always ready for the next challenge! ⚡
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <PokemonCard
                key={index}
                title={item.title}
                description={item.description}
                type={item.type}
                className="transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </PokemonCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

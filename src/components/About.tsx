
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
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900/50 to-slate-800/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 text-slate-900 px-6 py-2 rounded-full font-bold mb-6 border-2 border-purple-300">
              TRAINER PROFILE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              About Me 🎮
            </h2>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">
                Hi! I’m Yash Choudhary, a software developer with a love for building thoughtful, user-focused digital experiences. I’m currently studying Computational Mathematics at the University of Waterloo, where I’m diving deep into software development, data science, and the fascinating world of AI and machine learning. I enjoy working on full-stack projects, especially ones that challenge me to blend creativity with logic.
              </p>
              <p className="text-lg">
                Outside of code, I’m big on staying active—I lift weights, hike whenever I can, and never say no to a good night walk or a spontaneous beach visit. I’m also someone who loves being around people, whether that’s a laid-back get-together or a night out dancing. Fashion is another big part of who I am—there’s something about finding your own style that feels just as creative as writing code.              </p>
              <p className="text-lg">
                I grew up loving Pokémon, and it still holds a nostalgic place in my heart, which is why it became the theme for this portfolio. To me, learning new technologies and leveling up my skills is kind of like training: a journey of growth, curiosity, and fun. Thanks for stopping by—feel free to explore and reach out if you want to connect!            
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
                  <div className="p-3 bg-slate-800/50 rounded-full backdrop-blur-sm border border-cyan-400/30">
                    <item.icon className="h-6 w-6 text-cyan-300" />
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

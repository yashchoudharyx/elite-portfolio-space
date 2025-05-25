
import PokemonCard from '@/components/PokemonCard';
import MinecraftButton from '@/components/MinecraftButton';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "💼 Portfolio Website",
      description: "Modern, responsive portfolio website built with React featuring smooth animations and dark mode. Crafted with the precision of a master builder!",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveDemo: "#",
      github: "https://github.com/username/portfolio",
      type: "psychic" as const
    },
    {
  title: "📊 Trackabyte (Ctrl Hack Del)",
  description: "A data tracking tool for monitoring habits and metrics over time, built with C++ to practice file I/O, data parsing, and dynamic memory management. Think of it as your personal Pokédex for productivity!",
  image: "/public/Trackabyte.png",
  technologies: ["Vue.js", "MongoDB", "Node.js", "OpenAI API" ],
  liveDemo: "https://devpost.com/software/trackabite",
  github: "",
  type: "electric" as const
},
   {
  title: "🎮 Biquadris (Tetris with a Twist) - Academic project",
  description: "A C++ terminal-based game inspired by Tetris, developed as part of a university course project. Features power-ups, a dual-grid system, and clean object-oriented design—all built without external libraries. Can't be demo'd because of school policy :(",
  image: "/public/biquadris.png",
  technologies: ["C++", "OOP", "Terminal UI"],
  liveDemo: "",
  github: "",
  type: "fire" as const
  },
  {
  title: "😂 Make Me Laugh",
  description: "A fun GDScript-based game where players battle boredom by delivering jokes, built during a game jam with designers and product folks. Fast-paced, quirky, and a total blast to make!",
  image: "/public/MakeMeLaugh.png",
  technologies: ["GDScript", "Godot", "Game Jam"],
  liveDemo: "",
  github: "https://github.com/username/make-me-laugh",
  type: "grass" as const
  },
    {
  title: "📚 Bookstore Management System - Academic Project",
  description: "An academic backend system built using Python and MySQL to simulate real-world bookstore operations. Supports inventory tracking, customer management, and sales—all through a structured, menu-driven interface. Can't be demo'd because of school policy :(",
  image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  technologies: ["Python", "MySQL"],
  liveDemo: "",
  github: "",
  type: "water" as const
  }
    
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 px-6 py-2 rounded-full font-bold mb-4 border-2 border-cyan-300">
            POKÉDEX ENTRIES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Featured Projects 🎯
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover legendary projects that showcase advanced development skills. 
            Each entry represents a unique digital creature in my portfolio! ⚡
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <PokemonCard
              key={index}
              title={project.title}
              description={project.description}
              type={project.type}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 border border-cyan-400/30">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex} 
                    variant="secondary" 
                    className="bg-slate-800/80 text-cyan-300 hover:bg-slate-700/80 transition-colors duration-200 border border-cyan-400/30"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                <MinecraftButton className="flex-1">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </MinecraftButton>
                <MinecraftButton variant="secondary">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                    <Github className="h-4 w-4" />
                  </a>
                </MinecraftButton>
              </div>
            </PokemonCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

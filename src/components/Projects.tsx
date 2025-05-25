
import PokemonCard from '@/components/PokemonCard';
import MinecraftButton from '@/components/MinecraftButton';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "🏪 E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built like a trading post in Minecraft!",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "TypeScript"],
      liveDemo: "https://demo.example.com",
      github: "https://github.com/username/ecommerce",
      type: "fire" as const
    },
    {
      title: "📋 Task Management App", 
      description: "Collaborative task management tool with real-time updates, team collaboration features, and advanced filtering. Organize tasks like a Pokemon trainer's journey!",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      technologies: ["React", "Firebase", "Material-UI", "PWA"],
      liveDemo: "https://demo.example.com",
      github: "https://github.com/username/taskmanager",
      type: "water" as const
    },
    {
      title: "🌤️ Weather Dashboard",
      description: "Beautiful weather application with interactive maps, forecasts, and location-based weather alerts. Predict weather like a true explorer!",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Tailwind"],
      liveDemo: "https://demo.example.com",
      github: "https://github.com/username/weather",
      type: "electric" as const
    },
    {
      title: "💼 Portfolio Website",
      description: "Modern, responsive portfolio website built with React featuring smooth animations and dark mode. Crafted with the precision of a master builder!",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveDemo: "https://demo.example.com",
      github: "https://github.com/username/portfolio",
      type: "psychic" as const
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Quests 🎯
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some legendary projects that showcase my skills in modern web development. 
            Each one is a unique adventure crafted with passion! ⚡
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
              <div className="relative overflow-hidden rounded-lg mb-4">
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
                    className="bg-white/80 text-gray-800 hover:bg-white transition-colors duration-200"
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

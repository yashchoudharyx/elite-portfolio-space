
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Full Stack Development",
      skills: [
        { name: "React/Next.js", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "Node.js", level: "Fluent" },
        { name: "PostgreSQL", level: "Fluent" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" }
      ]
    },
    {
      title: "Data Science", 
      skills: [
        { name: "Python", level: "Expert" },
        { name: "SQL", level: "Fluent" },
        { name: "PowerBI", level: "Fluent" },
        { name: "VBA", level: "Intermediate" },
        { name: "Pandas", level: "Intermediate" },
        { name: "Jupyter", level: "Intermediate" }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", level: "Expert" },
        { name: "AWS", level: "Intermediate" },
        { name: "CI/CD", level: "Intermediate" },
        { name: "Linux", level: "Fluent" }
      ]
    }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js", 
    "Python", "PostgreSQL", "MongoDB", "Docker", "AWS", "Git", "Tailwind CSS",
    "Material-UI", "Express.js", "REST APIs", "GraphQL", "Jest", "Cypress",
    "PowerBI", "SQL", "VBA", "Pandas", "Jupyter"
  ];

  const getLevelColor = (level: string) => {
    switch(level) {
      case "Expert": return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "Fluent": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Beginner": return "bg-gray-500/20 text-gray-300 border-gray-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <Badge 
                        variant="secondary"
                        className={`${getLevelColor(skill.level)} text-xs px-2 py-1`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="bg-purple-600/20 text-purple-300 border-purple-500/30 hover:bg-purple-600/30 transition-all duration-300 text-sm py-2 px-4 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

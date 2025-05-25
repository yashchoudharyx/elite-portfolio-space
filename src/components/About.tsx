
import { Card, CardContent } from '@/components/ui/card';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and industry standards."
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analyzing complex problems and creating innovative solutions with modern technologies."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in cross-functional teams using agile methodologies."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and exceptional user experience."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating modern web applications. I specialize in React, Node.js, and 
                cloud technologies, with a strong focus on user experience and performance.
              </p>
              <p className="text-lg">
                My journey in web development started with a curiosity about how things work 
                on the internet. Since then, I've had the privilege of working with startups, 
                agencies, and large corporations, helping them bring their digital visions to life.
              </p>
              <p className="text-lg">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community 
                through blog posts and mentoring.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

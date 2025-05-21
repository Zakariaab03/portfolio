import React from 'react';
import { motion } from 'framer-motion';
import { Code, Languages, Brain, Rocket, PenTool as Tool, Database, Globe, Server, Terminal, GitBranch, Monitor } from 'lucide-react';

export const Skills: React.FC = () => {
  const technicalSkills = [
    {
      category: "Langages de Programmation",
      icon: Code,
      skills: ["Python", "Java", "JavaScript", "TypeScript", "C#", "PHP"]
    },
    {
      category: "Développement Frontend",
      icon: Globe,
      skills: ["HTML5", "CSS3", "Tailwind CSS", "React", "Framer Motion", "Blazor"]
    },
    {
      category: "Développement Backend",
      icon: Server,
      skills: ["Node.js", "Supabase", "SQL", ".NET Core", "ASP.NET"]
    },
    {
      category: "Bases de Données",
      icon: Database,
      skills: ["MySQL", "PostgreSQL"]
    },
    {
      category: "DevOps & Outils",
      icon: GitBranch,
      skills: ["Git", "GitLab", "GitHub", "Azure", "CI/CD", "Vite", "npm", "Gradle"]
    },
    {
      category: "Environnement de Développement",
      icon: Monitor,
      skills: ["Visual Studio", "VS Code", "Linux", "Windows"]
    }
  ];

  const softSkills = [
    { name: "Travail d'équipe", icon: Brain },
    { name: "Autonomie", icon: Rocket },
    { name: "Communication", icon: Languages },
    { name: "Gestion de projet", icon: Tool },
    { name: "Pensée analytique", icon: Brain }
  ];
  
  const languages = ["Arabe", "Français", "Anglais"];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
            <Code size={28} className="text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">Compétences</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 mb-8 rounded-full"></div>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Compétences Techniques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skillGroup, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <skillGroup.icon size={24} className="text-blue-400" />
                    </div>
                    <h4 className="text-lg font-medium text-white">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="bg-blue-500/10 px-3 py-1.5 rounded-full text-blue-300 text-sm
                        border border-blue-500/20 hover:border-blue-500/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Soft Skills and Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Soft Skills */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Brain size={24} className="text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Soft Skills</h3>
              </div>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10
                      hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center
                      group-hover:bg-blue-500/20 transition-colors">
                      <skill.icon size={20} className="text-blue-400" />
                    </div>
                    <span className="text-white text-lg group-hover:text-blue-300 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Languages */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <Languages size={24} className="text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Langues</h3>
              </div>
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10
                      hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center
                      group-hover:bg-purple-500/20 transition-colors">
                      <Globe size={20} className="text-purple-400" />
                    </div>
                    <span className="text-white text-lg group-hover:text-purple-300 transition-colors">
                      {language}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Code, Globe, ExternalLink, Folder, GitBranch, Star, Terminal } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'academic' | 'professional'>('academic');
  
  const academicProjects = [
    {
      title: "Portfolio Personnel",
      description: "Site web portfolio moderne avec animations fluides, design responsive et architecture React optimisée.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Développement Web",
      link: "https://github.com/Zakariaab03/portfolio.git"
    },
    {
      title: "Jeu de Cartes - \"La Réussite des Alliances\"",
      description: "Développement d'un jeu de cartes en Python en mode console, implémentant une logique de jeu complexe.",
      technologies: ["Python", "Algorithmes", "CLI"],
      category: "Développement Logiciel",
      link: "https://gitlab.isima.fr/zaabouelaz/reussite-des-alliances.git"
    },
    {
      title: "Monte Carlo & Intervalles de Confiance",
      description: "Projet statistique implémentant des méthodes d'échantillonnage et d'inférence.",
      technologies: ["Statistiques", "Mathématiques", "Simulation"],
      category: "Science des Données",
      link: "https://gitlab.isima.fr/zaabouelaz/simulation.git"
    },
    {
      title: "Jeu de Sokoban",
      description: "Développement du jeu classique Sokoban en Java avec patterns de conception.",
      technologies: ["Java", "Développement de Jeux", "POO"],
      category: "Développement de Jeux",
      link: "https://gitlab.isima.fr/zaabouelaz/jeu-de-sokoban.git"
    },
    {
      title: "Jeu de la Vie avec Base de Données",
      description: "Implémentation optimisée du Jeu de la Vie de Conway avec stockage de données.",
      technologies: ["Algorithmes", "Base de Données", "Optimisation"],
      category: "Développement Logiciel",
      link: "https://gitlab.isima.fr/zaabouelaz/jeu-de-la-vie.git"
    },
    {
      title: "Démineur",
      description: "Implémentation du jeu Démineur en Java en mode console, focus sur la logique de jeu.",
      technologies: ["Java", "Algorithmes", "CLI"],
      category: "Développement Logiciel",
      link: "https://gitlab.isima.fr/zaabouelaz/minesweeper.git"
    },
    {
      title: "Système de Gestion Web pour Bâtiments et Appartements",
      description: "Application fullstack de gestion immobilière avec interface moderne.",
      technologies: ["Fullstack", "Développement Web", "Base de Données"],
      category: "Développement Web",
      link: "https://gitlab.isima.fr/zaabouelaz/web-serveur.git"
    },
    {
      title: "Site Web JORDAN",
      description: "Site web pour la marque de chaussures JORDAN avec technologies web fondamentales.",
      technologies: ["HTML", "CSS", "JavaScript", "Frontend"],
      category: "Développement Web",
      link: "https://gitlab.isima.fr/zaabouelaz/web-site.git"
    }
  ];
  
  const professionalProjects = [
    {
      title: "Site Web AKLN",
      description: "Site web pour une agence web (akln.fr) avec design moderne et responsive.",
      technologies: ["Développement Web", "Frontend", "Design"],
      link: "https://akln.fr/",
      category: "Développement Web"
    },
    {
      title: "Site Web Restaurant",
      description: "Site web pour restaurant (bambou-d-or.fr) avec interface utilisateur élégante.",
      technologies: ["Développement Web", "Frontend", "Design"],
      link: "https://bambou-d-or.fr/",
      category: "Développement Web"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Développement Web':
        return Globe;
      case 'Développement de Jeux':
        return Terminal;
      case 'Science des Données':
        return GitBranch;
      case 'Développement Logiciel':
        return Code;
      default:
        return Folder;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
            <FileText size={28} className="text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">Projets</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 mb-8 rounded-full"></div>
        </motion.div>
        
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex justify-center">
            <div className="inline-flex rounded-lg border border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm">
              <button 
                onClick={() => setActiveTab('academic')}
                className={`px-6 py-3 font-medium text-sm md:text-base transition-colors ${
                  activeTab === 'academic' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Académiques & Personnels
              </button>
              <button 
                onClick={() => setActiveTab('professional')}
                className={`px-6 py-3 font-medium text-sm md:text-base transition-colors ${
                  activeTab === 'professional' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Professionnels
              </button>
            </div>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          {activeTab === 'academic' && (
            <motion.div
              key="academic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {academicProjects.map((project, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden
                    hover:bg-white/10 transition-all duration-300 group h-full"
                  >
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          {React.createElement(getCategoryIcon(project.category), {
                            size: 20,
                            className: "text-blue-400"
                          })}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <span className="text-sm text-blue-400/80">{project.category}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-full text-xs text-blue-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        {project.link && (
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            Voir le code
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {activeTab === 'professional' && (
            <motion.div
              key="professional"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {professionalProjects.map((project, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden group"
                  >
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                          <Globe size={24} className="text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <span className="text-sm text-blue-400/80">{project.category}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-full text-xs text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Visiter le site
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
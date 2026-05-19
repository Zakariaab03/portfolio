import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Code, Globe, ExternalLink, Folder, GitBranch, Terminal } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  link?: string;
};

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Application web de recherche d’images par similarité",
      description: "Application web full-stack client-serveur développée en équipe de 3 dans le cadre du cours PDL — L3 Informatique, Université de Bordeaux. Backend Java Spring Boot avec API REST, calcul de descripteurs visuels (RGB, HSV, Gradient via BoofCV) et recherche par similarité via pgvector. Frontend Vue.js 3 / TypeScript avec galerie interactive, jeu de similarité, leaderboard et authentification JWT.",
      technologies: ["Java", "Spring Boot", "Vue.js 3", "TypeScript", "PostgreSQL", "pgvector", "Docker", "JWT", "Maven"],
      category: "Développement logiciel",
      link: "https://github.com/Zakariaab03/image-similarity-search"
    },
    {
      title: "Web Security Scanner",
      description: "Outil d’analyse de vulnérabilités web simples : vérification HTTPS, analyse des headers HTTP de sécurité, détection des formulaires HTML, extraction de liens internes et génération de rapport JSON.",
      technologies: ["Python", "HTTPS", "Headers HTTP", "JSON"],
      category: "Cybersécurité",
      link: "https://github.com/Zakariaab03/Web-Security-Scanner"
    },
    {
      title: "Portfolio web dockerisé",
      description: "Développement d’un portfolio personnel conteneurisé avec Docker.",
      technologies: ["TypeScript", "Vite", "Tailwind", "Docker"],
      category: "Développement Web",
      link: "https://github.com/Zakariaab03/portfolio"
    },
    {
      title: "Système de gestion de bâtiments",
      description: "Application web permettant la gestion de bâtiments et d’appartements.",
      technologies: ["Java", "SQL", "FreeMarker"],
      category: "Développement logiciel",
      link: "https://gitlab.isima.fr/zaabouelaz/web-serveur.git"
    },
    {
      title: "Jeu Sokoban",
      description: "Implémentation d’un jeu basé sur la programmation orientée objet.",
      technologies: ["Java", "POO"],
      category: "Jeu / POO",
      link: "https://gitlab.isima.fr/zaabouelaz/jeu-de-sokoban.git"
    },
    {
      title: "Jeu de la Vie avec base de données",
      description: "Simulation du jeu de la vie avec gestion des données persistantes.",
      technologies: ["Java", "SQL", "Base de données"],
      category: "Base de données",
      link: "https://gitlab.isima.fr/zaabouelaz/jeu-de-la-vie.git"
    },
    {
      title: "Simulation de Monte Carlo",
      description: "Simulation statistique avec calcul d’intervalles de confiance.",
      technologies: ["C", "Statistiques", "Simulation"],
      category: "Data",
      link: "https://gitlab.isima.fr/zaabouelaz/simulation.git"
    },
    {
      title: "Jeu de Cartes",
      description: "Développement d’un jeu utilisant Python et des structures de données.",
      technologies: ["Python", "Structures de données"],
      category: "Développement logiciel",
      link: "https://gitlab.isima.fr/zaabouelaz/reussite-des-alliances.git"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Développement Web':
        return Globe;
      case 'Jeu / POO':
        return Terminal;
      case 'Data':
      case 'Base de données':
        return GitBranch;
      case 'Développement logiciel':
      case 'Cybersécurité':
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 group h-full"
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
                      <span className="text-sm text-blue-400/80">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 flex-grow">
                    {project.description}
                  </p>

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
      </div>
    </section>
  );
};
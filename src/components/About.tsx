import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Brain, Target, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const qualities = [
    {
      icon: Code,
      title: "Passion Technique",
      description: "Développement de solutions innovantes et performantes"
    },
    {
      icon: Brain,
      title: "Résilience",
      description: "Capacité à surmonter les défis et à en sortir plus fort"
    },
    {
      icon: Heart,
      title: "Détermination",
      description: "Une motivation renouvelée pour réussir"
    },
    {
      icon: Target,
      title: "Objectif",
      description: "Poursuivre en Master Informatique en alternance"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-indigo-950">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
            <User size={28} className="text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">À Propos</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 mb-8 rounded-full"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Étudiant en Licence 3 Informatique à l’Université de Bordeaux, j’ai développé des compétences solides en programmation, algorithmique, bases de données et développement d’applications à travers différents projets académiques et personnels.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Attiré par les problématiques techniques complexes, je m’intéresse particulièrement aux domaines de l’ingénierie logicielle, de la cybersécurité, du cloud et des systèmes distribués. Mon parcours m’a permis de développer rigueur, autonomie et capacité d’adaptation.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Je souhaite intégrer un Master Informatique en alternance afin de continuer à progresser techniquement tout en m’insérant dans un environnement professionnel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualities.map((quality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 
                hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <quality.icon size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{quality.title}</h3>
                    <p className="text-gray-400">{quality.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Brain, Rocket, Target, Heart } from 'lucide-react';

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
      title: "Vision",
      description: "Devenir un développeur FullStack & DevOps accompli"
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
              Après une période d'apprentissage personnel pendant ma Licence 2, je me lance avec une énergie 
              renouvelée dans un Bachelor DEVOPS FullStack à EPSI. Cette expérience m'a permis de développer 
              une résilience et une détermination plus fortes, des qualités essentielles dans le domaine du développement.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Aujourd'hui, je suis plus motivé que jamais pour mettre mes compétences techniques au service 
              d'une entreprise dynamique. Mon parcours m'a appris l'importance de l'adaptabilité et de la 
              persévérance, des qualités que je souhaite mettre à profit dans ma future alternance.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Ma passion pour le développement se traduit par une curiosité constante pour les nouvelles 
              technologies et une volonté d'apprendre continuellement. Je m'intéresse particulièrement 
              aux pratiques DevOps et au développement fullstack, cherchant toujours à comprendre les 
              meilleures pratiques et les dernières innovations du secteur.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Je recherche activement une alternance en rythme 1 semaine école / 2 semaines entreprise, où je pourrai 
              mettre en pratique mes compétences en développement tout en continuant à apprendre. Cette opportunité 
              me permettra de combiner formation théorique et expérience pratique, tout en contribuant activement 
              aux projets de l'entreprise.
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
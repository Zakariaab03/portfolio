import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Équipier polyvalent",
      company: "McDonald’s, Aubière",
      period: "Sept. 2024 – Mars 2025",
      description: "Travail en environnement dynamique et à forte cadence : préparation des commandes, accueil client, caisse et gestion de salle. Respect strict des normes d’hygiène, de sécurité et de qualité. Polyvalence sur tous les postes (cuisine, caisse, salle), disponibilité sur les créneaux opens/closes et les périodes de fort afflux. Développement de la résistance au stress, de la communication et du travail en équipe.",
      skills: ["Travail en équipe", "Communication", "Adaptabilité", "Résistance au stress", "Polyvalence"]
    },
    {
      title: "Assistant de laboratoire",
      company: "OMERIN, Ambert",
      period: "Juin – Sept. 2023",
      description: "Étalonnage précis des compteurs de machines de production selon les protocoles techniques en vigueur. Saisie et suivi des valeurs d’étalonnage dans Excel : traçabilité des mesures, analyse des écarts et vérification de la conformité. Collaboration avec les équipes de production et de maintenance pour assurer la fiabilité des équipements. Rigueur, attention aux détails et respect strict des procédures de laboratoire.",
      skills: ["Rigueur", "Excel", "Traçabilité", "Protocoles techniques", "Collaboration"]
    },
    {
      title: "Inventoriste",
      company: "RGIS, Clermont-Ferrand",
      period: "2022 – Avr. 2023",
      description: "Comptage et vérification des stocks en magasin à l’aide d’outils informatiques dédiés. Contrôle des étiquettes produits et des codes-barres pour garantir l’exactitude des données d’inventaire. Travail en équipe dans un environnement cadencé, avec des objectifs de rapidité et de précision. Développement de la rigueur, de l’organisation et de l’adaptabilité en contexte opérationnel.",
      skills: ["Organisation", "Rigueur", "Travail en équipe", "Outils informatiques"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
            <Briefcase size={28} className="text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">Expérience Professionnelle</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 mb-8 rounded-full"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent"></div>
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-8 md:ml-auto md:pl-4 md:w-1/2' : 'md:pl-8 md:w-1/2'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-0 top-6 transform md:-translate-x-1/2 w-4 h-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-25"></div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 ml-8 md:ml-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 size={24} className="text-blue-400" />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <span className="flex items-center gap-1 px-3 py-1 bg-blue-500/10 rounded-full text-blue-300 text-sm">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="text-blue-300 mb-4">{exp.company}</p>
                      <p className="text-gray-400 mb-4">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-500/10 rounded-full text-blue-300 text-sm border border-blue-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
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

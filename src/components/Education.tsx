import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Award, GraduationCap, Binary, AlertCircle, Heart } from 'lucide-react';

export const Education: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);

  const educationData = [
    {
      degree: "Bachelor 3 DEVOPS FullStack",
      institution: "EPSI",
      period: "2025-2026",
      description: "Formation en alternance spécialisée en DEVOPS et développement fullstack.",
      icon: Binary,
      mood: "hopeful",
      details: "Une nouvelle étape qui représente mon renouveau et ma détermination à réussir dans le domaine du développement. C'est l'opportunité de transformer mes expériences passées en force pour l'avenir."
    },
    {
      degree: "Licence 2 Informatique",
      institution: "UCA, Clermont-Ferrand",
      period: "2022-2025",
      description: "Période marquée par des défis personnels après la validation de la L2.",
      icon: Heart,
      mood: "challenging",
      details: "Après avoir validé ma L2 avec succès, j'ai poursuivi en L3 où j'ai rencontré des défis personnels et familiaux qui ont impacté ma santé mentale et ma motivation. Cette période m'a permis de développer une résilience importante et de mieux me connaître. Aujourd'hui, je transforme cette expérience en force pour mon nouveau départ en Bachelor DEVOPS FullStack."
    },
    {
      degree: "Licence 1 Math-INFO",
      institution: "UCA, Clermont-Ferrand",
      period: "2021-2022",
      description: "Les fondements de mon parcours en informatique.",
      icon: GraduationCap,
      mood: "positive",
      details: "Une année fondatrice validée avec succès qui a confirmé ma passion pour l'informatique et m'a donné les bases essentielles pour mon parcours."
    }
  ];

  const certifications = [
    {
      name: "Microsoft Full-Stack Developer",
      institution: "Coursera",
      period: "En cours",
      description: "Certification approfondie en développement full-stack.",
      icon: Award,
      mood: "positive",
      details: "Une certification qui témoigne de ma volonté de progresser et d'exceller dans mon domaine."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
            <BookOpen size={28} className="text-purple-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">Formation</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-4 mb-8 rounded-full"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-16">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Parcours Académique</h3>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedPeriod(edu.period)}
                  className={`
                    relative overflow-hidden cursor-pointer
                    ${edu.mood === 'challenging' 
                      ? 'bg-gradient-to-r from-gray-900 to-purple-900 hover:from-purple-900 hover:to-gray-900' 
                      : edu.mood === 'hopeful'
                        ? 'bg-gradient-to-r from-blue-900 to-emerald-900 hover:from-emerald-900 hover:to-blue-900'
                        : 'bg-gradient-to-r from-gray-900 to-blue-900 hover:from-blue-900 hover:to-gray-900'
                    }
                    rounded-xl p-6 border-2 transition-all duration-500
                    ${edu.mood === 'challenging' 
                      ? 'border-purple-700/30 hover:border-purple-500' 
                      : edu.mood === 'hopeful'
                        ? 'border-emerald-700/30 hover:border-emerald-500'
                        : 'border-blue-700/30 hover:border-blue-500'
                    }
                  `}
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
                    {edu.mood === 'challenging' && (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent animate-pulse"></div>
                    )}
                  </div>

                  <div className="relative z-10 flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center
                        ${edu.mood === 'challenging' 
                          ? 'bg-purple-500/20' 
                          : edu.mood === 'hopeful'
                            ? 'bg-emerald-500/20'
                            : 'bg-blue-500/20'
                        }`}
                      >
                        <edu.icon 
                          size={24} 
                          className={
                            edu.mood === 'challenging' 
                              ? 'text-purple-400' 
                              : edu.mood === 'hopeful'
                                ? 'text-emerald-400'
                                : 'text-blue-400'
                          } 
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                        <span className={`px-3 py-1 rounded-full text-sm
                          ${edu.mood === 'challenging' 
                            ? 'bg-purple-500/20 text-purple-300' 
                            : edu.mood === 'hopeful'
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : 'bg-blue-500/20 text-blue-300'
                          }`}
                        >
                          {edu.period}
                        </span>
                      </div>
                      <p className={`mb-2 ${
                        edu.mood === 'challenging' 
                          ? 'text-purple-300' 
                          : edu.mood === 'hopeful'
                            ? 'text-emerald-300'
                            : 'text-blue-300'
                      }`}>
                        {edu.institution}
                      </p>
                      <p className="text-gray-400">{edu.description}</p>
                    </div>
                  </div>

                  {/* Interactive indicator */}
                  <div className="absolute right-4 top-4">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`
                        ${edu.mood === 'challenging' 
                          ? 'text-purple-400' 
                          : edu.mood === 'hopeful'
                            ? 'text-emerald-400'
                            : 'text-blue-400'
                        }
                      `}
                    >
                      <AlertCircle size={16} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Certifications</h3>
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setSelectedPeriod(cert.period)}
                  className="bg-gradient-to-r from-gray-900 to-blue-900 hover:from-blue-900 hover:to-gray-900
                    rounded-xl p-6 border-2 border-blue-700/30 hover:border-blue-500 cursor-pointer
                    transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <cert.icon size={24} className="text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h4 className="text-xl font-semibold text-white">{cert.name}</h4>
                        {cert.period && (
                          <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm">
                            {cert.period}
                          </span>
                        )}
                      </div>
                      <p className="text-blue-300 mb-2">{cert.institution}</p>
                      <p className="text-gray-400">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal with enhanced emotional design */}
      <AnimatePresence>
        {selectedPeriod && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPeriod(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-xl p-8 max-w-lg w-full
                border-2 border-purple-500/30 shadow-xl shadow-purple-500/20"
              onClick={e => e.stopPropagation()}
            >
              {[...educationData, ...certifications].find(item => item.period === selectedPeriod)?.details && (
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center
                      ${selectedPeriod === "2022-2025" ? 'bg-purple-500/20' : 'bg-blue-500/20'}`}
                    >
                      {selectedPeriod === "2022-2025" ? (
                        <Heart size={24} className="text-purple-400" />
                      ) : (
                        <BookOpen size={24} className="text-blue-400" />
                      )}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {[...educationData, ...certifications].find(item => item.period === selectedPeriod)?.degree || 
                       [...educationData, ...certifications].find(item => item.period === selectedPeriod)?.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {[...educationData, ...certifications].find(item => item.period === selectedPeriod)?.details}
                  </p>
                  
                  <button
                    onClick={() => setSelectedPeriod(null)}
                    className={`mt-6 px-6 py-3 rounded-lg font-medium transition-all duration-300
                      ${selectedPeriod === "2022-2025"
                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }
                    `}
                  >
                    Fermer
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
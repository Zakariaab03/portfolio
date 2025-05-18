import React from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, Mail, MapPin, Phone, ExternalLink, FileText, Code, Terminal, Cpu, Globe, Database } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen py-12 md:py-20 bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-4 h-full w-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border-r border-t border-white/5" />
            ))}
          </div>
        </div>
      </div>

      {/* Floating tech terms - Hide on small screens */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {[
          'DevOps', 
          'React', 
          'Docker', 
          'CI/CD', 
          'Node.js', 
          'Cloud', 
          'Git', 
          'Agile'
        ].map((term, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: 0.2,
              y: [-20, 20],
              x: Math.sin(index) * 20
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.2
              },
              opacity: {
                duration: 0.4
              }
            }}
            className="absolute text-blue-300/20 font-mono text-2xl"
            style={{
              left: `${(index * 15) % 100}%`,
              top: `${(index * 20) % 100}%`
            }}
          >
            {term}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left content section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center bg-blue-500/10 rounded-full px-4 py-2"
              >
                <Code className="text-blue-400 mr-2" size={18} />
                <span className="text-blue-200 font-medium text-sm md:text-base">Étudiant en Bachelor DEVOPS FullStack</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Zakaria
                <br />
                Abou El Azze
              </h1>
            </div>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Passionné par le développement et l'innovation technologique. En formation pour devenir développeur FullStack & DevOps, 
              je combine apprentissage technique et vision stratégique pour créer des solutions modernes et évolutives.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {[
                { icon: Globe, text: "Frontend" },
                { icon: Database, text: "Backend" },
                { icon: Cpu, text: "DevOps" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <tech.icon size={16} className="text-blue-400" />
                  <span className="text-gray-200 text-sm">{tech.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg 
                shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center group"
              >
                <Mail size={18} className="mr-2 group-hover:rotate-12 transition-transform" />
                Me Contacter
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white 
                rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
              >
                <Terminal size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
                Mes Projets
              </motion.a>
            </div>
          </motion.div>

          {/* Logo section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Logo container with glass effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full 
                  backdrop-blur-sm border border-blue-500/30 flex items-center justify-center overflow-hidden"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 40px rgba(59, 130, 246, 0.5)",
                    "0 0 20px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {/* Logo with animation */}
                <motion.div
                  className="relative w-48 h-48 md:w-72 md:h-72"
                  animate={{ 
                    scale: [1, 1.02, 1],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src="https://i.postimg.cc/VNWZ9J2V/Chat-GPT-Image-May-17-2025-12-37-07-PM.png"
                    alt="ZA Logo"
                    className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                  />
                </motion.div>

                {/* Orbital rings - Hide on small screens */}
                <div className="absolute inset-0 hidden md:block">
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-blue-500/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-purple-500/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Contact links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mt-8 md:mt-16"
        >
          {[
            { icon: MapPin, text: "Lyon, France" },
            { icon: Phone, text: "+33 6 19 52 58 04" },
            { 
              icon: Mail, 
              text: "abouelazzezakaria@gmail.com",
              href: "https://mail.google.com/mail/?view=cm&fs=1&to=abouelazzezakaria@gmail.com",
              external: true
            },
            { 
              icon: GitHub, 
              text: "GitLab", 
              href: "https://gitlab.isima.fr/zaabouelaz",
              external: true
            }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-full 
              hover:bg-white/10 transition-colors text-sm md:text-base"
            >
              <item.icon size={16} className="text-blue-400" />
              <span className="text-gray-300 truncate">{item.text}</span>
              {item.external && <ExternalLink size={12} className="text-gray-400" />}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
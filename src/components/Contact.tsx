import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, ExternalLink, Send, CheckCircle, GraduationCap, Briefcase } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('messages')
        .insert([formData]);

      if (error) throw error;
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-950">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
            <Mail size={28} className="text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">Contact</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 mb-8 rounded-full"></div>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {/* Alternance Information Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-8 border border-white/10 mb-12"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap size={32} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Étudiant en Bachelor DEVOPS FullStack</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Je me prépare à intégrer le Bachelor DEVOPS FullStack à EPSI pour la rentrée prochaine. 
                  Dans cette perspective, je recherche une alternance qui me permettra de développer mes compétences 
                  tout en contribuant activement aux projets de l'entreprise.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full">
                    <Briefcase size={18} className="text-blue-400" />
                    <span className="text-gray-300">1 semaine école / 2 semaines entreprise</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full">
                    <GraduationCap size={18} className="text-blue-400" />
                    <span className="text-gray-300">Bachelor DEVOPS FullStack</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 h-full"
            >
              <h3 className="text-2xl font-semibold text-white mb-8">Mes Coordonnées</h3>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Téléphone", value: "+33 6 19 52 58 04" },
                  { 
                    icon: Mail, 
                    label: "Email", 
                    value: "abouelazzezakaria@gmail.com",
                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=abouelazzezakaria@gmail.com",
                    isLink: true 
                  },
                  { icon: MapPin, label: "Localisation", value: "Lyon, France" },
                  { 
                    icon: Github, 
                    label: "GitLab", 
                    value: "gitlab.isima.fr/zaabouelaz",
                    href: "https://gitlab.isima.fr/zaabouelaz",
                    isLink: true 
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10
                      hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center
                      group-hover:bg-blue-500/20 transition-colors">
                      <item.icon size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      {item.isLink ? (
                        <a 
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white group-hover:text-blue-400 transition-colors flex items-center gap-2"
                        >
                          {item.value}
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <p className="text-white group-hover:text-blue-400 transition-colors">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-semibold text-white mb-8">Envoyez-moi un Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">Nom</label>
                  <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500
                    text-white placeholder-gray-500"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500
                    text-white placeholder-gray-500"
                    placeholder="Votre email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">Message</label>
                  <textarea 
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500
                    text-white placeholder-gray-500 resize-none"
                    placeholder="Votre message"
                    required
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-medium flex items-center justify-center gap-2
                    transition-all duration-300 ${
                      isSubmitted 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                    }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      Message Envoyé !
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText, Code, Globe, ExternalLink, Folder, GitBranch, Terminal,
  Play, X, ChevronLeft, ChevronRight, Maximize2, ImageIcon,
} from 'lucide-react';

type Media = {
  type: 'image' | 'video';
  src: string;
  alt: string;
  poster?: string;
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  link?: string;
  demo?: string;
  media?: Media[];
};

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Application web de recherche d’images par similarité",
      description: "Application full-stack de recherche d'images par similarité visuelle, développée en équipe de 3 (L3, Université de Bordeaux). Backend Spring Boot avec descripteurs visuels (BoofCV) et recherche vectorielle (pgvector). Frontend Vue.js 3 avec galerie interactive, jeu de similarité et authentification JWT.",
      technologies: ["Java", "Spring Boot", "Vue.js 3", "TypeScript", "PostgreSQL", "pgvector", "Docker", "JWT", "Maven"],
      category: "Développement logiciel",
      link: "https://github.com/Zakariaab03/image-similarity-search",
      media: [
        { type: 'image', src: '/projects/similarite/galerie.webp', alt: "Galerie interactive d'images" },
        { type: 'image', src: '/projects/similarite/recherche.webp', alt: "Recherche par similarité visuelle" },
        { type: 'image', src: '/projects/similarite/jeu-leaderboard.webp', alt: "Jeu de similarité et classement global" },
        { type: 'image', src: '/projects/similarite/espace-utilisateur.webp', alt: "Espace utilisateur" },
      ],
    },
    {
      title: "Web Security Scanner",
      description: "Outil d’analyse de vulnérabilités web : vérification HTTPS, analyse des headers HTTP de sécurité, détection des formulaires HTML, extraction de liens internes et génération de rapport JSON.",
      technologies: ["Python", "HTTPS", "Headers HTTP", "JSON"],
      category: "Cybersécurité",
      link: "https://github.com/Zakariaab03/Web-Security-Scanner",
      media: [
        { type: 'image', src: '/projects/scanner/terminal.webp', alt: "Exécution du scanner en terminal" },
        { type: 'image', src: '/projects/scanner/rapport-json.webp', alt: "Extrait du rapport JSON généré" },
      ],
    },
    {
      title: "Portfolio web dockerisé",
      description: "Développement d’un portfolio personnel conteneurisé avec Docker.",
      technologies: ["TypeScript", "Vite", "Tailwind", "Docker"],
      category: "Développement Web",
      link: "https://github.com/Zakariaab03/portfolio",
      demo: "https://zakariaabouelazze.com",
    },
    {
      title: "Système de gestion de bâtiments",
      description: "Application web MVC de gestion d’immeubles et d’appartements : authentification, rôles (locataire, propriétaire, syndic) et opérations CRUD.",
      technologies: ["Java", "FreeMarker", "H2", "MVC"],
      category: "Développement logiciel",
      link: "https://gitlab.isima.fr/zaabouelaz/web-serveur.git"
    },
    {
      title: "Jeu Sokoban",
      description: "Implémentation du jeu Sokoban en terminal avec affichage graphique via la bibliothèque ncurses.",
      technologies: ["C", "ncurses"],
      category: "Jeu / POO",
      link: "https://gitlab.isima.fr/zaabouelaz/jeu-de-sokoban.git"
    },
    {
      title: "Jeu de la Vie avec base de données",
      description: "Version web du jeu de la vie de Conway : édition, sauvegarde et évolution de grilles persistées en base de données.",
      technologies: ["Java", "FreeMarker", "H2"],
      category: "Base de données",
      link: "https://gitlab.isima.fr/zaabouelaz/jeu-de-la-vie.git"
    },
    {
      title: "Simulation de Monte Carlo",
      description: "Estimation de π par la méthode de Monte Carlo, avec générateur Mersenne Twister et intervalles de confiance à 99 %.",
      technologies: ["C", "Mersenne Twister", "Statistiques"],
      category: "Data",
      link: "https://gitlab.isima.fr/zaabouelaz/simulation.git"
    },
    {
      title: "Jeu de Cartes",
      description: "Jeu de cartes « La Réussite des Alliances » en Python, avec modes de jeu manuel et automatique.",
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

  // Lightbox : { p: index projet, m: index média } | null
  const [lightbox, setLightbox] = useState<{ p: number; m: number } | null>(null);
  // Médias dont le fichier est introuvable (404) → on bascule sur le fallback
  const [broken, setBroken] = useState<Record<string, boolean>>({});
  const markBroken = (src: string) => setBroken((b) => ({ ...b, [src]: true }));

  const availableMedia = (project: Project): Media[] =>
    (project.media ?? []).filter((md) => !broken[md.src]);

  const openLightbox = (p: number, m: number) => setLightbox({ p, m });
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const step = useCallback((dir: 1 | -1) => {
    setLightbox((lb) => {
      if (!lb) return lb;
      const list = (projects[lb.p].media ?? []).filter((md) => !broken[md.src]);
      if (list.length === 0) return null;
      const next = (lb.m + dir + list.length) % list.length;
      return { p: lb.p, m: next };
    });
  }, [broken]);

  // Clavier + verrouillage du scroll quand la lightbox est ouverte
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, step, closeLightbox]);

  const lbProject = lightbox ? projects[lightbox.p] : null;
  const lbList = lbProject ? (lbProject.media ?? []).filter((md) => !broken[md.src]) : [];
  const lbMedia = lbProject ? lbList[lightbox!.m] : null;

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
            {projects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              const media = availableMedia(project);
              const cover = media[0];

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 group h-full flex flex-col"
                >
                  {/* En-tête média : vignette cliquable si dispo, sinon fallback dégradé */}
                  {cover ? (
                    <button
                      type="button"
                      onClick={() => openLightbox(index, 0)}
                      className="relative block w-full aspect-video overflow-hidden bg-gray-900/60"
                      aria-label={`Agrandir les visuels de ${project.title}`}
                    >
                      {cover.type === 'image' ? (
                        <img
                          src={cover.src}
                          alt={cover.alt}
                          loading="lazy"
                          onError={() => markBroken(cover.src)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <video
                          src={cover.src}
                          poster={cover.poster}
                          muted
                          loop
                          playsInline
                          autoPlay
                          onError={() => markBroken(cover.src)}
                          className="w-full h-full object-cover"
                        />
                      )}
                      {/* Voile + icône agrandir */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-80" />
                      <div className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 size={16} className="text-white" />
                      </div>
                      {media.length > 1 && (
                        <span className="absolute bottom-3 right-3 flex items-center gap-1.5 text-xs text-white/90 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                          <ImageIcon size={13} /> {media.length}
                        </span>
                      )}
                    </button>
                  ) : (
                    <div className="relative w-full aspect-video overflow-hidden bg-gradient-to-br from-blue-600/20 via-blue-900/10 to-purple-600/20 flex items-center justify-center">
                      <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
                      <CategoryIcon size={40} className="text-blue-300/70" />
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CategoryIcon size={20} className="text-blue-400" />
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

                      <div className="flex flex-wrap items-center gap-4">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
                          >
                            <Play size={15} /> Démo live
                          </a>
                        )}
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
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Lightbox / modal */}
      <AnimatePresence>
        {lightbox && lbMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              {/* Fermer */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute -top-12 right-0 w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>

              <div className="rounded-xl overflow-hidden border border-white/10 bg-gray-900">
                {lbMedia.type === 'image' ? (
                  <img
                    src={lbMedia.src}
                    alt={lbMedia.alt}
                    onError={() => markBroken(lbMedia.src)}
                    className="w-full max-h-[80vh] object-contain bg-black"
                  />
                ) : (
                  <video
                    src={lbMedia.src}
                    poster={lbMedia.poster}
                    controls
                    autoPlay
                    loop
                    playsInline
                    onError={() => markBroken(lbMedia.src)}
                    className="w-full max-h-[80vh] bg-black"
                  />
                )}
              </div>

              {/* Légende + compteur */}
              <div className="flex items-center justify-between mt-3 text-sm text-gray-300">
                <span>{lbMedia.alt}</span>
                {lbList.length > 1 && (
                  <span className="text-gray-500">{lightbox.m + 1} / {lbList.length}</span>
                )}
              </div>

              {/* Navigation */}
              {lbList.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-14 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    aria-label="Visuel précédent"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-14 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    aria-label="Visuel suivant"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

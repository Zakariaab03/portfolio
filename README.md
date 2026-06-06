# 👨‍💻 Zakaria Abou El Azze

🎓 Étudiant en Licence 3 Informatique — Université de Bordeaux  
💻 Développement logiciel orienté cybersécurité  
📍 Bordeaux (mobilité nationale)  

---

## 🚀 À propos de moi

Étudiant en informatique, je développe des compétences solides en programmation, algorithmique, bases de données et développement d’applications à travers différents projets académiques et personnels.

Je m’intéresse particulièrement à :
- 🔐 Cybersécurité
- 🧩 Ingénierie logicielle
- 🌐 Développement full-stack
- 🗄️ Bases de données

🎯 Objectif : intégrer un **Master Informatique en alternance** (septembre 2026) afin de renforcer mes compétences techniques et acquérir une expérience professionnelle.

---

## 🛠️ Compétences

### 💻 Langages
- Java
- Python
- JavaScript
- TypeScript
- C#
- C

### ⚙️ Développement
- Programmation orientée objet (POO)
- Algorithmique & structures de données
- Spring Boot · Maven
- APIs REST

### 🌐 Web & APIs
- React
- Vue.js 3
- Node.js
- JWT

### 🗄️ Bases de données
- PostgreSQL · pgvector
- SQL · Modélisation

### 🧰 Outils
- Git / GitHub / GitLab
- Docker
- Linux
- CI/CD
- npm / Gradle

---

## 🗣️ Langues
- Français — courant
- Arabe — langue maternelle
- Anglais — B2 (Linguaskill)

---

## 📂 Projets

### 🖼️ Application web de recherche d’images par similarité
Application full-stack de recherche d’images par similarité visuelle, développée en équipe de 3 (L3, Université de Bordeaux).

**Fonctionnalités :**
- Backend Spring Boot : API REST, descripteurs visuels (BoofCV), recherche vectorielle (pgvector)
- Frontend Vue.js 3 : galerie interactive, jeu de similarité, leaderboard
- Authentification JWT, pipeline CI/CD GitLab

**Tech :** Java, Spring Boot, Vue.js 3, TypeScript, PostgreSQL, pgvector, Docker, JWT, Maven  
🔗 [Voir le projet](https://github.com/Zakariaab03/image-similarity-search)

---

### 🔐 Web Security Scanner
Outil d’analyse de vulnérabilités web.

**Fonctionnalités :**
- Vérification HTTPS
- Analyse des headers de sécurité
- Détection des formulaires HTML
- Extraction de liens internes
- Génération de rapport JSON

**Tech :** Python  
🔗 [Voir le projet](https://github.com/Zakariaab03/Web-Security-Scanner)

---

### 🌐 Portfolio web dockerisé
Portfolio personnel développé avec une stack moderne et conteneurisé avec Docker.

**Tech :** TypeScript, React, Vite, Tailwind, Docker, Supabase  
🔗 [Voir le projet](https://github.com/Zakariaab03/portfolio)

---

### 🏢 Système de gestion de bâtiments
Application web MVC de gestion d’immeubles et d’appartements : authentification, rôles (locataire, propriétaire, syndic) et opérations CRUD.

**Tech :** Java, FreeMarker, H2, MVC  
🔗 [Voir le projet](https://gitlab.isima.fr/zaabouelaz/web-serveur)

---

### 🧬 Jeu de la Vie — Application Web
Version web du jeu de la vie de Conway : édition, sauvegarde et évolution de grilles persistées en base de données.

**Tech :** Java, FreeMarker, H2  
🔗 [Voir le projet](https://gitlab.isima.fr/zaabouelaz/jeu-de-la-vie)

---

### 🎮 Jeu Sokoban
Jeu Sokoban en terminal avec affichage via la bibliothèque ncurses, chargement de cartes et détection de victoire.

**Tech :** C, ncurses  
🔗 [Voir le projet](https://gitlab.isima.fr/zaabouelaz/jeu-de-sokoban)

---

### 📊 Simulation de Monte Carlo
Estimation de π par la méthode de Monte Carlo, avec générateur Mersenne Twister et intervalles de confiance à 99 %.

**Tech :** C, Mersenne Twister  
🔗 [Voir le projet](https://gitlab.isima.fr/zaabouelaz/simulation)

---

### 🃏 Jeu de Cartes
Jeu de cartes « La Réussite des Alliances », avec modes de jeu manuel et automatique.

**Tech :** Python  
🔗 [Voir le projet](https://gitlab.isima.fr/zaabouelaz/reussite-des-alliances)

---

## 💼 Expériences

### 🍔 Équipier polyvalent — McDonald’s (Aubière) · Sept. 2024 – Mars 2025
- Travail à forte cadence, polyvalence (cuisine, caisse, salle)
- Communication, travail en équipe, résistance au stress

### 🔬 Assistant de laboratoire — OMERIN (Ambert) · Juin – Sept. 2023
- Étalonnage de compteurs, suivi des mesures sous Excel
- Traçabilité et respect de protocoles techniques

### 📦 Inventoriste — RGIS (Clermont-Ferrand) · 2022 – Avr. 2023
- Comptage et vérification des stocks avec outils informatiques
- Organisation, rigueur, travail en équipe

---

## 🎓 Formation

- 🎓 Licence 3 Informatique — Université de Bordeaux *(2025–2026, en cours)*  
- 🎓 Licence 2 Informatique — Université Clermont Auvergne  
- 🎓 Licence 1 Mathématiques - Informatique — Université Clermont Auvergne  

---

## 🐳 Lancer avec Docker

Le portfolio est conteneurisé via un build multi-stage (Node pour le build → nginx pour le service).

```bash
# Construire l'image
docker build -t portfolio .

# Lancer le conteneur (http://localhost:8080)
docker run -p 8080:80 portfolio
```

> Le formulaire de contact (Supabase) est optionnel. Pour l'activer, passer les variables au build :
> ```bash
> docker build \
>   --build-arg VITE_SUPABASE_URL=... \
>   --build-arg VITE_SUPABASE_ANON_KEY=... \
>   -t portfolio .
> ```

---

## 📫 Contact

📧 Email : **abouelazzezakaria@gmail.com**  
📱 Téléphone : **06 19 52 58 04**  
🌐 Portfolio : https://zakariaabouelazze.com  
💼 LinkedIn : https://www.linkedin.com/in/zakariaabouelazze  
🐙 GitHub : https://github.com/Zakariaab03  

---

## ⚡ En recherche

🔍 Recherche une **alternance en informatique** (développement, cybersécurité, systèmes) à partir de septembre 2026.

---

⭐ N’hésitez pas à consulter mes projets ou à me contacter !

# syntax=docker/dockerfile:1

# --- Stage 1 : build de l'application Vite ---
FROM node:20-alpine AS build
WORKDIR /app

# Installation des dépendances (couche mise en cache tant que package*.json ne change pas)
COPY package*.json ./
RUN npm ci

# Variables d'environnement Supabase (optionnelles, injectées au moment du build)
# Sans elles, le formulaire de contact bascule proprement sur un lien mailto.
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
ENV VITE_SUPABASE_ANON_KEY=$VITE_SUPABASE_ANON_KEY

# Build de production
COPY . .
RUN npm run build

# --- Stage 2 : service des fichiers statiques via nginx ---
FROM nginx:alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

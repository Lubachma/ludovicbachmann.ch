import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'ft_transcendence',
    description:
      'Application web full-stack (SPA) de jeu Pong multijoueur en temps réel. Projet final en équipe à l\'École 42.',
    longDescription:
      'Frontend TypeScript avec moteur de jeu Canvas, backend Fastify (Node.js), base SQLite. Authentification JWT, OAuth 2.0 (42 / GitHub), 2FA (TOTP). Tournois avec enregistrement des résultats sur la blockchain Avalanche (Web3.js). Infrastructure conteneurisée (Docker Compose), reverse proxy Nginx, certificats SSL.',
    image: 'assets/images/projects/ft_transcendence.webp',
    technologies: ['TypeScript', 'Fastify', 'SQLite', 'Docker', 'Nginx', 'Blockchain'],
    githubUrl: 'https://github.com/Lubachma/Transcendence',
    featured: true,
  },
  {
    id: 2,
    title: 'Minishell',
    description:
      'Implémentation d\'un shell Unix complet en C : parsing, pipes, redirections, gestion des processus et signaux.',
    image: 'assets/images/projects/minishell.webp',
    technologies: ['C', 'Bash', 'Processus', 'Signaux'],
    githubUrl: 'https://github.com/Lubachma/Minishell',
    featured: true,
  },
  {
    id: 3,
    title: 'ft_irc',
    description:
      'Serveur IRC conforme à la RFC 2812 : gestion multi-clients (poll/select), authentification, canaux, messages privés, commandes opérateur.',
    image: 'assets/images/projects/ft_irc.webp',
    technologies: ['C++', 'TCP/IP', 'Sockets', 'RFC 2812'],
    githubUrl: 'https://github.com/Lubachma/IRC',
    featured: true,
  },
];

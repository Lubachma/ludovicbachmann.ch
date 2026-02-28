import { Skill } from '../models/skill.model';

export const SKILLS: Skill[] = [
  // Langages
  { name: 'C', icon: 'devicon-c-plain', colored: true, category: 'frontend' },
  { name: 'C++ (C++98)', icon: 'devicon-cplusplus-plain', colored: true, category: 'frontend' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain', colored: true, category: 'frontend' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain', colored: true, category: 'frontend' },
  { name: 'Bash', icon: 'devicon-bash-plain', category: 'frontend' },

  // Systèmes & Infra
  { name: 'Linux', icon: 'devicon-linux-plain', category: 'backend' },
  { name: 'macOS', icon: 'devicon-apple-original', category: 'backend' },
  { name: 'Docker', icon: 'devicon-docker-plain', colored: true, category: 'backend' },
  { name: 'Nginx', icon: 'devicon-nginx-original', colored: true, category: 'backend' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain', colored: true, category: 'backend' },
  { name: 'SQLite', icon: 'devicon-sqlite-plain', colored: true, category: 'backend' },

  // Outils
  { name: 'Git', icon: 'devicon-git-plain', colored: true, category: 'tools' },
  { name: 'GitHub', icon: 'devicon-github-original', category: 'tools' },
  { name: 'VS Code', icon: 'devicon-vscode-plain', colored: true, category: 'tools' },
  { name: 'GDB / Valgrind', icon: '', category: 'tools' },
  { name: 'SAP', icon: '', category: 'tools' },
  { name: 'Makefile', icon: '', category: 'tools' },
];

export interface Skill {
  name: string;
  icon: string; // classe Devicon (ex: 'devicon-typescript-plain')
  colored?: boolean; // true = icône colorée Devicon, false/undefined = hérite de la couleur texte
  category: 'frontend' | 'backend' | 'tools';
}

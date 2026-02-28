import { Experience } from '../models/experience.model';

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: 'Développement Informatique',
    company: 'École 42 Lausanne',
    location: 'Lausanne, Suisse',
    startDate: '2023-10',
    endDate: 'Present',
    description:
      "Formation intensive en programmation (C, C++, TypeScript). Projets pratiques : shell Unix, serveur IRC, application web full-stack. Apprentissage par les pairs, autonomie et résolution de problèmes.",
    technologies: ['C', 'C++', 'TypeScript', 'Docker', 'Linux', 'Git'],
    type: 'education',
  },
  {
    id: 2,
    role: "Gestionnaire d'Atelier",
    company: 'Rolex SA',
    location: 'Genève, Suisse',
    startDate: '2021-07',
    endDate: '2022-06',
    description:
      "Coordination des activités de plusieurs ateliers, animation de réunions quotidiennes. Suivi et priorisation des ordres de fabrication sur SAP. Interface entre équipes techniques et encadrement, reporting d'avancement.",
    technologies: ['SAP', 'Coordination', 'Reporting', 'Qualité'],
    type: 'work',
  },
  {
    id: 3,
    role: 'Gestionnaire pour le service client international',
    company: 'Patek Philippe',
    location: 'Genève, Suisse',
    startDate: '2020-07',
    endDate: '2020-10',
    description:
      "Prise en charge des montres en retour SAV : photographie, saisie dans SAP, création des ordres de travail. Planification des révisions en coordination avec les ateliers horlogers.",
    technologies: ['SAP', 'SAV', 'Planification', 'Horlogerie'],
    type: 'work',
  },
  {
    id: 4,
    role: 'Gestionnaire de Stocks',
    company: 'Rolex SA',
    location: 'Genève, Suisse',
    startDate: '2019-08',
    endDate: '2020-01',
    description:
      "Contrôle de conformité des composants entrants, gestion des écarts. Optimisation des niveaux de stock et suivi des mouvements sur SAP.",
    technologies: ['SAP', 'Gestion de stocks', 'Contrôle qualité'],
    type: 'work',
  },
  {
    id: 5,
    role: 'Agent de Transit Maritime',
    company: 'Bolloré Logistics Suisse',
    location: 'Genève, Suisse',
    startDate: '2017-11',
    endDate: '2019-05',
    description:
      "Gestion documentaire douanière, suivi d'envois internationaux. Résolution d'incidents logistiques, coordination avec les partenaires de transport.",
    technologies: ['Douane', 'Logistique', 'Transport international'],
    type: 'work',
  },
  {
    id: 6,
    role: 'CFC Employé de Commerce',
    company: 'Aimée-Stitelmann',
    location: 'Genève, Suisse',
    startDate: '2014-08',
    endDate: '2017-06',
    description:
      'Certificat fédéral de capacité en commerce.',
    technologies: [],
    type: 'education',
  },
];

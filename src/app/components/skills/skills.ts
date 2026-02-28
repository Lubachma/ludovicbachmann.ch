import { Component } from '@angular/core';
import { Skill } from '../../models/skill.model';
import { SKILLS } from '../../data/skills.data';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly categories = [
    { key: 'frontend' as const, label: 'Langages' },
    { key: 'backend' as const, label: 'Systèmes & Infra' },
    { key: 'tools' as const, label: 'Outils' },
  ];

  getSkillsByCategory(category: Skill['category']): Skill[] {
    return SKILLS.filter((s) => s.category === category);
  }
}

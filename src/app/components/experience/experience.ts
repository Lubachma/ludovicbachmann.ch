import { Component } from '@angular/core';
import { Experience as ExperienceModel } from '../../models/experience.model';
import { EXPERIENCES } from '../../data/experiences.data';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly experiences: ExperienceModel[] = EXPERIENCES;

  getTypeLabel(type: ExperienceModel['type']): string {
    const labels: Record<ExperienceModel['type'], string> = {
      work: 'Travail',
      education: 'Formation',
      certification: 'Certification',
    };
    return labels[type];
  }
}

import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isDark = signal(false);
  mobileMenuOpen = signal(false);

  readonly navLinks = [
    { label: 'Accueil', fragment: 'hero' },
    { label: 'A propos', fragment: 'about' },
    { label: 'Competences', fragment: 'skills' },
    { label: 'Projets', fragment: 'projects' },
    { label: 'Experience', fragment: 'experience' },
    { label: 'Contact', fragment: 'contact' },
  ];

  toggleTheme(): void {
    this.isDark.update((v) => !v);
    document.documentElement.setAttribute('data-theme', this.isDark() ? 'dark' : 'light');
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  scrollTo(fragment: string): void {
    this.mobileMenuOpen.set(false);
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
  }
}

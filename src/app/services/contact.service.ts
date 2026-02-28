import { Injectable } from '@angular/core';

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  /**
   * Envoie le formulaire de contact via Formspree (gratuit, pas de backend necessaire).
   * Cree un compte sur https://formspree.io et remplace l'URL ci-dessous.
   */
  private readonly formspreeUrl = 'https://formspree.io/f/xojnpdeg';

  async send(form: ContactForm): Promise<boolean> {
    try {
      const response = await fetch(this.formspreeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      return response.ok;
    } catch {
      return false;
    }
  }
}

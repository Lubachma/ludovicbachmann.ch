import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService, ContactForm } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  form: ContactForm = { name: '', email: '', message: '' };
  status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

  constructor(private contactService: ContactService) {}

  async onSubmit(): Promise<void> {
    this.status.set('sending');
    const ok = await this.contactService.send(this.form);
    this.status.set(ok ? 'success' : 'error');

    if (ok) {
      this.form = { name: '', email: '', message: '' };
    }
  }
}

import { aplicarLinksWhatsapp, iniciarFormulario } from './modules/booking-form';
import { iniciarDepoimentos } from './modules/testimonials';
import { iniciarNavegacao } from './modules/nav';
import { iniciarReveal } from './modules/reveal';
import { iniciarTratamentos } from './modules/treatments';

function iniciar(): void {
  iniciarNavegacao();
  iniciarFormulario();
  aplicarLinksWhatsapp();
  iniciarDepoimentos();
  iniciarTratamentos();
  iniciarReveal();

  const ano = document.querySelector<HTMLElement>('[data-ano]');
  if (ano) ano.textContent = String(new Date().getFullYear());
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciar);
} else {
  iniciar();
}

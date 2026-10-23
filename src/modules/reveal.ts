/** Entrada suave dos blocos ao entrar na tela. Desligada se o usuário pediu menos movimento. */

export function iniciarReveal(): void {
  const alvos = document.querySelectorAll<HTMLElement>('.reveal');
  if (alvos.length === 0) return;

  const menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (menosMovimento || !('IntersectionObserver' in window)) {
    alvos.forEach((alvo) => alvo.classList.add('is-visible'));
    return;
  }

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('is-visible');
        observador.unobserve(entrada.target);
      });
    },
    { threshold: 0.12 },
  );

  alvos.forEach((alvo) => observador.observe(alvo));
}

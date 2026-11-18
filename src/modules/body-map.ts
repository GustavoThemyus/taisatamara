/**
 * Mapa do corpo: ao passar o mouse ou focar num cartão, acende os pontos da
 * região correspondente, e o contrário também. O clique em si (abrir o
 * tratamento) fica em treatments.ts, que lê o data-abre dos dois.
 */

/** Tratamentos que não têm uma região do corpo: acendem o contorno inteiro. */
const CORPO_TODO = new Set(['idoso', 'musculacao']);

export function iniciarMapaCorpo(): void {
  const mapa = document.querySelector<HTMLElement>('[data-mapa]');
  if (!mapa) return;

  const pontos = Array.from(mapa.querySelectorAll<HTMLElement>('[data-ponto]'));
  const cartoes = Array.from(document.querySelectorAll<HTMLElement>('[data-card]'));

  const ativar = (tratamento: string | null): void => {
    pontos.forEach((ponto) => ponto.classList.toggle('is-ativo', ponto.dataset.trat === tratamento));
    cartoes.forEach((cartao) => cartao.classList.toggle('is-ativo', cartao.dataset.trat === tratamento));
    mapa.dataset.corpoTodo = tratamento !== null && CORPO_TODO.has(tratamento) ? 'true' : 'false';
  };

  [...pontos, ...cartoes].forEach((elemento) => {
    const tratamento = elemento.dataset.trat ?? null;
    elemento.addEventListener('mouseenter', () => ativar(tratamento));
    elemento.addEventListener('focus', () => ativar(tratamento));
    elemento.addEventListener('mouseleave', () => ativar(null));
    elemento.addEventListener('blur', () => ativar(null));
  });
}

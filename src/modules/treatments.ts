/**
 * "Onde dói?": os cartões e os pontos do corpo abrem o tratamento correspondente.
 * O acordeão em si é um <details> e abre e fecha sozinho. Este módulo só liga
 * os botões a ele e abre o item certo quando a URL chega com #trat-...
 */

function prefereMenosMovimento(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function abrir(id: string): void {
  const detalhe = document.getElementById(`trat-${id}`);
  if (!(detalhe instanceof HTMLDetailsElement)) return;

  // com name="tratamento" o navegador fecha o item que estava aberto
  detalhe.open = true;
  detalhe.scrollIntoView({ behavior: prefereMenosMovimento() ? 'auto' : 'smooth', block: 'start' });
}

export function iniciarTratamentos(): void {
  document.querySelectorAll<HTMLElement>('[data-abre]').forEach((botao) => {
    botao.addEventListener('click', (evento) => {
      const alvo = botao.dataset.abre;
      if (!alvo) return;
      evento.preventDefault();
      abrir(alvo);
      history.replaceState(null, '', `#trat-${alvo}`);
    });
  });

  // Cobre o carregamento com #trat-... e links que só mudam a hash na mesma página
  const abrirDaHash = (): void => {
    const alvo = /^#trat-(.+)$/.exec(window.location.hash);
    if (alvo?.[1]) abrir(alvo[1]);
  };

  window.addEventListener('hashchange', abrirDaHash);
  abrirDaHash();
}

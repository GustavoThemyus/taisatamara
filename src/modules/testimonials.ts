/** Carrossel de depoimentos: swipe nativo, setas no desktop e indicadores sincronizados. */

export function iniciarDepoimentos(): void {
  const trilho = document.querySelector<HTMLElement>('[data-carousel-track]');
  const dots = document.querySelector<HTMLElement>('[data-carousel-dots]');
  if (!trilho || !dots) return;

  const slides = Array.from(trilho.children) as HTMLElement[];
  if (slides.length === 0) return;

  let atual = 0;

  const botoesDot = slides.map((_, indice) => {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'dot-hit';
    botao.setAttribute('aria-label', `Ver depoimento ${indice + 1}`);
    botao.innerHTML = '<span class="dot"></span>';
    botao.addEventListener('click', () => irPara(indice));
    dots.append(botao);
    return botao;
  });

  const prev = document.querySelector<HTMLButtonElement>('[data-carousel-prev]');
  const next = document.querySelector<HTMLButtonElement>('[data-carousel-next]');

  function marcarAtual(indice: number): void {
    atual = indice;
    botoesDot.forEach((botao, i) => {
      if (i === indice) {
        botao.setAttribute('aria-current', 'true');
      } else {
        botao.removeAttribute('aria-current');
      }
    });
    if (prev) prev.disabled = indice === 0;
    if (next) next.disabled = indice === slides.length - 1;
  }

  function irPara(indice: number): void {
    const destino = slides[indice];
    if (!destino || !trilho) return;
    trilho.scrollTo({ left: destino.offsetLeft - trilho.offsetLeft, behavior: 'smooth' });
    marcarAtual(indice);
  }

  prev?.addEventListener('click', () => irPara(Math.max(0, atual - 1)));
  next?.addEventListener('click', () => irPara(Math.min(slides.length - 1, atual + 1)));

  trilho.addEventListener('keydown', (evento) => {
    if (evento.key === 'ArrowRight') irPara(Math.min(slides.length - 1, atual + 1));
    if (evento.key === 'ArrowLeft') irPara(Math.max(0, atual - 1));
  });

  /**
   * O swipe do dedo também move os indicadores. Deduzimos o slide pela posição
   * de rolagem — no desktop dois cards ficam visíveis ao mesmo tempo, e aí
   * "quem está mais perto da borda esquerda" é a única leitura que não oscila.
   */
  const sincronizar = (): void => {
    const base = trilho.scrollLeft;
    let maisProximo = 0;
    let menorDistancia = Number.POSITIVE_INFINITY;

    slides.forEach((slide, indice) => {
      const distancia = Math.abs(slide.offsetLeft - trilho.offsetLeft - base);
      if (distancia < menorDistancia) {
        menorDistancia = distancia;
        maisProximo = indice;
      }
    });

    if (maisProximo !== atual) marcarAtual(maisProximo);
  };

  trilho.addEventListener('scroll', sincronizar, { passive: true });
  window.addEventListener('resize', sincronizar, { passive: true });
  marcarAtual(0);
}

/** Menu em gaveta no celular, sombra do header ao rolar e link ativo por seção. */

const SECOES = ['inicio', 'servicos', 'sobre', 'processo', 'depoimentos', 'contato'];

function iniciarMenuMobile(): void {
  const abrir = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const fechar = document.querySelector<HTMLButtonElement>('[data-menu-close]');
  const painel = document.querySelector<HTMLElement>('[data-menu-panel]');
  if (!abrir || !fechar || !painel) return;

  const definirEstado = (aberto: boolean): void => {
    painel.hidden = !aberto;
    abrir.setAttribute('aria-expanded', String(aberto));
    // trava o scroll do fundo enquanto a gaveta está aberta
    document.body.style.overflow = aberto ? 'hidden' : '';
    if (aberto) {
      fechar.focus();
    } else {
      abrir.focus();
    }
  };

  abrir.addEventListener('click', () => definirEstado(true));
  fechar.addEventListener('click', () => definirEstado(false));

  // qualquer link da gaveta leva a uma âncora: fecha junto
  painel.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => definirEstado(false));
  });

  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && !painel.hidden) definirEstado(false);
  });
}

function iniciarSombraDoHeader(): void {
  const header = document.querySelector<HTMLElement>('#cabecalho');
  if (!header) return;

  const atualizar = (): void => {
    header.classList.toggle('shadow-float', window.scrollY > 8);
  };

  atualizar();
  window.addEventListener('scroll', atualizar, { passive: true });
}

function iniciarLinkAtivo(): void {
  const lista = document.querySelector<HTMLElement>('[data-nav-list]');
  if (!lista) return;

  const links = new Map<string, HTMLAnchorElement>();
  lista.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    links.set(link.hash.slice(1), link);
  });

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        const link = links.get(entrada.target.id);
        if (!link) return;
        if (entrada.isIntersecting) {
          links.forEach((outro) => outro.removeAttribute('aria-current'));
          link.setAttribute('aria-current', 'true');
        }
      });
    },
    // a seção vale como "ativa" quando ocupa a faixa central da tela
    { rootMargin: '-45% 0px -50% 0px' },
  );

  SECOES.forEach((id) => {
    const secao = document.getElementById(id);
    if (secao) observador.observe(secao);
  });
}

export function iniciarNavegacao(): void {
  iniciarMenuMobile();
  iniciarSombraDoHeader();
  iniciarLinkAtivo();
}

/**
 * Formulário de agendamento: valida os campos e abre o WhatsApp com a
 * mensagem já escrita. Não há backend: o contato acontece na conversa.
 */

import { SAUDACAO_WHATSAPP, WHATSAPP, whatsappConfigurado } from '../config';

interface Campo {
  nome: string;
  rotulo: string;
  obrigatorio: boolean;
}

const CAMPOS: Campo[] = [
  { nome: 'nome', rotulo: 'Nome', obrigatorio: true },
  { nome: 'email', rotulo: 'E-mail', obrigatorio: true },
  { nome: 'telefone', rotulo: 'Telefone', obrigatorio: true },
  { nome: 'data', rotulo: 'Data e hora', obrigatorio: true },
  { nome: 'mensagem', rotulo: 'Mensagem', obrigatorio: false },
];

function validar(campo: Campo, valor: string): string | null {
  if (campo.obrigatorio && valor.trim() === '') {
    return `Preencha o campo "${campo.rotulo}".`;
  }
  if (campo.nome === 'email' && valor !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor)) {
    return 'Digite um e-mail válido, como voce@exemplo.com.';
  }
  if (campo.nome === 'telefone' && valor.replace(/\D/g, '').length < 10) {
    return 'Digite o telefone com DDD, como (11) 98765-4321.';
  }
  return null;
}

/** "2026-10-28T14:30" → "28/10/2026 às 14:30" */
function formatarDataHora(valor: string): string {
  const data = new Date(valor);
  if (Number.isNaN(data.getTime())) return valor;

  const dia = data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const hora = data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  return `${dia} às ${hora}`;
}

function montarMensagem(dados: FormData): string {
  const linhas = [
    SAUDACAO_WHATSAPP,
    '',
    `*Nome:* ${String(dados.get('nome') ?? '').trim()}`,
    `*E-mail:* ${String(dados.get('email') ?? '').trim()}`,
    `*Telefone:* ${String(dados.get('telefone') ?? '').trim()}`,
    `*Preferência de horário:* ${formatarDataHora(String(dados.get('data') ?? ''))}`,
  ];

  const mensagem = String(dados.get('mensagem') ?? '').trim();
  if (mensagem !== '') {
    linhas.push('', `*Mensagem:* ${mensagem}`);
  }

  return linhas.join('\n');
}

export function iniciarFormulario(): void {
  const formulario = document.querySelector<HTMLFormElement>('[data-booking-form]');
  const aviso = document.querySelector<HTMLElement>('[data-form-error]');
  const sucesso = document.querySelector<HTMLElement>('[data-form-success]');
  if (!formulario || !aviso || !sucesso) return;

  const mostrarAviso = (texto: string): void => {
    aviso.textContent = texto;
    aviso.hidden = false;
    sucesso.hidden = true;
  };

  const limparAviso = (): void => {
    aviso.hidden = true;
  };

  // o aviso some assim que a pessoa recomeça a digitar
  formulario.addEventListener('input', limparAviso);

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const dados = new FormData(formulario);
    let primeiroInvalido: HTMLElement | null = null;

    for (const campo of CAMPOS) {
      const elemento = formulario.elements.namedItem(campo.nome);
      if (!(elemento instanceof HTMLInputElement) && !(elemento instanceof HTMLTextAreaElement)) continue;

      const erro = validar(campo, elemento.value);
      elemento.setAttribute('aria-invalid', String(erro !== null));

      if (erro !== null && primeiroInvalido === null) {
        primeiroInvalido = elemento;
        mostrarAviso(erro);
      }
    }

    if (primeiroInvalido) {
      primeiroInvalido.focus();
      return;
    }

    if (!whatsappConfigurado()) {
      mostrarAviso('O número de WhatsApp ainda não foi configurado em src/config.ts.');
      return;
    }

    limparAviso();
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(montarMensagem(dados))}`, '_blank', 'noopener');

    sucesso.textContent = 'Pronto! Abrimos o WhatsApp com os seus dados. É só enviar a mensagem.';
    sucesso.hidden = false;
    formulario.reset();
  });
}

/**
 * Troca o placeholder dos links estáticos de WhatsApp pelo número real,
 * para que preencher src/config.ts resolva o site inteiro de uma vez.
 */
export function aplicarLinksWhatsapp(): void {
  if (!whatsappConfigurado()) return;

  document.querySelectorAll<HTMLAnchorElement>(`a[href*="${WHATSAPP}"], a[href*="[55DDDNUMERO]"]`).forEach((link) => {
    link.href = link.href.replace(/%5B55DDDNUMERO%5D|\[55DDDNUMERO\]/, WHATSAPP);
  });
}

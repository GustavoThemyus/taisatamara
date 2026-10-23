/**
 * Único lugar do site que o JavaScript lê para funcionar.
 * Tudo que é só texto fica em index.html.
 */

/**
 * Número de WhatsApp no formato internacional, só dígitos:
 * 55 (Brasil) + DDD + número.
 *
 * Se algum dia voltar a ficar vazio ou fora desse formato, o formulário avisa
 * em vez de abrir um link quebrado.
 */
export const WHATSAPP = '5583988849429';

/** Saudação que abre a mensagem enviada pelo formulário. */
export const SAUDACAO_WHATSAPP = 'Olá! Gostaria de agendar uma consulta de fisioterapia.';

/** true quando o número está num formato que o wa.me aceita. */
export const whatsappConfigurado = (): boolean => /^\d{12,13}$/.test(WHATSAPP);

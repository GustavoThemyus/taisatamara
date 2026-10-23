/**
 * Único lugar do site que o JavaScript lê para funcionar.
 * Tudo que é só texto fica em index.html, marcado com [colchetes].
 */

/**
 * Número de WhatsApp no formato internacional, só dígitos:
 * 55 (Brasil) + DDD + número. Ex.: 5511987654321
 *
 * Enquanto estiver com o valor abaixo, o formulário avisa em vez de abrir
 * um link quebrado, e os botões de WhatsApp do site continuam sem destino.
 */
export const WHATSAPP = '[55DDDNUMERO]';

/** Saudação que abre a mensagem enviada pelo formulário. */
export const SAUDACAO_WHATSAPP = 'Olá! Gostaria de agendar uma consulta de fisioterapia.';

/** true quando o número já foi preenchido de verdade. */
export const whatsappConfigurado = (): boolean => /^\d{12,13}$/.test(WHATSAPP);

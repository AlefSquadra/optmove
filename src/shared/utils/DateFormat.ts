import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

// Ativa o plugin para parsing com formato customizado
dayjs.extend(customParseFormat);

/**
 * Converte uma string de data no formato "DD/MM/YYYY HH:mm:ss"
 * para o formato ISO "YYYY-MM-DDTHH:mm:ss".
 *
 * @param input - A data no formato "DD/MM/YYYY HH:mm:ss"
 * @returns A data no formato "YYYY-MM-DDTHH:mm:ss" ou """ se inválida
 */
function formatToISO(input: string): string {
  const parsed = dayjs(input, "DD/MM/YYYY HH:mm:ss", true); // true para parsing estrito

  if (!parsed.isValid()) {
    console.warn(`Data inválida: "${input}"`);
    return "";
  }

  return parsed.format("YYYY-MM-DDTHH:mm:ss");
}
/**
 * Converte um objeto Date para string no formato "DD/MM/YYYY HH:mm:ss".
 *
 * @param date - O objeto Date a ser convertido
 * @returns A data no formato "DD/MM/YYYY HH:mm:ss" ou "" se inválida
 */
function dateToString(date: Date): string {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    console.warn(`Data inválida:`, date);
    return "";
  }

  return dayjs(date).format("YYYY-MM-DDTHH:mm:ss");
}

export const DateFormat = { formatToISO, dateToString };

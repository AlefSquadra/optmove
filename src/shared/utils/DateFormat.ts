import dayjs, { Dayjs } from "dayjs";
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

/**
 * Converte uma string "DD/MM/YYYY HH:mm:ss" diretamente para um objeto Date.
 *
 * @param input - Data no formato "DD/MM/YYYY HH:mm:ss"
 * @returns Instância Date ou null se inválida
 */
function stringToDate(input: string): Date | null {
  const parsed = dayjs(input, "DD/MM/YYYY HH:mm:ss", true);

  if (!parsed.isValid()) {
    console.warn(`Data inválida: "${input}"`);
    return null;
  }

  return parsed.toDate();
}

/**
 * Converte uma string "DD/MM/YYYY HH:mm:ss" para a instância Dayjs.
 *
 * @param input - Data no formato "DD/MM/YYYY HH:mm:ss"
 * @returns Instância Dayjs ou null se inválida
 */
function stringToDayjs(input: string): Dayjs | null {
  const parsed = dayjs(input, "DD/MM/YYYY HH:mm:ss", true);

  return parsed.isValid() ? parsed : null;
}

function isoToSpace(input: string): string {
  const parsed = dayjs(input); // dayjs entende ISO automaticamente
  return parsed.isValid() ? parsed.format("YYYY-MM-DD HH:mm:ss") : "";
}

export const DateFormat = { formatToISO, dateToString, stringToDate, stringToDayjs, isoToSpace };

import { IAccumulatedYPositions } from "../GHTChart.types";

export interface IDrawCanvasHorizontalYard {
  /**
   * Contexto 2D do canvas onde as linhas serão desenhadas,
   * representando a área dos pátios na visualização do gráfico.
   */
  ctxStationYard: CanvasRenderingContext2D;
  padding: number;
  height: number;
  width: number;
  accumulatedYPositions: IAccumulatedYPositions[];
}

/**
 * Desenha uma linha conectando os pontos no gráfico principal coom os canvas left e right.
 *
 * @param {IDrawLinesParams} props - Um objeto contendo as propriedades necessárias para desenhar as linhas.
 * @param {CanvasRenderingContext2D} props.ctxStationYard - O contexto 2D do canvas dos pátios.
 * @param {number} props.padding - O espaçamento interno do gráfico.
 * @param {number} props.height - A altura total do gráfico.
 * @param {number} props.width - A largura total do gráfico.
 * @param {IAccumulatedYPositions[]} props.accumulatedYPositions - Array de posições Y acumuladas.
 */
export const drawCanvasHorizontalYard = (props: IDrawCanvasHorizontalYard) => {
  const { ctxStationYard, accumulatedYPositions, padding, height, width } = props;

  accumulatedYPositions.forEach(({ yPos, allocatedSpace, label }) => {
    // Garante que a posição Y esteja dentro dos limites definidos pelo padding
    if (yPos < padding) yPos = padding;
    if (yPos > height - padding) yPos = height - padding;

    // Desenha a linha horizontal
    ctxStationYard.strokeStyle = "#bbb";
    ctxStationYard.beginPath();
    ctxStationYard.moveTo(0, yPos);
    ctxStationYard.lineTo(width, yPos);
    ctxStationYard.stroke();

    // Adiciona o label apenas se o espaço alocado for maior que 10 ou se for zero para evitar sobreposicã
    if (allocatedSpace > 10 || allocatedSpace == 0) {
      ctxStationYard.fillStyle = "#333";
      ctxStationYard.font = "9px 'Roboto', sans-serif";
      ctxStationYard.textAlign = "left";
      ctxStationYard.fillText(label, 1, yPos + 10);
    }
  });
};

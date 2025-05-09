import { IAccumulatedYPositions } from "../GHTChart.types";

interface DrawAxesParams {
  ctxChart: CanvasRenderingContext2D;
  hoursToShow: number;
  database: Date;
  height: number;
  padding: number;
  paddingLeft: number;
  paddingRight: number;
  hourSpacing: number;
  width: number;
  accumulatedYPositions: IAccumulatedYPositions[];
}

/**
 * Desenha os eixos do gráfico principal no canvas central (ctxChart).
 *
 * Esse método é responsável por:
 * - Renderizar as linhas verticais do eixo X com as horas
 * - Renderizar as labels de hora nos extremos inferior e superior
 * - Renderizar as linhas horizontais do eixo Y baseadas nas posições acumuladas (proporções dos labels)
 */
export const drawAxesAndGuides = (props: DrawAxesParams) => {
  const {
    ctxChart,
    hoursToShow,
    database,
    height,
    padding,
    paddingLeft,
    hourSpacing,
    width,
    accumulatedYPositions,
    paddingRight,
  } = props;
  ctxChart.strokeStyle = "#bbb";
  ctxChart.lineWidth = 1;

  // Desenha as linhas verticais do eixo X e as labels de hora
  for (let i = 0; i <= hoursToShow; i++) {
    const time = new Date(database.getTime() + i * 60 * 60 * 1000);
    const timeLabel = time.getHours().toString().padStart(2, "0") + ":00"; // Formata para "HH:00"
    const x = paddingLeft + i * hourSpacing; // Posição horizontal da linha

    // Linha vertical (eixo Y)
    ctxChart.beginPath();
    ctxChart.moveTo(x, height - padding);
    ctxChart.lineTo(x, padding);
    ctxChart.stroke();

    // Adiciona a hora na parte inferior e superior do gráfico
    ctxChart.font = "12px 'Roboto', sans-serif";
    ctxChart.fillStyle = "#666";
    ctxChart.textAlign = "center";
    ctxChart.fillText(timeLabel, x, height - padding + 20);
    ctxChart.fillText(timeLabel, x, padding - 15);
  }

  // Desenha linhas horizontais que correspondem às divisões de Y (proporcional à altura dos labels)
  accumulatedYPositions.forEach(({ backgroundColor, yPos, allocatedSpace }) => {
    ctxChart.strokeStyle = "#bbb";
    ctxChart.beginPath();
    ctxChart.moveTo(paddingLeft, yPos);
    ctxChart.lineTo(width, yPos);
    ctxChart.stroke();

    // Adiciona as cores
    ctxChart.fillStyle = backgroundColor;
    ctxChart.globalAlpha = 0.3;
    ctxChart.fillRect(paddingLeft, yPos, width - paddingLeft - paddingRight + 1, allocatedSpace);
  });
};

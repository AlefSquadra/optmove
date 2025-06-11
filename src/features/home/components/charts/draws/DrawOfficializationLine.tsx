/**
 * Arquivo responsável por desenhar a linha de oficialização no gráfico GHT.
 *
 * A linha de oficialização é uma linha vertical que marca o momento em que
 * os dados do gráfico se tornam "oficiais" ou confirmados. Esta linha serve
 * como divisor visual entre dados planejados/programados e dados executados/confirmados.
 */

import { getCanvasXFromTime } from "../utils/getCanvasXFromTime";

type IDrawOfficializationLineProps = {
  ctxChart: CanvasRenderingContext2D;
  canvasChart: HTMLCanvasElement;
  paddingLeft: number;
  hourSpacing: number;
  database: Date;
  height: number;
  padding: number;
  dataOfficialization: Date | string;
};

export const drawOfficializationLine = (props: IDrawOfficializationLineProps) => {
  const { ctxChart, dataOfficialization, canvasChart, paddingLeft, padding, database, height, hourSpacing } = props;
  ctxChart.strokeStyle = "#00c000";
  ctxChart.lineWidth = 3;
  ctxChart.setLineDash([]);

  const x = getCanvasXFromTime({
    time: new Date(dataOfficialization),
    canvasWidth: canvasChart.width,
    paddingLeft,
    hourSpacing,
    database,
  });

  // Renderiza as linhas verticais do eixo y
  ctxChart.beginPath();
  ctxChart.moveTo(x, height - padding);
  ctxChart.lineTo(x, padding);
  ctxChart.stroke();
};

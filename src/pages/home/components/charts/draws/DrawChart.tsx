import { IDataGHT, IYLabelsGHT } from "../GHTChart.types";
import { dataOfficialization } from "../GHTChartMock";
import { getCanvasXFromTime } from "../utils/getCanvasXFromTime";
import { getCanvasYFromYardValue } from "../utils/getCanvasYFromYardValue";

export interface Segment {
  xi: string | number | Date;
  xf: string | number | Date;
  yi: number;
  yf: number;
  dash?: boolean;
}

export interface SegmentClickData {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  lineIndex: number;
  segmentIndex: number;
}

export interface HoveredSegmentIndex {
  lineIndex: number;
  segmentIndex: number;
}

export interface DrawChartProps {
  ctxChart: CanvasRenderingContext2D;
  canvasChart: HTMLCanvasElement;
  width: number;
  height: number;
  padding: number;
  paddingLeft: number;
  paddingRight: number;
  hourSpacing: number;
  rangeHeight: number;
  yLabels: IYLabelsGHT[];
  data: IDataGHT[];
  hoveredSegmentIndex: HoveredSegmentIndex;
  setSegmentClickData: React.Dispatch<React.SetStateAction<SegmentClickData[]>>;
  database: Date;
}

const drawChart = ({
  ctxChart,
  canvasChart,
  width,
  height,
  padding,
  paddingLeft,
  paddingRight,
  hourSpacing,
  rangeHeight,
  yLabels,
  data,
  hoveredSegmentIndex,
  setSegmentClickData,
  database,
}: DrawChartProps) => {
  ctxChart.globalAlpha = 1;

  data.forEach((lineData, lineIndex) => {
    const { segments, name, color } = lineData;
    segments.forEach((segment, segmentIndex) => {
      let xPosStart = getCanvasXFromTime({
        time: new Date(segment.xi),
        canvasWidth: canvasChart.width,
        paddingLeft,
        hourSpacing,
        database,
      });
      let yPosStart = getCanvasYFromYardValue({
        padding,
        rangeHeight,
        yLabels,
        yValue: segment.yi,
      });
      let xPosEnd = getCanvasXFromTime({
        time: new Date(segment.xf),
        canvasWidth: canvasChart.width,
        paddingLeft,
        hourSpacing,
        database,
      });
      let yPosEnd = getCanvasYFromYardValue({
        padding,
        rangeHeight,
        yLabels,
        yValue: segment.yf,
      });

      let xOfficialization = getCanvasXFromTime({
        time: new Date(dataOfficialization),
        canvasWidth: canvasChart.width,
        paddingLeft,
        hourSpacing,
        database,
      });
      console.log(xOfficialization);
      // Ajuste: Se a linha começar antes do início do gráfico, forçar para começar no paddingLeft (início visível)
      if (xPosStart < paddingLeft) {
        xPosStart = paddingLeft; // Começa no início visível do gráfico
      }

      // Limitar a posição X final dentro dos limites do gráfico
      if (xPosEnd > width - paddingRight) {
        xPosEnd = width - paddingRight;
      }

      // Limitar as posições Y dentro dos limites do gráfico
      if (yPosStart < padding) yPosStart = padding;
      if (yPosEnd > height - padding) yPosEnd = height - padding;

      // Desenhar a linha se estiver dentro dos limites ajustados
      const isHovered =
        lineIndex === hoveredSegmentIndex.lineIndex && segmentIndex === hoveredSegmentIndex.segmentIndex;
      const lineColor = isHovered ? "#00bfff" : color;

      ctxChart.lineWidth = 2;
      ctxChart.strokeStyle = lineColor;

      // Verifica se o tracejado está ativo e ajusta o padrão de linha
      if (segment.dash) {
        ctxChart.setLineDash([5, 5]); // Define o padrão de linha tracejada (5px de linha, 5px de espaço)
      } else {
        ctxChart.setLineDash([]); // Linha sólida
      }

      setSegmentClickData((prev) => [
        ...prev,
        {
          x1: xPosStart,
          y1: yPosStart,
          x2: xPosEnd,
          y2: yPosEnd,
          lineIndex,
          segmentIndex,
        },
      ]);

      ctxChart.beginPath();
      ctxChart.moveTo(xPosStart, yPosStart); // Começa a desenhar a linha na posição ajustada
      ctxChart.lineTo(xPosEnd, yPosEnd); // Termina na posição calculada ou ajustada
      ctxChart.stroke();

      if (segmentIndex === 0) {
        const labelX = (xPosStart + xPosEnd) / 2;
        const labelY = (yPosStart + yPosEnd) / 2;

        ctxChart.fillStyle = "rgba(0, 0, 0, 0.7)";
        const labelWidth = ctxChart.measureText(name).width + 10;
        const labelHeight = 20;
        ctxChart.fillRect(labelX - labelWidth / 2, labelY - labelHeight / 2 + 20, labelWidth, labelHeight);

        ctxChart.font = "9px Arial";
        ctxChart.fillStyle = "#ffffff";
        ctxChart.textAlign = "center";
        ctxChart.fillText(name, labelX, labelY + 24);
      }
    });
  });
};

export { drawChart };

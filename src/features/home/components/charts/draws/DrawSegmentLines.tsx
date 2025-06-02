/**
 * Arquivo responsável por desenhar as linhas dos trens (segmentos) no gráfico GHT.
 *
 * Cada trem é composto por múltiplos segmentos que representam diferentes trechos
 * da viagem. O desenho varia conforme a relação com a data de oficialização:
 * segmentos executados (linha grossa) vs planejados (linha normal).
 */
import type { IClickableElement, IDataGHT, IHoveredSegmentIndex, IYLabelsGHT } from "../GHTChart.types";
import { getCanvasXFromTime } from "../utils/getCanvasXFromTime";
import { getCanvasYFromYardValue } from "../utils/getCanvasYFromYardValue";
import { activityIconsToCanvas, loadImageToCanvas } from "../utils/ImageLoadCanvas";

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
  hoveredSegmentIndex: IHoveredSegmentIndex;
  setSegmentClickData: React.Dispatch<React.SetStateAction<IClickableElement[]>>;
  database: Date;
  dataOfficialization: Date;
}

const drawActivityIcon = async (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  activityType: string,
  color: string = "red",
  size: number = 12,
) => {
  ctx.save();

  const iconSrc = activityIconsToCanvas[activityType];

  if (iconSrc) {
    try {
      const img = await loadImageToCanvas(iconSrc);
      const half = size / 2;
      const offset = -12; // Offset de -12 no Y para posicionar o ícone acima da linha
      ctx.drawImage(img, x - half, y - half + offset, size, size);
    } catch (e) {
      console.error(`Erro ao carregar ícone: ${iconSrc}`, e);
      // Fallback: círculo simples quando imagem falha
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(x, y, size / 2, 0, Math.PI * 2);
      ctx.fill();
    }
  } else {
    // Fallback: círculo quando tipo de atividade não tem ícone
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, size / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
};

const drawSegmentLinesChart = ({
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
  dataOfficialization,
}: DrawChartProps) => {
  ctxChart.globalAlpha = 1;
  const segmentTrainLineClicked: IClickableElement[] = [];
  const dateOfOfficialization = new Date(dataOfficialization);

  data.forEach((lineData, lineIndex) => {
    const { segments, name, color } = lineData;

    segments.forEach((segment, segmentIndex) => {
      const segmentStartTime = new Date(segment.xi);
      const segmentEndTime = new Date(segment.xf);

      /**
        Classifica o segmento em relação à data de oficialização (3 casos possíveis):
          1. Completamente antes da oficialização - segmento já executado (linha grossa)
          2. Cruzando a linha de oficialização - parte executada + parte planejada (linha híbrida)  
          3. Completamente depois da oficialização - segmento planejado (linha normal)
       */
      const isFullyBeforeOfficialization = segmentEndTime <= dateOfOfficialization;
      const isPartiallyBeforeOfficialization =
        segmentStartTime < dateOfOfficialization && segmentEndTime > dateOfOfficialization;

      // Converte tempos e valores de pátio em coordenadas do canvas
      let xPosStart = getCanvasXFromTime({
        time: segmentStartTime,
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
        time: segmentEndTime,
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

      // Clamp: mantém os segmentos dentro da área visível do gráfico
      if (xPosStart < paddingLeft) xPosStart = paddingLeft;
      if (xPosEnd > width - paddingRight) xPosEnd = width - paddingRight;
      if (yPosStart < padding) yPosStart = padding;
      if (yPosEnd > height - padding) yPosEnd = height - padding;

      // Aplicar cor azul quando segmento (trem) está em hover
      const isHovered =
        lineIndex === hoveredSegmentIndex.lineIndex && segmentIndex === hoveredSegmentIndex.segmentIndex;
      const lineColor = isHovered ? "#00bfff" : color;

      if (segment.dash) {
        ctxChart.setLineDash([2, 2]);
      } else {
        ctxChart.setLineDash([]);
      }

      // Registra segmento para detecção de cliques
      segmentTrainLineClicked.push({
        coordinates: {
          line: { x1: xPosStart, y1: yPosStart, x2: xPosEnd, y2: yPosEnd },
        },
        data: {
          ...segment,
          type: lineData.type || "NO TYPE IS SET",
        },
        elementType: "train",
        id: `${lineIndex}-${segmentIndex}`,
        name,
        event: {} as React.MouseEvent,
      });

      // Caso 1: Segmento completamente antes da oficialização
      if (isFullyBeforeOfficialization) {
        ctxChart.lineWidth = 4; // Linha mais grossa
        ctxChart.strokeStyle = lineColor;
        ctxChart.beginPath();
        ctxChart.moveTo(xPosStart, yPosStart);
        ctxChart.lineTo(xPosEnd, yPosEnd);
        ctxChart.stroke();
      }
      // Caso 2: Segmento cruzando a linha de oficialização
      else if (isPartiallyBeforeOfficialization) {
        // Calcular o ponto X onde a linha de oficialização cruza o segmento
        const xPosOfficialization = getCanvasXFromTime({
          time: dateOfOfficialization,
          canvasWidth: canvasChart.width,
          paddingLeft,
          hourSpacing,
          database,
        });

        // Calcular o ponto Y correspondente na linha do segmento
        // Usando interpolação linear para encontrar o ponto Y na linha
        const ratio = (xPosOfficialization - xPosStart) / (xPosEnd - xPosStart);
        const yPosOfficialization = yPosStart + ratio * (yPosEnd - yPosStart);

        // Desenhar a parte antes da oficialização com linha grossa
        ctxChart.lineWidth = 4;
        ctxChart.strokeStyle = lineColor;
        ctxChart.beginPath();
        ctxChart.moveTo(xPosStart, yPosStart);
        ctxChart.lineTo(xPosOfficialization, yPosOfficialization);
        ctxChart.stroke();

        // Desenhar a parte após a oficialização com linha normal
        ctxChart.lineWidth = 2;
        ctxChart.setLineDash([8, 1]);
        ctxChart.beginPath();
        ctxChart.moveTo(xPosOfficialization, yPosOfficialization);
        ctxChart.lineTo(xPosEnd, yPosEnd);
        ctxChart.stroke();
      }
      // Caso 3: Segmento completamente depois da oficialização
      else {
        ctxChart.lineWidth = 2; // Espessura normal
        ctxChart.setLineDash([5, 2]);
        ctxChart.strokeStyle = lineColor;
        ctxChart.beginPath();
        ctxChart.moveTo(xPosStart, yPosStart);
        ctxChart.lineTo(xPosEnd, yPosEnd);
        ctxChart.stroke();
      }

      if (segment.activities && segment.activities.length > 0) {
        segment.activities.forEach((activity) => {
          // Calcula posição proporcional da atividade ao longo do segmento
          const actX = xPosStart + (xPosEnd - xPosStart) * activity.position;
          const actY = yPosStart + (yPosEnd - yPosStart) * activity.position;

          drawActivityIcon(ctxChart, actX, actY, activity.type, activity.color || "red");

          // Registra atividade para detecção de cliques
          segmentTrainLineClicked.push({
            coordinates: {
              point: { x: actX, y: actY },
            },
            data: {
              ...activity,
              segmentId: segment.id,
              trainName: name,
              trainId: lineData.id,
              segmentIndex,
              lineIndex,
            },
            elementType: "activity",
            id: `activity-${lineIndex}-${segmentIndex}-${activity.id}`,
            name: `Atividade: ${activity.type}`,
            event: {} as React.MouseEvent,
          });
        });
      }

      // Adicionar o nome do trem no primeiro segmento
      if (segmentIndex === 0) {
        const labelX = (xPosStart + xPosEnd) / 2;
        const labelY = (yPosStart + yPosEnd) / 2;

        ctxChart.fillStyle = "#ffffff";
        const labelWidth = ctxChart.measureText(name).width + 10;
        const labelHeight = 20;
        ctxChart.fillRect(labelX - labelWidth / 2, labelY - labelHeight / 2 + 20, labelWidth, labelHeight);

        ctxChart.font = "9px Arial";
        ctxChart.fillStyle = "#000000";
        ctxChart.textAlign = "center";
        ctxChart.fillText(name, labelX, labelY + 24);
      }
    });
  });

  setSegmentClickData(segmentTrainLineClicked);
};

export { drawSegmentLinesChart };

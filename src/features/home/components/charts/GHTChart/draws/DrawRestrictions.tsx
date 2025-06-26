/**
 * Arquivo responsável por desenhar restrições no gráfico GHT.
 *
 * As restrições são representadas como retângulos semi-transparentes que cobrem
 * períodos de tempo e trechos ferroviários onde há limitações operacionais
 * (como interdições, manutenções, etc.).
 */

import type { IClickableElement, IRestrictionsGHT } from "../GHTChart.types";
import { getCanvasXFromTime } from "../utils/getCanvasXFromTime";
import { type IGetCanvasYFromYardValueProps, getCanvasYFromYardValue } from "../utils/getCanvasYFromYardValue";

export interface IDrawRestrictions {
  ctxChart: CanvasRenderingContext2D;
  restrictions: IRestrictionsGHT[];
  canvasWidth: number;
  paddingLeft: number;
  hourSpacing: number;
  database: Date;
  canvasYFromYardValue: Omit<IGetCanvasYFromYardValueProps, "yValue">;
  padding: number;
  height: number;
  paddingRight: number;
  selectedElementClickable?: IClickableElement;
}

export const drawRestrictions = (props: IDrawRestrictions) => {
  const {
    restrictions,
    ctxChart,
    canvasWidth,
    database,
    hourSpacing,
    paddingLeft,
    padding,
    height,
    canvasYFromYardValue,
    paddingRight,
    selectedElementClickable,
  } = props;

  restrictions.forEach((restricao) => {
    const { xi, xf, yi, yf, color, id } = restricao;
    const restrictionId = id || "";

    /* 
      Converte datas de início/fim e valores de pátio em coordenadas do canvas.
      Calcular posições X e Y com base nas datas e valores fornecidos.
    */
    let xPosStart = getCanvasXFromTime({
      time: new Date(xi),
      canvasWidth,
      paddingLeft,
      hourSpacing,
      database,
    });

    let xPosEnd = getCanvasXFromTime({
      time: new Date(xf),
      canvasWidth,
      paddingLeft,
      hourSpacing,
      database,
    });

    let yPosStart = getCanvasYFromYardValue({
      ...canvasYFromYardValue!,
      yValue: yi,
    });

    let yPosEnd = getCanvasYFromYardValue({
      ...canvasYFromYardValue!,
      yValue: yf,
    });

    // Clamp: garante que as restrições não ultrapassem os limites visíveis do gráfico
    if (xPosStart < paddingLeft) xPosStart = paddingLeft;
    if (xPosEnd > canvasWidth - paddingRight) xPosEnd = canvasWidth - paddingRight;
    if (yPosStart < padding) yPosStart = padding;
    if (yPosEnd > height - padding) yPosEnd = height - padding;

    // Desenha retângulo com transparência para não sobrepor completamente os trens
    ctxChart.fillStyle = color || "rgba(0, 0, 255, 0.3)";
    ctxChart.globalAlpha = 0.3;
    ctxChart.beginPath();
    ctxChart.fillRect(
      xPosStart,
      yPosStart - padding,
      xPosEnd - xPosStart,
      yPosEnd - yPosStart == 0 ? yPosEnd + yPosStart : yPosEnd - yPosStart,
    );
    // ctxChart.globalAlpha = 1;

    // Aplica borda azul se a restrição estiver selecionada
    const isSelected =
      selectedElementClickable &&
      selectedElementClickable.elementType === "restriction" &&
      selectedElementClickable.id === restrictionId;

    if (isSelected) {
      // Desenhar borda azul
      ctxChart.strokeStyle = "#0066FF"; // Azul brilhante
      ctxChart.lineWidth = 2;
      ctxChart.setLineDash([]);
      ctxChart.strokeRect(xPosStart, yPosStart, xPosEnd - xPosStart, yPosEnd - yPosStart);
    }
  });
};

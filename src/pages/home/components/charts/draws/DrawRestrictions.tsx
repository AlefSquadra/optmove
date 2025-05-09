import { IRestrictionsGHT } from "../GHTChart.types";
import { getCanvasXFromTime } from "../utils/getCanvasXFromTime";
import { getCanvasYFromYardValue, IGetCanvasYFromYardValueProps } from "../utils/getCanvasYFromYardValue";

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
  } = props;

  restrictions.forEach((restricao) => {
    const { xi, xf, yi, yf, color } = restricao;

    // Calcular posições X e Y com base nas datas e valores fornecidos
    let xPosStart = getCanvasXFromTime({
      time: new Date(xi),
      canvasWidth,
      paddingLeft,
      hourSpacing,
      database,
    });
    let yPosStart = getCanvasYFromYardValue({
      ...canvasYFromYardValue!,
      yValue: yi,
    });
    let xPosEnd = getCanvasXFromTime({
      time: new Date(xf),
      canvasWidth,
      paddingLeft,
      hourSpacing,
      database,
    });
    let yPosEnd = getCanvasYFromYardValue({
      ...canvasYFromYardValue!,
      yValue: yf,
    });

    // Limitar as posições X dentro dos limites do gráfico
    if (xPosStart < paddingLeft) xPosStart = paddingLeft;
    if (xPosEnd > canvasWidth - paddingRight) xPosEnd = canvasWidth - paddingRight;

    // Limitar as posições Y dentro dos limites do gráfico
    if (yPosStart < padding) yPosStart = padding;
    if (yPosEnd > height - padding) yPosEnd = height - padding;

    // Definir a cor do retângulo
    ctxChart.fillStyle = color || "rgba(0, 0, 255, 0.3)"; // Use a cor passada ou uma cor padrão com transparência
    ctxChart.globalAlpha = 0.3;
    // Desenhar o retângulo
    ctxChart.beginPath();
    ctxChart.fillRect(xPosStart, yPosStart, xPosEnd - xPosStart, yPosEnd - yPosStart);
    ctxChart.globalAlpha = 1;
  });
};

import { getCanvasXFromTime } from "../utils/getCanvasXFromTime";

// utils/drawOfficializationLine.ts
type IdrawOfficializationLineProps = {
  ctxChart: CanvasRenderingContext2D;
  canvasChart: HTMLCanvasElement;
  paddingLeft: number;
  hourSpacing: number;
  database: any;
  height: number;
  padding: number;
  dataOfficialization: Date | string;
};

export const drawOfficializationLine = (props: IdrawOfficializationLineProps) => {
  const { ctxChart, dataOfficialization, canvasChart, paddingLeft, padding, database, height, hourSpacing } = props;
  ctxChart.strokeStyle = "green";
  ctxChart.lineWidth = 3;
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

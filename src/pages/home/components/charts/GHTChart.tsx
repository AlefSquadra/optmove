import clsx from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";
import { drawAxesAndGuides } from "./draws/DrawAxesGHT";
import { drawCanvasHorizontalYard } from "./draws/DrawCanvasHorizontalYard";
import { drawChart } from "./draws/DrawChart";
import { drawOfficializationLine } from "./draws/DrawOfficializationLine";
import { drawRestrictions } from "./draws/DrawRestrictions";
import { useGrabbingDragHorizontalGHT } from "./functions/GrabbingDragHorizontalGHT";
import { IDataGHT, IRestrictionsGHT, IYLabelsGHT } from "./GHTChart.types";
import { useGHTChartContext } from "./provider/GHTChartProvider";
import { calculateHoursToMidnightNextDay } from "./utils/calculateHoursToMidnightNextDay";
import { formatDate } from "./utils/formatDate";
import { getCanvasXFromTime } from "./utils/getCanvasXFromTime";
import { getCanvasYFromYardValue } from "./utils/getCanvasYFromYardValue";
import { pointToLineDistance } from "./utils/pointToLineDistance";
import { throttle } from "./utils/throttle";

interface IGHTChartProps {
  data: IDataGHT[];
  dataOfficialization: Date;
  yLabels: IYLabelsGHT[];
  database: Date;
  restricoes: IRestrictionsGHT[];
  defaultHeight: number;
}

export const GHTChart = (props: IGHTChartProps) => {
  const { data, database, defaultHeight, restricoes, yLabels, dataOfficialization } = props;
  const canvasLeftRef = useRef(null);
  const canvasRightRef = useRef(null);
  const canvasChartRef = useRef<HTMLCanvasElement>(null);
  const containerRefChart = useRef(null);
  const containerRef = useRef(null);
  const [zoom, setZoomValue] = useState(0);
  const [hoveredSegmentIndex, setHoveredSegmentIndex] = useState({ lineIndex: null, segmentIndex: null });
  const [segmentClickData, setSegmentClickData] = useState<any>([]);

  const paddingLeft = 0;
  const paddingRight = 0;
  const hourSpacing = 100 + 100 * zoom; // define a largura em pixels que cada hora ocupa.

  /** */
  const extraHourOffset = 1;
  const padding = 40;

  /* Calcula as horas a partir da data base até a meia-noite do dia seguinte */
  const hoursToShow = useMemo(() => calculateHoursToMidnightNextDay(database), [database]);

  /* Define dimensões do canvas com base na quantidade de horas e zoom */
  const width = (hoursToShow + extraHourOffset) * hourSpacing + paddingLeft + paddingRight;
  const height = defaultHeight + 500 * zoom;
  const { cursorPointer } = useGHTChartContext();

  const { isDraggingRef } = useGrabbingDragHorizontalGHT({ containerRefChart });

  useEffect(() => {
    const canvasLeft = canvasLeftRef.current;
    const canvasRight = canvasRightRef.current;
    const canvasChart = canvasChartRef.current;
    const container = containerRef.current;

    const canvases = document.querySelectorAll("canvas");

    canvases.forEach((canvas) => {
      canvas.style.aspectRatio = "auto";
      canvas.style.height = `${height}px`;
    });

    if (!canvasLeft || !canvasRight || !canvasChart || !container) return;

    const ctxLeft = canvasLeft.getContext("2d");
    const ctxRight = canvasRight.getContext("2d");
    const ctxChart = canvasChart.getContext("2d");

    if (!ctxLeft || !ctxRight || !ctxChart) return;

    canvasLeft.width = 100;
    canvasLeft.height = height;
    canvasRight.width = 100;
    canvasRight.height = height;
    canvasChart.width = width;
    canvasChart.height = height;

    canvasLeft.style.border = "none";
    canvasRight.style.border = "none";
    canvasChart.style.border = "none";

    canvasLeft.style.padding = "0";
    canvasRight.style.padding = "0";
    canvasChart.style.padding = "0";

    canvasLeft.style.margin = "0";
    canvasRight.style.margin = "0";
    canvasChart.style.margin = "0";

    const totalYValues = yLabels.reduce((sum, label) => sum + label.value, 0);
    const rangeHeight = height - padding * 2;

    let accumulatedHeight = 0;
    const accumulatedYPositions = yLabels.map(({ label, value, backgroundColor }) => {
      const proportion = value / totalYValues;
      const allocatedSpace = proportion * rangeHeight;

      const yPos = height - padding - accumulatedHeight - allocatedSpace;
      accumulatedHeight += allocatedSpace;

      return { label, yPos, allocatedSpace, backgroundColor };
    });

    ctxLeft.globalAlpha = 1.0;
    ctxRight.globalAlpha = 1.0;

    /** Responsavel por desenha as linhas X e Y do grafico, incluindo a label de horas */
    drawAxesAndGuides({
      ctxChart,
      hoursToShow,
      database,
      height,
      padding,
      paddingLeft,
      paddingRight,
      hourSpacing,
      width,
      accumulatedYPositions,
    });

    /** Desenha e as linhas dos patios*/
    drawCanvasHorizontalYard({
      ctxStationYard: ctxLeft,
      accumulatedYPositions,
      height,
      padding,
      width,
    });
    drawCanvasHorizontalYard({
      ctxStationYard: ctxRight,
      accumulatedYPositions,
      height,
      padding,
      width,
    });

    // Desenha as linhas de trem no grafico
    drawChart({
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
    });

    // Desenha a linha do horario da oficialização
    drawOfficializationLine({
      ctxChart,
      canvasChart,
      paddingLeft,
      hourSpacing,
      database,
      height,
      dataOfficialization,
      padding,
    });

    drawRestrictions({
      ctxChart,
      paddingLeft,
      hourSpacing,
      database,
      canvasWidth: canvasChart.width,
      canvasYFromYardValue: {
        padding,
        rangeHeight,
        yLabels,
      },
      height,
      padding,
      paddingRight,
      restrictions: restricoes,
    });

    const getDistanceFromLine = (mouseX, mouseY, x1, y1, x2, y2) => {
      const A = mouseX - x1;
      const B = mouseY - y1;
      const C = x2 - x1;
      const D = y2 - y1;
      const dot = A * C + B * D;
      const len_sq = C * C + D * D;
      const param = len_sq !== 0 ? dot / len_sq : -1;

      let xx, yy;

      if (param < 0) {
        xx = x1;
        yy = y1;
      } else if (param > 1) {
        xx = x2;
        yy = y2;
      } else {
        xx = x1 + param * C;
        yy = y1 + param * D;
      }

      const dx = mouseX - xx;
      const dy = mouseY - yy;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const handleMouseMove = (event: any) => {
      // Obtém as dimensões e posição do canvas
      const rect = canvasChart.getBoundingClientRect();

      // Calcula a escala entre o tamanho visível do canvas e seu tamanho real
      const scaleX = canvasChart.width / rect.width; // Escala no eixo X
      const scaleY = canvasChart.height / rect.height; // Escala no eixo Y

      // Posição do mouse dentro do canvas ajustada pela escala
      const mouseX = (event.clientX - rect.left) * scaleX;
      const mouseY = (event.clientY - rect.top) * scaleY;

      const tooltip = document.getElementById("tooltip");
      let hovered = false;

      data.forEach((lineData, lineIndex) => {
        const { segments } = lineData;

        segments.forEach((segment, segmentIndex) => {
          // Calcula a posição inicial e final do segmento no gráfico
          const startX = getCanvasXFromTime({
            time: new Date(segment.xi),
            canvasWidth: canvasChart.width,
            paddingLeft,
            hourSpacing,
            database,
          });
          const startY = getCanvasYFromYardValue({
            padding,
            rangeHeight,
            yLabels,
            yValue: segment.yi,
          });
          const endX = getCanvasXFromTime({
            time: new Date(segment.xf),
            canvasWidth: canvasChart.width,
            paddingLeft,
            hourSpacing,
            database,
          });
          const endY = getCanvasYFromYardValue({
            padding,
            rangeHeight,
            yLabels,
            yValue: segment.yf,
          });
          // Verifica a distância do mouse para o segmento
          const proximityThreshold = 10;
          const distanceToLine = getDistanceFromLine(mouseX, mouseY, startX, startY, endX, endY);

          if (distanceToLine <= proximityThreshold) {
            setHoveredSegmentIndex({ lineIndex, segmentIndex });
            hovered = true;

            // Ajusta a posição do tooltip e seu conteúdo
            tooltip.style.opacity = "1";
            tooltip.style.left = `${event.clientX + 10}px`; // Ajusta com base no cliente (posição do mouse)
            tooltip.style.top = `${event.clientY - rect.top + 10}px`; // Ajusta com base no cliente (posição do mouse)
            tooltip.innerHTML = `
              <h3></strong> ${lineData.name}</h3>
              <strong>Data Inicial:</strong> ${formatDate(new Date(segment.xi))}<br>
              <strong>Data Final:</strong> ${formatDate(new Date(segment.xf))}<br>
              ${segment.info
                .map(
                  (item) => `
                <strong>${item.label}:</strong> ${item.value}<br>
              `,
                )
                .join("")}
            `;
            return;
          }
        });
      });

      if (!hovered) {
        setHoveredSegmentIndex({ lineIndex: null, segmentIndex: null });
        tooltip.style.opacity = "0";
        handleMouseMoveForRestricoes(
          event,
          ctxChart,
          restricoes,
          canvasChart.width,
          paddingLeft,
          hourSpacing,
          database,
        );
      }
    };

    const handleMouseMoveForRestricoes = (e, ctxChart, restricoes, canvasWidth, paddingLeft, hourSpacing, database) => {
      //console.log("Entrando em handleMouseMoveForRestricoes");

      const rect = ctxChart.canvas.getBoundingClientRect();
      const scrollLeftOffset = containerRefChart.current.scrollLeft;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      //console.log(`Mouse X: ${mouseX}, Mouse Y: ${mouseY}`);

      const tooltip = document.getElementById("tooltip");
      let hovered = false;

      restricoes.forEach((restricao) => {
        const { xi, xf, yi, yf, name, info } = restricao;
        const xPosStart = getCanvasXFromTime({
          time: new Date(xi),
          canvasWidth,
          paddingLeft,
          hourSpacing,
          database,
        });
        const xPosEnd = getCanvasXFromTime({
          time: new Date(xf),
          canvasWidth,
          paddingLeft,
          hourSpacing,
          database,
        });
        const yPosStart = getCanvasYFromYardValue(yi);
        const yPosEnd = getCanvasYFromYardValue(yf);

        //console.log(`Retângulo: X Start: ${xPosStart}, X End: ${xPosEnd}, Y Start: ${yPosStart}, Y End: ${yPosEnd}`);

        // Verifica se o mouse está sobre o retângulo considerando Y inverso
        const isMouseOverX = mouseX >= xPosStart && mouseX <= xPosEnd;
        const isMouseOverY =
          yPosStart > yPosEnd ?
            mouseY <= yPosStart && mouseY >= yPosEnd // Caso o Y esteja invertido
          : mouseY >= yPosStart && mouseY <= yPosEnd;

        if (isMouseOverX && isMouseOverY) {
          console.log(`Mouse está sobre a restrição: ${name}`);
          hovered = true;

          // Exibir o tooltip com os dados da restrição
          tooltip.style.opacity = "0.7";
          tooltip.style.left = `${e.clientX + 10}px`;
          tooltip.style.top = `${e.clientY - rect.top + 10}px`;
          tooltip.innerHTML = `
            <h3></strong> ${name}</h3>
            <strong>Data Inicial:</strong> ${formatDate(new Date(xi))}<br>
            <strong>Data Final:</strong> ${formatDate(new Date(xf))}<br>
            ${info
              .map(
                (item) => `
              <strong>${item.label}:</strong> ${item.value}<br>
            `,
              )
              .join("")}
          `;
        }
      });

      if (!hovered) {
        tooltip.style.opacity = "0";
      }
    };

    const throttledHandleMouseMove = throttle(handleMouseMove, 1000);

    const clickTest = (e) => {
      const rect = canvasChart.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Verifica se clicou em alguma linha (tolerância de 5px)
      const clickedSegment = segmentClickData.find(({ x1, y1, x2, y2 }) => {
        const dist = pointToLineDistance({ px: clickX, py: clickY, x1, y1, x2, y2 });
        return dist < 5; // tolerância
      });

      if (clickedSegment) {
        console.log("Segmento clicado: " + JSON.stringify(clickedSegment));
        // showLogo(clickedSegment.logo, clickX, clickY);
      }
    };

    container.addEventListener("mousemove", throttledHandleMouseMove);
    canvasChart.addEventListener("click", clickTest);
    return () => {
      container.removeEventListener("mousemove", throttledHandleMouseMove);
      container.removeEventListener("click", clickTest);
    };
  }, [data, hoveredSegmentIndex, defaultHeight]);

  // const handleAddInput = () => {
  //   setZoomValue(zoom + 1.5);
  // };

  // const handleRemoveInput = () => {
  //   if (zoom > 0) {
  //     setZoomValue(zoom - 1.5);
  //   }
  // };

  return (
    <>
      <div ref={containerRef} className="relative flex justify-center">
        <canvas ref={canvasLeftRef} style={{ display: "block", width: 100 }} />
        <div
          ref={containerRefChart}
          className={clsx(
            "relative w-full overflow-x-auto",
            "cursor-" + cursorPointer,
            isDraggingRef.current ? "cursor-grabbing" : "",
          )}
        >
          <canvas ref={canvasChartRef} style={{ display: "block", width: `${width}px` }} onMouseMove={() => {}} />
        </div>
        <canvas ref={canvasRightRef} style={{ display: "block", width: 100 }} />
      </div>
      <div id="tooltip" className="color-[#000] pointer-events-none absolute z-50 rounded-md bg-white p-4"></div>
    </>
  );
};

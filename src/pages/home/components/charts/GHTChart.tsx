import clsx from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";
import { drawAxesAndGuides } from "./draws/DrawAxesGHT";
import { drawCanvasHorizontalYard } from "./draws/DrawCanvasHorizontalYard";
import { drawOfficializationLine } from "./draws/DrawOfficializationLine";
import { drawRestrictions } from "./draws/DrawRestrictions";
import { drawSegmentLinesChart } from "./draws/DrawSegmentLines";
import { ContextMenu } from "./elements/GHTChartContextMenu/GHTChartContextMenu";
import { useGHTChartMouseEvents } from "./functions/UseGHTChartMouseEvent";
import { useGrabbingDragHorizontalGHT } from "./functions/UseGrabbingDragHorizontalGHT";
import { IClickableElement, IDataGHT, IRestrictionsGHT, IYLabelsGHT } from "./GHTChart.types";
import { useGHTChartContext } from "./provider/GHTChartProvider";
import { calculateHoursToMidnightNextDay } from "./utils/calculateHoursToMidnightNextDay";
import { throttle } from "./utils/throttle";

interface IGHTChartProps {
  data: IDataGHT[];
  dataOfficialization: Date;
  yLabels: IYLabelsGHT[];
  database: Date;
  restrictions: IRestrictionsGHT[];
  defaultHeight: number;
}

export const GHTChart = (props: IGHTChartProps) => {
  const { data, database, defaultHeight, restrictions: restricoes, yLabels, dataOfficialization } = props;
  const canvasLeftRef = useRef(null);
  const canvasRightRef = useRef(null);
  const canvasChartRef = useRef<HTMLCanvasElement>(null);
  const containerRefChart = useRef(null);
  const containerRef = useRef(null);
  const [hoveredSegmentIndex, setHoveredSegmentIndex] = useState({ lineIndex: null, segmentIndex: null });
  const [elementClickData, setElementClickData] = useState<IClickableElement[]>([] as IClickableElement[]);
  const [tooltipData, setTooltipData] = useState<{
    x: number;
    y: number;
    content: React.ReactNode;
  } | null>(null);

  // Dimensões fixas para todo o gráfico
  const FIXED_HEIGHT = defaultHeight;
  const CANVAS_SIDE_WIDTH = 100;

  // Valores de padding constantes
  const paddingLeft = 0;
  const paddingRight = 0;
  const padding = 40;
  const extraPaddingHourOffset = 1;

  // Espaçamento de horas para zoom
  const initialHourSpacing = 70; // (100 + 100)
  const [hourSpacing, setHourSpacing] = useState(initialHourSpacing);

  // Calcula horas até meia-noite
  const hoursToShow = useMemo(() => calculateHoursToMidnightNextDay(database), [database]);

  // Calcula largura do canvas principal com base no zoom
  const width = useMemo(() => {
    return Math.max(
      (hoursToShow + extraPaddingHourOffset) * hourSpacing + paddingLeft + paddingRight,
      500, // Largura mínima para evitar canvas vazio
    );
  }, [hoursToShow, hourSpacing]);

  // Altura efetiva para desenho (descontando paddings)
  const rangeHeight = FIXED_HEIGHT - padding * 2;

  const { isDraggingRef } = useGrabbingDragHorizontalGHT({ containerRefChart });

  // Referências iniciais
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectionStart, setSelectionStart] = useState<{ x: number; y: number } | null>(null);
  const [selectionEnd, setSelectionEnd] = useState<{ x: number; y: number } | null>(null);
  const { cursorPointer, openContextMenu, setOpenContextMenu, selectedElementClickable } = useGHTChartContext();

  // Efeito para renderização inicial forçada e manter dimensões
  useEffect(() => {
    const drawCharts = () => {
      const canvasLeft = canvasLeftRef.current;
      const canvasRight = canvasRightRef.current;
      const canvasChart = canvasChartRef.current;

      if (!canvasLeft || !canvasRight || !canvasChart) return;

      // Forçar dimensões corretas
      canvasLeft.width = CANVAS_SIDE_WIDTH;
      canvasLeft.height = FIXED_HEIGHT;
      canvasRight.width = CANVAS_SIDE_WIDTH;
      canvasRight.height = FIXED_HEIGHT;

      // Aplicar estilos explícitos
      canvasLeft.style.height = `${FIXED_HEIGHT - 15}px`;
      canvasRight.style.height = `${FIXED_HEIGHT - 15}px`;
      canvasChart.style.height = `${FIXED_HEIGHT - 15}px`;
      canvasChart.style.width = `${width}px`;

      // Marcar renderização inicial como completa
      setInitialRenderComplete(true);
    };

    drawCharts();

    // Listener para redimensionamento
    window.addEventListener("resize", drawCharts);
    return () => window.removeEventListener("resize", drawCharts);
  }, [width]);

  // Efeito para gerenciar eventos de seleção e zoom
  useEffect(() => {
    const canvas = canvasChartRef.current;
    if (!canvas) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return; // Apenas clique esquerdo

      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Garantir que as coordenadas estejam dentro do canvas
      if (mouseX < 0 || mouseX > canvas.width || mouseY < 0 || mouseY > canvas.height) return;

      setIsSelecting(true);
      setSelectionStart({ x: mouseX, y: mouseY });
      setSelectionEnd(null);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isSelecting || !selectionStart) return;

      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Limitar dentro da área do canvas
      const boundedX = Math.max(0, Math.min(mouseX, canvas.width));
      const boundedY = Math.max(0, Math.min(mouseY, canvas.height));

      setSelectionEnd({ x: boundedX, y: boundedY });
    };

    const handleMouseUp = () => {
      if (!isSelecting || !selectionStart || !selectionEnd) {
        setIsSelecting(false);
        return;
      }

      setIsSelecting(false);

      const x0 = Math.min(selectionStart.x, selectionEnd.x);
      const x1 = Math.max(selectionStart.x, selectionEnd.x);
      const y0 = Math.min(selectionStart.y, selectionEnd.y);
      const y1 = Math.max(selectionStart.y, selectionEnd.y);

      const selectedWidth = x1 - x0;
      const selectedHeight = y1 - y0;

      if (selectedWidth < 10 || selectedHeight < 10) {
        // Ignorar seleções muito pequenas
        setSelectionStart(null);
        setSelectionEnd(null);
        return;
      }

      // Obter a largura do container
      const container = containerRefChart.current;
      if (!container) {
        setSelectionStart(null);
        setSelectionEnd(null);
        return;
      }

      try {
        // Verificar se a seleção foi feita de baixo para cima
        const isBottomToTop = selectionEnd.y < selectionStart.y;

        // Calcular zoom baseado na direção da seleção
        if (isBottomToTop) {
          // Comportamento para seleção de baixo para cima: resetar para o zoom padrão
          setZoomLevel(1);
          setHourSpacing(initialHourSpacing);

          // Centralizar na posição da seleção após resetar
          const centerX = (x0 + x1) / 2;
          const centerRatio = centerX / canvasChartRef.current.width;

          setTimeout(() => {
            // Calcular posição com base na proporção da seleção
            const newScrollPosition =
              centerRatio * ((hoursToShow + extraPaddingHourOffset) * initialHourSpacing) - container.clientWidth / 2;
            container.scrollLeft = Math.max(0, newScrollPosition);
          }, 50);
        } else {
          // Comportamento original para seleção de cima para baixo (ampliação)
          const zoomFactor = Math.min(Math.max(container.clientWidth / selectedWidth, 0.5), 3);
          const newZoomLevel = Math.min(Math.max(zoomLevel * zoomFactor, 0.2), 5);
          const newHourSpacing = Math.max(initialHourSpacing * newZoomLevel, 50);

          // Calcular posição em horas (antes do zoom)
          const centerXRatio = (x0 + x1) / (2 * canvasChartRef.current.width);
          const centerHourPosition = centerXRatio * hoursToShow;

          // Atualizar estado
          setZoomLevel(newZoomLevel);
          setHourSpacing(newHourSpacing);

          // Ajustar scroll após o redesenho
          setTimeout(() => {
            const newWidth = (hoursToShow + extraPaddingHourOffset) * newHourSpacing;
            const newScrollPosition = (centerHourPosition / hoursToShow) * newWidth - container.clientWidth / 2;
            container.scrollLeft = Math.max(0, newScrollPosition);
          }, 50);
        }

        // Limpar a seleção
        setSelectionStart(null);
        setSelectionEnd(null);
      } catch (error) {
        console.error("Erro ao calcular zoom:", error);
        setSelectionStart(null);
        setSelectionEnd(null);
      }
    };

    // Adicionar event listeners
    canvas.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [
    isSelecting,
    selectionStart,
    selectionEnd,
    hourSpacing,
    zoomLevel,
    initialHourSpacing,
    hoursToShow,
    extraPaddingHourOffset,
  ]);

  // Efeito principal para desenhar o gráfico
  useEffect(() => {
    if (!initialRenderComplete) return;

    try {
      const canvasLeft = canvasLeftRef.current;
      const canvasRight = canvasRightRef.current;
      const canvasChart = canvasChartRef.current;

      if (!canvasLeft || !canvasRight || !canvasChart) return;

      const ctxLeft = canvasLeft.getContext("2d", { alpha: true, desynchronized: false });
      const ctxRight = canvasRight.getContext("2d", { alpha: true, desynchronized: false });
      const ctxChart = canvasChart.getContext("2d", { alpha: true, desynchronized: false });

      if (!ctxLeft || !ctxRight || !ctxChart) return;

      // Definir as dimensões corretas antes de desenhar
      canvasLeft.width = CANVAS_SIDE_WIDTH;
      canvasLeft.height = FIXED_HEIGHT;
      canvasRight.width = CANVAS_SIDE_WIDTH;
      canvasRight.height = FIXED_HEIGHT;

      // Garantir largura mínima para o canvas principal
      const safeWidth = Math.max(width, 500);
      canvasChart.width = safeWidth;
      canvasChart.height = FIXED_HEIGHT;

      // Limpar todos os canvas
      ctxLeft.clearRect(0, 0, CANVAS_SIDE_WIDTH, FIXED_HEIGHT);
      ctxRight.clearRect(0, 0, CANVAS_SIDE_WIDTH, FIXED_HEIGHT);
      ctxChart.clearRect(0, 0, safeWidth, FIXED_HEIGHT);

      // Configurar alpha
      ctxLeft.globalAlpha = 1.0;
      ctxRight.globalAlpha = 1.0;
      ctxChart.globalAlpha = 1.0;

      // Calcular posições Y para os pátios
      let accumulatedHeight = 0;
      const accumulatedYPositions = yLabels.map(({ label, value, backgroundColor }) => {
        const proportion = value / totalYValues;
        const allocatedSpace = proportion * rangeHeight;

        const yPos = FIXED_HEIGHT - padding - accumulatedHeight - allocatedSpace;
        accumulatedHeight += allocatedSpace;

        return { label, yPos, allocatedSpace, backgroundColor };
      });

      // Desenhar eixos e guias
      drawAxesAndGuides({
        ctxChart,
        hoursToShow,
        database,
        height: FIXED_HEIGHT,
        padding,
        paddingLeft,
        paddingRight,
        hourSpacing,
        width: safeWidth,
        accumulatedYPositions,
      });

      // Desenhar linhas horizontais dos pátios
      drawCanvasHorizontalYard({
        ctxStationYard: ctxLeft,
        accumulatedYPositions,
        height: FIXED_HEIGHT,
        padding,
        width: CANVAS_SIDE_WIDTH,
      });

      drawCanvasHorizontalYard({
        ctxStationYard: ctxRight,
        accumulatedYPositions,
        height: FIXED_HEIGHT,
        padding,
        width: CANVAS_SIDE_WIDTH,
      });

      // Desenhar linhas de trem
      drawSegmentLinesChart({
        ctxChart,
        canvasChart,
        width: safeWidth,
        height: FIXED_HEIGHT,
        padding,
        paddingLeft,
        paddingRight,
        hourSpacing,
        rangeHeight,
        yLabels,
        data,
        hoveredSegmentIndex,
        setSegmentClickData: setElementClickData,
        database,
        dataOfficialization,
      });

      // Desenhar linha de oficialização
      drawOfficializationLine({
        ctxChart,
        canvasChart,
        paddingLeft,
        hourSpacing,
        database,
        height: FIXED_HEIGHT,
        dataOfficialization,
        padding,
      });

      // Desenhar restrições
      drawRestrictions({
        ctxChart,
        paddingLeft,
        hourSpacing,
        database,
        canvasWidth: safeWidth,
        canvasYFromYardValue: {
          padding,
          rangeHeight,
          yLabels,
        },
        height: FIXED_HEIGHT,
        padding,
        paddingRight,
        restrictions: restricoes,
        selectedElementClickable,
      });

      // Desenhar retângulo de seleção (se existir)
      if (isSelecting && selectionStart && selectionEnd) {
        const x = Math.min(selectionStart.x, selectionEnd.x);
        const y = Math.min(selectionStart.y, selectionEnd.y);
        const w = Math.abs(selectionStart.x - selectionEnd.x);
        const h = Math.abs(selectionStart.y - selectionEnd.y);

        // Preenchimento semi-transparente
        ctxChart.fillStyle = "rgba(0, 123, 255, 0)";
        ctxChart.fillRect(x, y, w, h);

        // Borda
        ctxChart.strokeStyle = "black";
        ctxChart.lineWidth = 1;
        ctxChart.setLineDash([]);
        ctxChart.strokeRect(x, y, w, h);
      }
    } catch (error) {
      console.error("Erro ao renderizar o gráfico:", error);
    }
  }, [
    initialRenderComplete,
    data,
    width,
    hourSpacing,
    hoveredSegmentIndex,
    isSelecting,
    selectionStart,
    selectionEnd,
    selectedElementClickable,
  ]);

  // Cálculos de valores para posicionamento
  const totalYValues = yLabels.reduce((sum, label) => sum + label.value, 0);

  // Configuração dos handlers de evento do mouse
  const { handleMouseMove, handleClick } = useGHTChartMouseEvents({
    data,
    canvasRef: canvasChartRef,
    hourSpacing,
    rangeHeight,
    paddingLeft,
    padding,
    database,
    yLabels,
    restricoes,
    segmentClickData: elementClickData,
    setTooltipData,
    setHoveredSegmentIndex,
  });

  return (
    <>
      <div ref={containerRef} className="relative flex justify-center" style={{ height: `${FIXED_HEIGHT}px` }}>
        <canvas
          ref={canvasLeftRef}
          style={{ display: "block", width: CANVAS_SIDE_WIDTH, height: `${FIXED_HEIGHT}px` }}
        />
        <div
          ref={containerRefChart}
          className={clsx(
            "relative w-full overflow-x-auto",
            "cursor-" + cursorPointer,
            isDraggingRef.current ? "cursor-grabbing"
            : isSelecting ? "cursor-crosshair"
            : "",
          )}
          style={{ height: `${FIXED_HEIGHT}px` }}
        >
          <canvas
            ref={canvasChartRef}
            style={{
              display: "block",
            }}
            onMouseMove={(e) => {
              // Permite o movimento do mouse quando não estiver selecionando
              if (!isSelecting) {
                throttle(handleMouseMove, 100)(e);
              }
            }}
            onClick={(e) => {
              // Cliques só funcionam quando não estiver selecionando
              if (!isSelecting) {
                console.log("Clique detectado! in click left");
                throttle(handleClick, 100)(e);
              }
            }}
            onContextMenu={(e) => {
              // Prevenir o menu padrão do navegador
              e.preventDefault();
              e.stopPropagation();

              if (!isSelecting) {
                console.log("Clique detectado! in click right");
                throttle(handleClick, 100)(e);

                // Obter informações do item clicado
              }
            }}
          />
        </div>
        <canvas
          ref={canvasRightRef}
          style={{ display: "block", width: CANVAS_SIDE_WIDTH, height: `${FIXED_HEIGHT}px` }}
        />
      </div>

      {tooltipData && !openContextMenu?.name && (
        <div
          className={clsx("pointer-events-none absolute z-50 min-w-52 rounded-md bg-white")}
          style={{
            left: tooltipData.x,
            top: tooltipData.y,
          }}
        >
          {tooltipData.content}
        </div>
      )}

      {openContextMenu && (
        <ContextMenu
          name={openContextMenu.name}
          x={openContextMenu.x}
          y={openContextMenu.y}
          type={openContextMenu.type}
          data={openContextMenu.data}
          onClose={() => setOpenContextMenu(null)}
          onAction={(action, data) => console.log(action, data)}
        />
      )}
    </>
  );
};

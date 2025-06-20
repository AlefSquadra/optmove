/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-nocheck

/**
 * Hook React que gerencia eventos de mouse para interação com o gráfico GHT.
 *
 * Implementa detecção de hover sobre elementos (trens/restrições), exibição de tooltips,
 * detecção de cliques com hierarquia de prioridade, e abertura de menus de contexto.
 * Utiliza cálculos geométricos para determinar proximidade e interseções.
 */

import { useCallback } from "react";
import type { IContextMenuProps } from "../elements/GHTChartContextMenu/GHTChartContextMenu";
import type { IClickableElement, IDataGHT, IRestrictionsGHT, IYLabelsGHT } from "../GHTChart.types";
import { useGHTChartContext } from "../provider/GHTChartProvider";
import { formatDate } from "../utils/formatDate";
import { getCanvasXFromTime } from "../utils/getCanvasXFromTime";
import { getCanvasYFromYardValue } from "../utils/getCanvasYFromYardValue";
import { pointToLineDistance } from "../utils/pointToLineDistance";

// Interface para o resultado do clique
export interface ClickResult {
  type: "train" | "restriction" | "background";
  id: string | number | null;
  data?: any; // Dados adicionais do item clicado
  segmentTrainLine?: IClickableElement; // Para linha de trem
  restriction?: IRestrictionsGHT; // Para restrição
}

export interface IUseGHTChartMouseEventsProps {
  data: IDataGHT[];
  canvasRef: React.RefObject<HTMLCanvasElement>;
  hourSpacing: number;
  rangeHeight: number;
  paddingLeft: number;
  padding: number;
  database: Date;
  yLabels: IYLabelsGHT[];
  restricoes: IRestrictionsGHT[];
  segmentClickData: IClickableElement[];
  setTooltipData: React.Dispatch<React.SetStateAction<{ x: number; y: number; content: React.ReactNode } | null>>;
  setHoveredSegmentIndex: React.Dispatch<
    React.SetStateAction<{ lineIndex: number | null; segmentIndex: number | null }>
  >;
}

export const useGHTChartMouseEvents = ({
  data,
  canvasRef,
  hourSpacing,
  rangeHeight,
  paddingLeft,
  padding,
  database,
  yLabels,
  restricoes,
  segmentClickData,
  setTooltipData,
  setHoveredSegmentIndex,
}: IUseGHTChartMouseEventsProps) => {
  const { setOpenContextMenu, setSelectedElementClickable } = useGHTChartContext();

  // Detecta se o mouse está perto o suficiente de uma linha para interagir
  const getDistanceFromLine = useCallback(
    (mouseX: number, mouseY: number, x1: number, y1: number, x2: number, y2: number) => {
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
    },
    [],
  );

  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();

      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      const mouseX = (event.clientX - rect.left) * scaleX;
      const mouseY = (event.clientY - rect.top) * scaleY;

      let hovered = false;
      let restrictionHovered = false;

      // Detecção de hover em segmentos de trem
      data.forEach((lineData, lineIndex) => {
        lineData.segments.forEach((segment, segmentIndex) => {
          const startX = getCanvasXFromTime({
            time: new Date(segment.xi),
            canvasWidth: canvas.width,
            paddingLeft,
            hourSpacing,
            database,
          });
          const startY = getCanvasYFromYardValue({ padding, rangeHeight, yLabels, yValue: segment.yi });
          const endX = getCanvasXFromTime({
            time: new Date(segment.xf),
            canvasWidth: canvas.width,
            paddingLeft,
            hourSpacing,
            database,
          });
          const endY = getCanvasYFromYardValue({ padding, rangeHeight, yLabels, yValue: segment.yf });

          // Threshold de 10px para considerar "próximo" da linha
          const proximityThreshold = 10;
          const distance = getDistanceFromLine(mouseX, mouseY, startX, startY, endX, endY);

          if (distance <= proximityThreshold) {
            setHoveredSegmentIndex({ lineIndex, segmentIndex });
            hovered = true;

            // Posiciona tooltip próximo ao cursor (offset +10px)
            setTooltipData({
              x: event.clientX + 10,
              y: event.clientY + 10,
              content: (
                <div className="p-4">
                  <h3>{lineData.name}</h3>
                  <div>
                    <strong>Data Inicial:</strong> {formatDate(new Date(segment.xi))}
                  </div>
                  <div>
                    <strong>Data Final:</strong> {formatDate(new Date(segment.xf))}
                  </div>
                  {segment.info.map((item) => (
                    <div key={item.label}>
                      <strong>{item.label}:</strong> {item.value}
                    </div>
                  ))}
                </div>
              ),
            });

            setSelectedElementClickable({
              elementType: "train",
              coordinates: {
                line: {
                  x1: startX,
                  y1: startY,
                  x2: endX,
                  y2: endY,
                },
              },
              data: {
                ...segment,
                type: lineData.type ?? "NO TYPE IS SET",
              },
              id: `${lineIndex}-${segmentIndex}`,
              name: lineData.name,
              clickType: event.type,
              event: event as React.MouseEvent,
            });

            return;
          }
        });
      });

      // Detecção de hover em restrições (áreas retangulares)
      restricoes.forEach(({ xi, xf, yi, yf, name, info }) => {
        const xStart = getCanvasXFromTime({
          time: new Date(xi),
          canvasWidth: canvas.width,
          paddingLeft,
          hourSpacing,
          database,
        });
        const xEnd = getCanvasXFromTime({
          time: new Date(xf),
          canvasWidth: canvas.width,
          paddingLeft,
          hourSpacing,
          database,
        });
        const yStart = getCanvasYFromYardValue({ yLabels, yValue: yi, padding, rangeHeight });
        const yEnd = getCanvasYFromYardValue({ yLabels, yValue: yf, padding, rangeHeight });

        // Detecção de interseção retangular: mouse dentro da área da restrição
        const isHoverX = mouseX >= xStart && mouseX <= xEnd;
        const isHoverY = yStart > yEnd ? mouseY <= yStart && mouseY >= yEnd : mouseY >= yStart && mouseY <= yEnd;

        if (isHoverX && isHoverY) {
          restrictionHovered = true;
          setTooltipData({
            x: event.clientX + 10,
            y: event.clientY + 10,
            content: (
              <div className="p-4">
                <h3>{name}</h3>
                <strong>Data Inicial:</strong> {formatDate(new Date(xi))}
                <br />
                <strong>Data Final:</strong> {formatDate(new Date(xf))}
                <br />
                {info.map((item) => (
                  <div key={item.label}>
                    <strong>{item.label}:</strong> {item.value}
                  </div>
                ))}
              </div>
            ),
          });
          return;
        }
      });

      // Reset: limpa estados quando não há hover em nenhum elemento
      if (!hovered && !restrictionHovered) {
        setSelectedElementClickable({} as IClickableElement);
        setHoveredSegmentIndex({ lineIndex: null, segmentIndex: null });
        setTooltipData(null);
      }
    },
    [canvasRef, data, database, hourSpacing, paddingLeft, padding, rangeHeight, restricoes, yLabels],
  );

  const handleClick = useCallback(
    (e: React.MouseEvent): ClickResult => {
      const canvas = canvasRef.current;
      if (!canvas) return { type: "background", id: null };

      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      const clickX = (e.clientX - rect.left) * scaleX;
      const clickY = (e.clientY - rect.top) * scaleY;

      // Hierarquia de detecção: atividades têm prioridade máxima
      for (const clickableElement of segmentClickData) {
        if (clickableElement.elementType === "activity" && clickableElement.coordinates.point) {
          const { x, y } = clickableElement.coordinates.point;
          // Distância euclidiana para ícones circulares
          const distance = Math.sqrt(Math.pow(clickX - x, 2) + Math.pow(clickY - y, 2));

          // Se o clique estiver no raio do ícone
          if (distance <= 10) {
            setSelectedElementClickable(clickableElement);

            if (e.type === "contextmenu") {
              setOpenContextMenu({
                x: e.clientX,
                y: e.clientY,
                type: "background",
                data: {
                  id: clickableElement.id,
                  ...clickableElement.data,
                },
                name: clickableElement.name,
              });
            }

            return {
              type: "background",
              id: clickableElement.id,
              data: clickableElement.data,
            };
          }
        }
      }

      // Detecção de clique em linha de trem (threshold 5px)
      const clickedSegment = (segmentClickData as any[]).find((segment) => {
        const line = segment?.coordinates?.line;
        if (!line) return false;

        const { x1, y1, x2, y2 } = line;
        return pointToLineDistance({ px: clickX, py: clickY, x1, y1, x2, y2 }) < 5;
      });

      if (clickedSegment) {
        // Aplicar a lógica original
        setSelectedElementClickable(clickedSegment);

        if (e.type === "contextmenu") {
          setOpenContextMenu({
            x: e.clientX,
            y: e.clientY,
            type: "train",
            data: {
              id: clickedSegment.segment?.id,
              ...clickedSegment,
            },
            name: clickedSegment.name,
          });
        }

        // Retornar informações para o menu de contexto
        return {
          type: "train",
          id: clickedSegment.segment?.id || `train_${clickedSegment.hoveredSegmentIndex?.lineIndex}`,
          segmentTrainLine: clickedSegment,
          data: {
            name: clickedSegment.name,
            type: clickedSegment.type,
            segment: clickedSegment.segment,
            lineIndex: clickedSegment.hoveredSegmentIndex?.lineIndex,
            segmentIndex: clickedSegment.hoveredSegmentIndex?.segmentIndex,
          },
        };
      }

      // Detecção de clique em restrição (área retangular)
      for (let i = 0; i < restricoes.length; i++) {
        const restricao = restricoes[i];

        const xStart = getCanvasXFromTime({
          time: new Date(restricao.xi),
          canvasWidth: canvas.width,
          paddingLeft,
          hourSpacing,
          database,
        });
        const xEnd = getCanvasXFromTime({
          time: new Date(restricao.xf),
          canvasWidth: canvas.width,
          paddingLeft,
          hourSpacing,
          database,
        });
        const yStart = getCanvasYFromYardValue({ yLabels, yValue: restricao.yi, padding, rangeHeight });
        const yEnd = getCanvasYFromYardValue({ yLabels, yValue: restricao.yf, padding, rangeHeight });

        // Verificar se o clique está dentro do retângulo da restrição
        const isClickX = clickX >= xStart && clickX <= xEnd;
        const isClickY = yStart > yEnd ? clickY <= yStart && clickY >= yEnd : clickY >= yStart && clickY <= yEnd;

        if (isClickX && isClickY) {
          // Atualizar o elemento selecionado para a restrição
          const restrictionId = restricao.id || `restriction_${i}`;

          // Criar um RestrictionElement para o selectedElementClickable
          setSelectedElementClickable({
            elementType: "restriction",
            coordinates: {
              rectangle: {
                x: xStart,
                y: yStart,
                width: xEnd - xStart,
                height: yEnd - yStart,
              },
            },
            data: {
              ...restricao,
              index: i,
            },
            id: restrictionId,
            name: restricao.name || "Restrição",
            clickType: e.type,
            event: e as React.MouseEvent,
          });

          // Se for clique direito, abrir menu de contexto para restrição
          if (e.type === "contextmenu") {
            setOpenContextMenu({
              x: e.clientX,
              y: e.clientY,
              type: "restriction",
              data: {
                // @ts-expect-error - restricao não possui campo id, adicionando manualmente
                id: restrictionId,
                ...restricao,
              },
              name: restricao.name || "Restrição",
            });
          }

          return {
            type: "restriction",
            id: restrictionId,
            restriction: restricao,
            data: {
              name: restricao.name,
              startTime: restricao.xi,
              endTime: restricao.xf,
              startYard: restricao.yi,
              endYard: restricao.yf,
              info: restricao.info,
            },
          };
        }
      }

      // Fallback: clique no fundo (nenhum elemento foi atingido)
      if (e.type === "contextmenu") {
        setOpenContextMenu({
          x: e.clientX,
          y: e.clientY,
          type: "background",
          name: "OptMove",
          data: {},
        } as Omit<IContextMenuProps, "onAction" | "onClose">);
      }

      return {
        type: "background",
        id: null,
      };
    },
    [
      canvasRef,
      segmentClickData,
      setSelectedElementClickable,
      restricoes,
      database,
      hourSpacing,
      paddingLeft,
      yLabels,
      padding,
      rangeHeight,
    ],
  );

  return {
    handleMouseMove,
    handleClick,
  };
};

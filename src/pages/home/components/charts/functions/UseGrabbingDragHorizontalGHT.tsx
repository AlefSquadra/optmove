/**
 * Hook React que implementa funcionalidade de arrastar horizontal para navegação no gráfico GHT.
 *
 * Permite que o usuário clique e arraste para mover horizontalmente pelo gráfico,
 * alterando a posição do scroll do container. Só é ativado quando o cursor está
 * no modo "grab".
 */

import React, { useEffect, useRef } from "react";
import { useGHTChartContext } from "../provider/GHTChartProvider";

export interface containerRefChart {
  containerRefChart: React.MutableRefObject<HTMLDivElement | null>;
}

export const useGrabbingDragHorizontalGHT = (props: containerRefChart) => {
  const { containerRefChart } = props;
  const isDraggingRef = useRef<boolean>(false);
  const { cursorPointer } = useGHTChartContext();

  useEffect(() => {
    if (String(cursorPointer) === "grab") {
      const container = containerRefChart.current;
      let dragStartX = 0;
      let scrollStartX = 0;

      const handleMouseDownDrag = (e) => {
        isDraggingRef.current = true;
        dragStartX = e.clientX;
        scrollStartX = container.scrollLeft;
      };

      const handleMouseMoveDrag = (e) => {
        if (isDraggingRef.current) {
          const dragDistance = e.clientX - dragStartX;
          container.scrollLeft = scrollStartX - dragDistance;
        }
      };

      const handleMouseUpDrag = () => {
        isDraggingRef.current = false;
      };

      container.addEventListener("mousedown", handleMouseDownDrag);
      container.addEventListener("mousemove", handleMouseMoveDrag);
      window.addEventListener("mouseup", handleMouseUpDrag);

      return () => {
        container.removeEventListener("mousedown", handleMouseDownDrag);
        container.removeEventListener("mousemove", handleMouseMoveDrag);
        window.removeEventListener("mouseup", handleMouseUpDrag);
      };
    }
  }, [cursorPointer]);

  return { isDraggingRef };
};

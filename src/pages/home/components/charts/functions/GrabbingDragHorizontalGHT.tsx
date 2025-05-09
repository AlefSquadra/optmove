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
    if (cursorPointer === "grab") {
      const container = containerRefChart.current;
      let dragStartX = 0;
      let scrollStartX = 0;

      // Captura o evento de mouse down
      const handleMouseDownDrag = (e) => {
        isDraggingRef.current = true;
        dragStartX = e.clientX;
        scrollStartX = container.scrollLeft;
      };

      // Captura o movimento do mouse e ajusta o scroll
      const handleMouseMoveDrag = (e) => {
        if (isDraggingRef.current) {
          const dragDistance = e.clientX - dragStartX;
          container.scrollLeft = scrollStartX - dragDistance;
        }
      };

      // Finaliza o arrasto
      const handleMouseUpDrag = () => {
        isDraggingRef.current = false;
      };

      // Adiciona os event listeners
      container.addEventListener("mousedown", handleMouseDownDrag);
      container.addEventListener("mousemove", handleMouseMoveDrag);
      window.addEventListener("mouseup", handleMouseUpDrag);

      // Remove os event listeners ao desmontar o componente
      return () => {
        container.removeEventListener("mousedown", handleMouseDownDrag);
        container.removeEventListener("mousemove", handleMouseMoveDrag);
        window.removeEventListener("mouseup", handleMouseUpDrag);
      };
    }
  }, [cursorPointer]);

  return { isDraggingRef };
};

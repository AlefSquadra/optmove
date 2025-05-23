import { useEffect, useRef, useState } from "react";

// Função auxiliar para formatar as datas
const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  } as Intl.DateTimeFormatOptions;
  return new Intl.DateTimeFormat("pt-BR", options).format(new Date(date));
};

// Função para calcular a posição X centralizada
const calculateXPosition = (time, canvasWidth, paddingLeft, hourSpacing, database) => {
  const timeDate = new Date(time);
  const startDate = new Date(database);

  startDate.setMinutes(0, 0, 0);

  const diffInMilliseconds = timeDate.getTime() - startDate.getTime();
  const diffInHours = diffInMilliseconds / (1000 * 60 * 60);

  const xPosition = paddingLeft + diffInHours * hourSpacing;
  return xPosition;
};

function pointToLineDistance(px, py, x1, y1, x2, y2) {
  const A = px - x1;
  const B = py - y1;
  const C = x2 - x1;
  const D = y2 - y1;

  const dot = A * C + B * D;
  const len_sq = C * C + D * D;
  let param = -1;
  if (len_sq !== 0) param = dot / len_sq;

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

  const dx = px - xx;
  const dy = py - yy;
  return Math.sqrt(dx * dx + dy * dy);
}

export const GHTChart = ({ data, yLabels, database, restricoes, defaultHeight = 500 }) => {
  const canvasLeftRef = useRef(null);
  const canvasRightRef = useRef(null);
  const canvasChartRef = useRef(null);
  const containerRefChart = useRef(null);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [zoom, setZoomValue] = useState(0);
  const [hoveredSegmentIndex, setHoveredSegmentIndex] = useState({ lineIndex: null, segmentIndex: null });
  const [segmentClickData, setSegmentClickData] = useState<any>([]);

  const paddingLeft = 80;
  const paddingRight = 0;
  const hourSpacing = 100 + 100 * zoom;

  const calculateHoursToMidnightNextDay = (database) => {
    const startTime = new Date(database);
    const nextDayMidnight = new Date(database);
    nextDayMidnight.setDate(nextDayMidnight.getDate() + 2); // Vai para o dia seguinte
    nextDayMidnight.setHours(0, 0, 0, 0); // Meia-noite do próximo dia
    const diffInMilliseconds = nextDayMidnight.getTime() - startTime.getTime();
    const hoursToShow = diffInMilliseconds / (1000 * 60 * 60); // Milissegundos para horas
    return hoursToShow;
  };

  const hoursToShow = calculateHoursToMidnightNextDay(database);

  const width = (hoursToShow + 1) * hourSpacing + paddingLeft + paddingRight;
  const height = defaultHeight + 500 * zoom;
  const padding = 40;

  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function (...args) {
      if (!lastRan) {
        func.apply(this, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(
          function () {
            if (Date.now() - lastRan >= limit) {
              func.apply(this, args);
              lastRan = Date.now();
            }
          },
          limit - (Date.now() - lastRan),
        );
      }
    };
  };

  useEffect(() => {
    const container = containerRefChart.current;
    let isDragging = false;
    let dragStartX = 0;
    let scrollStartX = 0;

    // Captura o evento de mouse down
    const handleMouseDownDrag = (e) => {
      isDragging = true;
      dragStartX = e.clientX;
      scrollStartX = container.scrollLeft;
    };

    // Captura o movimento do mouse e ajusta o scroll
    const handleMouseMoveDrag = (e) => {
      if (isDragging) {
        const dragDistance = e.clientX - dragStartX;
        container.scrollLeft = scrollStartX - dragDistance;
      }
    };

    // Finaliza o arrasto
    const handleMouseUpDrag = () => {
      isDragging = false;
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
  }, []);

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

    canvasLeft.width = paddingLeft;
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

    const getYPosition = (yValue) => {
      const totalDistance = yLabels.reduce((sum, label) => sum + label.value, 0);
      const proportion = yValue / totalDistance;
      return padding + rangeHeight - proportion * rangeHeight;
    };

    const drawLines = (ctx: CanvasRenderingContext2D, accumulatedYPositions) => {
      accumulatedYPositions.forEach(({ yPos }) => {
        // Limitar a posição Y dentro dos limites do gráfico
        if (yPos < padding) yPos = padding;
        if (yPos > height - padding) yPos = height - padding;

        ctx.strokeStyle = "#bbb";
        ctx.beginPath();
        ctx.moveTo(0, yPos);
        ctx.lineTo(width, yPos);
        ctx.stroke();
      });
    };

    ctxLeft.globalAlpha = 1.0;
    ctxRight.globalAlpha = 1.0;

    accumulatedYPositions.forEach(({ label, yPos, allocatedSpace }) => {
      // Verifica se o espaço alocado é maior que 10 pixels antes de desenhar o label
      if (allocatedSpace > 10 || allocatedSpace == 0) {
        // Canvas esquerdo (canvasLeft)
        ctxLeft.fillStyle = "#333";
        ctxLeft.font = "9px 'Roboto', sans-serif";
        ctxLeft.textAlign = "left";
        ctxLeft.fillText(label, 1, yPos + 10); // Desenha o label no canvas esquerdo

        // Canvas direito (canvasRight)
        ctxRight.fillStyle = "#333";
        ctxRight.font = "9px 'Roboto', sans-serif";
        ctxRight.textAlign = "left";
        ctxRight.fillText(label, 1, yPos + 10); // Desenha o label no canvas direito
      }
    });

    const drawChart = () => {
      accumulatedYPositions.forEach(({ backgroundColor, yPos, allocatedSpace }) => {
        ctxChart.fillStyle = backgroundColor;
        ctxChart.globalAlpha = 0.3;
        ctxChart.fillRect(paddingLeft, yPos, width - paddingLeft - paddingRight + 1, allocatedSpace);
      });
      ctxChart.globalAlpha = 1;

      data.forEach((lineData, lineIndex) => {
        const { segments, name, color } = lineData;
        segments.forEach((segment, segmentIndex) => {
          let xPosStart = calculateXPosition(
            new Date(segment.xi),
            canvasChart.width,
            paddingLeft,
            hourSpacing,
            database,
          );
          let yPosStart = getYPosition(segment.yi);
          let xPosEnd = calculateXPosition(new Date(segment.xf), canvasChart.width, paddingLeft, hourSpacing, database);
          let yPosEnd = getYPosition(segment.yf);

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
              logo: segment.logo,
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

    const drawAxes = () => {
      ctxChart.strokeStyle = "#bbb";
      ctxChart.lineWidth = 1;

      for (let i = 0; i <= hoursToShow; i++) {
        const time = new Date(database.getTime() + i * 60 * 60 * 1000);
        const timeLabel = time.getHours().toString().padStart(2, "0") + ":00";
        const x = paddingLeft + i * hourSpacing;

        ctxChart.beginPath();
        ctxChart.moveTo(x, height - padding);
        ctxChart.lineTo(x, padding);
        ctxChart.stroke();

        ctxChart.font = "12px 'Roboto', sans-serif";
        ctxChart.fillStyle = "#666";
        ctxChart.textAlign = "center";
        ctxChart.fillText(timeLabel, x, height - padding + 20);
        ctxChart.fillText(timeLabel, x, padding - 15);
      }

      accumulatedYPositions.forEach(({ yPos }) => {
        ctxChart.strokeStyle = "#bbb";
        ctxChart.beginPath();
        ctxChart.moveTo(paddingLeft, yPos);
        ctxChart.lineTo(width, yPos);
        ctxChart.stroke();
      });
    };

    const drawRestricoes = (ctxChart, restricoes, canvasWidth, paddingLeft, hourSpacing, database) => {
      restricoes.forEach((restricao) => {
        const { xi, xf, yi, yf, color, name } = restricao;

        // Calcular posições X e Y com base nas datas e valores fornecidos
        let xPosStart = calculateXPosition(new Date(xi), canvasWidth, paddingLeft, hourSpacing, database);
        let yPosStart = getYPosition(yi);
        let xPosEnd = calculateXPosition(new Date(xf), canvasWidth, paddingLeft, hourSpacing, database);
        let yPosEnd = getYPosition(yf);

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

    drawAxes();
    drawLines(ctxLeft, accumulatedYPositions);
    drawLines(ctxRight, accumulatedYPositions);
    drawChart();
    drawRestricoes(ctxChart, restricoes, canvasChart.width, paddingLeft, hourSpacing, database);

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

    const handleMouseMove = (event) => {
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
          const startX = calculateXPosition(
            new Date(segment.xi),
            canvasChart.width,
            paddingLeft,
            hourSpacing,
            database,
          );
          const startY = getYPosition(segment.yi);
          const endX = calculateXPosition(new Date(segment.xf), canvasChart.width, paddingLeft, hourSpacing, database);
          const endY = getYPosition(segment.yf);
          // Verifica a distância do mouse para o segmento
          const proximityThreshold = 10;
          const distanceToLine = getDistanceFromLine(mouseX, mouseY, startX, startY, endX, endY);

          if (distanceToLine <= proximityThreshold) {
            setHoveredSegmentIndex({ lineIndex, segmentIndex });
            hovered = true;

            // Ajusta a posição do tooltip e seu conteúdo
            tooltip.style.opacity = "0.7";
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
      console.log("Entrando em handleMouseMoveForRestricoes");

      const rect = ctxChart.canvas.getBoundingClientRect();
      const scrollLeftOffset = containerRefChart.current.scrollLeft;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      console.log(`Mouse X: ${mouseX}, Mouse Y: ${mouseY}`);

      const tooltip = document.getElementById("tooltip");
      let hovered = false;

      restricoes.forEach((restricao) => {
        const { xi, xf, yi, yf, name, info } = restricao;
        const xPosStart = calculateXPosition(new Date(xi), canvasWidth, paddingLeft, hourSpacing, database);
        const xPosEnd = calculateXPosition(new Date(xf), canvasWidth, paddingLeft, hourSpacing, database);
        const yPosStart = getYPosition(yi);
        const yPosEnd = getYPosition(yf);

        console.log(`Retângulo: X Start: ${xPosStart}, X End: ${xPosEnd}, Y Start: ${yPosStart}, Y End: ${yPosEnd}`);

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
        const dist = pointToLineDistance(clickX, clickY, x1, y1, x2, y2);
        return dist < 5; // tolerância
      });

      if (clickedSegment) {
        alert("Segmento clicado: " + JSON.stringify(clickedSegment));
        // showLogo(clickedSegment.logo, clickX, clickY);
      }
    };
    container.addEventListener("mousemove", throttledHandleMouseMove);
    canvasChart.addEventListener("click", clickTest);
    return () => {
      container.removeEventListener("mousemove", throttledHandleMouseMove);
      container.removeEventListener("click", clickTest);
    };
  }, [data, hoveredSegmentIndex]);

  const handleAddInput = () => {
    setZoomValue(zoom + 1.5);
  };
  const handleRemoveInput = () => {
    if (zoom > 0) {
      setZoomValue(zoom - 1.5);
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative", // O container é relativo para os elementos filhos
      }}
    >
      {/* Botões no topo do container */}
      <div
        style={{
          position: "absolute", // Agora é relativo ao container
          top: "10px", // Distância do topo dentro do container
          right: "10px", // Distância da direita dentro do container
          display: "flex",
          gap: "10px", // Espaçamento entre os botões
          zIndex: 9999, // Garantir que fiquem acima do gráfico
        }}
      >
        <button
          onClick={handleAddInput}
          style={{
            width: "40px", // Tamanho dos botões
            height: "40px",
            backgroundColor: "#4CAF50", // Cor de fundo verde
            color: "white", // Cor do texto
            border: "none", // Remover borda
            borderRadius: "5px", // Bordas arredondadas
            cursor: "pointer", // Cursor de pointer para o hover
            fontSize: "18px", // Tamanho da fonte
            marginTop: "-50px",
          }}
        >
          +
        </button>
        <button
          onClick={handleRemoveInput}
          style={{
            width: "40px", // Tamanho dos botões
            height: "40px",
            backgroundColor: "#f44336", // Cor de fundo vermelha
            color: "white", // Cor do texto
            border: "none", // Remover borda
            borderRadius: "5px", // Bordas arredondadas
            cursor: "pointer", // Cursor de pointer para o hover
            fontSize: "18px", // Tamanho da fonte
            marginTop: "-50px",
          }}
        >
          -
        </button>
      </div>

      {/* Estrutura principal com os canvas e tooltip */}
      <canvas ref={canvasLeftRef} style={{ display: "block" }} width={"100"} />
      <div
        ref={containerRefChart}
        style={{
          overflowX: "auto", // Permitir scroll horizontal
          width: "'100%", // Certifique-se de que essa largura seja menor que o conteúdo
          cursor: isDragging ? "grabbing" : "grab",
          position: "relative",
        }}
      >
        <canvas ref={canvasChartRef} style={{ display: "block", width: `${width}px` }} />{" "}
        {/* Defina a largura do canvas */}
      </div>
      <canvas ref={canvasRightRef} style={{ display: "block" }} />

      {/* Tooltip */}
      <div
        id="tooltip"
        style={{
          position: "absolute",
          backgroundColor: "#fff",
          color: "#000",
          padding: "15px",
          borderRadius: "4px",
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity 0.2s",
          zIndex: 1000,
        }}
      ></div>
    </div>
  );
};

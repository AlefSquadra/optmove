import * as d3 from "d3";
import { memo, useCallback, useEffect, useRef } from "react";

export interface YardOccupancyTrainData {
  id: string;
  prefixo: string;
  cor: string;
  tipoTrem: string;
  ocupacoes: YardOccupancyData[];
}

export interface YardOccupancyData {
  id: string;
  trainId: string;
  nomeVia: string; // Nome da linha/via do pátio
  dataInicio: string | Date; // Data/hora de início da ocupação
  dataFim: string | Date; // Data/hora de fim da ocupação
  trainPrefixo: string;
  trainCor: string;
  status: "planejado" | "realizado" | "em_andamento";
}

export interface YardOccupancyLine {
  id: string;
  nomeVia: string;
  ordem: number;
  patio: string;
}

interface YardOccupancyProps {
  hourWidth: number;
  height: number;
  initialDate: Date;
  finalDate: Date;
  dateTimeLine: Date;
  yAxisWidth: number;
  lines: YardOccupancyLine[];
  occupancies: YardOccupancyData[];
  onOccupancyClick?: (occupancy: YardOccupancyData) => void;
  onOccupancyHover?: (occupancy: YardOccupancyData | null) => void;
}

const YardOccupancy = memo((props: YardOccupancyProps) => {
  const {
    hourWidth = 60,
    height,
    initialDate,
    finalDate,
    dateTimeLine,
    yAxisWidth = 80,
    lines,
    occupancies,
    onOccupancyClick,
    onOccupancyHover,
  } = props;

  const svgLeftRef = useRef<SVGSVGElement | null>(null);
  const svgPlotRef = useRef<SVGSVGElement | null>(null);
  const svgRightRef = useRef<SVGSVGElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const processLines = (yardLines: YardOccupancyLine[]) => {
    const sortedLines = [...yardLines].sort((a, b) => a.ordem - b.ordem);

    const lineHeight = 40; // Altura de cada linha em pixels
    const lineSpacing = 5; // Espaçamento entre linhas

    return sortedLines.map((line, index) => ({
      ...line,
      yPosition: index * (lineHeight + lineSpacing),
      height: lineHeight,
    }));
  };

  const parseDateUTC = d3.utcParse("%Y-%m-%dT%H:%M:%S.%LZ");

  const onOccupancyHoverCallback = useCallback(
    (occupancy: YardOccupancyData | null) => {
      if (onOccupancyHover) {
        onOccupancyHover(occupancy);
      }
    },
    [onOccupancyHover],
  );

  useEffect(() => {
    // Limpa os SVGs
    [svgLeftRef, svgPlotRef, svgRightRef].forEach((ref) => {
      if (ref.current) {
        d3.select(ref.current).selectAll("*").remove();
      }
    });

    // Cria o tooltip D3
    const container = d3.select(scrollContainerRef.current!).style("position", "relative");
    container.selectAll(".tooltip").remove();
    const tooltip = container
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("pointer-events", "none")
      .style("background", "rgba(0,0,0,0.9)")
      .style("color", "#fff")
      .style("padding", "12px")
      .style("border-radius", "6px")
      .style("font-size", "12px")
      .style("line-height", "1.4")
      .style("box-shadow", "0 4px 12px rgba(0,0,0,0.3)")
      .style("border", "1px solid rgba(255,255,255,0.2)")
      .style("backdrop-filter", "blur(4px)")
      .style("-webkit-backdrop-filter", "blur(4px)")
      .style("max-width", "280px")
      .style("z-index", "1000")
      .style("opacity", "0");

    const processedLines = processLines(lines);
    const totalHeight = processedLines.length * 45; // 40 + 5 de espaçamento
    const hoursShown = d3.utcHour.count(initialDate, finalDate);
    const plotWidth = hoursShown * hourWidth;
    const margin = { top: 40, bottom: 40 };
    const innerH = height - margin.top - margin.bottom;

    // Escalas
    const databaseHourFloor = d3.utcHour.floor(initialDate);
    const xDomain = [databaseHourFloor, d3.utcHour.offset(databaseHourFloor, hoursShown)];
    const yDomain = [0, totalHeight];

    const xScale = d3.scaleUtc().domain(xDomain).range([0, plotWidth]);
    const yScale = d3.scaleLinear().domain(yDomain).range([innerH, 0]);

    // Configura o SVG principal
    d3.select(svgPlotRef.current).attr("width", plotWidth).attr("height", height);

    // Eixos Y (esquerda e direita) - centralizados nas linhas
    const yTicks = processedLines.map((line) => line.yPosition + line.height / 2);
    const yLabels = processedLines.map((line) => line.nomeVia);

    const axisYLeft = d3
      .axisLeft(yScale)
      .tickValues(yTicks)
      .tickFormat((_, i) => yLabels[i] || "")
      .tickSizeOuter(0);

    const axisYRight = d3
      .axisRight(yScale)
      .tickValues(yTicks)
      .tickFormat((_, i) => yLabels[i] || "")
      .tickSizeOuter(0);

    d3.select(svgLeftRef.current)
      .append("g")
      .attr("transform", `translate(${yAxisWidth - 1},${margin.top})`)
      .call(axisYLeft)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dy", "0.35em"); // Centraliza verticalmente

    d3.select(svgRightRef.current)
      .append("g")
      .attr("transform", `translate(1,${margin.top})`)
      .call(axisYRight)
      .selectAll("text")
      .style("text-anchor", "start")
      .attr("dy", "0.35em"); // Centraliza verticalmente

    // Eixos X (superior e inferior)
    const hourTicks: Date[] = [];
    let currentHour = new Date(xDomain[0]);
    while (currentHour <= xDomain[1]) {
      hourTicks.push(new Date(currentHour));
      currentHour = d3.utcHour.offset(currentHour, 1);
    }

    const timeFmt = d3.utcFormat("%H:%M");
    const innerHourTicks = hourTicks.slice(1, -1);

    const axisXTop = d3
      .axisTop(xScale)
      .tickValues(innerHourTicks)
      .tickFormat((d: Date | d3.NumberValue) => timeFmt(new Date(d.valueOf())));

    const axisXBottom = d3
      .axisBottom(xScale)
      .tickValues(innerHourTicks)
      .tickFormat((d: Date | d3.NumberValue) => timeFmt(new Date(d.valueOf())));

    const plotG = d3.select(svgPlotRef.current).append("g").attr("transform", `translate(0,${margin.top})`);

    // Fundo das linhas - sem bordas, apenas fundo
    const lineBackgrounds = plotG.append("g").attr("class", "line-backgrounds");

    lineBackgrounds
      .selectAll("rect.line-background")
      .data(processedLines)
      .enter()
      .append("rect")
      .attr("class", "line-background")
      .attr("x", 0)
      .attr("width", plotWidth)
      .attr("y", (d) => yScale(d.yPosition + d.height)) // Posição Y igual ao sistema de coordenadas D3
      .attr("height", (d) => yScale(d.yPosition) - yScale(d.yPosition + d.height)) // Altura correta
      .attr("fill", "white")
      .attr("stroke", "none"); // Remove as bordas

    // Grupo para as ocupações
    const occupancyGroup = plotG.append("g").attr("class", "occupancy-group");

    // Renderiza as ocupações
    occupancies.forEach((occupancy) => {
      let startDate: Date | null = null;
      let endDate: Date | null = null;

      if (typeof occupancy.dataInicio === "string") {
        startDate = parseDateUTC(occupancy.dataInicio) || new Date(occupancy.dataInicio);
      } else {
        startDate = occupancy.dataInicio;
      }

      if (typeof occupancy.dataFim === "string") {
        endDate = parseDateUTC(occupancy.dataFim) || new Date(occupancy.dataFim);
      } else {
        endDate = occupancy.dataFim;
      }

      if (!startDate || !endDate) {
        console.warn("Dados de ocupação inválidos:", occupancy);
        return;
      }

      const line = processedLines.find((l) => l.nomeVia === occupancy.nomeVia);
      if (!line) {
        console.warn("Linha não encontrada para ocupação:", occupancy);
        return;
      }

      const x = xScale(startDate);
      const width = xScale(endDate) - x;

      // Centraliza a barra na linha com uma altura menor para parecer mais limpa
      const barHeight = line.height * 0.6; // 60% da altura da linha
      const barY = line.yPosition + (line.height - barHeight) / 2; // Centraliza verticalmente
      const y = yScale(barY + barHeight); // Posição Y no sistema de coordenadas D3

      if (width <= 0) {
        return;
      }

      const occupancyRect = occupancyGroup
        .append("rect")
        .attr("x", x)
        .attr("y", y)
        .attr("width", width)
        .attr("height", yScale(barY) - yScale(barY + barHeight)) // Altura correta no sistema D3
        .attr("fill", occupancy.trainCor)
        .attr("stroke", "rgba(0,0,0,0.3)")
        .attr("stroke-width", 1)
        .attr("rx", 2) // Bordas arredondadas
        .style("cursor", "pointer")
        .style("opacity", occupancy.status === "planejado" ? 0.7 : 1);

      // Adiciona padrão para movimentos planejados
      if (occupancy.status === "planejado") {
        occupancyRect.attr("stroke-dasharray", "3,2");
      }

      // Texto do prefixo do trem
      if (width > 30) {
        // Só mostra texto se a barra for grande o suficiente
        const textY = yScale(barY + barHeight / 2); // Centro da barra
        occupancyGroup
          .append("text")
          .attr("x", x + width / 2)
          .attr("y", textY)
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "middle")
          .attr("font-size", "10px")
          .attr("font-weight", "bold")
          .attr("fill", "white")
          .text(occupancy.trainPrefixo);
      }

      // Eventos de mouse
      occupancyRect
        .on("mouseover", function (event) {
          const duration = Math.abs(endDate.getTime() - startDate.getTime());
          const durationHours = Math.floor(duration / (1000 * 60 * 60));
          const durationMinutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
          const durationFormatted = `${durationHours}h ${durationMinutes}m`;

          const startDateFormatted = startDate.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
          const endDateFormatted = endDate.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });

          const statusLabels = {
            planejado: "Planejado",
            realizado: "Realizado",
            em_andamento: "Em Andamento",
          };

          const tooltipContent = `
            <div class="tooltip-header">
              <strong>ID:</strong> ${occupancy.id || "N/A"}<br/>
              <strong>Trem:</strong> ${occupancy.trainPrefixo || "N/A"}
            </div>
            <hr style="margin: 6px 0; border: 0; border-top: 1px solid rgba(255,255,255,0.3);">
            <div class="tooltip-location">
              <strong>Linha:</strong> ${occupancy.nomeVia || "N/A"}<br/>
              <strong>Pátio:</strong> ${line.patio || "N/A"}
            </div>
            <hr style="margin: 6px 0; border: 0; border-top: 1px solid rgba(255,255,255,0.3);">
            <div class="tooltip-timing">
              <strong>Início:</strong> ${startDateFormatted}<br/>
              <strong>Fim:</strong> ${endDateFormatted}<br/>
              <strong>Duração:</strong> ${durationFormatted}
            </div>
            <hr style="margin: 6px 0; border: 0; border-top: 1px solid rgba(255,255,255,0.3);">
            <div class="tooltip-status">
              <strong>Status:</strong> <span style="color: ${
                occupancy.status === "realizado" ? "#4CAF50"
                : occupancy.status === "em_andamento" ? "#FF9800"
                : "#2196F3"
              }">${statusLabels[occupancy.status] || occupancy.status}</span>
            </div>
          `;

          tooltip
            .html(tooltipContent)
            .style("left", event.offsetX + 10 + "px")
            .style("top", event.offsetY + 10 + "px")
            .transition()
            .duration(200)
            .style("opacity", 1);

          onOccupancyHoverCallback(occupancy);
        })
        .on("mousemove", function (event) {
          tooltip.style("left", event.offsetX + 10 + "px").style("top", event.offsetY + 10 + "px");
        })
        .on("mouseout", function () {
          tooltip.transition().duration(100).style("opacity", 0);
          onOccupancyHoverCallback(null);
        })
        .on("click", function (event) {
          event.stopPropagation();
          if (onOccupancyClick) {
            onOccupancyClick(occupancy);
          }
        });
    });

    // Linhas de grade verticais - mais sutis como na imagem
    const gridLinesX = plotG.append("g").attr("class", "grid-lines-x");

    gridLinesX
      .selectAll("line.x-grid")
      .data(innerHourTicks)
      .enter()
      .append("line")
      .attr("class", "x-grid")
      .attr("x1", (d) => xScale(d))
      .attr("x2", (d) => xScale(d))
      .attr("y1", 0)
      .attr("y2", innerH)
      .attr("stroke", "#e0e0e0")
      .attr("stroke-width", 0.5)
      .attr("opacity", 0.7);

    // Linhas de grade horizontais - centralizadas em cada linha
    const gridLinesY = plotG.append("g").attr("class", "grid-lines-y");

    gridLinesY
      .selectAll("line.y-grid")
      .data(processedLines)
      .enter()
      .append("line")
      .attr("class", "y-grid")
      .attr("x1", 0)
      .attr("x2", plotWidth)
      .attr("y1", (d) => yScale(d.yPosition + d.height / 2)) // Centro da linha
      .attr("y2", (d) => yScale(d.yPosition + d.height / 2)) // Centro da linha
      .attr("stroke", "#e0e0e0")
      .attr("stroke-width", 0.5)
      .attr("opacity", 0.7);

    // Linha do tempo atual
    const timelinePlot = plotG
      .append("line")
      .attr("class", "timeline-line")
      .attr("x1", xScale(dateTimeLine))
      .attr("x2", xScale(dateTimeLine))
      .attr("y1", -10)
      .attr("y2", innerH + 10)
      .attr("stroke", "green")
      .attr("stroke-width", 3);

    // Adiciona os eixos
    plotG.append("g").call(axisXTop);
    plotG.append("g").attr("transform", `translate(0,${innerH})`).call(axisXBottom);

    // Ordem das camadas
    lineBackgrounds.raise();
    gridLinesX.raise();
    gridLinesY.raise();
    occupancyGroup.raise();
    timelinePlot.raise();
  }, [
    hourWidth,
    height,
    initialDate,
    finalDate,
    dateTimeLine,
    yAxisWidth,
    lines,
    occupancies,
    onOccupancyHoverCallback,
  ]);

  return (
    <div className="relative">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `${yAxisWidth}px 1fr ${yAxisWidth}px`,
          width: "100%",
          height: height,
          overflow: "hidden",
        }}
      >
        <svg ref={svgLeftRef} width={yAxisWidth} height={height} style={{ gridColumn: "1", overflow: "visible" }} />
        <div
          ref={scrollContainerRef}
          style={{ gridColumn: "2", overflowX: "auto", overflowY: "hidden", height: height }}
        >
          <svg ref={svgPlotRef} />
        </div>
        <svg ref={svgRightRef} width={yAxisWidth} height={height} style={{ gridColumn: "3", overflow: "visible" }} />
      </div>
    </div>
  );
});

export { YardOccupancy };

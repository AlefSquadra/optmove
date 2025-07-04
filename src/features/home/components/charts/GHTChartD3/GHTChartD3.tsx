import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

// --- INÍCIO: NOVAS TIPAGENS PARA OS DADOS DOS TRENS ---
export interface TrainMovement {
  id: string;
  segmento: string;
  alias: string;
  linha: string;
  chegada: string | Date;
  fimCurso: string | Date;
  partida: string | Date;
  fimOcupacao: string | Date;
  idFicha: string;
  destino: string;
}

export interface TrainData {
  dataOficializacao: string | Date;
  cor: string;
  tipoTrem: string;
  comprimentoKm: number;
  id: string;
  idExterno: string;
  prefixo: string;
  prefixoOutraFerrovia: string | null;
  dataProntidao: string | Date;
  estado: number;
  origem: string;
  destino: string;
  patioExterno: string;
  previsaoPartida: string | Date;
  previsaoSaida: string | Date;
  tabela: string;
  dataBaseCarregamento: string | Date;
  zonaOficial: string;
  movimentos: TrainMovement[];
  nomeSbl: string;
}
// --- FIM: NOVAS TIPAGENS ---

// Tipagens existentes
export interface YLabel {
  totalLinhas: number;
  totalKmInicial: number;
  totalKmFinal: number;
  totalNrlinha: number;
  totalSeqsb: number;
  childs: Child[];
  nomeApelido: string;
  nomeSbl: string;
  numeroKmInicial: number;
  numeroKMFim: number;
  numeroLinha: number;
  seqBd: number;
  idSbl: string;
  cdSgmt: string;
  cpKm: number;
  dcSgmt: number;
  nmRamal: number;
  nuRamal: string;
  icPljmExcsRamal: string;
  seqSegment: number;
  proporcaoCpKm: number;
  tipoVisao?: string | null;
  linhas?: number;
  indexGraficoI?: number;
  indexGraficoS?: number;
}

export interface Child {
  nomeApelido: string;
  nomeSbl: string;
  numeroKmInicial: number;
  numeroKMFim: number;
  numeroLinha: number;
  seqBd: number;
  idSbl: string;
  cdSgmt: string;
  cpKm: number;
  dcSgmt: number;
  nmRamal: number;
  nuRamal: string;
  icPljmExcsRamal: string;
  seqSegment: number;
  proporcaoCpKm: number;
  tipoVisao?: string | null;
  linhas?: number;
  indexGraficoI?: number;
  indexGraficoS?: number;
}

type BackgroundType = "none" | "linhaDupla" | "patio";

interface ProcessedSegment {
  name: string;
  startY: number;
  endY: number;
  midY: number;
  length: number;
  backgroundType: BackgroundType;
}

interface GHTChartD3Props {
  hourWidth: number;
  height: number;
  initialDate: Date;
  finalDate: Date;
  yLabels: YLabel[];
  yAxisWidth: number;
  trains: TrainData[];
}

interface ZoomState {
  xMin: Date;
  xMax: Date;
  yMin: number;
  yMax: number;
}

const GHTChartD3 = (props: GHTChartD3Props) => {
  const {
    hourWidth = 60,
    height,
    initialDate = new Date("2025-06-29"),
    finalDate = new Date("2025-07-01"),
    yLabels,
    yAxisWidth = 80,
    trains = [],
  } = props;

  const svgLeftRef = useRef<SVGSVGElement | null>(null);
  const svgPlotRef = useRef<SVGSVGElement | null>(null);
  const svgRightRef = useRef<SVGSVGElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const [zoomState, setZoomState] = useState<ZoomState | null>(null);

  const processData = (data: YLabel[]) => {
    const flatData: (YLabel | Child)[] = [];
    data.forEach((parent) => {
      flatData.push(parent);
      if (parent.childs && parent.childs.length > 0) {
        parent.childs.forEach((child) => {
          flatData.push(child);
        });
      }
    });

    flatData.sort((a, b) => {
      const seqA = a.seqSegment;
      const seqB = b.seqSegment;
      if (seqA !== seqB) return seqB - seqA;
      return a.seqBd - b.seqBd;
    });

    let comprimentoAcumulado = 0.0;
    let segmentoAtual = "";
    const segmentMap = new Map<string, { startY: number; length: number }>();

    flatData.forEach((item) => {
      if (segmentoAtual !== item.cdSgmt) {
        segmentoAtual = item.cdSgmt;
        const maxCpkmDoSegmento = flatData
          .filter((d) => d.cdSgmt === segmentoAtual)
          .reduce((max, d) => Math.max(max, d.cpKm), 0);

        if (!segmentMap.has(segmentoAtual)) {
          segmentMap.set(segmentoAtual, { startY: comprimentoAcumulado, length: maxCpkmDoSegmento });
          comprimentoAcumulado += maxCpkmDoSegmento;
        }
      }
    });

    flatData.forEach((item) => {
      const segmentInfo = segmentMap.get(item.cdSgmt);
      if (!segmentInfo) return;

      const countLinhaSeg = item.seqBd;
      item.indexGraficoI = segmentInfo.startY + (countLinhaSeg - 1) * 0.1;
      item.indexGraficoS = item.indexGraficoI + item.cpKm - 0.5;
    });

    const segmentData: ProcessedSegment[] = Array.from(segmentMap.entries()).map(([name, info]) => {
      const firstItemOfSegment = flatData.find((d) => d.cdSgmt === name);
      let backgroundType: BackgroundType = "none";

      if (firstItemOfSegment) {
        if (firstItemOfSegment.tipoVisao === "LD") {
          backgroundType = "linhaDupla";
        } else if ((firstItemOfSegment.linhas ?? 0) > 1 && firstItemOfSegment.tipoVisao !== "PD") {
          backgroundType = "patio";
        }
      }

      return {
        name,
        startY: info.startY,
        endY: info.startY + info.length,
        midY: info.startY + info.length / 2,
        length: info.length,
        backgroundType,
      };
    });

    const totalHeight = d3.max(flatData, (d) => d.indexGraficoS || 0) || 0;

    return { processedData: flatData, segmentData, totalHeight };
  };

  useEffect(() => {
    [svgLeftRef, svgPlotRef, svgRightRef].forEach((r) => d3.select(r.current!).selectAll("*").remove());

    // Tooltip container
    const container = d3.select(scrollContainerRef.current!).style("position", "relative");
    container.selectAll(".tooltip").remove();
    const tooltip = container
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("pointer-events", "none")
      .style("background", "rgba(0,0,0,0.7)")
      .style("color", "#fff")
      .style("padding", "4px 8px")
      .style("border-radius", "4px")
      .style("font-size", "12px")
      .style("opacity", "0");

    const { processedData, segmentData, totalHeight } = processData(yLabels);

    console.log("Processed Data:", processedData);

    // <-- ALTERAÇÃO UTC: Usar d3.utcHour para cálculos de tempo
    const hoursShown = d3.utcHour.count(initialDate, finalDate);
    const plotWidth = hoursShown * hourWidth;
    const margin = { top: 40, bottom: 40 };
    const innerH = height - margin.top - margin.bottom;

    const originalYDomain = [0, totalHeight];
    // <-- ALTERAÇÃO UTC: Usar d3.utcHour para arredondar a data inicial
    const databaseHourFloor = d3.utcHour.floor(initialDate);
    // <-- ALTERAÇÃO UTC: Usar d3.utcHour para calcular o domínio final
    const originalXDomain = [databaseHourFloor, d3.utcHour.offset(databaseHourFloor, hoursShown)];

    const yDomain = zoomState ? [zoomState.yMin, zoomState.yMax] : originalYDomain;
    const xDomain = zoomState ? [zoomState.xMin, zoomState.xMax] : originalXDomain;

    // <-- ALTERAÇÃO UTC: Usar d3.scaleUtc para a escala do eixo X
    const xScale = d3.scaleUtc().domain(xDomain).range([0, plotWidth]);
    const yScale = d3.scaleLinear().domain(yDomain).range([innerH, 0]);

    const zoomLevel = (originalYDomain[1] - originalYDomain[0]) / (yDomain[1] - yDomain[0]);
    const showDetailedLabels = zoomLevel > 1.5;

    d3.select(svgPlotRef.current).attr("width", plotWidth).attr("height", height);

    const defs = d3.select(svgPlotRef.current).append("defs");
    const pattern = defs
      .append("pattern")
      .attr("id", "hatch-pattern")
      .attr("width", 8)
      .attr("height", 8)
      .attr("patternUnits", "userSpaceOnUse")
      .attr("patternTransform", "rotate(45)");
    pattern.append("rect").attr("width", 8).attr("height", 8).attr("fill", "rgba(235, 225, 225, 1)");
    pattern.append("path").attr("d", "M 0,0 l 8,0").attr("stroke", "rgba(210, 200, 200, 1)").attr("stroke-width", 4);

    // Eixo Y Left
    if (showDetailedLabels) {
      const visibleItems = processedData.filter(
        (d) => d.indexGraficoI !== undefined && d.indexGraficoI >= yDomain[0] && d.indexGraficoI <= yDomain[1],
      );
      const itemTicks = visibleItems.map((d) => d.indexGraficoI!);
      const axisYLeft = d3
        .axisLeft(yScale)
        .tickValues(itemTicks)
        .tickFormat((d) => {
          const item = visibleItems.find((item) => item.indexGraficoI === d);
          return item ? item.nomeSbl || item.nomeApelido : "";
        });
      d3.select(svgLeftRef.current)
        .append("g")
        .attr("transform", `translate(${yAxisWidth - 1},${margin.top})`)
        .call(axisYLeft);
    } else {
      const visibleSegments = segmentData.filter((seg) => seg.midY >= yDomain[0] && seg.midY <= yDomain[1]);
      const segmentTicks = visibleSegments.map((seg) => seg.midY);
      const axisYLeft = d3
        .axisLeft(yScale)
        .tickValues(segmentTicks)
        .tickFormat((d) => {
          const segment = visibleSegments.find((seg) => seg.midY === d);
          return segment ? segment.name : "";
        });
      d3.select(svgLeftRef.current)
        .append("g")
        .attr("transform", `translate(${yAxisWidth - 1},${margin.top})`)
        .call(axisYLeft);
    }

    // Eixo Y Right
    const axisYRightGroup = d3.select(svgRightRef.current).append("g").attr("transform", `translate(1,${margin.top})`);
    if (showDetailedLabels) {
      processedData.forEach((item) => {
        if (item.indexGraficoS !== undefined && item.indexGraficoS >= yDomain[0] && item.indexGraficoS <= yDomain[1]) {
          axisYRightGroup
            .append("text")
            .attr("x", 5)
            .attr("y", yScale(item.indexGraficoS))
            .attr("dy", "0.35em")
            .text(item.nomeSbl || item.nomeApelido)
            .attr("font-size", 11)
            .attr("fill", "#555");
        }
      });
    } else {
      segmentData.forEach((segment) => {
        if (segment.midY >= yDomain[0] && segment.midY <= yDomain[1]) {
          axisYRightGroup
            .append("text")
            .attr("x", 5)
            .attr("y", yScale(segment.midY))
            .attr("dy", "0.35em")
            .text(segment.name)
            .attr("font-size", 12)
            .attr("font-weight", "bold")
            .attr("fill", "#111");
        }
      });
    }

    // Eixos X
    const hourInterval = 1;
    const hourTicks: Date[] = [];
    let currentHour = new Date(xDomain[0]);
    while (currentHour <= xDomain[1]) {
      hourTicks.push(new Date(currentHour));
      currentHour = d3.utcHour.offset(currentHour, hourInterval);
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

    plotG
      .append("g")
      .attr("class", "segment-backgrounds")
      .selectAll("rect")
      .data(segmentData)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("width", plotWidth)
      .attr("y", (d) => yScale(d.endY))
      .attr("height", (d) => yScale(d.startY) - yScale(d.endY))
      .attr("fill", (d) => {
        switch (d.backgroundType) {
          case "linhaDupla":
            return "rgba(210, 200, 200, 1)";
          case "patio":
            return "url(#hatch-pattern)";
          default:
            return "none";
        }
      });

    const gridYValues =
      showDetailedLabels ?
        processedData
          .filter(
            (d) => d.indexGraficoI !== undefined && d.indexGraficoI >= yDomain[0] && d.indexGraficoI <= yDomain[1],
          )
          .map((d) => d.indexGraficoI!)
      : segmentData.filter((seg) => seg.startY >= yDomain[0] && seg.startY <= yDomain[1]).map((seg) => seg.startY);

    plotG
      .append("g")
      .selectAll("line.y-grid")
      .data(gridYValues)
      .enter()
      .append("line")
      .attr("class", "y-grid")
      .attr("x1", 0)
      .attr("x2", plotWidth)
      .attr("y1", (d) => yScale(d))
      .attr("y2", (d) => yScale(d))
      .attr("stroke", "#ccc")
      .attr("stroke-width", 1)
      .attr("opacity", 0.8);

    plotG
      .append("g")
      .selectAll("line.x-grid")
      .data(innerHourTicks)
      .enter()
      .append("line")
      .attr("class", "x-grid")
      .attr("x1", (d) => xScale(d))
      .attr("x2", (d) => xScale(d))
      .attr("y1", 0)
      .attr("y2", innerH)
      .attr("stroke", "#ccc")
      .attr("stroke-width", 1)
      .attr("opacity", 0.8);

    // --- INÍCIO: LÓGICA DE PLOTAGEM DOS TRENS ---
    const trainGroup = plotG.append("g").attr("class", "trains-group");
    const parseDateUTC = d3.utcParse("%Y-%m-%dT%H:%M:%SZ");

    trains.forEach((train) => {
      const singleTrainGroup = trainGroup.append("g").attr("class", `train-path train-${train.prefixo}`);
      const trainColor = `rgb(${train.cor.slice(0, -1)})`;

      let firstVisibleMovement = true;

      train.movimentos.forEach((mov) => {
        // <-- ALTERAÇÃO UTC: Usar o parser UTC
        const chegadaDate = mov.chegada ? parseDateUTC(mov.chegada as string) : null;
        const fimCursoDate = mov.fimCurso ? parseDateUTC(mov.fimCurso as string) : null;
        const partidaDate = mov.partida ? parseDateUTC(mov.partida as string) : null;

        if (!chegadaDate || !fimCursoDate || !partidaDate) {
          console.warn("Movimento inválido para o trem", train.prefixo, mov);
          return;
        }

        if (xScale(partidaDate) < 0 || xScale(chegadaDate) > plotWidth) {
          return;
        }

        const y1 = processedData.find((sb) => sb.nomeSbl === mov.linha)?.indexGraficoI;
        const y2 = processedData.find((sb) => sb.nomeSbl === mov.destino)?.indexGraficoI;

        if (Math.max(y1!, y2!) < yDomain[0] || Math.min(y1!, y2!) > yDomain[1]) {
          return;
        }

        singleTrainGroup
          .append("line")
          .attr("x1", xScale(chegadaDate))
          .attr("y1", yScale(y1!))
          .attr("x2", xScale(fimCursoDate))
          .attr("y2", yScale(y2!))
          .attr("stroke", trainColor)
          .attr("stroke-width", 2)
          .style("cursor", "pointer")
          .on("mouseover", function (event) {
            d3.select(this).raise().attr("stroke", "steelblue").attr("stroke-width", 3);

            tooltip
              .html(
                `<strong>Prefixo:</strong> ${train.prefixo}<br/>
                  <strong>Segmento:</strong> ${mov.segmento}<br/>
                  <strong>Chegada:</strong> ${mov.chegada}<br/>
                  <strong>Partida:</strong> ${mov.partida}`,
              )
              .style("left", event.offsetX + 10 + "px")
              .style("top", event.offsetY + 10 + "px")
              .transition()
              .duration(100)
              .style("opacity", 1);
          })
          .on("mousemove", function (event) {
            tooltip.style("left", event.offsetX + 10 + "px").style("top", event.offsetY + 10 + "px");
          })
          .on("mouseout", function () {
            d3.select(this).attr("stroke", trainColor).attr("stroke-width", 2);

            tooltip.transition().duration(100).style("opacity", 0);
          });

        if (fimCursoDate < partidaDate) {
          singleTrainGroup
            .append("line")
            .attr("x1", xScale(fimCursoDate))
            .attr("y1", yScale(y2!))
            .attr("x2", xScale(partidaDate))
            .attr("y2", yScale(y2!))
            .attr("stroke", trainColor)
            .attr("stroke-width", 2)
            .style("cursor", "pointer")
            .on("mouseover", function (event) {
              d3.select(this).raise().attr("stroke", "steelblue").attr("stroke-width", 3);

              tooltip
                .html(
                  `<strong>Prefixo:</strong> ${train.prefixo}<br/>
<strong>Segmento:</strong> ${mov.linha}<br/>
<strong>Chegada:</strong> ${mov.chegada}<br/>
<strong>Partida:</strong> ${mov.partida}`,
                )
                .style("left", event.offsetX + 10 + "px")
                .style("top", event.offsetY + 10 + "px")
                .transition()
                .duration(100)
                .style("opacity", 1);
            })
            .on("mousemove", function (event) {
              tooltip.style("left", event.offsetX + 10 + "px").style("top", event.offsetY + 10 + "px");
            })
            .on("mouseout", function () {
              d3.select(this).attr("stroke", trainColor).attr("stroke-width", 2);
              tooltip.transition().duration(100).style("opacity", 0);
            });
        }

        if (firstVisibleMovement) {
          singleTrainGroup
            .append("text")
            .attr("x", xScale(chegadaDate) - 5)
            .attr("y", yScale(y1!) + 4)
            .attr("text-anchor", "end")
            .attr("font-size", "10px")
            .attr("font-weight", "bold")
            .attr("fill", trainColor)
            .text(train.prefixo);

          firstVisibleMovement = false;
        }
      });
    });
    // --- FIM: LÓGICA DE PLOTAGEM DOS TRENS ---

    plotG.append("g").call(axisXTop);
    plotG.append("g").attr("transform", `translate(0,${innerH})`).call(axisXBottom);

    let brushStart: [number, number] | null = null;
    const brush = d3
      .brush()
      .extent([
        [0, 0],
        [plotWidth, innerH],
      ])
      .on("start", function (event) {
        if (event.sourceEvent) {
          brushStart = d3.pointer(event.sourceEvent, this);
        }
      })
      .on("end", function (event) {
        if (!event.selection || !brushStart) {
          d3.select(this).call(brush.clear);
          brushStart = null;
          return;
        }
        const [[x0, y0], [x1, y1]] = event.selection;
        const [startX, startY] = brushStart;
        const endX = Math.abs(startX - x0) < Math.abs(startX - x1) ? x1 : x0;
        const endY = Math.abs(startY - y0) < Math.abs(startY - y1) ? y1 : y0;
        const deltaX = endX - startX;
        const deltaY = endY - startY;

        if (deltaX < 0 || deltaY < 0) {
          setZoomState(null);
        } else if (deltaX > 5 && deltaY > 5) {
          setZoomState({
            xMin: xScale.invert(Math.min(x0, x1)),
            xMax: xScale.invert(Math.max(x0, x1)),
            yMin: yScale.invert(Math.max(y0, y1)),
            yMax: yScale.invert(Math.min(y0, y1)),
          });
        }
        d3.select(this).call(brush.clear);
        brushStart = null;
      });

    const brushG = plotG.append("g").attr("class", "brush").call(brush);
    brushG.selectAll(".overlay").style("cursor", "crosshair");
    brushG
      .selectAll(".selection")
      .attr("fill", "rgba(107, 109, 111, 0.2)")
      .attr("stroke", "#000000")
      .attr("stroke-width", 1);

    trainGroup.raise();
  }, [hourWidth, height, initialDate, finalDate, yLabels, yAxisWidth, zoomState, trains]);

  return (
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
      <div ref={scrollContainerRef} style={{ gridColumn: "2", overflowX: "auto", overflowY: "hidden", height: height }}>
        <svg ref={svgPlotRef} />
      </div>
      <svg ref={svgRightRef} width={yAxisWidth} height={height} style={{ gridColumn: "3", overflow: "visible" }} />
    </div>
  );
};

export { GHTChartD3 };

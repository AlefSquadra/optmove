import { useEffect, useRef, useState } from "react";

export const ChartDyeing = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 300 });

  useEffect(() => {
    const updateCanvasSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setCanvasSize({
          width: containerWidth,
          height: 300,
        });
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configura o canvas para alta resolução
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.scale(dpr, dpr);

    const data = [
      { grade: -0.1, altitude: -0.15 },
      { grade: 0.1, altitude: -0.05 },
      { grade: 0.2, altitude: 0.15 },
      { grade: 0.35, altitude: 0.4 },
      { grade: 0.4, altitude: 0.6 },
      { grade: 0.38, altitude: 0.85 },
      { grade: 0.35, altitude: 1.0 },
      { grade: 0.32, altitude: 1.05 },
      { grade: 0.28, altitude: 1.0 },
      { grade: 0.24, altitude: 0.85 },
      { grade: 0.2, altitude: 0.65 },
      { grade: 0.15, altitude: 0.45 },
      { grade: 0.05, altitude: 0.25 },
      { grade: -0.05, altitude: 0.15 },
      { grade: -0.15, altitude: 0.05 },
      { grade: -0.25, altitude: -0.05 },
      { grade: -0.2, altitude: -0.15 },
      { grade: -0.15, altitude: -0.25 },
      { grade: -0.1, altitude: -0.35 },
      { grade: 0, altitude: -0.4 },
      { grade: 0.1, altitude: -0.35 },
      { grade: 0.25, altitude: -0.15 },
      { grade: 0.35, altitude: 0.05 },
      { grade: 0.45, altitude: 0.25 },
      { grade: 0.55, altitude: 0.5 },
      { grade: 0.6, altitude: 0.75 },
      { grade: 0.58, altitude: 0.95 },
      { grade: 0.55, altitude: 1.1 },
      { grade: 0.5, altitude: 1.05 },
      { grade: 0.45, altitude: 0.95 },
      { grade: 0.4, altitude: 0.8 },
      { grade: 0.3, altitude: 0.6 },
      { grade: 0.2, altitude: 0.4 },
      { grade: 0.1, altitude: 0.2 },
      { grade: 0.05, altitude: 0.0 },
      { grade: 0, altitude: -0.2 },
      { grade: -0.1, altitude: -0.35 },
      { grade: -0.2, altitude: -0.4 },
      { grade: -0.3, altitude: -0.35 },
      { grade: -0.35, altitude: -0.25 },
      { grade: -0.4, altitude: -0.1 },
      { grade: -0.35, altitude: 0.05 },
      { grade: -0.3, altitude: 0.2 },
      { grade: -0.25, altitude: 0.35 },
      { grade: -0.2, altitude: 0.4 },
      { grade: -0.15, altitude: 0.35 },
      { grade: -0.1, altitude: 0.25 },
      { grade: -0.05, altitude: 0.1 },
      { grade: 0, altitude: -0.05 },
      { grade: 0.05, altitude: -0.2 },
    ];

    const padding = 40;
    const chartWidth = rect.width - 2 * padding;
    const chartHeight = rect.height - 2 * padding;
    const minY = -0.6;
    const maxY = 1.2;

    const dataToPixel = (index: number, value: number) => {
      const x = padding + (index / (data.length - 1)) * chartWidth;
      const y = padding + chartHeight - ((value - minY) / (maxY - minY)) * chartHeight;
      return { x, y };
    };

    let hoverIndex: number | null = null;

    const drawGrid = () => {
      ctx.strokeStyle = "#e0e0e0";
      ctx.lineWidth = 1;

      for (let i = 0; i <= 9; i++) {
        const value = minY + ((maxY - minY) / 9) * i;
        const y = dataToPixel(0, value).y;

        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(rect.width - padding, y);
        ctx.stroke();

        ctx.fillStyle = "#333";
        ctx.font = "10px Arial";
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.fillText(value.toFixed(1), padding - 5, y);
      }

      const zeroY = dataToPixel(0, 0).y;
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padding, zeroY);
      ctx.lineTo(rect.width - padding, zeroY);
      ctx.stroke();
    };

    const drawBars = () => {
      const barWidth = (chartWidth / data.length) * 0.8;
      const zeroY = dataToPixel(0, 0).y;

      data.forEach((point, index) => {
        const centerX = padding + (index / (data.length - 1)) * chartWidth;

        const gradeY = dataToPixel(0, point.grade).y;
        const gradeHeight = Math.abs(gradeY - zeroY);
        const gradeTop = point.grade >= 0 ? gradeY : zeroY;

        ctx.fillStyle = "#FF9933";
        ctx.fillRect(centerX - barWidth / 2, gradeTop, barWidth, gradeHeight);

        const altitudeY = dataToPixel(0, point.altitude).y;
        const altitudeHeight = Math.abs(altitudeY - zeroY);
        const altitudeTop = point.altitude >= 0 ? altitudeY : zeroY;
        const altBarWidth = barWidth * 0.6;

        ctx.fillStyle = "#4A90E2";
        ctx.fillRect(centerX - altBarWidth / 2, altitudeTop, altBarWidth, altitudeHeight);
      });
    };

    const drawLines = () => {
      const drawLine = (key: keyof (typeof data)[0], color: string) => {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();

        data.forEach((point, index) => {
          const centerX = padding + (index / (data.length - 1)) * chartWidth;
          const y = dataToPixel(0, point[key]).y;

          if (index === 0) {
            ctx.moveTo(centerX, y);
          } else {
            ctx.lineTo(centerX, y);
          }
        });

        ctx.stroke();
      };

      drawLine("grade", "#E6822A");
      drawLine("altitude", "#357ABD");
    };

    const drawTooltip = (index: number | null) => {
      if (index === null) return;

      const point = data[index];
      const centerX = padding + (index / (data.length - 1)) * chartWidth;

      const gradeY = dataToPixel(0, point.grade).y;
      const altitudeY = dataToPixel(0, point.altitude).y;
      const tooltipY = Math.min(gradeY, altitudeY) - 10;

      const text = `Grade: ${point.grade.toFixed(2)} | Altitude: ${point.altitude.toFixed(2)}`;
      ctx.font = "10px Arial";
      const textWidth = ctx.measureText(text).width;
      const paddingBox = 4;

      // Ajusta posição do tooltip para não sair da tela
      let tooltipX = centerX;
      if (tooltipX + textWidth / 2 + paddingBox > rect.width - padding) {
        tooltipX = rect.width - padding - textWidth / 2 - paddingBox;
      }
      if (tooltipX - textWidth / 2 - paddingBox < padding) {
        tooltipX = padding + textWidth / 2 + paddingBox;
      }

      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 1;
      ctx.fillRect(tooltipX - textWidth / 2 - paddingBox, tooltipY - 14, textWidth + paddingBox * 2, 14);
      ctx.strokeRect(tooltipX - textWidth / 2 - paddingBox, tooltipY - 14, textWidth + paddingBox * 2, 14);

      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, tooltipX, tooltipY - 7);
    };

    const drawAll = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);
      drawGrid();
      drawBars();
      drawLines();
      drawTooltip(hoverIndex);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const canvasRect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - canvasRect.left;

      const barWidth = (chartWidth / data.length) * 0.8;
      hoverIndex = null;

      data.forEach((_, index) => {
        const centerX = padding + (index / (data.length - 1)) * chartWidth;
        if (mouseX >= centerX - barWidth / 2 && mouseX <= centerX + barWidth / 2) {
          hoverIndex = index;
        }
      });

      drawAll();
    };

    const handleMouseLeave = () => {
      hoverIndex = null;
      drawAll();
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    drawAll();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [canvasSize]);

  return (
    <div ref={containerRef} className="flex w-full justify-center" style={{ width: "100%" }}>
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        className="w-full border border-neutral-300"
        style={{
          width: "100%",
          height: "300px",
          maxWidth: "100%",
        }}
      />
    </div>
  );
};

interface IPointToLineDistanceProps {
  px: number;
  py: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

function pointToLineDistance({ px, py, x1, y1, x2, y2 }: IPointToLineDistanceProps) {
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

export { pointToLineDistance };
export type { IPointToLineDistanceProps };

interface ICalculateXPositionProps {
  time: Date;
  canvasWidth: number;
  paddingLeft: number;
  hourSpacing: number;
  database: Date;
}

const getCanvasXFromTime = ({ time, database, hourSpacing, paddingLeft }: ICalculateXPositionProps) => {
  const timeDate = new Date(time);
  const startDate = new Date(database);

  startDate.setMinutes(0, 0, 0);

  const diffInMilliseconds = timeDate.getTime() - startDate.getTime();
  const diffInHours = diffInMilliseconds / (1000 * 60 * 60);

  const xPosition = paddingLeft + diffInHours * hourSpacing;
  return xPosition;
};

export { getCanvasXFromTime };
export type { ICalculateXPositionProps };

import { IYLabelsGHT } from "../GHTChart.types";

interface IGetCanvasYFromYardValueProps {
  yLabels: IYLabelsGHT[];
  yValue: number;
  padding: number;
  rangeHeight: number;
}

export const getCanvasYFromYardValue = (props: IGetCanvasYFromYardValueProps) => {
  const { yLabels, padding, yValue, rangeHeight } = props;
  const totalDistance = yLabels.reduce((sum, label) => sum + label.value, 0);
  const proportion = yValue / totalDistance;
  return padding + rangeHeight - proportion * rangeHeight;
};

export type { IGetCanvasYFromYardValueProps };

export interface IDataGHT {
  name: string;
  color: string;
  segments: ISegmentGHT[];
}

export interface ISegmentGHT {
  xi: string;
  xf: string;
  yi: number;
  yf: number;
  dash: boolean;
  info: ISegmentGHT[];
}

export interface ISegmentGHT {
  label: string;
  value: string;
}

export interface IYLabelsGHT {
  label: string;
  value: number;
  order: number;
  backgroundColor: string;
}

export interface IRestrictionsGHT {
  name: string;
  color: string;
  xi: string;
  xf: string;
  yi: number;
  yf: number;
  info: {
    label: string;
    value: string;
  }[];
}

export interface IAccumulatedYPositions {
  label: string;
  yPos: number;
  allocatedSpace: number;
  backgroundColor: string;
}
[];

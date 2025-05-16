/** INICIO - interfaces GHTChart */
export interface IDataGHT {
  id: string;
  name: string;
  color: string;
  type: string;
  segments: ISegmentGHT[];
}

export interface IActivityGHT {
  id: string;
  type: string;
  position: number;
  info: IDataInfoGHT[];
  color?: string;
  icon?: string;
}

// Atualize a interface ISegmentGHT para incluir atividades
export interface ISegmentGHT {
  id: string;
  xi: string;
  xf: string;
  yi: number;
  yf: number;
  dash: boolean;
  info: IDataInfoGHT[];
  color: string;
  activities?: IActivityGHT[]; // Adicionar esta propriedade
}

export interface IDataInfoGHT {
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
  id: string;
  name: string;
  color: string;
  xi: string;
  xf: string;
  yi: number;
  yf: number;
  info: IDataInfoGHT[];
}

export interface IAccumulatedYPositions {
  label: string;
  yPos: number;
  allocatedSpace: number;
  backgroundColor: string;
}
[];

/** FIM - interfaces GHTChart */

/** INICIO - Draw GHTChart */
interface BaseClickableElement {
  id: string;
  name: string;
  clickType?: "contextmenu" | "click" | string;
  event: React.MouseEvent;
  data: {
    [key: string]: any;
  };
}

interface TrainElement extends BaseClickableElement {
  elementType: "train";
  coordinates: {
    line: {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    };
  };
}

interface RestrictionElement extends BaseClickableElement {
  elementType: "restriction";
  coordinates: {
    rectangle: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  };
}

interface BackgroundElement extends BaseClickableElement {
  elementType: "background";
  coordinates: {
    point: {
      x: number;
      y: number;
    };
  };
}

// fallback para qualquer outro tipo
interface GenericElement extends BaseClickableElement {
  elementType: string;
  coordinates: Record<string, any>;
}

export interface IHoveredSegmentIndex {
  lineIndex: number;
  segmentIndex: number;
}

export type IClickableElement = TrainElement | RestrictionElement | BackgroundElement | GenericElement;

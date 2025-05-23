export type TransferItem = {
  key: string;
  title: string;
  disabled?: boolean;
};

export interface TransferProps {
  dataSource: TransferItem[];
  targetKeys: TransferItem[];
  className?: string;
  onChange: (nextTargetKeys: TransferItem[]) => void;
}

export interface TransferListItem {
  id: string | number;
  label: string;
  value: string | number;
  disabled?: boolean;
  metadata?: Record<string, unknown>;
}

export interface TransferListItemRenderProps {
  item: TransferListItem;
  isSelected: boolean;
  onToggle: (item: TransferListItem) => void;
  disabled: boolean;
}

export interface TransferListProps {
  leftTitle?: string;
  rightTitle?: string;
  leftItems: TransferListItem[];
  rightItems: TransferListItem[];
  onChange?: (left: TransferListItem[], right: TransferListItem[]) => void;
  showFilters?: boolean;
  showSearch?: boolean;
  showCounts?: boolean;
  showHeader?: boolean;
  disabled?: boolean;
  className?: string;
  showButtonsControl?: boolean;
  renderItem?: (props: TransferListItemRenderProps) => React.ReactNode;
}

export interface ITransferListComponentProps {
  title?: string;
  items: TransferListItem[];
  selectedItems: TransferListItem[];
  onToggleItem: (item: TransferListItem) => void;
  onToggleAll: () => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
  showSearch: boolean;
  showCounts: boolean;
  showHeader: boolean;
  disabled: boolean;
  renderItem?: (props: TransferListItemRenderProps) => React.ReactNode;
  filteredItems: TransferListItem[];
}

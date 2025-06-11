import { Text } from "@fluentui/react-components";
import type { TransferListItemRenderProps } from "@shared/components/transferList/TransferList.type";

export const DefaultItemRenderer: React.FC<TransferListItemRenderProps> = ({
  item,
  isSelected,
  onToggle,
  disabled,
}) => (
  <div
    className={`cursor-pointer rounded border px-3 py-2 transition-all duration-200 ${
      isSelected ? "border-blue-300 bg-blue-100 text-blue-800" : "border-gray-200 bg-white hover:bg-gray-50"
    } ${disabled ? "cursor-not-allowed opacity-50" : ""} ${item.disabled ? "cursor-not-allowed opacity-50" : ""} `}
    onClick={() => !disabled && !item.disabled && onToggle(item)}
  >
    <Text size={300} weight="medium">
      {item.label}
    </Text>
  </div>
);

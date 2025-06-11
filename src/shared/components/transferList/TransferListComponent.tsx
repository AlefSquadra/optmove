import { Button, Input, Text } from "@fluentui/react-components";
import { Search24Regular } from "@fluentui/react-icons";
import { DefaultItemRenderer } from "@shared/components/transferList/DefaultItemRenderer";
import type { ITransferListComponentProps } from "@shared/components/transferList/TransferList.type";

export const TransferListComponent: React.FC<ITransferListComponentProps> = ({
  title,
  selectedItems,
  onToggleItem,
  onToggleAll,
  searchValue,
  onSearchChange,
  showSearch,
  showCounts,
  showHeader,
  disabled,
  renderItem = DefaultItemRenderer,
  filteredItems,
}) => {
  const allSelected =
    filteredItems.length > 0 &&
    filteredItems.every((item) => selectedItems.some((selected) => selected.id === item.id));

  return (
    <div className="flex h-full flex-col bg-transparent">
      {showHeader && (
        <div className="flex-shrink-0 pb-3">
          <div className="flex items-center justify-between">
            <Text size={200} weight="semibold" className="text-gray-800">
              {title}
              {showCounts && (
                <Text size={300} weight="regular" className="ml-2 text-gray-500">
                  ({selectedItems.length}/{filteredItems.length})
                </Text>
              )}
            </Text>
            {filteredItems.length > 0 && (
              <Button appearance="subtle" size="small" onClick={onToggleAll} disabled={disabled}>
                <Text size={200}>{allSelected ? "Desmarcar todos" : "Marcar todos"}</Text>
              </Button>
            )}
          </div>
        </div>
      )}

      {showSearch && (
        <div className="flex-shrink-0 pb-3">
          <Input
            contentBefore={<Search24Regular />}
            placeholder="Buscar itens..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            disabled={disabled}
            className="w-full"
          />
        </div>
      )}

      <div className="h-full rounded-lg border border-gray-200 bg-gray-50">
        <div className="h-full overflow-y-auto p-2">
          {filteredItems.length === 0 ?
            <div className="flex h-32 items-center justify-center">
              <Text size={300} className="text-gray-500">
                Nenhum item encontrado
              </Text>
            </div>
          : <div className="space-y-1">
              {filteredItems.map((item) => {
                const isSelected = selectedItems.some((selected) => selected.id === item.id);
                return (
                  <div key={item.id}>
                    {renderItem({
                      item,
                      isSelected,
                      onToggle: onToggleItem,
                      disabled: disabled || item.disabled || false,
                    })}
                  </div>
                );
              })}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

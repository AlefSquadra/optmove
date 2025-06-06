import { Button, Input, Text } from "@fluentui/react-components";
import {
  ChevronDoubleLeftRegular,
  ChevronDoubleRightRegular,
  ChevronLeft24Regular,
  ChevronRight24Regular,
  Search24Regular,
} from "@fluentui/react-icons";
import clsx from "clsx";
import React, { useCallback, useMemo, useState } from "react";

// Tipos necessários
export interface Item {
  id: string | number;
  label: string;
  value: string | number;
  disabled?: boolean;
  metadata?: Record<string, unknown>;
}

export interface ItemRenderProps {
  item: Item;
  isSelected: boolean;
  onToggle: (item: Item) => void;
  disabled: boolean;
}

export interface TransferListProps {
  leftTitle?: string;
  rightTitle?: string;
  leftItems: Item[];
  rightItems: Item[];
  onChange?: (left: Item[], right: Item[]) => void;
  showFilters?: boolean;
  showSearch?: boolean;
  showCounts?: boolean;
  showHeader?: boolean;
  disabled?: boolean;
  className?: string;
  showButtonsControl?: boolean;
  renderItem?: (props: ItemRenderProps) => React.ReactNode;
}

// Componente padrão para renderizar itens
const DefaultItemRenderer: React.FC<ItemRenderProps> = ({ item, isSelected, onToggle, disabled }) => (
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

// Componente de lista
interface ListProps {
  title?: string;
  items: Item[];
  selectedItems: Item[];
  onToggleItem: (item: Item) => void;
  onToggleAll: () => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
  showSearch: boolean;
  showCounts: boolean;
  showHeader: boolean;
  disabled: boolean;
  renderItem?: (props: ItemRenderProps) => React.ReactNode;
  filteredItems: Item[];
}

const ListComponent: React.FC<ListProps> = ({
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
            <Text size={500} weight="semibold" className="text-gray-800">
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

// Componente principal TransferList
export const TransferList: React.FC<TransferListProps> = ({
  leftTitle = "Itens Disponíveis",
  rightTitle = "Itens Selecionados",
  leftItems,
  rightItems,
  onChange,

  showSearch = true,
  showCounts = true,
  showHeader = true,
  disabled = false,
  className = "",
  showButtonsControl = true,
  renderItem,
}) => {
  const [selectedLeft, setSelectedLeft] = useState<Item[]>([]);
  const [selectedRight, setSelectedRight] = useState<Item[]>([]);
  const [leftSearchValue, setLeftSearchValue] = useState("");
  const [rightSearchValue, setRightSearchValue] = useState("");

  // Filtrar itens com base na busca
  const filteredLeftItems = useMemo(() => {
    if (!showSearch || !leftSearchValue.trim()) return leftItems;
    return leftItems.filter(
      (item) =>
        item.label.toLowerCase().includes(leftSearchValue.toLowerCase()) ||
        item.value.toString().toLowerCase().includes(leftSearchValue.toLowerCase()),
    );
  }, [leftItems, leftSearchValue, showSearch]);

  const filteredRightItems = useMemo(() => {
    if (!showSearch || !rightSearchValue.trim()) return rightItems;
    return rightItems.filter(
      (item) =>
        item.label.toLowerCase().includes(rightSearchValue.toLowerCase()) ||
        item.value.toString().toLowerCase().includes(rightSearchValue.toLowerCase()),
    );
  }, [rightItems, rightSearchValue, showSearch]);

  // Handlers para seleção de itens
  const handleToggleLeftItem = useCallback((item: Item) => {
    setSelectedLeft((prev) => {
      const isSelected = prev.some((selected) => selected.id === item.id);
      if (isSelected) {
        return prev.filter((selected) => selected.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  }, []);

  const handleToggleRightItem = useCallback((item: Item) => {
    setSelectedRight((prev) => {
      const isSelected = prev.some((selected) => selected.id === item.id);
      if (isSelected) {
        return prev.filter((selected) => selected.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  }, []);

  // Handlers para selecionar/desmarcar todos
  const handleToggleAllLeft = useCallback(() => {
    const allSelected = filteredLeftItems.every((item) => selectedLeft.some((selected) => selected.id === item.id));

    if (allSelected) {
      setSelectedLeft((prev) => prev.filter((selected) => !filteredLeftItems.some((item) => item.id === selected.id)));
    } else {
      const newSelections = filteredLeftItems.filter(
        (item) => !selectedLeft.some((selected) => selected.id === item.id),
      );
      setSelectedLeft((prev) => [...prev, ...newSelections]);
    }
  }, [filteredLeftItems, selectedLeft]);

  const handleToggleAllRight = useCallback(() => {
    const allSelected = filteredRightItems.every((item) => selectedRight.some((selected) => selected.id === item.id));

    if (allSelected) {
      setSelectedRight((prev) =>
        prev.filter((selected) => !filteredRightItems.some((item) => item.id === selected.id)),
      );
    } else {
      const newSelections = filteredRightItems.filter(
        (item) => !selectedRight.some((selected) => selected.id === item.id),
      );
      setSelectedRight((prev) => [...prev, ...newSelections]);
    }
  }, [filteredRightItems, selectedRight]);

  // Handlers para mover itens
  const moveToRight = useCallback(() => {
    if (selectedLeft.length === 0) return;

    const newLeftItems = leftItems.filter((item) => !selectedLeft.some((selected) => selected.id === item.id));
    const newRightItems = [...rightItems, ...selectedLeft];

    setSelectedLeft([]);
    onChange?.(newLeftItems, newRightItems);
  }, [selectedLeft, leftItems, rightItems, onChange]);

  const moveToLeft = useCallback(() => {
    if (selectedRight.length === 0) return;

    const newRightItems = rightItems.filter((item) => !selectedRight.some((selected) => selected.id === item.id));
    const newLeftItems = [...leftItems, ...selectedRight];

    setSelectedRight([]);
    onChange?.(newLeftItems, newRightItems);
  }, [selectedRight, leftItems, rightItems, onChange]);

  const moveAllToRight = useCallback(() => {
    if (leftItems.length === 0) return;

    const newRightItems = [...rightItems, ...leftItems];
    const newLeftItems: Item[] = [];

    setSelectedLeft([]);
    onChange?.(newLeftItems, newRightItems);
  }, [leftItems, rightItems, onChange]);

  const moveAllToLeft = useCallback(() => {
    if (rightItems.length === 0) return;

    const newLeftItems = [...leftItems, ...rightItems];
    const newRightItems: Item[] = [];

    setSelectedRight([]);
    onChange?.(newLeftItems, newRightItems);
  }, [leftItems, rightItems, onChange]);

  return (
    <div className={clsx("flex flex-row gap-4", className)}>
      {/* Lista da Esquerda */}
      <div className="h-full w-1/2">
        <ListComponent
          title={leftTitle}
          items={leftItems}
          selectedItems={selectedLeft}
          onToggleItem={handleToggleLeftItem}
          onToggleAll={handleToggleAllLeft}
          searchValue={leftSearchValue}
          onSearchChange={setLeftSearchValue}
          showSearch={showSearch}
          showCounts={showCounts}
          showHeader={showHeader}
          disabled={disabled}
          renderItem={renderItem}
          filteredItems={filteredLeftItems}
        />
      </div>

      {/* Botões de Controle */}
      {showButtonsControl && (
        <div className="flex w-20 flex-col items-center justify-center gap-2 px-2">
          <div className="flex flex-col gap-2">
            <Button
              icon={<ChevronDoubleRightRegular />}
              appearance="subtle"
              size="large"
              onClick={moveAllToRight}
              disabled={disabled || leftItems.length === 0}
              title="Mover todos para direita"
            />

            <Button
              icon={<ChevronRight24Regular />}
              appearance="primary"
              size="large"
              onClick={moveToRight}
              disabled={disabled || selectedLeft.length === 0}
              title="Mover selecionados para direita"
            />

            <Button
              icon={<ChevronLeft24Regular />}
              appearance="primary"
              size="large"
              onClick={moveToLeft}
              disabled={disabled || selectedRight.length === 0}
              title="Mover selecionados para esquerda"
            />

            <Button
              icon={<ChevronDoubleLeftRegular />}
              appearance="subtle"
              size="large"
              onClick={moveAllToLeft}
              disabled={disabled || rightItems.length === 0}
              title="Mover todos para esquerda"
            />
          </div>
        </div>
      )}

      {/* Lista da Direita */}
      <div className="h-full w-1/2">
        <ListComponent
          title={rightTitle}
          items={rightItems}
          selectedItems={selectedRight}
          onToggleItem={handleToggleRightItem}
          onToggleAll={handleToggleAllRight}
          searchValue={rightSearchValue}
          onSearchChange={setRightSearchValue}
          showSearch={showSearch}
          showCounts={showCounts}
          showHeader={showHeader}
          disabled={disabled}
          renderItem={renderItem}
          filteredItems={filteredRightItems}
        />
      </div>
    </div>
  );
};

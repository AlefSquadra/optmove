import { Button } from "@fluentui/react-components";
import {
  ChevronDoubleLeftRegular,
  ChevronDoubleRightRegular,
  ChevronLeft24Regular,
  ChevronRight24Regular,
} from "@fluentui/react-icons";
import type { TransferListItem, TransferListProps } from "@shared/components/transferList/TransferList.type";
import { TransferListComponent } from "@shared/components/transferList/TransferListComponent";
import clsx from "clsx";
import React, { useCallback, useMemo, useState } from "react";

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
  const [selectedLeft, setSelectedLeft] = useState<TransferListItem[]>([]);
  const [selectedRight, setSelectedRight] = useState<TransferListItem[]>([]);
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
  const handleToggleLeftItem = useCallback((item: TransferListItem) => {
    setSelectedLeft((prev) => {
      const isSelected = prev.some((selected) => selected.id === item.id);
      if (isSelected) {
        return prev.filter((selected) => selected.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  }, []);

  const handleToggleRightItem = useCallback((item: TransferListItem) => {
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
    const newLeftItems: TransferListItem[] = [];

    setSelectedLeft([]);
    onChange?.(newLeftItems, newRightItems);
  }, [leftItems, rightItems, onChange]);

  const moveAllToLeft = useCallback(() => {
    if (rightItems.length === 0) return;

    const newLeftItems = [...leftItems, ...rightItems];
    const newRightItems: TransferListItem[] = [];

    setSelectedRight([]);
    onChange?.(newLeftItems, newRightItems);
  }, [leftItems, rightItems, onChange]);

  return (
    <div className={clsx("flex flex-row gap-4", className)}>
      {/* Lista da Esquerda */}
      <div className="h-full w-1/2">
        <TransferListComponent
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
              size="small"
              onClick={moveAllToRight}
              disabled={disabled || leftItems.length === 0}
              title="Mover todos para direita"
            />

            <Button
              icon={<ChevronRight24Regular />}
              appearance="primary"
              size="small"
              onClick={moveToRight}
              disabled={disabled || selectedLeft.length === 0}
              title="Mover selecionados para direita"
            />

            <Button
              icon={<ChevronLeft24Regular />}
              appearance="primary"
              size="small"
              onClick={moveToLeft}
              disabled={disabled || selectedRight.length === 0}
              title="Mover selecionados para esquerda"
            />

            <Button
              icon={<ChevronDoubleLeftRegular />}
              appearance="subtle"
              size="small"
              onClick={moveAllToLeft}
              disabled={disabled || rightItems.length === 0}
              title="Mover todos para esquerda"
            />
          </div>
        </div>
      )}

      {/* Lista da Direita */}
      <div className="h-full w-1/2">
        <TransferListComponent
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

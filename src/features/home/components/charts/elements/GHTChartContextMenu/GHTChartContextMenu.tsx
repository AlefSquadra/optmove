import type {
  IContextMenuProps,
  IModifiersKeys,
} from "@features/home/components/charts/elements/GHTChartContextMenu/contextMenu.types";
import React, { useEffect, useMemo, useRef } from "react";
import { contextMenuDefinitions } from "./contextMenuDefinitions";
import { MenuItem } from "./GHTChartContextMenuITem";
import { normalizeShortcut } from "./normalizeShortcut";

export const ContextMenu = ({ x, y, type, name, onClose, onAction, data }: IContextMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const menuGroups = useMemo(() => contextMenuDefinitions[type], [type]);

  // Fechar o menu quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    const shortcutMap = new Map();

    menuGroups.forEach((group) => {
      group.items.forEach((item) => {
        if (item.shortcut && !item.disabled) {
          const normalizedShortcut = normalizeShortcut(item.shortcut);
          shortcutMap.set(normalizedShortcut, item);
        }
      });
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      // Construir o atalho pressionado
      const modifiers: IModifiersKeys[] = [];
      if (event.ctrlKey) modifiers.push("ctrl");
      if (event.altKey) modifiers.push("alt");
      if (event.shiftKey) modifiers.push("shift");

      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;

      const pressedShortcut = normalizeShortcut([...modifiers, key].join("+"));

      // Verificar se existe uma ação correspondente
      const menuItem = shortcutMap.get(pressedShortcut);
      if (menuItem) {
        event.preventDefault();
        onAction(menuItem.action || menuItem.id, data!);
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [type, onAction, onClose, data, menuGroups]);

  return (
    <div
      ref={menuRef}
      className="absolute z-50 rounded border border-gray-200 bg-white py-1 shadow-lg"
      style={{
        left: x,
        top: y,
        minWidth: "200px",
      }}
    >
      <div className="border-b border-gray-200 px-4 py-2 font-bold text-gray-700">{name}</div>

      {menuGroups.map((group, groupIndex) => (
        <React.Fragment key={group.id}>
          {groupIndex > 0 && <div className="mx-2 my-1 border-t border-gray-200" />}

          {group.items.map((item) => (
            <MenuItem key={item.id} item={item} data={data} onAction={onAction} onClose={onClose} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

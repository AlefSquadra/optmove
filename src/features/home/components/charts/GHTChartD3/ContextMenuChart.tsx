import { useEffect, useRef } from "react";

// Novos tipos: cada grupo tem uma seção e uma lista de itens
type MenuItem<T = any> = {
  id: string;
  label: string;
  shortcut?: string;
  data?: T;
  onClick: (data?: T) => void;
};

export type MenuGroup = {
  section: string;
  items: MenuItem[];
};

interface SimpleContextMenuProps {
  x: number;
  y: number;
  groups: MenuGroup[];
  onClose: () => void;
}

function ChartGhtContextMenu({ x = 0, y = 0, groups = [], onClose }: SimpleContextMenuProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Fechar ao clicar fora
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // Atalhos do menu
  useEffect(() => {
    const normalizeKey = (key: string) => {
      const keyMap = {
        Delete: "Delete",
        Backspace: "Backspace",
        Enter: "Enter",
        Escape: "Escape",
        Tab: "Tab",
        Space: " ",
        ArrowUp: "ArrowUp",
        ArrowDown: "ArrowDown",
        ArrowLeft: "ArrowLeft",
        ArrowRight: "ArrowRight",
        F1: "F1",
        F2: "F2",
        F3: "F3",
        F4: "F4",
        F5: "F5",
        F6: "F6",
        F7: "F7",
        F8: "F8",
        F9: "F9",
        F10: "F10",
        F11: "F11",
        F12: "F12",
      };
      return keyMap[key] || (key.length === 1 ? key.toLowerCase() : key);
    };

    const listeners: ((e: KeyboardEvent) => void)[] = [];
    if (groups.length > 0) {
      groups.forEach((group) =>
        group.items.forEach((item) => {
          if (!item.shortcut) return;
          const parts = item.shortcut.split("+").map((p) => p.trim());
          const hasCtrl = parts.some((p) => p.toLowerCase() === "control" || p.toLowerCase() === "ctrl");
          const hasShift = parts.some((p) => p.toLowerCase() === "shift");
          const hasAlt = parts.some((p) => p.toLowerCase() === "alt");
          const hasMeta = parts.some((p) => p.toLowerCase() === "meta" || p.toLowerCase() === "cmd");
          const key = parts.find((p) => !["control", "ctrl", "shift", "alt", "meta", "cmd"].includes(p.toLowerCase()));
          if (!key) return;
          const normalizedKey = normalizeKey(key);
          const handleKeyDown = (e: KeyboardEvent) => {
            if (hasCtrl && !e.ctrlKey) return;
            if (hasShift && !e.shiftKey) return;
            if (hasAlt && !e.altKey) return;
            if (hasMeta && !e.metaKey) return;
            const eventKey = e.key.length === 1 ? e.key.toLowerCase() : e.key;
            if (eventKey !== normalizedKey) return;
            e.preventDefault();
            e.stopPropagation();
            item.onClick(item);
            onClose();
          };
          listeners.push(handleKeyDown);
          document.addEventListener("keydown", handleKeyDown, true);
        }),
      );
    }
    return () => {
      listeners.forEach((listener) => document.removeEventListener("keydown", listener, true));
    };
  }, [groups, onClose]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div ref={ref} className="absolute z-50 w-56 rounded border bg-white shadow-md" style={{ left: x, top: y }}>
      {groups.map((group) => (
        <div key={group.section}>
          <div className="px-4 py-1 text-xs font-bold text-gray-500 select-none">{group.section}</div>
          {group.items.map((item) => (
            <div
              key={item.id}
              className="flex cursor-pointer justify-between px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => {
                item.onClick();
                onClose();
              }}
            >
              <span>{item.label}</span>
              {item.shortcut && <span className="text-xs text-gray-400">{item.shortcut}</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export { ChartGhtContextMenu };

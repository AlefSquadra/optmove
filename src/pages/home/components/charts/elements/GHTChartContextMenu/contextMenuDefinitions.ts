import { IMenuGroupContextMenu } from "./GHTChartContextMenu";

export type GHTChartContextMenuType = "train" | "restriction" | "background";

export const contextMenuDefinitions: Record<GHTChartContextMenuType, IMenuGroupContextMenu[]> = {
  train: [
    {
      id: "train",
      items: [
        {
          id: "train_movements",
          label: "Movimentos trem",
          shortcut: "Ctrl+M",
          action: "train_movements",
        },
        {
          id: "train_ficha",
          label: "Ficha do trem",
          action: "train_ficha",
        },
      ],
    },
    {
      id: "train_activities",
      items: [
        {
          id: "train_activities",
          label: "Atividades trem",
          shortcut: "F2",
          action: "train_activities",
        },
      ],
    },
    {
      id: "train_front",
      items: [
        {
          id: "train_front",
          label: "Trazer trem pra frente",
          shortcut: "F9",
          action: "train_front",
        },
      ],
    },
  ],
  restriction: [
    {
      id: "train",
      items: [
        {
          id: "train_movements",
          label: "Movimentos trem",
          icon: "▶",
          shortcut: "Ctrl+M",
          action: "train_movements",
        },
        {
          id: "select_restrictions",
          label: "Modo Seleção Restrições",
          icon: "⚡",
          shortcut: "Alt+I",
          action: "select_restrictions",
        },
      ],
    },
  ],
  background: [
    {
      id: "selection",
      items: [
        {
          id: "select_trains",
          label: "Modo Seleção Trens",
          icon: "▶",
          shortcut: "Alt+T",
          action: "select_trains",
          disabled: true,
        },
        {
          id: "select_restrictions",
          label: "Modo Seleção Restrições",
          icon: "⚡",
          shortcut: "Alt+I",
          action: "select_restrictions",
          disabled: true,
        },
      ],
    },
    {
      id: "actions",
      items: [
        {
          id: "schedule",
          label: "Programar",
          icon: "⏱️",
          action: "schedule",
          disabled: true,
        },
        {
          id: "load",
          label: "Carregar",
          icon: "🔄",
          shortcut: "Ctrl+A",
          action: "load",
        },
      ],
    },
    {
      id: "creation",
      items: [
        {
          id: "create_interdiction",
          label: "Criar Interdição",
          icon: "⚠️",
          action: "create_interdiction",
          disabled: true,
        },
        {
          id: "create_restriction",
          label: "Criar Restrição",
          icon: "⚡",
          action: "create_restriction",
          disabled: true,
        },
        {
          id: "create_train",
          label: "Criar Trem",
          icon: "➕",
          action: "create_train",
          disabled: true,
        },
      ],
    },
  ],
};

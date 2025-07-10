import { GlobalDialogContext } from "@app/providers/GlobalDialogProvider/GlobalDialogContext";
import type { GlobalDialogContextType } from "@app/providers/GlobalDialogProvider/GlobalDialogProvder.types";
import { useContext } from "react";

export const useGlobalDialog = (): GlobalDialogContextType => {
  const ctx = useContext(GlobalDialogContext);
  if (!ctx) throw new Error("useGlobalDialog must be used within a GlobalDialogProvider");
  return ctx;
};

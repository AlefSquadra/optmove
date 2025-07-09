import type { GlobalDialogContextType } from "@app/providers/GlobalDialogProvider/GlobalDialogProvder.types";
import { createContext } from "react";

export const GlobalDialogContext = createContext<GlobalDialogContextType | undefined>(undefined);

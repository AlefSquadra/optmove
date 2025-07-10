import type { IOfficeMenuContext } from "@features/home/providers/OfficeMenuProvider/OfficeMenu.types";
import { createContext } from "react";

export const OfficeMenuContext = createContext({} as IOfficeMenuContext);

import type { FTLayoutContext } from "@features/home/providers/HomeFTLayoutProvider/HomeFTLayoutProvider.types";
import { createContext } from "react";


export const FtlContext = createContext<FTLayoutContext>({} as FTLayoutContext);

import type { IApplicationContext } from "@app/providers/ApplicationProvider/ApplicationProvider.types";
import { createContext } from "react";


export const ApplicationContext = createContext<IApplicationContext | null>(null);
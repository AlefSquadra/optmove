import { createContext, useContext, useState } from "react";

interface IGHTChartContext {
  cursorPointer: React.CSSProperties["cursor"];
  setCursorPointer: React.Dispatch<React.SetStateAction<React.CSSProperties["cursor"]>>;
}

interface IGHTChartProviderProps {
  children: React.ReactNode;
}

const GHTChartContext = createContext<IGHTChartContext | null>(null);

const GHTChartProvider = (props: IGHTChartProviderProps) => {
  const [cursorPointer, setCursorPointer] = useState<React.CSSProperties["cursor"]>("default");
  return (
    <GHTChartContext.Provider value={{ cursorPointer, setCursorPointer }}>{props.children}</GHTChartContext.Provider>
  );
};

export const useGHTChartContext = () => {
  const context = useContext(GHTChartContext);
  if (context === null) {
    throw new Error("useGHTChartContext must be used within a GHTChartProvider");
  }
  return context;
};

export { GHTChartProvider };

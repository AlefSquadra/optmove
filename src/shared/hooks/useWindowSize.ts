// useWindowSize.ts
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Breakpoint = "md" | "lg" | "xl" | "sm";

interface WindowSize {
  width: number;
  height: number;
  isPortrait: boolean;
  breakpoint: Breakpoint;
}

/**
 * Hook para observar tamanho da `window` e breakpoint Tailwind.
 * Usa `requestAnimationFrame` (sem *debounce*) para evitar *reflows* encadeados.
 */
export const useWindowSize = (): WindowSize => {
  const [size, setSize] = useState<WindowSize>({
    width: 0,
    height: 0,
    isPortrait: false,
    breakpoint: "sm",
  });

  const hasWindow = typeof window !== "undefined";

  const BREAKPOINTS = {
    md: 1280,
    lg: 1366,
    xl: 1920,
  } as const;

  const rafId = useRef<number>();

  const measure = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const isPortrait = height > width;

    let breakpoint: Breakpoint = "sm";

    if (width >= BREAKPOINTS.xl) breakpoint = "xl";
    else if (width >= BREAKPOINTS.lg) breakpoint = "lg";
    else if (width >= BREAKPOINTS.md) breakpoint = "md";

    setSize({ width, height, isPortrait, breakpoint });
  };

  const useIsoEffect = hasWindow ? useLayoutEffect : useEffect;

  useIsoEffect(() => {
    if (!hasWindow) return;

    const handleResize = () => {
      cancelAnimationFrame(rafId.current!);
      rafId.current = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId.current!);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};

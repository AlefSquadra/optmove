export const activityIconsToCanvas: Record<string, string> = {
  parada: "led-yellow.svg",
  manutenção: "vite.svg",
  cruzamento: "/icons/cross.png",
};

const imageCache: Record<string, HTMLImageElement> = {};

export const loadImageToCanvas = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    if (imageCache[src]) {
      resolve(imageCache[src]);
      return;
    }

    const img = new Image();
    img.src = src;
    img.onload = () => {
      imageCache[src] = img;
      resolve(img);
    };
    img.onerror = reject;
  });
};

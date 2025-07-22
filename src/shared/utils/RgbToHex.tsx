export function RgbStringToHex(input: string): string {
  const rgb = input
    .split(",")
    .filter((part) => part.trim() !== "") // Remove valores vazios
    .map((str) => parseFloat(str.replace(",", ".")));

  if (rgb.length !== 3 || rgb.some((v) => isNaN(v))) {
    throw new Error("Formato inválido. Esperado: 'R,G,B'");
  }

  const [r, g, b] = rgb.map((val) => Math.max(0, Math.min(255, Math.round(val))));
  const toHex = (val: number) => val.toString(16).padStart(2, "0");
  const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

  return hexColor;
}

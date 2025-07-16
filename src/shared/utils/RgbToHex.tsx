export function RgbStringToHex(input: string): string {
  console.log(`🎨 Converting RGB: "${input}"`);

  const rgb = input
    .split(",")
    .filter((part) => part.trim() !== "") // Remove valores vazios
    .map((str) => parseFloat(str.replace(",", ".")));

  console.log(`🔢 Parsed RGB values:`, rgb);

  if (rgb.length !== 3 || rgb.some((v) => isNaN(v))) {
    throw new Error("Formato inválido. Esperado: 'R,G,B'");
  }

  const [r, g, b] = rgb.map((val) => Math.max(0, Math.min(255, Math.round(val))));
  console.log(`🔄 Processed RGB values: [${r}, ${g}, ${b}]`);

  const toHex = (val: number) => val.toString(16).padStart(2, "0");

  const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  console.log(`🎨 Final hex color: ${hexColor}`);

  return hexColor;
}

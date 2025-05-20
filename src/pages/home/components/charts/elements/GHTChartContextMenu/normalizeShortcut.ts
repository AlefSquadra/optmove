export const normalizeShortcut = (shortcut) => {
  if (!shortcut) return "";

  const parts = shortcut.split("+").map((s) => s.trim());
  const modifiers = [];
  const key = [];

  // Separar modificadores e teclas normais
  parts.forEach((part) => {
    const lower = part.toLowerCase();
    if (["ctrl", "alt", "shift"].includes(lower)) {
      modifiers.push(lower);
    } else {
      // Preservar F-keys com caixa alta
      key.push(/^f\d{1,2}$/i.test(part) ? part.toUpperCase() : part.toLowerCase());
    }
  });

  // Ordenar modificadores na ordem padrão
  modifiers.sort((a, b) => {
    const order = ["ctrl", "shift", "alt"];
    return order.indexOf(a) - order.indexOf(b);
  });

  return [...modifiers, ...key].join("+");
};

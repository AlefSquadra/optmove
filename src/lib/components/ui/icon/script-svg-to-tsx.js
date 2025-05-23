import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "fs";
import { JSDOM } from "jsdom";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const svgDir = resolve(__dirname, "../../../lib/assets/images/icons");
const outputDir = resolve(__dirname, "../Icon/icons");

// Cria os diretórios se não existirem
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

// Lê todos os arquivos SVG
const svgFiles = readdirSync(svgDir).filter((file) => file.endsWith(".svg"));

// Para cada arquivo SVG
svgFiles.forEach((file) => {
  const filePath = join(svgDir, file);
  const content = readFileSync(filePath, "utf8");

  // Parse o SVG usando JSDOM
  const dom = new JSDOM(content);
  const svg = dom.window.document.querySelector("svg");

  if (!svg) return;

  // Obtem atributos importantes
  const width = svg.getAttribute("width") || "24";
  const height = svg.getAttribute("height") || "24";
  const viewBox = svg.getAttribute("viewBox") || `0 0 ${width} ${height}`;

  // Obtém o conteúdo interno do SVG
  let svgContent = "";

  // Processa todos os elementos filhos
  const processChild = (node) => {
    // Copia o nó
    const cloneNode = node.cloneNode(true);

    // Se tiver fill, substitua-o pela prop color
    if (cloneNode.hasAttribute && cloneNode.hasAttribute("fill") && cloneNode.getAttribute("fill") !== "none") {
      cloneNode.setAttribute("fill", "{color}");
    }

    // Converte o nó para string
    const serializer = new dom.window.XMLSerializer();
    return serializer.serializeToString(
      cloneNode
        .replace(/fill="\{color\}"/g, "fill={color}")
        .replace(/stroke="#[0-9A-Fa-f]{6}"/g, "stroke={props.color}"),
    );
  };

  // Processa todos os filhos diretos do SVG
  Array.from(svg.children).forEach((child) => {
    svgContent += processChild(child) + "\n      ";
  });

  // Gera nome do componente (CamelCase)
  const componentName =
    file
      .replace(".svg", "")
      .split(/[-_]/)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("") + "Icon";

  // Gera o conteúdo do arquivo React
  const reactComponent = `import React from 'react';
import { Icon, IconProps } from '../Icon';

export const ${componentName}: React.FC<IconProps> = ({ 
  color = '#000000', 
  width = "${width}", 
  height = "${height}", 
  ...props 
}) => {
  return (
    <Icon 
      width={width} 
      height={height} 
      viewBox="${viewBox}" 
      {...props}
    >
      ${svgContent}
    </Icon>
  );
};
`;

  // Escreve o arquivo React
  const outputFile = join(outputDir, `${componentName}.tsx`);
  writeFileSync(outputFile, reactComponent);

  console.log(`Convertido: ${file} -> ${componentName}.tsx`);
});

// Gera um arquivo index.ts para exportar todos os ícones
const indexContent = svgFiles
  .map((file) => {
    const componentName =
      file
        .replace(".svg", "")
        .split(/[-_]/)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("") + "Icon";

    return `export * from './${componentName}';`;
  })
  .join("\n");

writeFileSync(join(outputDir, "index.ts"), indexContent);
console.log("Arquivo index.ts gerado com sucesso!");

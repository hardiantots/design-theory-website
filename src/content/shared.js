export const bi = (id, en) => ({ id, en });
export const localized = (value, language = 'id') => typeof value === 'string' ? value : value?.[language] ?? value?.id ?? '';
export const categories = [
  { id: 'perception', title: bi('Persepsi', 'Perception'), color: '#d9ff68', position: [-5, 0, -4] },
  { id: 'hierarchy', title: bi('Hierarki', 'Hierarchy'), color: '#f5a87e', position: [0, 0, -4] },
  { id: 'composition', title: bi('Komposisi', 'Composition'), color: '#c7b5fa', position: [5, 0, -4] },
  { id: 'color', title: bi('Warna', 'Color'), color: '#ffc772', position: [-5, 0, 4] },
  { id: 'typography', title: bi('Tipografi', 'Typography'), color: '#a8c6ef', position: [0, 0, 4] },
  { id: 'systems', title: bi('Sistem visual', 'Visual systems'), color: '#a8d6bc', position: [5, 0, 4] }
];
export const sourceLinks = {
  principles: { title: 'Figma · Graphic design principles', url: 'https://www.figma.com/resource-library/graphic-design-principles/' },
  gestalt: { title: 'Figma · Gestalt principles', url: 'https://www.figma.com/resource-library/gestalt-principles/' },
  hierarchy: { title: 'Figma · Visual hierarchy', url: 'https://www.figma.com/resource-library/what-is-visual-hierarchy/' },
  color: { title: 'Canva · Color wheel', url: 'https://www.canva.com/colors/color-wheel/' },
  typography: { title: 'Figma · Typography in design', url: 'https://www.figma.com/resource-library/typography-in-design/' }
};

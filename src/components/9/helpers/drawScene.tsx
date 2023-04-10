import { select } from "d3-selection";

export const drawScene = (
  rootElement: HTMLDivElement,
  windowSize: { width: number; height: number }
) => {
  console.log("drawScene");
  select(rootElement).select("svg")?.remove();

  const { width, height } = windowSize;

  select(rootElement).append("svg").attr("width", width).attr("height", height);
};

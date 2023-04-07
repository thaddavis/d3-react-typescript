import { select } from "d3-selection";

export const drawBg = (
  rootElement: HTMLDivElement,
  windowSize: { width: number; height: number }
) => {
  const { width, height } = windowSize;

  select(rootElement)
    .select("svg")
    .append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("fill", "#efffe0");
};

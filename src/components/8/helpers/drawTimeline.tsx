import { select } from "d3-selection";
import { axisLeft, axisBottom } from "d3-axis";
import { scaleLinear, scaleBand } from "d3-scale";
import { format } from "d3-format";

export const drawTimeline = (
  rootElement: HTMLDivElement,
  windowSize: { width: number; height: number },
  timelineEvents: {
    color: string;
    ts: number;
    title: string;
  }[]
) => {
  const { width, height } = windowSize!;

  console.log("width", width, "height", height);

  const PADDING = width / 10;
  const scale = scaleLinear()
    .domain([timelineEvents[0].ts, 100])
    .range([0 + PADDING, width - PADDING]);

  const axis = (axisBottom(scale) as any).ticks().tickFormat("");

  select(rootElement)
    .select("svg")
    .append("g")
    .attr("class", "x-axis")
    .attr("width", width)
    .attr("transform", `translate(${0}, ${height / 2})`)
    .call(axis);
};

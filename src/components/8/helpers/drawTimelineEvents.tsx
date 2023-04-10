import { select } from "d3-selection";
import { axisLeft, axisBottom } from "d3-axis";
import { scaleLinear, scaleBand, scalePow, scaleLog } from "d3-scale";
import { format } from "d3-format";

export const drawTimelineEvents = (
  rootElement: HTMLDivElement,
  windowSize: { width: number; height: number },
  timelineEvents: {
    color: string;
    ts: number;
    title: string;
  }[]
) => {
  const { width, height } = windowSize!;

  const PADDING = width / 10;
  const scale = scaleLinear()
    .domain([
      timelineEvents[0].ts,
      timelineEvents[timelineEvents.length - 1].ts,
    ])
    .range([0 + PADDING, width - PADDING]);

  select(rootElement)
    .select("svg")
    .append("g")
    .selectAll(".timeline-event")
    .data(timelineEvents)
    .enter()
    .append("circle")
    .attr("r", 10)
    .attr("class", "timeline-event")
    .attr("cy", function (d) {
      return 0;
    })
    .attr("cx", function (d) {
      return scale(d.ts);
    })
    .attr("transform", `translate(${0}, ${height / 2})`)
    .attr("fill", function (d) {
      return d.color;
    })
    .attr("stroke", "rgba(0,0,0,1)")
    .on("mouseover", function (d, i) {
      select(rootElement)
        .select("svg")
        .append("text")
        .attr("class", "timeline-event-text")
        .attr("font-family", "Arial")
        .attr("font-size", "16px")
        .attr("y", height / 2 - 16 - 10)
        .attr("x", d.x)
        .attr("text-anchor", function (innerD: any) {
          if (d.x > width * (3 / 4)) {
            return "end";
          } else if (d.x > width / 2) {
            return "middle";
          } else {
            return "start";
          }
        })
        .style("fill", "#004669")
        .style("font-weight", "bold")
        .text(`${i.title} ${new Date(i.ts).toLocaleString()}`);
    })
    .on("mouseout", function (d, i) {
      select(rootElement).selectAll("text.timeline-event-text").remove();
    });
};

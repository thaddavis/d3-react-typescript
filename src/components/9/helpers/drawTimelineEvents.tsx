import { select } from "d3-selection";
import { axisLeft, axisBottom } from "d3-axis";
import { scaleLinear, scaleBand, scalePow, scaleLog } from "d3-scale";
import { format } from "d3-format";
import * as d3 from "d3";

export const drawTimelineEvents = (
  rootElement: HTMLDivElement,
  windowSize: { width: number; height: number },
  timelineEvents: {
    color: string;
    ts: number;
    title: string[];
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

  // Line to event DOT
  select(rootElement)
    .select("svg")
    .append("g")
    .selectAll(".timeline-event")
    .data(timelineEvents)
    .enter()
    .append("line")
    .style("stroke", "rgba(195, 255, 104, 1)")
    .style("stroke-width", 2)
    .attr("x1", function (d: any) {
      return scale(d.ts);
    })
    .attr("y1", function (d: any) {
      return height / 2;
    })
    .attr("x2", function (d: any) {
      return scale(d.ts);
    })
    .attr("y2", function (d: any, i: number) {
      if (i % 2) {
        return 160 + height / 2;
      } else {
        return -160 + height / 2;
      }
    });

  select(rootElement)
    .select("svg")
    .append("g")
    .selectAll(".timeline-event")
    .data(timelineEvents)
    .enter()
    .append("circle")
    .attr("r", 10)
    .attr("class", "timeline-event")
    .attr("cy", function (d, i) {
      // console.log("i", i);
      if (i % 2) {
        return 160;
      } else {
        return -160;
      }
    })
    .attr("cx", function (d, i) {
      return scale(d.ts);
    })
    .attr("transform", `translate(${0}, ${height / 2})`)
    .attr("fill", function (d) {
      return d.color;
    })
    .attr("stroke", "rgba(0,0,0,1)");

  // Title
  select(rootElement)
    .select("svg")
    .append("g")
    .selectAll(".timeline-event-label")
    .data(timelineEvents)
    .enter()
    .append("text")
    .attr("x", function (d) {
      return scale(d.ts);
    })
    .attr("y", function (d, i) {
      if (i % 2) {
        return 200 + height / 2;
      } else {
        return -180 + height / 2;
      }
    })
    .attr("fill", "red")
    .attr("font-family", "Arial")
    .style("font-size", 20)
    .style("font-weight", "bold")
    .attr("text-anchor", function (d: any) {
      // console.log("text-anchor d", d);

      const xPos = scale(d.ts);

      if (xPos > width * (3 / 4)) {
        return "end";
      } else if (xPos > width / 2) {
        return "middle";
      } else {
        return "start";
      }
    })
    .text(function (d: any) {
      // console.log("d text", d);
      return d.humanTS;
    });

  // Line 1 of text
  select(rootElement)
    .select("svg")
    .append("g")
    .selectAll(".timeline-event-label")
    .data(timelineEvents)
    .enter()
    .append("text")
    .attr("x", function (d) {
      return scale(d.ts);
    })
    .attr("y", function (d, i) {
      if (i % 2) {
        return 240 + height / 2;
      } else {
        return -240 + height / 2;
      }
    })
    .attr("fill", "red")
    .attr("font-family", "Arial")
    .style("font-size", 20)
    .attr("text-anchor", function (d: any) {
      // console.log("text-anchor d", d);

      const xPos = scale(d.ts);

      if (xPos > width * (3 / 4)) {
        return "end";
      } else if (xPos > width / 2) {
        return "middle";
      } else {
        return "start";
      }
    })
    .text(function (d: any) {
      // console.log("d text", d);
      // return d.notes;

      return d.title[0];
    });

  // Line 2 of text
  select(rootElement)
    .select("svg")
    .append("g")
    .selectAll(".timeline-event-label")
    .data(timelineEvents)
    .enter()
    .append("text")
    .attr("x", function (d) {
      return scale(d.ts);
    })
    .attr("y", function (d, i) {
      if (i % 2) {
        return 260 + height / 2;
      } else {
        return -220 + height / 2;
      }
    })
    .attr("fill", "red")
    .attr("font-family", "Arial")
    .style("font-size", 20)
    .attr("text-anchor", function (d: any) {
      // console.log("text-anchor d", d);

      const xPos = scale(d.ts);

      if (xPos > width * (3 / 4)) {
        return "end";
      } else if (xPos > width / 2) {
        return "middle";
      } else {
        return "start";
      }
    })
    .text(function (d: any) {
      // console.log("d text", d);
      return d.title[1];
    });

  select(rootElement)
    .select("svg")
    .append("g")
    .append("image")
    .attr(
      "href",
      "http://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_-_black_simple.svg"
    );

  // debugger;
  // d3.text(
  //   "http://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_-_black_simple.svg",
  //   // @ts-ignore
  //   (error: any, externalSVGText: any): any => {
  //     if (error) {
  //       debugger;
  //       console.log(error);
  //       return;
  //     }

  //     debugger;

  //     select(rootElement).select("svg").append("g").append(externalSVGText);

  //     debugger;

  //     // main_chart_svg.html(externalSVGText);
  //     // main_chart_svg.append("rect").attr({
  //     //   class: "this is just a test rect",
  //     //   width: 200,
  //     //   height: 100,
  //     //   fill: "none",
  //     //   stroke: "black",
  //     //   "stroke-width": 5,
  //     // });
  //     // var innerSVG = main_chart_svg.select("svg");
  //     // innerSVG
  //     //   .transition()
  //     //   .duration(1000)
  //     //   .delay(1000)
  //     //   .select("circle")
  //     //   .attr("r", 100);
  //   }
  // );
};

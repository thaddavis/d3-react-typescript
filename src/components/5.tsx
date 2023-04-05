import { select, Selection } from "d3-selection";
import { scaleLinear, scaleBand } from "d3-scale";
import { max } from "d3-array";
import { axisLeft, axisBottom } from "d3-axis";

import React, { useEffect, useRef, useState } from "react";

const data = [
  {
    name: "foo",
    number: 9000,
  },
  {
    name: "bar",
    number: 934,
  },
  {
    name: "woo",
    number: 12245,
  },
];

const dimensions = {
  width: 800,
  height: 500,
  chartWidth: 700,
  chartHeight: 400,
  marginLeft: 100,
};

export const _5 = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const [selection, setSelection] = useState<null | Selection<
    any,
    unknown,
    null,
    undefined
  >>(null);

  const maxValue = max(data, (d) => d.number);
  /* --- `scaleLinear` --- */
  //   domain is the range of values in your data
  //   range is the range of values your data will be mapped to
  const y = scaleLinear()
    .domain([0, maxValue!])
    .range([0, dimensions.chartHeight]);

  /* --- `scaleBand` --- */
  // scaleBand will create n equal divisions along the scale
  // with n being the number of unique values in the domain
  const x = scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, dimensions.chartWidth]);
  // .padding(0.1);
  // .paddingInner(0.2);
  // .paddingOuter(0.5);

  const yAxis = axisLeft(y)
    .ticks(2)
    .tickFormat((d) => `${d} units`);
  const xAxis = axisBottom(x);

  useEffect(() => {
    if (!selection) {
      console.log("_!_");
      setSelection(select(svgRef.current));
    } else {
      //   selection
      //     .append("rect")
      //     .attr("width", dimensions.width)
      //     .attr("height", dimensions.height)
      //     .attr("fill", "blue");

      const xAxisGroup = selection
        .append("g")
        .call(xAxis)
        .attr(
          "transform",
          `translate(${dimensions.marginLeft},${dimensions.chartHeight})`
        );
      const yAxisGroup = selection
        .append("g")
        .call(yAxis)
        .attr("transform", `translate(${dimensions.marginLeft}, 0)`);

      selection
        .append("g")
        .attr("transform", `translate(${dimensions.marginLeft}, 0)`)
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("width", x.bandwidth)
        .attr("x", (d) => (d.name ? x(d.name)! : x("other")!))
        .attr("fill", "orange")
        .attr("height", (d) => y(d.number));
    }
  }, [selection]);

  return (
    <div>
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
      ></svg>
    </div>
  );
};

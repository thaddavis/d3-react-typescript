import { select, Selection } from "d3-selection";
import { scaleLinear, scaleBand } from "d3-scale";
import { max } from "d3-array";
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
  //   {
  //     name: "woo",
  //     number: 12245,
  //   },
];

export const _4 = () => {
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
  const y = scaleLinear().domain([0, maxValue!]).range([0, 500]);

  /* --- `scaleBand` --- */
  // scaleBand will create n equal divisions along the scale
  // with n being the number of unique values in the domain
  const x = scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, 800])
    .padding(0.1);
  // .paddingInner(0.2);
  // .paddingOuter(0.5);
  useEffect(() => {
    if (!selection) {
      console.log("_!_");
      setSelection(select(svgRef.current));
    } else {
      //   console.log("___ ___ ___");
      //   console.log("y(0)", y(0));
      //   console.log("y(2305)", y(2305));
      //   console.log("y(8724)", y(8724));
      selection
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        // .attr("width", 100)
        .attr("width", x.bandwidth)
        .attr("x", (d) => (d.name ? x(d.name)! : x("other")!))
        .attr("fill", "orange")
        .attr("height", (d) => y(d.number));
    }
  }, [selection]);

  //   console.log("___");

  return (
    <div>
      <svg ref={svgRef} width={1000} height={500}></svg>
    </div>
  );
};

import { select, selectAll } from "d3-selection";
import React, { useEffect, useRef } from "react";

export const _2: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    select(svgRef.current)
      .append("rect")
      .attr("width", 100)
      .attr("height", 100)
      .attr("fill", "green");

    //   selectAll('rect')
    //   selectAll('.foo')
    //   selectAll('#foo')

    selectAll("rect")
      .attr("width", 100)
      .attr("height", 100)
      .attr("fill", "blue")
      .attr("x", (_, i) => {
        return i * 100;
      });
  }, []);

  return (
    <div>
      <svg ref={svgRef}>
        <rect className="foo" />
        <rect id="foo" />
        <rect />
      </svg>
    </div>
  );
};

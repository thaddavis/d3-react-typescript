import { select } from "d3-selection";
import React, { useEffect, useRef } from "react";

export const _1: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    select(svgRef.current)
      .append("rect")
      .attr("width", 100)
      .attr("height", 100)
      .attr("fill", "green");
  }, []);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

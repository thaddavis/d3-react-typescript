import { select, Selection } from "d3-selection";
import React, { useEffect, useRef, useState } from "react";

const data = [
  { width: 200, height: 150, color: "orange" },
  { width: 200, height: 150, color: "red" },
  { width: 200, height: 150, color: "blue" },
  { width: 200, height: 150, color: "green" },
];

export const _3: React.FC = () => {
  const ref = useRef<SVGSVGElement | null>(null);

  const [selection, setSelection] = useState<null | Selection<
    any,
    unknown,
    null,
    undefined
  >>(null);

  useEffect(() => {
    if (!selection) {
      setSelection(select(ref.current));
    } else {
      const rects = selection
        .selectAll("rect")
        .data(data)
        // .append("rect")
        .attr("width", (d) => d.width)
        .attr("height", (d) => d.height)
        .attr("fill", (d) => d.color)
        .attr("x", (_, i) => i * 100);

      console.log("selection", selection);
      console.log("rects", rects);

      // enter with identify data not mapped to a DOM element and allow you to specify how to add it to the DOM

      rects
        .enter()
        .append("rect")
        .attr("width", (d) => d.width)
        .attr("height", (d) => d.height)
        .attr("fill", (d) => d.color)
        .attr("x", (_, i) => i * 100);
      //   selection
      //     .append("rect")
      //     .attr("height", 100)
      //     .attr("width", 200)
      //     .attr("fill", "purple");
    }
  }, [selection]);

  return (
    <div>
      {/* default dimensions of svg are 300 x 150 */}
      <svg ref={ref} width={500}>
        <rect />
        <rect />
      </svg>
    </div>
  );
};

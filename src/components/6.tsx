import { select, Selection } from "d3-selection";
import React, { useEffect, useRef, useState } from "react";
import { scaleLinear, scaleBand } from "d3-scale";
import { max } from "d3-array";
import randomstring from "randomstring";

const initialData = [
  {
    name: "foo",
    units: 32,
  },
  {
    name: "bar",
    units: 36,
  },
  {
    name: "baz",
    units: 36,
  },
  {
    name: "hoge",
    units: 39,
  },
];

const dimensions = {
  width: 900,
  height: 600,
};

export const _6: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [selection, setSelection] = useState<null | Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  >>(null);

  const [data, setData] = useState(initialData);

  let y = scaleLinear()
    .domain([0, max(data, (d) => d.units)!])
    .range([dimensions.height, 0]);

  let x = scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, dimensions.width]);

  useEffect(() => {
    if (!selection) {
      setSelection(select(svgRef.current));
    } else {
      selection
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("width", x.bandwidth)
        .attr("height", (d) => dimensions.height - y(d.units))
        .attr("x", (d) => x(d.name)!)
        .attr("y", (d) => y(d.units))
        .attr("fill", "orange");
    }
  }, [selection]);

  useEffect(() => {
    if (selection) {
      y = scaleLinear()
        .domain([0, max(data, (d) => d.units)!])
        .range([dimensions.height, 0]);

      x = scaleBand()
        .domain(data.map((d) => d.name))
        .range([0, dimensions.width])
        .paddingInner(0.05);

      const rects = selection.selectAll("rect").data(data);

      rects.exit().remove();

      rects
        .attr("width", x.bandwidth)
        .attr("height", (d) => dimensions.height - y(d.units))
        .attr("x", (d) => x(d.name)!)
        .attr("y", (d) => y(d.units)!)
        .attr("fill", "orange");

      rects
        .enter()
        .append("rect")
        .attr("width", x.bandwidth)
        .attr("height", (d) => dimensions.height - y(d.units))
        .attr("x", (d) => x(d.name)!)
        .attr("y", (d) => y(d.units)!)
        .attr("fill", "orange");
    }
  }, [data]);

  const addRandom = () => {
    const tbAdded = {
      name: randomstring.generate(10),
      units: Math.floor(Math.random() * 80 + 20),
    };

    setData([...data, tbAdded]);
  };

  const removeLast = () => {
    if (data.length === 0) {
      return;
    }
    const slicedData = data.slice(0, data.length - 1);
    setData(slicedData);
  };

  return (
    <div>
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
      ></svg>
      <button onClick={addRandom}>Add</button>
      <button onClick={removeLast}>Remove</button>
    </div>
  );
};

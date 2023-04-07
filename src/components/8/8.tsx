import React, { useRef, useEffect } from "react";
import { select } from "d3-selection";
import { useResize } from "../../hooks/useResize";
import { drawScene } from "./helpers/drawScene";
import { drawBg } from "./helpers/drawBg";
import { drawTimeline } from "./helpers/drawTimeline";
import { drawTimelineEvents } from "./helpers/drawTimelineEvents";

const timelineEvents = [
  {
    color: "rgba(0, 0, 0, 0.1)",
    ts: 1680743683000,
    title: "Inspection Begins",
  },
  {
    color: "rgba(0, 0, 0, 0.3)",
    ts: 1680743733000,
    title: "Inspection Ends",
  },
  {
    color: "rgba(0, 0, 0, 0.4)",
    ts: 1680743763000,
    title: "Inspection Extension",
  },
  {
    color: "rgba(0, 0, 0, 0.5)",
    ts: 1680743793000,
    title: "Moving Date",
  },
  {
    color: "rgba(0, 0, 0, 0.9)",
    ts: 1680743813000,
    title: "Closing Date",
  },
  {
    color: "rgba(0, 0, 0, 1.0)",
    ts: 1680743833000,
    title: "Free Funds Date",
  },
  // {
  //   color: "",
  //   ts: 1680819309810,
  //   title: "Now",
  // },
];

export const _8 = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const size = useResize(rootRef);

  useEffect(() => {
    select(rootRef.current).select("svg").remove();

    if (size) {
      drawScene(rootRef.current!, size);
      drawBg(rootRef.current!, size);
      drawTimeline(rootRef.current!, size, timelineEvents);
      drawTimelineEvents(rootRef.current!, size, timelineEvents);
    }
  }, [size]);

  console.log("size", size);

  return (
    <>
      <div
        ref={rootRef}
        style={{
          height: "100vh",
          width: "100vw",
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr",
        }}
      ></div>
    </>
  );
};

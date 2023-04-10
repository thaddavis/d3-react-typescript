import React, { useRef, useEffect } from "react";
import { select } from "d3-selection";
import { useResize } from "../../hooks/useResize";
import { drawScene } from "./helpers/drawScene";
import { drawBg } from "./helpers/drawBg";
import { drawTimeline } from "./helpers/drawTimeline";
import { drawTimelineEvents } from "./helpers/drawTimelineEvents";
import { drawCurrentTime } from "./helpers/drawCurrentTime";
import { clearElements } from "./helpers/clearElements";

import "./styles.css";

const timelineEvents = [
  {
    color: "rgb(245,245,245)",
    ts: 1293858000000,
    humanTS: "circa 2011",
    title: ["Early React versions created", "by Jordan Walke"],
  },
  {
    color: "rgb(220,220,220)",
    ts: 1325394000000,
    humanTS: "circa 2012",
    title: ["Walke convinces colleagues at FB and IG", "to try his framework"],
  },
  {
    color: "rgb(190,190,190)",
    ts: 1367380800000,
    humanTS: "May 2013",
    title: ["React codebase is", "made open source"],
  },
  {
    color: "rgb(120,120,120)",
    ts: 1514782800000,
    humanTS: "circa 2018",
    title: [
      "React-based frameworks comprise",
      "~25% of the FE Web development landscape",
    ],
  },
  {
    color: "rgb(160,160,160)",
    ts: 1641013200000,
    humanTS: "circa 2022",
    title: [
      "React-based frameworks comprise",
      "~42% of the FE Web development landscape",
    ],
  },
  {
    color: "rgb(200,200,200)",
    ts: 1681140794475,
    humanTS: "April 2023",
    title: ["Time of recording"],
  },
];

export const _9 = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const size = useResize(rootRef);

  // related to animation
  const requestRef = React.useRef<number>();
  const previousTimeRef = React.useRef();
  const elapsedFrameRef = React.useRef<number>(0);

  useEffect(() => {
    select(rootRef.current).select("svg").remove();

    if (size) {
      // prettier-ignore
      select(rootRef.current).append("svg").attr("width", size.width).attr("height", size.height);
      drawBg(rootRef.current!, size);
      drawTimeline(rootRef.current!, size, timelineEvents);
      drawTimelineEvents(rootRef.current!, size, timelineEvents);
    }
  }, [size]);

  return (
    <>
      <div
        id="d3-timeline-widget"
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

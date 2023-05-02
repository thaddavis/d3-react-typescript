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
    color: "rgb(190,190,190)",
    ts: 1969,
    humanTS: "1969",
    title: ["ARPANET", "released"],
  },
  {
    color: "rgb(190,190,190)",
    ts: 1975,
    humanTS: "4-1975",
    title: ["Microsoft", "founded"],
  },
  {
    color: "rgb(190,190,190)",
    ts: 1976,
    humanTS: "4-1976",
    title: ["Apple Computer, Inc.", "founded"],
  },
  {
    color: "rgb(190,190,190)",
    ts: 1977,
    humanTS: "1977",
    title: ["Apple II", "released"],
  },
  {
    color: "rgb(190,190,190)",
    ts: 1981,
    humanTS: "1981",
    title: ["CSNET", "released"],
  },
  {
    color: "rgb(190,190,190)",
    ts: 1989,
    humanTS: "1989",
    title: ["HTTP developed by Tim Berner-Lee", "at CERN"],
  },
  {
    color: "rgb(190,190,190)",
    ts: 1998.16,
    humanTS: "2-1998",
    title: ["VMWare", "founded"],
  },
  {
    color: "rgb(190,190,190)",
    ts: 1998.75,
    humanTS: "9-1998",
    title: ["Google", "founded"],
  },
  {
    color: "rgb(190,190,190)",
    ts: 2002,
    humanTS: "2002",
    title: ["AWS", "launched"],
  },
  {
    color: "rgb(190,190,190)",
    ts: 2004,
    humanTS: "2004",
    title: ["Facebook", "founded"],
  },
  {
    color: "rgb(190,190,190)",
    ts: 2005,
    humanTS: "2005",
    title: ["Y Combinator", "launched"],
  },
  {
    color: "rgb(190,190,190)",
    ts: 2008,
    humanTS: "2008",
    title: ["GCP", "launched"],
  },
  {
    color: "rgb(190,190,190)",
    ts: 2010,
    humanTS: "2010",
    title: ["Microsoft Azure", "launched"],
  },
  {
    color: "rgb(190,190,190)",
    ts: 2011,
    humanTS: "2011",
    title: ["Digital Ocean", "founded"],
  },
  {
    color: "rgb(190,190,190)",
    ts: 2013,
    humanTS: "4-2013",
    title: ["Docker", "released"],
  },
  {
    color: "rgb(190,190,190)",
    ts: 2014,
    humanTS: "9-2014",
    title: ["Kubernetes", "released"],
  },
  {
    color: "rgb(190,190,190)",
    ts: 2014.91,
    humanTS: "11-2014",
    title: ["AWS λ", "released"],
  },
  {
    color: "rgb(190,190,190)",
    ts: 2017,
    humanTS: "2017",
    title: ["Cloud Functions", "released"],
  },
  {
    color: "rgb(190,190,190)",
    ts: 2023,
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

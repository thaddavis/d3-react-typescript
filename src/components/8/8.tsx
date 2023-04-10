import React, { useRef, useEffect } from "react";
import { select } from "d3-selection";
import { useResize } from "../../hooks/useResize";
import { drawScene } from "./helpers/drawScene";
import { drawBg } from "./helpers/drawBg";
import { drawTimeline } from "./helpers/drawTimeline";
import { drawTimelineEvents } from "./helpers/drawTimelineEvents";
import { drawCurrentTime } from "./helpers/drawCurrentTime";
import { clearElements } from "./helpers/clearElements";

const timelineEvents = [
  {
    color: "rgb(245,245,245)",
    ts: 1680876042547,
    title: "Inspection Begins",
  },
  {
    color: "rgb(220,220,220)",
    ts: 1680876605000,
    title: "Inspection Ends",
  },
  {
    color: "rgb(190,190,190)",
    ts: 1680877205000,
    title: "Inspection Extension",
  },
  {
    color: "rgb(120,120,120)",
    ts: 1680878405000,
    title: "Moving Date",
  },
  {
    color: "rgb(96,96,96)",
    ts: 1680879005000,
    title: "Closing Date",
  },
  {
    color: "rgb(32,32,32)",
    ts: 1680879605000,
    title: "Closing Date Extension",
  },
];

export const _8 = () => {
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

  React.useEffect(() => {
    // minMaxYearTotal.current = totalMinMaxYear(combined);
    // yearCounter.current = yearCounter.current || minMaxYearTotal.current[0];
    // if (size) drawScene();
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [size]); // Make sure the effect runs only once

  const animate = (time: any) => {
    console.log("animate");

    const FRAME_RATE = 1 / 10;
    const now = Date.now();

    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;

      // if (!stateRef.current.paused) {
      elapsedFrameRef.current! += deltaTime;
      // }

      if (
        elapsedFrameRef.current > FRAME_RATE &&
        now < timelineEvents[timelineEvents.length - 1].ts &&
        // yearCounter.current! < minMaxYearTotal.current[1]
        size
      ) {
        clearElements(rootRef.current!);

        // drawScene(rootRef.current!, size);
        // drawBg(rootRef.current!, size);
        // drawTimeline(rootRef.current!, size, timelineEvents);
        // drawTimelineEvents(rootRef.current!, size, timelineEvents);
        // const now = Date.now();
        drawCurrentTime(rootRef.current!, size, timelineEvents, now);
      }
    }

    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

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

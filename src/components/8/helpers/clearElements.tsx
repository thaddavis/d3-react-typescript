import React from "react";
import { select } from "d3-selection";

export const clearElements = (rootElement: HTMLDivElement) => {
  select(rootElement).select(".current-time")?.remove();
};

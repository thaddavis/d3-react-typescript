import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./components/Home";
import { _1 } from "./components/1";
import { _2 } from "./components/2";
import { _3 } from "./components/3";
import { _4 } from "./components/4";
import { _5 } from "./components/5";
import { _6 } from "./components/6";
import { _7 } from "./components/7";
import { _8 } from "./components/8/8";
import { _9 } from "./components/9/9";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" index element={<Home />} />
        <Route path="_1" element={<_1 />} />
        <Route path="_2" element={<_2 />} />
        <Route path="_3" element={<_3 />} />
        <Route path="_4" element={<_4 />} />
        <Route path="_5" element={<_5 />} />
        <Route path="_6" element={<_6 />} />
        <Route path="_7" element={<_7 />} />
        <Route path="_8" element={<_8 />} />
        <Route path="_9" element={<_9 />} />
      </Route>
      <Route path={"*"} element={<>Not Found</>}></Route>
    </Routes>
  );
};

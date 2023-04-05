import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./components/Home";
import { _1 } from "./components/1";
import { _2 } from "./components/2";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" index element={<Home />} />
        <Route path="_1" element={<_1 />} />
        <Route path="_2" element={<_2 />} />
      </Route>
      <Route path={"*"} element={<>Not Found</>}></Route>
    </Routes>
  );
};

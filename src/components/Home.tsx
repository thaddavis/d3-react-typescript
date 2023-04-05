import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ul>
        <li
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/_1");
          }}
        >
          Example 1
        </li>
        <li
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/_2");
          }}
        >
          Example 2
        </li>
        <li
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/_3");
          }}
        >
          Example 3
        </li>
        <li
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/_4");
          }}
        >
          Example 4
        </li>
        <li
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/_5");
          }}
        >
          Example 5
        </li>
        <li
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/_6");
          }}
        >
          Example 6
        </li>
        <li
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/_7");
          }}
        >
          Example 7
        </li>
      </ul>
    </div>
  );
};

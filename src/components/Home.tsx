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
      </ul>
    </div>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ul>
        {["/_1", "/_2", "/_3", "/_4", "/_5", "/_6", "/_7", "/_8", "/_9"].map(
          (i, idx) => {
            return (
              <li
                key={i}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate(`${i}`);
                }}
              >
                Example {i}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

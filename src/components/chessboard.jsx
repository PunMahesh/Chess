import React, { useState } from "react";
import "../style/Chessboard.css";

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

export default function Chessboard() {
  const [selected, setSelected] = useState(null);

  const handleClick = (coord) => {
    console.log(coord);
    setSelected(coord);
  };

  return (
    <div className="chessboard">
      {ranks.map((rank, rowIdx) =>
        files.map((file, colIdx) => {
          const coord = `${file}${rank}`;
          const isDark = (rowIdx + colIdx) % 2 === 1;
          const isSelected = selected === coord;

          return (
            <div
              key={coord}
              onClick={() => handleClick(coord)}
              className={`square ${isDark ? "dark" : "light"} ${
                isSelected ? "selected" : ""
              }`}
            >
              {coord}
            </div>
          );
        })
      )}
    </div>
  );
}

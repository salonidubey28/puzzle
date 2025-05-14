// Puzzle.js
import { FilledTile, EmptyTile } from "./Tile";

export default function Puzzle({ shuffledArray, dragOver, dragStart, dropped }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-6 px-2 sm:px-6 rounded">
      {shuffledArray.map((value, index) => {
        if (value === "")
          return <EmptyTile key={index} dragOver={dragOver} dropped={dropped} index={index} />;
        return <FilledTile key={index} index={index} value={value} dragStart={dragStart} />;
      })}
    </div>
  );
}


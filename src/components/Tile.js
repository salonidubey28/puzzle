// Tile.js

export function FilledTile({ index, value, dragStart }) {
    return (
      <div
        id={`place-${index + 1}`}
        className={
          "shadow w-16 h-16 sm:w-20 sm:h-20 rounded " +
          (index === value - 1 ? "bg-gradient-to-r from-pink-500 to-yellow-500" : "bg-gray-900")
        }
      >
        <p
          id={`tile-${value}`}
          draggable="true"
          onDragStart={dragStart}
          className="fw-bold text-xl grid grid-cols-1 place-items-center w-16 h-16 sm:w-20 sm:h-20 rounded cursor-pointer hover:bg-pink-500"
        >
          {value}
        </p>
      </div>
    );
  }
  
  export function EmptyTile({ dragOver, dropped, index }) {
    return (
      <div
        onDragOver={dragOver}
        onDrop={dropped}
        id={`place-${index + 1}`}
        className="bg-indigo-400 shadow w-16 h-16 sm:w-20 sm:h-20 rounded"
      ></div>
    );
  }
  
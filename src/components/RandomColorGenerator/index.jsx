import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center transition-all"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setTypeOfColor("hex")}
          className={`py-2 px-4 rounded transition ${
            typeOfColor === "hex"
              ? "bg-gray-900 text-white"
              : "bg-gray-700 text-white hover:bg-gray-800"
          }`}
        >
          Create HEX Color
        </button>
        <button
          onClick={() => setTypeOfColor("rgb")}
          className={`py-2 px-4 rounded transition ${
            typeOfColor === "rgb"
              ? "bg-gray-900 text-white"
              : "bg-gray-700 text-white hover:bg-gray-800"
          }`}
        >
          Create RGB Color
        </button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Generate Random Color
        </button>
      </div>

      <div className="text-center text-white flex flex-col items-center gap-4">
        <h3 className="text-3xl font-bold">
          {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}
        </h3>
        <h1 className="text-5xl font-extrabold">{color}</h1>
      </div>
    </div>
  );
}

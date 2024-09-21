import React, { useState } from "react";
import data from "./data";

function Accordion() {
  const [selected, setSelected] = useState(null); // Single selection state
  const [multiple, setMultiple] = useState([]); // Multi-selection state
  const [enableMultiSelection, setEnableMultiSelection] = useState(false); // Mode toggle

  // Single selection mode handler
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  // Multi selection mode handler
  function handleMultiSelection(getCurrentId) {
    const copyMultiple = [...multiple];
    const index = copyMultiple.indexOf(getCurrentId);

    if (index === -1) {
      copyMultiple.push(getCurrentId); // Add section if it's not already selected
    } else {
      copyMultiple.splice(index, 1); // Remove section if it's already selected
    }

    setMultiple(copyMultiple); // Update multi-selection state
  }

  return (
    <>
      <div className="text-3xl font-bold text-blue-950 mb-5">-Accordion-</div>
      <div className="max-w-2xl mx-auto mt-5 p-5">
        {/* Button to toggle between single and multi selection modes */}
        <button
          className="mb-5 rounded-lg bg-green-700 font-semibold text-white p-3"
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >
          {enableMultiSelection
            ? "Disable Multi Selection"
            : "Enable Multi Selection"}
        </button>

        <div className="bg-gray-800 text-white shadow-lg rounded-lg">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div key={dataItem.id} className="border-b border-gray-700">
                <div
                  className={`text-xl font-semibold p-4 cursor-pointer flex justify-between items-center 
                  ${
                    selected === dataItem.id || multiple.includes(dataItem.id)
                      ? "bg-gray-600"
                      : "bg-gray-800"
                  } hover:bg-gray-700`}
                  onClick={() => {
                    enableMultiSelection
                      ? handleMultiSelection(dataItem.id)
                      : handleSingleSelection(dataItem.id);
                  }}
                >
                  {dataItem.title}
                  <span
                    className={`transition-transform duration-300 ${
                      selected === dataItem.id || multiple.includes(dataItem.id)
                        ? "rotate-45"
                        : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </div>

                {/* Content display logic */}
                {enableMultiSelection
                  ? multiple.includes(dataItem.id) && (
                      <div className="p-4 text-gray-200 bg-gray-500">
                        {dataItem.content}
                      </div>
                    )
                  : selected === dataItem.id && (
                      <div className="p-4 text-gray-200 bg-gray-500">
                        {dataItem.content}
                      </div>
                    )}
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-400">No data found</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Accordion;

import React, { useState } from "react";
import data from "./data";

function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  console.log(selected);
  

  return (
    <div className="max-w-2xl mx-auto mt-10 p-5">
      <div className="bg-gray-800 text-white shadow-lg rounded-lg">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="border-b border-gray-700">
              <div
                className={`text-xl font-semibold p-4 cursor-pointer flex justify-between items-center pb-5
                  ${selected === dataItem.id ? 'bg-indigo-600' : 'bg-gray-800'} hover:bg-indigo-700`}
                onClick={() => handleSingleSelection(dataItem.id)}
              >
                {dataItem.title}
                <span
                  className={`transition-transform duration-300 ${
                    selected === dataItem.id ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </div>
              {
                selected === dataItem.id && (

                  <div className="p-4 text-gray-200 bg-indigo-500"> {dataItem.content} </div>
                ) 
                
              }
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-400">No data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;

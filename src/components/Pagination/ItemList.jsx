import React from 'react';

const ItemList = ({ items }) => {
  return (
    <ul className="mb-4 w-1/3">
      {items.map((item, index) => (
        <li key={index} className="bg-gray-800 p-2 my-2 shadow rounded text-white">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Meal = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => (
    <section
      key={idMeal}
      className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white max-w-xs"
    >
      <img
        src={strMealThumb}
        alt={strMeal}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <section className="p-4 text-center">
        <p className="text-lg font-semibold text-gray-800">{strMeal}</p>
        <p className="text-sm text-gray-600">Meal ID: {idMeal}</p>
      </section>
    </section>
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-100">
      {itemsList}
    </div>
  );
};

export default Meal;

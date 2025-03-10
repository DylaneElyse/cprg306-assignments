"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data.meals || []; // Return an empty array if data.meals is null
  } catch (error) {
    console.error("API Error: ", error);
    throw error;
  }
}

export function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    try {
      const newMeals = await fetchMealIdeas(ingredient);
      setMeals(newMeals); // newMeals will always be an array (either with data or empty)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // if (ingredient) {
      loadMealIdeas();
    // } else {
    //   setMeals([]); // Reset meals if no ingredient is selected
    // }
  }, [ingredient]);

  return (
    <div className="pt-4">
      <p className="text-xl font-semibold">Meal Ideas:</p>
      {ingredient ? (
        meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal}>
              <p className="capitalize">{meal.strMeal}</p>
            </div>
          ))
        ) : (
          <p>No meals found for {ingredient}.</p>
        )
      ) : (
        <p>Select an ingredient from the list to view recipes.</p>
      )}
    </div>
  );
}
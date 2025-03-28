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
    return data.meals || []; // Return an empty array if data.meals is null
  } catch (error) {
    console.error("API Error: ", error);
    throw error;
  }
}

async function fetchMealIngredients(selectedMeal) {
  try {
    let mealName = String(selectedMeal);
    mealName = mealName.replace(" ", "_");
    console.log(`Meal: ${mealName}`);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${selectedMeal}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.ingredients || [];
  } catch (error) {
    console.error("API Error: ", error);
    throw error;
  }
}

export function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState("");
  const [loading, setLoading] = useState(false);

  const loadMealIdeas = async () => {
    setLoading(true);
    try {
      const newMeals = await fetchMealIdeas(ingredient);
      setMeals(newMeals); // newMeals will always be an array (either with data or empty)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMealIngredients = async (selectedMeal) => {
    try {
      const newIngredients = await fetchMealIngredients(selectedMeal);
      setIngredients(newIngredients);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  const handleSelect = (event) => {
    event.preventDefault;
    const mealName = event.target.innerText;
    setSelectedMeal(mealName);
    console.log(`Selected meal: ${selectedMeal}`);
  };

  return (
    <div className="pt-4 w-72 flex flex-col">
      <p className="text-xl font-semibold">Meal Ideas:</p>
      {ingredient ? (
        loading ? (
          <p>Loading meal ideas.</p>
        ) : meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal}>
              <div className="capitalize" onClick={handleSelect}>
                {meal.strMeal}
              </div>
            </div>
          ))
        ) : (
          <p>No meals found for {ingredient.replace(/_/g, " ")}.</p>
        )
      ) : (
        <p>Select an ingredient to see meal ideas.</p>
      )}
    </div>
  );
}

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

  const loadMealIdeas = async () => {
    try {
      const newMeals = await fetchMealIdeas(ingredient);
      setMeals(newMeals); // newMeals will always be an array (either with data or empty)
    } catch (error) {
      console.error(error);
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
    loadMealIdeas();
  }, [ingredient]);

  useEffect(() => {
    loadMealIngredients();
    console.log(ingredients);
  }, [selectedMeal]);

  const handleSelect = (event) => {
    event.preventDefault;
    setSelectedMeal(event.target.innerText);
    console.log(`Selected meal: ${selectedMeal}`);
  };

  return (
    <div className="pt-4">
      <p className="text-xl font-semibold">Meal Ideas:</p>
      {ingredient ? (
        meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal}>
              <div className="capitalize" onClick={handleSelect}>
                {meal.strMeal}
                {/* {selectedMeal !== "" && selectedMeal === meal.strMeal ? (
                  <>
                  {console.log(`Meal string: ${meal.strMeal}`)}
                    <p className="text-md font-semibold">Ingredients:</p>
                    {ingredients.map((ingredient) => (
                    <p key={ingredient.idIngredient} className="capitalize">
                      {ingredient.strIngredient}
                    </p>
                    ))}
                  </>
                ) : (
                  ""
                )} */}
              </div>
            </div>
          ))
        ) : (
          <p>No meals found for {ingredient}.</p>
        )
      ) : (
        <p>Select an ingredient to see meal ideas.</p>
      )}
    </div>
  );
}

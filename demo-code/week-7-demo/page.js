"use client";

import DogList from "./dog-list.js";
import DogForm from "./dog-form.js";
import dogData from "./dogs.json";
import { useState } from "react";

export default function Page() {
  // this brings the attribute up to the parent component
  // dogs = prop
  const [dogs, setDogs] = useState(dogData);

  // function to add a new dog
  const handleAddDog = (dog) => {
    // we cannot mutate the state directly, e.g. dogs.push(dog)
    setDogs([...dogs, dog]); // Add the new dog to the list of dogs
  };

  // function to delete a dog
  const handleDeleteDog = (id) => {
    // when the dog id does not match the id to delete, then keep those dogs
    // do not keep the dog with the id to delete
    setDogs(dogs.filter((dog) => dog.id !== id)); // Remove the dog with the given id
  };

  return (
    <div>
      <h1>Dog Management</h1>
      {/* onAddDog = function to add a new dog as a prop */}
      <DogForm onAddDog={handleAddDog} />
      {/* dogs = dogs list prop */}
      <DogList dogs={dogs} onDeleteDog={handleDeleteDog} />
    </div>
  );
}

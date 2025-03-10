"use client";

import dogData from ".dogs.json";
import { useState } from "react";

export default function Page() {
  let [selectedDogId, setSelectedDogId] = useState(-1); // means no dog selected
  // Sort dogs alphabetically by name

  //good idea to make a shallow copy first
  let sortDogs = [...dogData];

  // < and > works well for english, but not for other languages
  sortDogs.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });

  // Using localeCompare() is a better way to sort non-English
  sortDogs.sort((a, b) => a.name.localeCompare(b.name));

  // filter
  sortDogs = sortDogs.filter((dog) => dog.id !== 3);

  // select a dog
  const handleSelectDog = (id) => {
    if (selectedDogId === id) {
      setSelectedDogId(-1);
      return;
    }
    setSelectedDogId(id);
  };

  return (
    <div>
      <h1>Dogs</h1>
      <ul>
        {dogData.map((dog) => (
          <li key={dog.id} onClick={() => handleSelectDog(dog.id)}>
            <section
              className={`flex cursor-pointer ${
                selectedDogId === dog.id ? "bg-gray-200" : ""
              }`}
            >
              <h2>{dog.name}</h2>
              <img src={dog.image} alt={dog.name} />
              <p>{dog.description}</p>
            </section>
          </li>
        ))}
      </ul>
      <div>{selectedDogId}</div>
    </div>
  );
}

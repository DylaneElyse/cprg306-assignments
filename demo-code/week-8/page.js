// demo code from Aaron's GitHub

// always step 1: import the client
"use client";

// always step 2: import the hooks you need
import { useState, useEffect } from "react";

// function to fetch random dog image
// async function returns a promise
async function fetchRandomDog(breed) {
  const response =
    breed && breed !== "Random breed"
      ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`) // fetch for a dog of a specific breed
      : await fetch("https://dog.ceo/api/breeds/image/random"); // fetch for a dog of a random breed
  // fetch returns a promise that resolves to the Response to that request
  const data = await response.json(); // converts the response body to a JavaScript object
  console.log(data);
  // message is the property of the api.
  // always read documentation of the API to know what is the property name

  // when resolved, returns:
  // return defines the response of the promise
  return data.message; // this is the URL of the image
}

// function to fetch dog breeds
async function fetchBreeds() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  return Object.keys(data.message); // Object.keys returns an array of the keys in the object (breed names)
}

export default function Page() {
  const [randomDog, setRandomDog] = useState(null);
  const [breeds, setBreeds] = useState([]);

  const loadRandomDog = async () => {
    const newRandomDog = await fetchRandomDog();
    setRandomDog(newRandomDog);
  };

  const loadBreeds = async () => {
    const newBreeds = await fetchBreeds();
    setBreeds(["Random breed", ...newBreeds]);
  };

  // function that handles the change of the select element (selection of a breed)
  const handleChange = async (event) => {
    const newRandomDog = await fetchRandomDog(event.target.value);
    setRandomDog(newRandomDog);
  };

  // this creates an infinite loop
  // const newDog = fetchRandomDog();
  // setRandomDog(newDog);

  // same as infinite loop code, just controlled by the dependency array
  useEffect(() => {
    loadRandomDog();
    loadBreeds();
  }, []); // empty array means this effect runs only once, when the component has rendered for the first time

  // this is the same as the above code, but it is only returning a promise as it is async
  // useEffect(() => {
  //   loadRandomDog();
  // }, []);

  return (
    <main>
      <h1>Week 8</h1>
      <select onChange={handleChange}>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <div>
        <img src={randomDog} alt="A random dog" />
      </div>
    </main>
  );
}

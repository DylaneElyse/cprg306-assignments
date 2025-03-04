import Dog from "./dog.js";

// prop onDeleteDog from page.js
export default function DogList({ dogs, onDeleteDog }) {
  return (
    <div>
      <h2>Dog List</h2>
      {dogs.map((dog) => (
        <Dog
          key={dog.id}
          id={dog.id}
          name={dog.name}
          age={dog.age}
          onDelete={onDeleteDog}
        />
      ))}
    </div>
  );
}

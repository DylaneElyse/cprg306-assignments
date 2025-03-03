export default function Dog({ id, name, age, onDelete }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      // button to delete a dog from the list
      // pass the function that will call the function onDeleteDog
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

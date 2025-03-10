export default function Dog({ name, age, breed, color }) {
  // let name = props.name;
  // let age = props.age;
  // let breed = props.breed;
  // let color = props.color;

  // destructured version of the above
  // let { name, age, breed, color } = props;

  // dog = a function that accepts 1 parameter called props

  return (
    <section className="bg-slate-300 m-2 p-2">
      <h3 className="font-bold text-2xl text-">{props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Breed: {props.breed}</p>
      <p>Color: {props.color}</p>
    </section>
  );
}

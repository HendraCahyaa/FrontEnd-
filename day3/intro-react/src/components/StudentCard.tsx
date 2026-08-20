interface StudentCardProps {
  name: string;
  age: number;
}

function StudentCard(props: StudentCardProps) {
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </div>
  );
}
export default StudentCard;

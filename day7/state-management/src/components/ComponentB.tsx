import ComponentC from "./ComponentC";

interface ComponentBProps {
  name: string;
}
function ComponentB(props: ComponentBProps) {
  return (
    <div>
      <p>Component B</p>
      <ComponentC name={props.name} />
    </div>
  );
}
export default ComponentB;

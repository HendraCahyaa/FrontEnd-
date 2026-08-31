import ComponentB from "./ComponentB";

interface ComponentAProps {
  name: string;
}
function ComponentA(props: ComponentAProps) {
  return (
    <div>
      <p>Component A</p>
      <ComponentB name={props.name} />
    </div>
  );
}
export default ComponentA;

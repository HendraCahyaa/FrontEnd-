interface ComponentCProps {
  name: string;
}
function ComponentC(props: ComponentCProps) {
  return (
    <div>
      <p>Component A</p>
      <p>Component3 - {props.name}</p>
    </div>
  );
}
export default ComponentC;

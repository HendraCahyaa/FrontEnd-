import { memo } from "react";

interface componentChildrenProps {
  increment: () => void;
}

const ComponentChildren = memo((props: componentChildrenProps) => {
  console.log("component child render");
  return (
    <div>
      <button onClick={props.increment}>increment</button>
    </div>
  );
});
export default ComponentChildren;

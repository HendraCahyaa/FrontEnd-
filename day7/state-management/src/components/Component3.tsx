import { UserContext } from "@/pages/About";
import { useContext } from "react";

function Component3() {
  const context = useContext(UserContext);
  return (
    <div>
      <p>Component3 - {context?.name}</p>
    </div>
  );
}
export default Component3;

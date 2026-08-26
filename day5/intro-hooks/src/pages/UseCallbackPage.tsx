import { useCallback, useState } from "react";
import ComponentChildren from "../components/ComponentChildren";

function UseCallbackPage() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const toogleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <h1>UseCallbackPage</h1>

      <p>{count}</p>
      <ComponentChildren increment={handleIncrement} />

      <p>{theme}</p>
      <button onClick={toogleTheme}>toogle theme</button>
    </div>
  );
}
export default UseCallbackPage;

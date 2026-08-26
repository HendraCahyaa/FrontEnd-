import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return {
    count,
    handleDecrement,
    handleIncrement,
  };
}
export default useCounter;

import { useMemo, useState } from "react";

function UseMemoPage() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);
  const incrementNumber = () => {
    setNumber(number + 1);
  };
  const incrementCount = () => {
    setCount(count + 1);
  };

  const isNumberEvent = useMemo(() => {
    let i = 0;

    while (i < 100_000) {
      i++;
    }
    return number % 2 === 0 ? "even" : "odd";
  }, [number]);
  return (
    <div>
      <h1>UseMemoPage</h1>

      <p>{number}</p>
      <p>Result : {isNumberEvent}</p>
      <button onClick={incrementNumber}>Increment Number</button>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment Number</button>
    </div>
  );
}
export default UseMemoPage;

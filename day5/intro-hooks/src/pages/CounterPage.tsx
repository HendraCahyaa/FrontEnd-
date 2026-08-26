import useCounter from "../hooks/useCounter";

function CounterPage() {
  const { count, handleDecrement, handleIncrement } = useCounter();
  return (
    <div>
      <div>
        <h1>CounterPage</h1>

        <button onClick={handleIncrement}>Increment</button>
        <p>{count}</p>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default CounterPage;

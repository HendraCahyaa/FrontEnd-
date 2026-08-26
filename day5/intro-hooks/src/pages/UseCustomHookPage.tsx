import useCounter from "../hooks/useCounter";

function UseCustomHookPage() {
  const { count, handleIncrement, handleDecrement } = useCounter();
  return (
    <div>
      <h1>UseCustomHookPage</h1>

      <button onClick={handleIncrement}>Increment</button>
      <p>{count}</p>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
export default UseCustomHookPage;

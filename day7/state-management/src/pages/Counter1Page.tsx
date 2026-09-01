import { useCounter } from "@/stores/useCounter";
import { Link } from "react-router";

function Counter1Page() {
  const { count, dec, inc } = useCounter();
  return (
    <div>
      <p>Counter1Page</p>
      <hr />
      <button onClick={inc}>Increment</button>
      <span className="mx-10">{count}</span>
      <button onClick={dec}>Decrement</button>

      <hr />
      <Link to="/counter2page">halaman counter 2</Link>
    </div>
  );
}
export default Counter1Page;

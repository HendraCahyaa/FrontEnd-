import { useCounter } from "@/stores/useCounter";
import { Link } from "react-router";

function Counter2Page() {
  const { count, dec, inc } = useCounter();
  return (
    <div>
      <p>Counter2Page</p>
      <hr />
      <button onClick={inc}>Increment</button>
      <span className="mx-10">{count}</span>
      <button onClick={dec}>Decrement</button>

      <hr />
      <Link to="/counterpage">Halaman counter 1</Link>
    </div>
  );
}
export default Counter2Page;

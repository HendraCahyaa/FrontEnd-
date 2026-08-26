import { useReducer } from "react";

interface counterState {
  count: number;
}

interface counterAction {
  type: "increment" | "decrement";
  payload: number;
}

function reducer(state: counterState, action: counterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
  }
}

function UseReducerPage() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>UseReducerPage</h1>

      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
    </div>
  );
}

export default UseReducerPage;

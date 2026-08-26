import { useRef } from "react";

function UseRefPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    alert(inputRef.current?.value);
  };
  return (
    <div>
      <h1>UseRefPage</h1>

      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UseRefPage;

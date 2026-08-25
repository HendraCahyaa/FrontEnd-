import { useEffect, useState } from "react";

function UseEffectPage() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const incrementNumber = () => {
    setNumber(count + 1);
  };

  //mode 1 :bakal run setiap ada perubahan terhadap props/state
  useEffect(() => {
    console.log("use effect 1 dijalankan");
  });

  //mode 2 : bakal run sekali saja saat react first render
  useEffect(() => {
    console.log("use effect 1 dijalankan");
  }, []);

  //mode 3 :sama seperti mode 2, tapi kalo ada perubahan di dependency nya akan dijalankan ulang
  useEffect(() => {
    console.log("use effect 1 dijalankan");
  }, [number]);

  return (
    <div>
      <h1>UseEffectPage</h1>

      <p>{count}</p>
      <button onClick={incrementCount}>increment</button>
      <p>{number}</p>
      <button onClick={incrementNumber}>increment</button>
    </div>
  );
}
export default UseEffectPage;

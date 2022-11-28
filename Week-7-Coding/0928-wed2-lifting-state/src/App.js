import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const updateCount1 = () => setCount1(count1 + 1);
  ; return (
    <>
      <Counter count1={count1} updateCount1={updateCount1} color="pink"></Counter>
      <Counter count1={count1} updateCount1={updateCount1} color="lightblue"></Counter>
      <Counter count1={count1} updateCount1={updateCount1} color="lightgreen"></Counter>
    </>
  );
}
export default App;

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count0, setCount0] = useState(0);
  const [count100, setCount100] = useState(100);

  function updateCount() {
    console.log("clicked");
    setCount0(count0 + 1);
  }

  function subtracts() {
    console.log("substracts");
    setCount100(count100 - 1);
  }

  function reset() {
    console.log("reset");
    setCount0(0);
  }

  function reset100() {
    console.log("reset100");
    setCount100(100);
  }

  useEffect(function () {
    //This code will run on every render (every update) of the component
    console.log("Component re-rendered");
  });

  useEffect(
    function () {
      //This useEffect will run/is triggered every time the count state variable is updated
      console.log("Counter state variable was updated");
    },
    [count0]
  );

  useEffect(function () {
    //This useEffect is triggered only when the component mounts
    console.log("Component rendered for the FIRST time ONLY");
  }, []);

  return (
    <div className="App">
      <div>Count from 0: {count0}</div>
      <button onClick={updateCount}> Add one!</button>
      <button onClick={reset}> Reset~~ </button>
      <div>Count from 100: {count100}</div>

      <button onClick={subtracts}> -1 </button>
      <button onClick={reset100}> Reset~~ </button>
      <p>It's in phoebe branch</p>
      <p>Is it modified?</p>
      <p>jpqwjeroqiwjer</p>
      <p>qpwjerqowijerpoijwqer</p>
    </div>
  );
}

export default App;

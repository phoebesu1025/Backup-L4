import { useState } from "react";
import "./App.css";

function App() {
  const [inputList, setInputList] = useState([]); // another state var to store teh list of things that you had entered in the input
  const [val, setVal] = useState(""); // state variable
  const handleChange = (event) => setVal(event.target.value); // event to update state
  const handleSubmit = (event) => {
    event.preventDefault();
    const temp = [...inputList];
    temp.push(val);
    console.log(temp);
    setInputList(temp);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Your input
          <input type="text" onChange={handleChange} />
        </label>
        <input type="submit" />
      </form>

      {val}
      <div>
        <ul>
          {inputList.map((item) => (
            <li> {item} </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

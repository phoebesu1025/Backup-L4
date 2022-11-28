import InputComponent from './components/InputComponent'
import ShowInput from './components/ShowInput.js'
import { useState } from 'react';
import ShowList from './components/ShowList';

function App() {
  const [val, setVal] = useState('');
  const [itemList, setItemList] = useState([]);
  const handleChange = (e) => setVal(e.target.value); //to update the state as the user types in something

  const handleNewListItem = (e) => {
    e.preventDefault();
    const temp = [...itemList];
    temp.push(val);
    setItemList(temp);
    console.log('hi')
  };


  return (
    <div>
      <InputComponent val={val} handleChange={handleChange} handleNewListItem={handleNewListItem} />
      <ShowInput val={val} />
      <ShowList itemList={itemList}></ShowList>

    </div>
  );
}

export default App;


function InputComponent({ val, handleChange, handleNewListItem, itemList }) {




  return (
    <form onSubmit={handleNewListItem}>
      <label>
        <input type="text" value={val} onChange={handleChange} />
        <input type='submit' value="submit" />
      </label>


    </form>


  )
}
export default InputComponent;



{/* <div>
      <input type="text" value={val} onChange={handleChange} />
      <button onClick={handleNewListItem} >Add to list</button>
    </div> */}
export default function Counter({ count1, count2, updateCount1, updateCount2, color }) {
  return (
    <div style={{ border: `10px dashed ${color}` }}>

      <div>Count: {count1}</div> <button onClick={updateCount1}>Add count</button>
    </div >)

}

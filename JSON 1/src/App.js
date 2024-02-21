import data from './data'
import './App.css';
import React, { useState, useEffect } from "react";


let count = 1
function App() {
  const list = data;
  const [value, setValue] = useState(list)
  const [fill, setFill] = useState(false)
  const [unfill, setUnfill] = useState(false)
  const [part, setPart] = useState(false)

  useEffect(() => {
    if (!fill && !unfill && !part) {
      setValue(list)
    }
    return()=>{

    }
  }, [list, fill, unfill, part]);

  const filled = (e) => {
    const value = e.target.checked
    const name = e.target.name
    setFill(value)
    constructor(name, value)
  }
  const notFilled = (e) => {
    const value = e.target.checked
    const name = e.target.name
    setUnfill(value)
    constructor(name, value)
  }
  const partial = (e) => {
    const value = e.target.checked
    const name = e.target.name
    setPart(value)
    constructor(name, value)
  }
  const constructor = (name, value) => {
    const filledFValue = name === "fill" ? value : fill
    const unFilledFValue = name === "unfill" ? value : unfill
    const partiallyFilledFValue = name === "part" ? value : part
    let array = []
    
    if (filledFValue) {
      const data = list.filter((v) => v.amount === v.filled)
      array = [...array, ...data]
    }
    if (unFilledFValue) {
      const data = list.filter((v) => v.filled === 0)
      array = [...array, ...data]
    }
    if (partiallyFilledFValue) {
      const data = list.filter((v) => v.filled < v.amount && v.filled !== 0)
      array = [...array, ...data];
    }
    if (!filledFValue && !unFilledFValue && !partiallyFilledFValue) {
      return data;
    }
    setValue(array)
  }

  return (
    <>
      <div>
        <input type="checkbox" onClick={(event) => { filled(event) }} name="fill" value="Filled"></input>
        <label>Filled</label>
        <input type="checkbox" onClick={(event) => notFilled(event)} name="unfill" value="Not Filled"></input>
        <label>Not Filled</label>
        <input type="checkbox" onClick={(event) => partial(event)} name="part" value="Partially Filled"></input>
        <label>Partially Filled</label>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Phase</th>
            <th>Floor</th>
            <th>Status</th>
            <th>FIlled</th>
            <th>Low</th>
            <th>Created_At</th>
            <th>Updated_At</th>
          </tr>
        </thead>
        <tbody>
          {value.map((info, i) => {
            return (
              <tr key={i} style={{ background: info.status === true ? '#d4fdd5' : '' }}>
                <td>{info.id}</td>
                <td>{info.phase}</td>
                <td>{info.floor}</td>
                <td>{!info.status ? "false" : "true"}</td>
                <td>{info.filled}</td>
                <td>{info.low}</td>
                <td>{info.created_at}</td>
                <td>{info.updated_at}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </>)
}
export default App;

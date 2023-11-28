import { useState } from 'react';
import './App.css';

export default function App() {
  const [length, setLength] = useState(4)
  const [checkboxData, setCheckboxData] = useState([
    {title:'Include Uppercase Letters', state: false},
    {title:'Include Lowercase Letters', state: false},
    {title:'Include Numbers', state: false},
    {title:'Include Symbols', state: false},
  ])

  const handleCheckboxChange = (i) => {
    console.log('i seen', i);
    const updatedCheckboxData = [...checkboxData]
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state
    setCheckboxData(updatedCheckboxData)
  }

  return (
    <div className='container'>
      {/* password text and copy btn */}
      <div className='header'>
        <div className='title'>pwd text</div>
        <button className='copyBtn' onClick={() => {}}>copy</button>
      </div>

      {/* charcter length */}
      <div className='charlength'>
        <span>
          <label>Character length</label> 
          <label>{length}</label>
        </span>
        <input type='range' min='4' max='20' onChange={(e) => setLength(e.target.value)} value={length}/>
      </div>
      
      {/* checkboxes */}
      <div className='checkboxes'>
        {checkboxData.map((checkbox, index) => {
          return (
            <div>
              <input key={index} type='checkbox' onChange={() => handleCheckboxChange(index)} checked={checkbox.state}/>
              <label>{checkbox.title}</label>
            </div>
          )
        })}
      </div>

      {/* strength */}
      <button className='generateBtn' onClick={() => {}}>
        Generate Password
      </button>
      {/* generate button */}
    </div>
  );
}



import './App.css';

export default function App() {
  const checkBoxData = [
    {title:'Include Uppercase Letters', state: false},
    {title:'Include Lowercase Letters', state: false},
    {title:'Include Numbers', state: false},
    {title:'Include Symbols', state: false},
  ];

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
          <label>4</label>
        </span>
        <input type='range' min='4' max='20'/>
      </div>
      
      {/* checkboxes */}
      <div className='checkboxes'>
        {checkBoxData.map((checkbox, index) => {
          return (
            <div>
              <input key={index} type='checkbox' checked={checkbox.state}/>
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



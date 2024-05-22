import { useState } from 'react';
import './App.css';

const data = [
  {
    qn: 'Q1',
    an: 'Lorem ipsum dolor sit amet.'
  },
  {
    qn: 'Q2',
    an: 'Lorem ipsum dolor sit amet.'
  },
  {
    qn: 'Q3',
    an: 'Lorem ipsum dolor sit amet.'
  },
  {
    qn: 'Q4',
    an: 'Lorem ipsum dolor sit amet.'
  },
  {
    qn: 'Q5',
    an: 'Lorem ipsum dolor sit amet.'
  },
]


function App() {
  const [selected, setSelected] = useState(null);

  const toggleItem = (i) => {
    console.log('item selected', i)
    if(selected === i) {
      return setSelected(null)
    }

    return setSelected(i)
  }

  return (
    <div className="wrapper">
      <h1>Accordion</h1>
      <div className="item">
        {data.map((item, i) => (
          <div className="acc-item" key={i} onClick={() => toggleItem(i)}>
            <div className="title" >
              {item.qn}
              <span>{selected === i ? '-' : '+'}</span>
              
            </div>
            <div className={selected === i ? "show-content" : "no-content"}>
              {item.an}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

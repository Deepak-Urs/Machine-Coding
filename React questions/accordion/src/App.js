import { useEffect, useState } from 'react';
import './App.css';
import Accordion from './Accordion';

const data = [
  {
    id: 1,
    qn: 'Q1',
    an: 'Lorem ipsum dolor sit amet.'
  },
  {
    id: 2,
    qn: 'Q2',
    an: 'Lorem ipsum dolor sit amet.'
  },
  {
    id: 3,
    qn: 'Q3',
    an: 'Lorem ipsum dolor sit amet.'
  },
  {
    id: 4,
    qn: 'Q4',
    an: 'Lorem ipsum dolor sit amet.'
  },
  {
    id: 5,
    qn: 'Q5',
    an: 'Lorem ipsum dolor sit amet.'
  },
]


function App() {
  const [selected, setSelected] = useState(null);

  //useEffect(() => {

  //}, [selected])
  

  const toggleItem = (i) => {
    return setSelected(i)
  }

  return (
    <div className="wrapper">
      <h1>Accordion</h1>
      <div className="item">
        {data.map((item) => <Accordion item={item} key={item.id} toggleItem={() => toggleItem(item.id)} selected={selected}/>)}
      </div>
    </div>
  );
}

export default App;

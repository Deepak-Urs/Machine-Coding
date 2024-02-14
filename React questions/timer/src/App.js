import { useState } from 'react';
import './App.css';

const App = () => {

  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)

  const startCounter = () => {
    let timer = setInterval(() => {
      console.log('sec value', sec);
      setSec(sec => sec-1)
    }, 1000)

    regulateTimer(timer)
  }

  const regulateTimer = (timer) => {
    if (sec === 0 && min === 0 ){
      clearInterval(timer)
    }
    else if(sec === 0) {
      clearInterval(timer)
      setMin(min => min - 1)
      setSec(59)
    }
      
  }
  
  return (
    <div className="App">
      <h1>Timer</h1>

      <div className='counter'>
        <div className='min-div'>
          <input type='number' name='min' value={min} onChange={(e) => setMin(e.target.value)}/>
        </div>
        <div className='colon'>
          :
        </div>
        <div className='sec-div'>
          <input type='number' name='sec' value={sec} onChange={(e) => setSec(e.target.value)}/>
        </div>
      </div>
      <div className='actions'>
        <div className='start btn' onClick={() => startCounter()}>Start</div>
        <div className='pause btn'>Pause</div>
        <div className='reset btn'>Reset</div>

      </div>
    </div>
  );
}

export default App;

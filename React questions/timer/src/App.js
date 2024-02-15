import { useEffect, useRef, useState } from 'react';
import './App.css';

const App = () => {

  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [timer, setTimer] = useState()
  const [showPauseBtn, setShowPauseBtn] = useState(false)

  useEffect(() => {
    // IMPORTANT NOTE: setSec(sec => sec-1) in startCounter is not directly updated in the state as an async fn is controlling the change, so we need to use the useEffect to forcefully update it.

    // make code changes wrt edge cases here when sec == 0 and so on
    if (sec === 0 && min === 0 ){
      clearInterval(timer)
      if(showPauseBtn) {
        setShowPauseBtn(!showPauseBtn)
      }
    }
    else if(sec === -1) {
      setMin(min => min - 1)
      setSec(59)
    }
  }, [min,sec, timer])
  
  const startCounter = () => {
    setShowPauseBtn(!showPauseBtn)
    setTimer(setInterval(() => {
      setSec(sec => sec-1) 
      
    }, 1000))
  }

  const pauseCounter = () => {
    setShowPauseBtn(!showPauseBtn)
    clearInterval(timer)
  }

  const resetCounter = () => {
    clearInterval(timer)
    setMin(0)
    setSec(0)
  }
  
  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>

      <div className='counter'>
        <div className='min-div'>
          <label>Minutes</label>
          <input type='number' name='min' value={min} onChange={(e) => setMin(e.target.value)}/>
        </div>
        <div className='colon'>
          :
        </div>
        <div className='sec-div'>
        <label>Seconds</label>
          <input type='number' name='sec' value={sec} onChange={(e) => setSec(e.target.value)}/>
        </div>
      </div>
      <div className='actions'>
        {!showPauseBtn && <div className='start btn' onClick={() => startCounter()}>Start</div>}
        {showPauseBtn && <div className='pause btn' onClick={() => pauseCounter()}>Pause</div>}
        <div className='reset btn' onClick={() => resetCounter()}>Reset</div>

      </div>
    </div>
  );
}

export default App;
